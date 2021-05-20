<template>
    <div class="left">
        <div class="indicateLight" :class="indicateLightStyle">
            <div class="floorInfo">
                <div class="el-icon-caret-top left arrow leftArrow" :class="arrowStyle(1)">

                </div>
                <div class="left currentFloor">
                    {{this.currentFloor}}F
                </div>
                <div class="el-icon-caret-bottom right arrow rightArrow" :class="arrowStyle(-1)">

                </div>
            </div>
            <div :class="indicateLightStyle">
                {{this.isBusy?"忙碌":"空闲"}}
            </div>
        </div>
        <div class="bg-gray-100 shadow-2xl elevatorInside left">
            <div class="elevatorBoarderLeft left">
                <div v-for="count in this.floorNum" :key="count" class="floorNumber"
                    :class="numberBackground(this.floorNum+1-count)">
                    {{this.floorNum+1-count}}</div>
            </div>
            <div class="floor left bg-gray-400" :style="{'margin-top':topGap}">
                <div class="door left " :style="{'margin-left':doorGap}"></div>
                <div class="door right" :style="{'margin-right':doorGap}"></div>
            </div>
            <div class="elevatorBoarderRight right">
                <div v-for="count in this.floorNum/2" :key="count">
                    <el-button v-for="count2 in 2" :key="count2" size="mini" type="primary"
                        :class="buttonBackground(this.floorNum+count2-count*2-1)" circle
                        @click="selectFloor(this.floorNum+count2-count*2,$event)">{{this.floorNum+count2-count*2}}
                    </el-button>
                </div>
                <div>
                    <el-button type="success" icon="el-icon-phone" circle @click="call"></el-button>
                    <el-button type="danger" icon="el-icon-message-solid" circle @click="ringing"> </el-button>
                </div>
            </div>
        </div>
    </div>


</template>

