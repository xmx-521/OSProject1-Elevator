<template>
    <div class="pannelBackground">
        <div v-for="count in this.floorNum" :key="count" class="left pannelButton">
            <div>
                {{count}}F
            </div>
            <el-button-group>
                <el-button type="primary" icon="el-icon-top" circle @click="addRequest(count,1,$event)"
                    :class="getButtonClass(count,1)">
                </el-button>
                <el-button type="primary" icon="el-icon-bottom" circle @click="addRequest(count,-1,$event)"
                    :class="getButtonClass(count,-1)"></el-button>
            </el-button-group>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'OuterPanel',
        props: {
            floorNum: {
                type: Number,
                default: 20
            },
            upRequests: {
                type: Array,
                default: [...Array(20)].map(() => false)
            },
            downRequests: {
                type: Array,
                default: [...Array(20)].map(() => false)
            }
        },
        emits: ['add'],
        methods: {
            clickHandler(evt) {
                let target = evt.target;
                if (target.nodeName == " SPAN") {
                    target = evt.target.parentNode;
                }
                target.blur();
            },
            addRequest(floor,
                direction, event) {
                this.clickHandler(event);
                console.log('emit');
                this.$emit('add', {
                    floor: floor,
                    direction: direction,
                    state: true
                });
            },
            getButtonClass(floor, direction) {
                if (direction === 1) {
                    return this.upRequests[floor - 1] === true ?
                        "pannelSelected" : "pannelUnSelected";
                } else {
                    return this.downRequests[floor - 1] === true ?
                        "pannelSelected" : "pannelUnSelected";
                }
            }
        }
    }
</script>
<!-- Add "scoped" attribute to limit CSS
                    to this component only -->
<style>
    .pannelBackground {
        width: 1000px;
        height: 200px;
        margin-bottom: 50px;
        border-radius: 1.5rem;
        margin-left: 180px;
        margin-bottom: 50px;
        background-image: linear-gradient(to right, var(--tw-gradient-stops));
        --tw-gradient-from: #111827;
        --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgba(17, 24, 39, 0));
        --tw-gradient-stops: var(--tw-gradient-from), #374151, var(--tw-gradient-to, rgba(55, 65, 81, 0));
        --tw-gradient-to: #9ca3af;
        --tw-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
        box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
    }

    .pannelButton {
        color: white;
        margin-top: 10px;
        margin-left: 10px;
    }

    .pannelUnSelected {
        color: black;
        background-color: white;
    }

    .pannelSelected {
        color: white;
        background-color: #409EFF;
    }
</style>