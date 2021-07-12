<template>
    <div>
        <select>
            <!-- <option value="1">코카콜라</option>
            <option value="2">오렌지주스</option> --> -->
            <!-- <option :value="drink.drinkId" :key="i" v-for="(dirnk,i) in drinkList"> 
                {{drink.drinkName}}
                </option>   -->
            
                
           
<!--자바스크립트에서 in 인덱스가) 아니라 뷰에서는 그 요소가 (값)이 들어간다 -->
<!-- 다중데이터 다룰때 key 사용  -->
<!-- 문법 -->
</select>
<table>
    <thead>
<tr>
    <th>제품코드</th>
    <th>제품명</th>
    <th>가격</th>
    <th>주문수</th>
    <th>합ㅖ</th>

</tr>
    </thead>
    <tbody>
        <tr :key="drink.drinkId" v-for="drink in drinkList">
    <td>{{drink.drinkId}}</td>
    <td>{{drink.drinkName}}</td>
    <td>{{drink.price}}</td>
    <td><input type="number" name="" v-model="drink.qty" /></td>
    <td>{{drink.price * drink.qty}}</td>

    </tr>
    </tbody>
</table>
        
    </div>
</template>
<script>
export default {
    name: "",
    components: {},
    data() {
        return {
            drinkList: [
        {
          drinkId: "1",
          drinkName: "코카콜라",
          price: 700,
          qty: 1,
        },
        {
          drinkId: "2",
          drinkName: "오렌지주스",
          price: 1200,
          qty: 1,
        },
        {
          drinkId: "3",
          drinkName: "커피",
          price: 500,
          qty: 1,
        },
        {
          drinkId: "4",
          drinkName: "물",
          price: 700,
          qty: 1,
        },
        {
          drinkId: "5",
          drinkName: "보리차",
          price: 1200,
          qty: 1,
        },
        {
          drinkId: "6",
          drinkName: "포카리",
          price: 1000,
          qty: 1,
        },
        {
          drinkId: "7",
          drinkName: "뽀로로",
          price: 1300,
          qty: 1,
        },
      ]

        };
    },
    setup() {},
    created() {},
    mounted() {},
    unmounted() {},
    methods: {}
};
</script>
<style scoped>
table{
    width: 100%;
}

table,
th,
td{
    border-collapse: collapse;
}

th,
td{
    border: 1px solid #222;
    padding: 10px;
}

</style>