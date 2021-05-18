<template>
    <div class="bg-green-50 shadow-2xl elevator left">
        <div class="elevatorBoarderLeft left">
            <div v-for="count in this.floorNum" :key="count" class="floorNumber">{{this.floorNum+1-count}}</div>
        </div>
        <transition>
            <div class="floor left">
                <div class="door left"></div>
                <div class="door right"></div>
            </div>
        </transition>
        <div class="elevatorBoarderRight right">
            <div v-for="count in this.floorNum/2" :key="count">
                <el-button v-for="count2 in 2" :key="count2" type="primary" size="mini" class="bg-green-50 black-font"
                    circle @click="changeFloor(this.floorNum+count2-count*2)">{{this.floorNum+count2-count*2}}
                </el-button>
            </div>
            <div>
                <el-button type="success" icon="el-icon-phone" circle></el-button>
                <el-button type="danger" icon="el-icon-message-solid" circle></el-button>
            </div>
        </div>
    </div>


</template>

<script>
    export default {
        name: 'Elevator',
        props: {
            floorNum: Number
        },
        data() {
            return {
                currentFloor: 1,
                goalFloor: 1,
                topGap: "570px"
            }
        },
        methods: {
            moveFloor() {
                let start = Date.now();
                let changeFloor = this.goalFloor - this.currentFloor;
                let vueTimer = setInterval(() => {
                    let timePassed = Date.now() - start;
                    if (timePassed >= Math.abs(changeFloor) * 500) {
                        clearInterval(vueTimer);
                        this.currentFloor = this.goalFloor;
                        return;
                    }
                    this.topGap = `${((this.floorNum - this.currentFloor) - changeFloor * (timePassed / (Math.abs(
                        changeFloor) * 500))) * 30}px`
                }, 20)
            },
            changeFloor(floorNum) {
                this.goalFloor = floorNum;
                this.moveFloor()
            },
            testMethod() {
                this.topGap = 300;
            }
        }
    }
</script>

<style>
    .elevator {
        box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
        border: 1px solid pink;
        width: 230px;
        height: 600px;
        margin-right: 50px;
        margin-bottom: 50px;
    }

    .elevatorBoarderLeft {
        --tw-bg-opacity: 1;
        background-color: rgba(252, 231, 243, var(--tw-bg-opacity));
        width: 30px;
        height: 600px;
    }

    .elevatorBoarderRight {
        --tw-bg-opacity: 1;
        background-color: rgba(252, 231, 243, var(--tw-bg-opacity));
        width: 120px;
        height: 600px;
    }

    .blue {
        background-color: #409EFF;
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
        --tw-bg-opacity: 1;
        background-color: rgba(165, 180, 252, var(--tw-bg-opacity));
        width: 20px;
        height: 30px;
    }

    .floor {
        --tw-bg-opacity: 1;
        background-color: rgba(224, 231, 255, var(--tw-bg-opacity));
        width: 80px;
        height: 30px;
        margin-top: v-bind(topGap);
    }

    .floorNumber {
        width: 30px;
        height: 30px;
        color: #606266;
        font-size: 16px;
        text-align: center;
        line-height: center;
    }

    .el-button {
        width: 45px;
        height: 45px;
        margin-top: 8px;
    }

    .bg-green-50 {
        --tw-bg-opacity: 1;
        background-color: rgba(236, 253, 245, var(--tw-bg-opacity));
    }

    .black-font {
        color: #606266
    }
</style>