<script>
    export default {
        name: 'Elevator',
        props: {
            floorNum: {
                type: Number,
                default: 20,
            },
            downRequests: Array,
            upRequests: Array
        },
        data() {
            return {
                currentFloor: 1,
                topGapNumber: 570,
                doorGapNumber: 19.5,
                selectedFloor: [...Array(20)].map(() => false),
                assignedDownRequests: [...Array(20)].map(() => false),
                assignedUpRequests: [...Array(20)].map(() => false),
                moveDirection: 1
            }
        },
        computed: {
            isBusy() {
                let allUnSelected = true;
                for (let i = 0; i < this.floorNum; i++) {
                    if (this.selectedFloor[i] === true || this.assignedUpRequests[i] === true || this
                        .assignedDownRequests[i] === true) {
                        allUnSelected = false;
                        break;
                    }
                }
                return !allUnSelected;
            },
            topGap() {
                return `${this.topGapNumber}px`
            },
            doorGap() {
                return `${this.doorGapNumber}px`
            },
            indicateLightStyle() {
                if (this.isBusy) {
                    return "busy";
                } else {
                    return "free";
                }
            }
        },
        mounted() {
            // console.log(this.moveDirection);
            // console.log(this.selectedFloor);
        },
        emits: ['cancel'],
        methods: {
            selectFloor(floor, event) {
                console.log(this.isBusy)
                this.clickHandler(event)
                if (this.isBusy === false) {
                    this.selectedFloor[floor - 1] = true;
                    this.moveOneFloor();
                } else {
                    this.selectedFloor[floor - 1] = true;
                }
            },

            dispatch(floor, direction) {
                if (direction === 1) {
                    if (this.isBusy === false) {
                        this.assignedUpRequests[floor - 1] = true
                        this.moveOneFloor();
                    } else {
                        this.assignedUpRequests[floor - 1] = true;
                    }
                } else {
                    if (this.isBusy === false) {
                        this.assignedDownRequests[floor - 1] = true
                        this.moveOneFloor();
                    } else {
                        this.assignedDownRequests[floor - 1] = true;
                    }
                }
            },

            moveOneFloor() {
                this.computeMoveDirection();
                if ((this.selectedFloor[this.currentFloor - 1] === true) || (this.upRequests[this
                        .currentFloor - 1] === true) || (this
                        .downRequests[this.currentFloor - 1] === true)) {
                    if (this.upRequests[this.currentFloor - 1] === true) {
                        this.moveDirection = 1;
                    } else if (this.downRequests[this.currentFloor - 1] === true) {
                        this.moveDirection = -1;
                    }
                    this.openTheDoor();
                } else {

                    // Animation.
                    let vueTimer = setInterval(() => {

                        // If we arrive at another floor.
                        if (this.arriveAnotherFloor()) {
                            clearInterval(vueTimer);
                            this.currentFloor = this.currentFloor + this.moveDirection;
                            console.log(this.currentFloor);
                            // If there is a request on this floor.
                            if (this.selectedFloor[this.currentFloor - 1] === true || (this.upRequests[this
                                    .currentFloor - 1] === true && this.moveDirection === 1) || (this
                                    .downRequests[this.currentFloor - 1] === true && this.moveDirection ===
                                    -1
                                )) {
                                this.openTheDoor()
                            } else {
                                this.moveOneFloor()
                            }
                        }

                        // Update floor position.
                        this.topGapNumber = this.topGapNumber - this.moveDirection;
                        // console.log(this.moveDirection)
                        // console.log(this.topGapNumber)
                    }, 33)
                }
            },
            arriveAnotherFloor() {
                return ((this.moveDirection === 1 && this.topGapNumber <= this.getTopGap(this.currentFloor +
                    1)) || (
                    this
                    .moveDirection === -1 && this.topGapNumber >= this.getTopGap(this.currentFloor - 1)));
            },
            getTopGap(floor) {
                return 600 - floor * 30
            },
            computeMoveDirection() {
                if (this.moveDirection === 1) {
                    this.moveDirection = -1;
                    for (let i = this.currentFloor - 1; i < this.floorNum; i++) {
                        if (this.selectedFloor[i] === true || this.assignedUpRequests[i] === true || this
                            .assignedDownRequests[i] === true) {
                            this.moveDirection = 1;
                            break;
                        }
                    }
                } else {
                    this.moveDirection = 1;
                    for (let i = 0; i < this.currentFloor; i++) {
                        if (this.selectedFloor[i] === true || this.assignedUpRequests[i] === true || this
                            .assignedDownRequests[i] === true) {
                            this.moveDirection = -1;
                            break;
                        }
                    }
                }
            },

            openTheDoor() {
                setTimeout(() => {
                    let vueTimer = setInterval(() => {
                        if (this.doorGapNumber <= 0.5) {
                            clearInterval(vueTimer);
                            this.closeTheDoor();
                        }

                        // Update floor position.
                        this.doorGapNumber = this.doorGapNumber - 0.5;
                        // console.log(this.moveDirection)
                        // console.log(this.topGapNumber)
                    }, 20)
                }, 500)
            },

            closeTheDoor() {
                setTimeout(() => {
                    let vueTimer = setInterval(() => {
                        if (this.doorGapNumber >= 19.5) {
                            clearInterval(vueTimer);
                            this.selectedFloor[this.currentFloor - 1] = false;
                            if (this.upRequests[this.currentFloor - 1] === true && (this
                                    .moveDirection === 1)) {
                                this.$emit("cancel", {
                                    floor: this.currentFloor,
                                    direction: 1,
                                    state: false
                                })
                            }
                            if (this.downRequests[this.currentFloor - 1] === true && (this
                                    .moveDirection === -1)) {
                                this.$emit("cancel", {
                                    floor: this.currentFloor,
                                    direction: -1,
                                    state: false
                                })
                            }
                            if (this.isBusy === false) {
                                return;
                            } else {
                                setTimeout(() => {
                                    this.moveOneFloor();
                                }, 500)
                            }
                        }
                        this.doorGapNumber = this.doorGapNumber + 0.5;
                    }, 25)
                }, 2000)
            },


            clickHandler(evt) {
                let target = evt.target;
                if (target.nodeName == "SPAN") {
                    target = evt.target.parentNode;
                }
                target.blur();
            },

            buttonBackground(position) {
                return this.selectedFloor[position] === false ? "white" : "blue"
            },

            numberBackground(floor) {
                return this.currentFloor === floor ? "blue" : "bogus"
            },

            arrowStyle(direction) {
                if (this.isBusy && direction === this.moveDirection) {
                    return "arrowSelected";
                } else {
                    return "arrowUnSelected";
                }
            },

            console() {
                console.log('我是子组件的方法');
            },

            getFarestFloor(direction) {
                if (direction === -1) {
                    let min = this.currentFloor;
                    for (let i = 0; i < this.floorNum; i++) {
                        if (this.selectedFloor[i] === true || this.assignedUpRequests[i] === true || this
                            .assignedDownRequests[i] === true) {
                            min = i + 1;
                        }
                    }
                    return min;
                }
                if (direction === 1) {
                    let max = this.currentFloor;
                    for (let i = this.floorNum - 1; i >= 0; i--) {
                        if (this.selectedFloor[i] === true || this.assignedUpRequests[i] === true || this
                            .assignedDownRequests[i] === true) {
                            max = i + 1;
                        }
                    }
                    return max;
                }
            },

            getStopTimes(low, up) {
                let sum = 0;
                for (let i = low - 1; i < up; i++) {
                    if (this.selectedFloor[i] === true) {
                        sum++;
                    }
                }
                return sum;
            },

            call() {
                alert("拨打电话☎️，呼叫管理员")
            },

            ringing() {
                alert("按下警铃🔔，电梯运行终止")
            }
        }
    }
