# 进程管理之项目1 项目文档

> 选题：电梯调度
>
> 学号：1953474
>
> 姓名：徐满心
>
> 指导教师：张慧娟

## 一、项目概述

本项目实现了一个电梯调度系统。

在本项目实现的系统中，有一栋总楼层数为20层的高楼，楼中有5部互联的电梯。在电梯外部，每层楼都设有1个向上按钮与一个向下按钮。在电梯内部，每个电梯都设有20个数字按钮、1个报警键与1个电话键。按下按钮后，系统将会执行预期的行为。

调度算法可简单划分为内调度算法与外调度算法。内调度算法即单独电梯控制自身上升或下降的算法，在本系统中使用了LOOK算法进行调度。外调度算法即联合调度系统接收到电梯外按下按钮发送的任务后，将任务合理分配给5部电梯的算法。在本系统中使用了最短时间+任务屏蔽+抢占式的算法。

为了清晰地展示系统的调度过程，并方便老师与助教测试系统，本项目选择以网页形式展示项目，项目网址为：https://manxin521.site/OSProject1-Elevator/dist/ ，访问需要联网。



## 二、系统亮点

电梯调度系统严格来说没有最佳实现，主要由于电梯系统的复杂性，电梯调度算法无法做到绝对最优化，因此目前也有人尝试使用强化学习的方法优化电梯调度系统。然而电梯系统应具备的一些常识性特点可以帮助我们初步判断系统的好坏，这些特点本系统全部满足，此处不再赘述。除此之外，本系统还具有以下亮点：

- 内调度算法使用LOOK算法，尽可能缩短电梯上下移动的时间。

- 当电梯外部按钮被按下产生请求后，系统将只调度一台电梯响应该请求，该任务对于其它电梯来说是“屏蔽”的，起到节约功耗效果。
- 系统选择响应外部请求的电梯时，将综合电梯的移动方向、正在执行的任务与外部按钮的方向，计算出每台电梯的理论移动时间以及开关门的中途停顿时间之和，从而得到电梯的理论最优执行完成该任务的时间。选择该时间最短的电梯执行该任务，十分科学严谨、快速有效。

- 任何一台电梯移动到外部按钮被按下，并且按下方向与电梯将要移动方向相同的楼层后，无论该电梯先前是否被分配了接收该楼层乘客的任务，都会“抢占”该任务，即开门接客，并告知先前执行该任务的电梯停止执行该任务，从而做到移动时间与功耗的最小化。

## 三、使用算法详解

### 1.PCB数据结构的设计

在本系统中，可类比操作系统，将每个电梯看作一个进程。因此需要为每台电梯设计类似于进程的PCB的数据结构，存储与电梯有关的信息，并由电梯自身与联合调度系统共同维护，以实现电梯的自身调度以及电梯之间的相互配合解决任务。这一数据结构在本系统设计如下：

| 变量                     | 说明                                                         |
| ------------------------ | ------------------------------------------------------------ |
| currentFloor             | 电梯所在楼层数，取值范围为1～20。                            |
| selectedFloor[20]        | 电梯内部数字按钮列表，每台电梯有20个内部数字按钮故列表大小为20，用于判断按钮是否被按下，数组每个元素有true与false两种取值。 |
| moveDirection            | 电梯正在移动的方向，1代表上，-1代表下，当电梯空闲不移动时为1或-1都可以。 |
| upRequests[20]           | 电梯外部全部的向上请求，有20个向上按钮故列表大小为20，用于判断按钮是否被按下，数组每个元素有true与false两种取值。 |
| downRequests[20]         | 电梯外部全部的向下请求，有20个向下按钮故列表大小为20，用于判断按钮是否被按下，数组每个元素有true与false两种取值。 |
| assignedUpRequests[20]   | 分配给该电梯的电梯外部向上的请求，有20个向上按钮故列表大小为20，用于判断按钮是否被按下，数组每个元素有true与false两种取值。 |
| assignedDownRequests[20] | 分配给该电梯的电梯外部向下的请求，有20个向下按钮故列表大小为20，用于判断按钮是否被按下，数组每个元素有true与false两种取值。 |

### 2.内调度算法：LOOK算法

#### 算法原理：

LOOK算法是扫描算法的一种改进。对LOOK算法而言，电梯同样在最底层和最顶层之间运行。但当LOOK算法发现电梯所移动的方向上不再有请求时立即改变运行方向，而扫描算法则需要移动到最底层或者最顶层时才改变运行方向。

#### 算法执行过程：

算法实现依据PCB的设计。当内部按钮被按下时，电梯接受到请求并综合selectedFloor、assignedUpRequests、assignedDownRequests列表元素是否都为false判断电梯目前是否空闲，若电梯空闲，则将selectedFloor对应位置元素设为true，并让电梯开始移动，若电梯不空闲，则仅设置selectedFloor对应位置为true。

