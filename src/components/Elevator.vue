<template>
    <div></div>
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
                topGapNumber: 570,
                doorGapNumber: 18.5,
                selectedFloor: [...Array(20)].map(() => false),
                moveDirection: 1
            }
        },
        computed: {
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
            },
            doorGap() {
                return `${this.doorGapNumber}px`
            }
        },
        mounted() {
            // console.log(this.moveDirection);
            // console.log(this.selectedFloor);
        },
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

            moveOneFloor() {
                this.computeMoveDirection()
                if (this.selectedFloor[this.currentFloor - 1] === true) {
                    this.openTheDoor()
                } else {

                    // Animation.
                    let vueTimer = setInterval(() => {

                        // If we arrive at another floor.
                        if (this.arriveAnotherFloor()) {
                            clearInterval(vueTimer);
                            this.currentFloor = this.currentFloor + this.moveDirection;
                            console.log(this.currentFloor);
                            // If there is a request on this floor.
                            if (this.selectedFloor[this.currentFloor - 1] === true) {
                                this.openTheDoor()
                            } else {
                                this.moveOneFloor()
                            }
                        }

                        // Update floor position.
                        this.topGapNumber = this.topGapNumber - this.moveDirection;
                        // console.log(this.moveDirection)
                        // console.log(this.topGapNumber)
                    }, 20)
                }
            },
            arriveAnotherFloor() {
                return ((this.moveDirection === 1 && this.topGapNumber <= this.getTopGap(this.currentFloor + 1)) || (
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
                        if (this.selectedFloor[i] === true) {
                            this.moveDirection = 1;
                            break;
                        }
                    }
                } else {
                    this.moveDirection = 1;
                    for (let i = 0; i < this.currentFloor; i++) {
                        if (this.selectedFloor[i] === true) {
                            this.moveDirection = -1;
                            break;
                        }
                    }
                }
            },

            openTheDoor() {
                setTimeout(() => {
                    let vueTimer = setInterval(() => {
                        if (this.doorGapNumber <= 1) {
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
                        if (this.doorGapNumber >= 18.5) {
                            clearInterval(vueTimer);
                            this.selectedFloor[this.currentFloor - 1] = false
                            if (this.isBusy === false) {
                                return;
                            } else {
                                this.moveOneFloor();
                            }
                        }
                        this.doorGapNumber = this.doorGapNumber + 0.5;
                    }, 20)
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
            }
        }
    }
</script>

<style>
    .elevatorInside {
        box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
        border: 2px solid black;
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
        width: 19px;
        height: 26px;
    }

    .floor {
        width: 76px;
        height: 26px;
        border: 2px solid black;
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

    /* .indicateLight {
        background-color: ;
    } */
</style>