</script>

<style>
    .elevatorInside {
        --tw-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
        box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
        width: 230px;
        height: 600px;
        margin-right: 50px;
        margin-bottom: 50px;
    }

    .elevatorBoarderLeft {
        background-image: linear-gradient(to right, var(--tw-gradient-stops));
        --tw-gradient-from: #000;
        --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgba(0, 0, 0, 0));
        --tw-gradient-to: #1f2937;
        width: 30px;
        height: 600px;
    }

    .elevatorBoarderRight {
        background-image: linear-gradient(to right, var(--tw-gradient-stops));
        --tw-gradient-from: #111827;
        --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgba(17, 24, 39, 0));
        --tw-gradient-stops: var(--tw-gradient-from), #374151, var(--tw-gradient-to, rgba(55, 65, 81, 0));
        --tw-gradient-to: #9ca3af;
        width: 120px;
        height: 600px;
    }

    .blue {
        background-color: #409EFF;
        color: white;
    }

    .left {
        float: left;
    }

    .right {
        float: right;
    }

    .mid {
        margin: auto;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
    }

    .inline {
        display: inline-block;
    }

    .door {
        background-color: black;
        width: 20px;
        height: 30px;
    }

    .floor {
        width: 80px;
        height: 30px;
    }

    .floorNumber {
        width: 30px;
        height: 30px;
        color: white;
        font-size: 16px;
        text-align: center;
        line-height: 30px;
    }

    .bogus {
        background-color: unset;
    }

    .el-button,
    .el-button-default,
    .el-button-mini {
        width: 45px;
        height: 45px;
        margin-top: 8px;
    }


    .bg-gray-100 {
        --tw-bg-opacity: 1;
        background-color: rgba(243, 244, 246, var(--tw-bg-opacity));
    }

    .bg-gray-400 {
        --tw-bg-opacity: 1;
        background-color: rgba(156, 163, 175, var(--tw-bg-opacity));
    }

    .black-font {
        color: #606266
    }

    .white {
        background-color: white;
        color: #606266
    }

    .indicateLight {
        --tw-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
        box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
        width: 230px;
        height: 100px;
        color: white;
        line-height: 50px;
        font-size: 25px;
    }


    .floorInfo {
        width: 230px;
        height: 50px;
    }

    .arrow {
        line-height: 50px;
    }

    .leftArrow {
        margin-left: 60px;
    }

    .rightArrow {
        margin-right: 60px;
    }

    .currentFloor {
        margin-left: 16px;
    }

    .arrowSelected {
        color: white;
    }

    .arrowUnSelected {
        color: #606266
    }


    .free {
        background-image: linear-gradient(to right, var(--tw-gradient-stops));
        --tw-gradient-from: #34d399;
        --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgba(52, 211, 153, 0));
        --tw-gradient-stops: var(--tw-gradient-from), #34d399, var(--tw-gradient-to, rgba(52, 211, 153, 0));
        --tw-gradient-to: #a7f3d0;
    }

    .busy {
        background-image: linear-gradient(to right, var(--tw-gradient-stops));
        --tw-gradient-from: #f59e0b;
        --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgba(245, 158, 11, 0));
        --tw-gradient-stops: var(--tw-gradient-from), #ef4444, var(--tw-gradient-to, rgba(239, 68, 68, 0));
        --tw-gradient-to: #ec4899;
    }
</style>