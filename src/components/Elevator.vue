<template>

    <div class="elevator left">
        <div class="elevatorBoarderLeft left">
            <div v-for="count in this.floorNum" :key="count" class="floorNumber">{{this.floorNum+1-count}}</div>
        </div>
        <div class="floor inline">
            <div class="door left"></div>
            <div class="door left"></div>
        </div>
        <div class="elevatorBoarderRight right">
            <div v-for="count in this.floorNum/2" :key="count">
                <el-button type="primary" size="mini">{{this.floorNum+1-count*2}}</el-button>
                <el-button type="primary" size="mini">{{this.floorNum+2-count*2}}</el-button>
            </div>
        </div>
    </div>

</template>

<script>
    export default {
        name: 'Elevator',
        props: {
            floorNum: Number
        }
    }
</script>

<style>
    .elevator {
        width: 290px;
        height: 600px;
        border-style: solid;
        margin-inline: 30px;
        margin-bottom: 50px;

    }

    .elevatorBoarderLeft {
        background-color: #303133;
        width: 30px;
        height: 600px;
    }

    .elevatorBoarderRight {
        background-color: #303133;
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
        background-color: #606266;
        width: 50px;
        height: 30px;
    }

    .floor {
        background-color: #909399;
        width: 140px;
        height: 30px;
    }

    .floorNumber {
        width: 30px;
        height: 30px;
        color: white;
        font-size: 16px;
        text-align: center;
        line-height: center;
    }

    .el-button {
        width: 45px;
        height: 40px;
        margin-top: 9px;
    }
</style>