电梯开始运行后，移动的最小单位是层，每次移动前都会先根据selectedFloor、upRequests、downRequests计算出移动的方向，移动方向的计算基于LOOK算法。移动一层电梯后都会将当前层对应的selectedFloor、upRequests、downRequests结合moveDirection进行检查判断是否应该开门。若选择开门则关门后将对应的数组元素置为false（将upRequests或downRequests数组元素置为false后还会有额外操作，将在外调度算法中提到），更新currentFloor，并判断是否有其它任务，若仍有其它任务则重复以上流程，若无其它任务则将电梯状态置为空闲。若不开门则更新currentFloor后重复以上流程。

算法的执行流程图如下：

[![gTNu6I.png](https://z3.ax1x.com/2021/05/20/gTNu6I.png)](https://imgtu.com/i/gTNu6I)

### 3.外调度算法：最短时间+任务屏蔽+抢占式

#### 算法原理：

外调度算法概括来说使用了最短时间+任务屏蔽+抢占式的方法

- 最短时间：接收到任务请求后，联合调度系统将综合电梯的移动方向、正在执行的任务与外部按钮的方向，计算出每台电梯的理论移动时间以及开关门的中途停顿时间之和，从而得到电梯的理论最优执行完成该任务的时间。选择该时间最短的电梯执行该任务。
- 任务屏蔽：系统调度一台电梯响应该请求后，不再将该任务直接分配给其它电梯，即该任务对于其它电梯来说是“屏蔽”的。
- 抢占式：任何一台电梯移动到外部按钮被按下，并且按下方向与电梯将要移动方向相同的楼层后，无论该电梯先前是否被分配了接收该楼层乘客的任务，都会“抢占”该任务，即开门接客，并告知先前执行该任务的电梯停止执行该任务。

#### 算法执行过程：

当一个外部按钮按下过后，调度系统首先计算每个电梯的理论最优执行完成任务的时间，计算时也要根据LOOK算法的原理，具体算法如下：

- 遍历每一个电梯
  - 设按钮对印的层数为floor，方向为direction，理论最优执行完成任务的时间为time。每个电梯开关门所用时间之和为5s，移动一层楼的高度所用时间为1s，已有任务中最低楼层为minFloor，最高楼层为maxFloor，从楼层l到楼层k内部按下按钮的个数为stopTimes(l,k)（忽略外调度导致的停顿），即停顿次数。
  - 若电梯正向上运动
    -  若按钮方向为向上
      - 若currentFloor <= floor
        - time = stopTimes(currentFloor, floor) * 5 + floor - minFloor
      - 若currentFloor > floor
        - time = stopTimes(minFloor, maxFloor) * 5 + (maxFloor - currentFloor)
        - 若minFloor >= floor
          - time = time + (maxFloor - floor)
        - 若minFloor < floor
          - time = time + (maxFloor - minFloor) + (floor - minFloor)
    - 若按钮方向为向下
      - 若currentFloor <= floor
        - 若maxFloor <= floor
          - time = stopTimes(currentFloor, floor)*5+(floor-currentFloor)
        - 若maxFloor > floor
          - time = stopTimes(currentFloor, maxFloor) * 5 + (maxFloor - currentFloor) + (maxFloor - floor)
      - 若currentFloor > floor
        - time = stopTimes(floor, maxFloor) * 5 + (maxFloor - currentFloor) + (maxFloor - floor)
  - 若电梯正向下运动
    - 与电梯向上运动的情况对称同理，此处略。
- 将任务分配给时长最短的任务，更新其assignedUpRequests或assignedDownRequests，更新所有电梯的upRequests与downRequests。
- 正如之前提及，任何一台电梯有执行该任务的机会时（无论是否将任务分配给了它），先更新所有电梯的upRequests或downRequests，再将分配给任务的电梯的对应assignedDownRequests或assignedUpRequests中的对应元素置为false，从而实现抢占。

## 四、使用说明

项目网址为：https://manxin521.site/OSProject1-Elevator/dist/ ，直接访问即可，访问需要联网，建议使用Chrome浏览器访问，其余浏览器不保证系统正常运行。

也可通过源码进行构建，见第五部分。

#### 开发环境

- MacOS
- Chrome
- VSCode

#### 开发语言

- Javascript
- HTML
- CSS

#### 开发框架

- Vue.js 3.0

#### 参考第三方

- Element plus

- Tailwind CSS

#### 主界面

[![gTNQnP.png](https://z3.ax1x.com/2021/05/20/gTNQnP.png)](https://imgtu.com/i/gTNQnP)



- 总页面上方分别有20个向上外部按钮与20个向下外部按钮，按下后系统会调度电梯执行任务。

- 每台电梯的上方有指示灯指示电梯的状态、运行方向以及所在楼层。

- 每台电梯的右侧有20个数字按钮与1个电话按钮与1个报警按钮，按下后会调度电梯执行期望的操作。

- 每台电梯的左侧有楼层号以及当前所在楼层的指示灯。

- 每台电梯的中间为楼内空间以及电梯身与电梯门，电梯身会随着楼层的变化展示动态升降的动画，电梯门也会以动画的形式开关门。

#### 执行效果

[![gTNKXt.png](https://z3.ax1x.com/2021/05/20/gTNKXt.png)](https://imgtu.com/i/gTNKXt)



## 五、通过源码进行构建

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Lints and fixes files

```
npm run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).
