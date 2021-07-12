<template>
    <div>
        <button v-on:click="myFunction">클릭</button>
        <button @click="myFunction">클릭</button>
        <br>
        <select v-model="sel" @change="change">
            <option value="A">a</option>
            <option value="B">b</option>
            <option value="C">c</option>

        </select>
        <br>
        <input type="text" @focus="myFunction" />
        <input type="text" @blur="myFunction" />
        <input type="text" @keyup.enter="doSearch" />
        <br>
        <button @click="doSearch">조회</button>
        


    </div>
</template>
<script>
export default {
    name: "",
    components: {},
    data() {
        return {
            sel: ""
        };
    },
    setup() {},
    created() {},
    mounted() {},
    unmounted() {},
    methods: {
        doSearch(){
             console.log("조회실행")
        },

        myFunction() {
            console.log("클릭 이벤트 발생")
        },

        change() {
            console.log(this.sel)
        }
    }
}
</script>