<template>
    <div style="color: red; font-size:30px">인라인 스타일 바인딩
        <div v-bind:style="styleObject">헬로</div>
    </div>
</template>
<script>
export default {
    name: "",
    components: {},
    data() {
        return {
            styleObject: { //오브젝트 형태로.
                color:"red",
                fontSize: "30px", //카멜케이스로 
                
            } 
        };
    },
    setup() {},
    created() {},
    mounted() {},
    unmounted() {},
    methods: {}
}
</script>