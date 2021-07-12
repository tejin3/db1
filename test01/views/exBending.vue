<template>
    <div>
        <div>음료 선택</div>
        <div >
        
        <button 
        :key="drink.drinkId" 
        @click="drinkClick(drink.drinkId)" 
        v-for="drink in drinkList"
        v-bind:class="{yellow: drink.price <= userableCoin}"
        
        >
        {{drink.drinkName}}<br>가격:{{drink.price}}<br>재고수:{{drink.stock}}
        
        </button>
        
        </div>
        <div>돈 투입</div>
        <button  @click ="inCoin(coin)" :key="coin"  v-for="coin in coinList">
            {{coin}}원 투입
            </button>
        <br>
    <label for="">음료자판기 잔돈:</label>
    <input type="number" readonly v-model="userableCoin">  
    <label for="">투입금액:</label>
    <input type="number" v-model="inCoinPlz" readonly>
    <br>
    <label for="">내지갑:</label>
    <input type="number" v-model="myCoin" readonly>

    <br>
    <div>
      <p :key="i"  v-for="(msg, i) in messageList" v-bind:class="{back : true}">
          {{msg}}</p>
    </div>


    </div>

</template>
<script>
export default {
    name: "",
    components: {},
    data() {
        return {
            

            inCoinPlz: 0,
            userableCoin: 0,
            myCoin: 10000,
            messageList:[],
            yellowChange: false,
            



    //음료 목록
    //코카콜라 - 700원, 오렌지주스-1200, 커피-500, 물-700원
    //보리차 - 1200원, 포카리-1000원, 뽀로로-1300원
    //각가의 음료는 총 5개씩 있습니다.

    //고객 지갑 - 10000원
    //음료자판기 최초 잔도 - 1000원

    //동전 투입 - 100원, 500원, 1000원
        coinList:[100,500,1000],

        drinkList: [{
        drinkId: "1",
        drinkName: "코카콜라",
        price: 700,
        stock: 5
      },
      {
        drinkId: "2",
        drinkName: "오렌지주스",
        price: 1200,
        stock: 5
      },
      {
        drinkId: "3",
        drinkName: "커피",
        price: 500,
        stock: 5
      },
      {
        drinkId: "4",
        drinkName: "물",
        price: 700,
        stock: 5
      },
      {
        drinkId: "5",
        drinkName: "보리차",
        price: 1200,
        stock: 5
      },
      {
        drinkId: "6",
        drinkName: "포카리",
        price: 1000,
        stock: 5
      },
      {
        drinkId: "7",
        drinkName: "뽀로로",
        price: 1300,
        stock: 5
      }
    ]
        };
    },
    setup() {},
    created() {},
    mounted() {
    },
    unmounted() {},
    methods: {

        

     inCoin (coin){
        if (this.myCoin < coin){
            //내 지갑의 잔고가 투입하려는 금액만큼 있는가? 부족하면
            this.messageList.push("지갑에 돈이 부족합니다")
        } else {
        this.inCoinPlz += coin
        this.messageList.push(coin + "원 투입")
        this.userableCoin = this.inCoinPlz
        this.myCoin -= coin
    
        
        }
     },
    
// inCoinPlz: 0, 투입금액
//             userableCoin: 0, 음료자판기 잔돈
//             myCoin: 10000, 내 지갑

    drinkClick(drinkId){
        let drink = this.drinkList.filter((d) => d.drinkId ==drinkId)[0];
        console.log(drink);
        if (drink.stock > 0){

        if (this.userableCoin < drink.price){
            this.messageList.push("돈을 더 투입하세요")
        }else {
            this.userableCoin -= drink.price
            this.inCoinPlz = 0
            this.myCoin += this.userableCoin
            this.userableCoin = 0
            this.messageList.push(drink.drinkName + drink.price + "원을 구매했습니다.")
            drink.stock --;            
        }
        } else {
            this.messageList.push(drink.drinkName + "의 재고가 부족합니다.")

        }
    }

    }
  
}

 
</script>
<style scoped>
.yellow{
    background-color: yellow;
}
.back{
    background-color: wheat;
    margin: 0%;
}

</style>