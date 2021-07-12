<template>
    <div>
        <h1 v-if="type=='A'">A</h1>
        <h1 v-else-if="type=='B'">B</h1>
        <h1 v-else>C</h1>

        <!-- 사용자는 조회버튼만 보이고 관리자는 등록버튼도 보이도록. -->
        

        <button>조회</button>
        <button v-if="userRole == 'Admin'">생성</button>
        <!-- 조건에 맞지 않으면 요소 자체를 만들지 않는다. -->
        <!-- 조건이 변하지 않아서 한번 정해진게 쭉 갈때 -->

        <!-- show//있는데 스타일로 안보이게 -->
        <!-- 이메일 구독 동의 버튼 누르면 이메일 입력 창 보이고 안누르면 안보이게 할때 -->
        <!-- 빈번하게 보이고 안보이는게 변활 할 수 있을 때 -->
        <!-- 변할때 마다 새로 생성하고 그러면 비용이 많이 든다. -->
        <!-- 이미 생성된걸 보여줬다 안보여줬다만 하는게 비용이 적게 든다 -->
        <button v-show="userRole == 'Admin'">삭제</button> 
        <button v-show="true">삭제</button>




    </div>
</template>
<script>
export default {
    name: "",
    components: {},
    data() {
        return {
            type: "g",  
            userRole: "Admin",
        };
    },
    setup() {},
    created() {},
    mounted() {},
    unmounted() {},
    methods: {}
}
</script>