<template>
  <div>
    <outer-panel :floorNum="this.floorNum" :upRequests="this.upRequests" :downRequests="this.downRequests"
      @add="changeRequest" ref="pannel" />
  </div>
  <div style="overflow:auto">
    <elevator :ref="setItemRef" v-for="count in this.elevatorNum" :key="count" :floorNum="this.floorNum"
      :upRequests="this.upRequests" :downRequests="this.downRequests" @cancel="changeRequest" />
  </div>
</template>

<script>
  import Elevator from './components/Elevator.vue'
  import OuterPanel from './components/OuterPanel.vue'

  export default {
    name: 'App',
    data() {
      return {
        elevatorNum: 5,
        floorNum: 20,
        upRequests: [...Array(20)].map(() => false),
        downRequests: [...Array(20)].map(() => false),
        ItemRefs: []
      }
    },
    components: {
      Elevator,
      OuterPanel
    },
    methods: {
      changeRequest(param) {
        console.log(param);
        if (param.direction === 1) {
          this.upRequests[param.floor - 1] = param.state;
        } else {
          this.downRequests[param.floor - 1] = param.state;
        }
        if (param.state === true) {
          this.dispatchRequest(param.floor, param.direction);
        } else {
          this.cancelDisPatchRequest(param.floor, param.direction);
        }
      },
      setItemRef(el) {
        this.ItemRefs.push(el);
      },
      dispatchRequest(floor, direction) {
        console.log('dispatch');
        let minElevator = 0;
        let minTime = 100000;
        for (let i = 0; i < this.elevatorNum; i++) {
          let currentFloor = this.ItemRefs[i].currentFloor;
          let minFloor = this.ItemRefs[i].getFarestFloor(-1);
          let maxFloor = this.ItemRefs[i].getFarestFloor(1);
          let elevatorTime = 1000001;
          if (this.ItemRefs[i].moveDirection === 1) {
            console.log('enter');
            if (direction === 1) {
              if (currentFloor <= floor) {
                elevatorTime = this.ItemRefs[i].getStopTimes(currentFloor, floor) * 5 + floor - minFloor;
              } else {
                elevatorTime = this.ItemRefs[i].getStopTimes(minFloor, maxFloor) * 5 + (maxFloor - currentFloor);
                if (minFloor >= floor) {
                  elevatorTime += (maxFloor - floor);
                } else {
                  elevatorTime += (maxFloor - minFloor) + (floor - minFloor);
                }
              }
            } else {
              if (currentFloor <= floor) {
                if (maxFloor <= floor) {
                  elevatorTime = this.ItemRefs[i].getStopTimes(currentFloor, floor) * 5 + (floor - currentFloor);
                } else {
                  elevatorTime = this.ItemRefs[i].getStopTimes(currentFloor, maxFloor) * 5 + (maxFloor - currentFloor) +
                    (
                      maxFloor - floor);
                }
              } else {
                elevatorTime = this.ItemRefs[i].getStopTimes(floor, maxFloor) * 5 + (maxFloor - currentFloor) + (
                  maxFloor -
                  floor);
              }
            }
          } else {
            if (direction === 1) {
              if (currentFloor < floor) {
                elevatorTime = this.ItemRefs[i].getStopTimes(minFloor, floor) * 5 + (currentFloor - minFloor) + (floor -
                  minFloor);
              } else {
                if (minFloor < floor) {
                  elevatorTime = this.ItemRefs[i].getStopTimes(minFloor, currentFloor) * 5 + (currentFloor - minFloor) +
                    (floor - minFloor);
                } else {
                  elevatorTime = this.ItemRefs[i].getStopTimes(floor, currentFloor) * 5 + (currentFloor - floor);
                }
              }
            } else {
              if (currentFloor < floor) {
                elevatorTime = this.ItemRefs[i].getStopTimes(minFloor, floor) * 5 + (currentFloor - minFloor);
                if (floor >= maxFloor) {
                  elevatorTime += (floor - minFloor);
                } else {
                  elevatorTime += (maxFloor - minFloor) + (maxFloor - floor);
                }
              } else {
                elevatorTime = this.ItemRefs[i].getStopTimes(floor, currentFloor) * 5 + (currentFloor - floor);
              }
            }
          }
          if (minTime > elevatorTime) {
            minElevator = i;
            minTime = elevatorTime;
          }
        }
        this.ItemRefs[minElevator].dispatch(floor, direction);
      },
      cancelDisPatchRequest(floor, direction) {
        for (let i = 0; i < this.elevatorNum; i++) {
          if (direction === 1) {
            this.ItemRefs[i].assignedUpRequests[floor - 1] = false;
          } else {
            this.ItemRefs[i].assignedDownRequests[floor - 1] = false;
          }
        }
      }
    }
  }
</script>

<style>
  #app {
    font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial,
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>