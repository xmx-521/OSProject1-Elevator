<template>
    <div class="bg-green-50 shadow-2xl elevatorInside left">
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
                    circle @click="selectFloor(this.floorNum+count2-count*2)">{{this.floorNum+count2-count*2}}
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
            floorNum: {
                type: Number,
                default: 20
            }
        },
        data() {
            return {
                currentFloor: 1,
                goalFloor: 1,
                topGapNumber: 570,
                selectedFloor: [...Array(20)].map(() => false)
            }
        },
        computed: {
            moveDirection() {
                if (this.currentFloor === this.goalFloor || this.goalFloor == -1) {
                    return 0;
                } else if (this.currentFloor > this.goalFloor) {
                    return -1;
                } else {
                    return 1;
                }
            },
            isBusy() {
                let allUnSelected = true;
                for (let i = 0; i < this.floorNum; i++) {
                    if (this.selectedFloor[i] === true) {
                        allUnSelected = false;
                        break;
                    }
                }
                return !allUnSelected;
            },
            topGap() {
                return `${this.topGapNumber}px`
            }
        },
        mounted() {
            // console.log(this.moveDirection);
            // console.log(this.selectedFloor);
        },
        methods: {
            selectFloor(floor) {
                if (this.isBusy === false) {
                    this.selectedFloor[floor - 1] = true;
                    this.run();
                } else {
                    this.selectedFloor[floor - 1] = true;
                }
            },
            getNextGoal() {
                if (this.isBusy === false) { // Elevator is free.
                    return -1; // bogus.
                } else if (this.moveDirection === 0) { // Elevator is not free but stable.
                    for (let i = 0; i < this.floorNum; i++) {
                        if (this.selectedFloor[i] === true) {
                            return i + 1;
                        }
                    }
                } else if (this.moveDirection === 1) { // Elevator is moving up.
                    for (let i = this.currentFloor - 1; i < this.floorNum; i++) {
                        if (this.selectedFloor[i] === true) {
                            return i + 1;
                        }
                    }
                } else { // Elevator is moving down.
                    for (let i = 0; i < this.currentFloor; i++) {
                        if (this.selectedFloor[i] === true) {
                            return i + 1;
                        }
                    }
                }
            },
            run() {
                this.goalFloor = this.getNextGoal();
                let start = Date.now();
                let vueTimer = setInterval(() => {
                    let timePassed = Date.now() - start;
                    if ((this.moveDirection === 1 && this.topGapNumber <= this.getTopGap(this.goalFloor)) || (
                            this
                            .moveDirection === -1 && this.topGapNumber >= this.getTopGap(this.goalFloor))) {
                        clearInterval(vueTimer);
                        setTimeout(() => {
                            this.selectedFloor[this.goalFloor - 1] = false
                            this.updateCurrentAndGoal()
                            if (this.isBusy === false) {
                                return;
                            } else {
                                this.run()
                            }
                            return;
                        }, 2000)
                    }
                    this.topGapNumber = this.getTopGap(this.currentFloor) - this.moveDirection * timePassed /
                        10;
                }, 20)
            },
            changeFloor(floorNum) {
                this.goalFloor = floorNum;
                this.moveFloor();
            },
            getTopGap(floor) {
                return 600 - floor * 30
            },
            updateCurrentAndGoal() {
                let tempFloor = this.goalFloor;
                this.goalFloor = this.getNextGoal();
                this.currentFloor = tempFloor;
            }
        }
    }
</script>

<style>
    .elevatorInside {
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