<template>
    <div class="container"
     v-bind:class="{'active': isActive, 'text-red':hasError}" >class Binding</div>
</template>
<script>
export default {
    name: "",
    components: {},
    data() {
        return {
            isActive: true, //트루면 실행한다. 버튼 v-bind:class
            hasError: false //펄스면 실행 안함.
            // hasError: ture //펄스면 실행 안함.
            
        };
    },
    setup() {},
    created() {},
    mounted() {},
    unmounted() {},
    methods: {}
}
</script>
<style scoped> 
/* 스코프 빼도 되고 넣어도 되는데, 넣으면 이곳에서만  실행, 빼면 전체에서 실행 */
.container{
    width: 100%;
    height: 200px;
}

.active{
    background-color: yellow;
    font-weight: bold;
}

.text-red {
    color: red;
}

</style>