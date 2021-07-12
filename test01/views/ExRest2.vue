<template>
  <div>
    <label>메뉴선택</label><br /><br />
    <button
      :key="menu.menuId"
      @click="menu.isSelected = true"
      v-for="menu in menus"
    >
      {{ menu.menuName }}<br />가격 : {{ menu.price }}원
    </button>
    <br />

    <div>
      <p>선택 메뉴 및 수량</p>

      <div
        :key="selectmenu.menuId"
        v-for="selectmenu in menus.filter((m) => m.isSelected)"
      >
        <label>{{ selectmenu.menuName }}</label>

        <label> 단품 가격 : {{ selectmenu.price }}원 </label><br />
        <label> 수량 </label>
        <button
          style="width: 5%"
          @click="
            selectmenu.qty < 1
              ? ((selectmenu.isSelected = false), (selectmenu.qty = 1))
              : selectmenu.qty--
          "
        >
          -
        </button>
        <input type="number" min="0" readonly v-model="selectmenu.qty" />
        <button style="width: 5%" @click="selectmenu.qty++">+</button>
        <button
          style="width: 10%"
          @click="(selectmenu.isSelected = false), (selectmenu.qty = 1)"
        >
          삭제
        </button>
        <label> 합 : {{ selectmenu.qty * selectmenu.price }}</label>
      </div>

      <div>
        <p>할인 미적용 요금</p>
        <p>{{ total }}</p>
      </div>
      <div>
        <select v-model.number="selectedCredit">
          <option value="0">할인 카드 선택</option>
          <option
            :key="card.cardId"
            :value="card.discount"
            v-for="card in creditCards.filter((m) => m.cardType == 'CREDIT')"
          >
            {{ card.cardName }}
          </option>
        </select>
        <select v-model.number="selectedTelecom">
          <option value="0">통신사 할인 선택</option>
          <option
            :key="card.cardId"
            :value="card.discount"
            v-for="card in creditCards.filter((m) => m.cardType == 'TELECOM')"
          >
            {{ card.cardName }}
          </option></select
        ><select v-model.number="selectedOkcashbag">
          <option value="0">OKCASHBAG 할인 선택</option>
          <option
            :key="card.cardId"
            :value="card.discount"
            v-for="card in creditCards.filter((m) => m.cardType == 'OKCASHBAG')"
          >
            {{ card.cardName }}
          </option></select
        ><select v-model.number="selectedPoint">
          <option value="0">POINT결제 선택</option>
          <option
            :key="card.cardId"
            :value="card.discount"
            v-for="card in creditCards.filter((m) => m.cardType == 'POINT')"
          >
            {{ card.cardName }}
          </option>
        </select>
        <select v-model.number="selectedCoupon">
          <option value="0">쿠폰 할인 선택</option>
          <option
            :key="coupon.couponId"
            :value="coupon.couponId"
            v-for="coupon in coupons"
          >
            {{ coupon.title }}
          </option>
        </select>
      </div>
      <div>
        <br />
        <button
          style="
            height: 50px;
            background-color: black;
            color: white;
            font-size: 20px;
          "
          @click="
            lastFee();
            feeMake = true;
          "
        >
          할인 적용 금액 구하기</button
        ><br />
      </div>
      <div v-show="feeMake">
        <label>할인금액 </label>
        <input type="number" readonly v-model="allDis" />

        <label>최종 결제 금액</label>
        <input type="number" readonly v-model="fee" />
      </div>
      <br /><br /><br />
    </div>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      selectedCredit: 0,
      selectedTelecom: 0,
      selectedOkcashbag: 0,
      selectedPoint: 0,
      selectedCoupon: 0,
      noCutFee: 0,
      discountSum: 0,
      allDis: 0,
      highDisCount: 0,
      feeMake: false,
      fee: 0,
      menus: [
        {
          menuId: 1,
          menuName: "무제한 샐러드바",
          price: 25000,
        },
        {
          menuId: 2,
          menuName: "안심 스테이크(150g)",
          price: 35500,
        },
        {
          menuId: 3,
          menuName: "립아이 스테이크(220g)",
          price: 22500,
        },
        {
          menuId: 4,
          menuName: "채끝 등심 스테이크(210g)",
          price: 30500,
        },
        {
          menuId: 5,
          menuName: "자몽에이드",
          price: 6500,
        },
        {
          menuId: 6,
          menuName: "애플망고에이드",
          price: 6500,
        },
        {
          menuId: 7,
          menuName: "생맥주",
          price: 400,
        },
      ],
      //할인 종류
      cardTypes: [
        {
          cardType: "CREDIT",
          title: "신용카드",
        },
        {
          cardType: "TELECOM",
          title: "통신사",
        },
        {
          cardType: "OKCASHBAG",
          title: "OK캐시백",
        },
        {
          cardType: "POINT",
          title: "포인트결제",
        },
      ],
      //할인 카드/통신사/포인트/OK캐시백
      creditCards: [
        {
          cardId: 1,
          cardType: "CREDIT",
          cardName: "CJ ONE 삼성카드",
          discount: 30,
          discountType: "%",
        },
        {
          cardId: 2,
          cardType: "CREDIT",
          cardName: "CJ ONE 신한카드",
          discount: 30,
          discountType: "%",
        },
        {
          cardId: 3,
          cardType: "CREDIT",
          cardName: "The CJ 카드",
          discount: 22,
          discountType: "%",
        },
        {
          cardId: 4,
          cardType: "CREDIT",
          cardName: "삼성 6 V4카드",
          discount: 20,
          discountType: "%",
        },
        {
          cardId: 5,
          cardType: "CREDIT",
          cardName: "신한 Lady카드",
          discount: 20,
          discountType: "%",
        },
        {
          cardId: 6,
          cardType: "CREDIT",
          cardName: "삼성 SFC",
          discount: 20,
          discountType: "%",
        },
        {
          cardId: 7,
          cardType: "CREDIT",
          cardName: "삼성 S클라스",
          discount: 20,
          discountType: "%",
        },
        {
          cardId: 8,
          cardType: "CREDIT",
          cardName: "하나 Yes OK Saver",
          discount: 20,
          discountType: "%",
        },
        {
          cardId: 9,
          cardType: "CREDIT",
          cardName: "홈플러스 하나줄리엣카드",
          discount: 20,
          discountType: "%",
        },
        {
          cardId: 10,
          cardType: "CREDIT",
          cardName: "하나 줄리엣카드 & Yes 4u shopping",
          discount: 20,
          discountType: "%",
        },
        {
          cardId: 11,
          cardType: "CREDIT",
          cardName: "KB Star",
          discount: 20,
          discountType: "%",
        },
        {
          cardId: 12,
          cardType: "CREDIT",
          cardName: "이마트 KB카드",
          discount: 15,
          discountType: "%",
        },
        {
          cardId: 13,
          cardType: "TELECOM",
          cardName: "KT 멤버십 일반 할인",
          discount: 5,
          discountType: "%",
        },
        {
          cardId: 14,
          cardType: "TELECOM",
          cardName: "KT 멤버십 VIP 할인",
          discount: 15,
          discountType: "%",
        },
        {
          cardId: 15,
          cardType: "TELECOM",
          cardName: "T 멤버십 실버 할인",
          discount: 5,
          discountType: "%",
        },
        {
          cardId: 16,
          cardType: "TELECOM",
          cardName: "T 멤버십 VIP/골드 할인",
          discount: 15,
          discountType: "%",
        },
        {
          cardId: 17,
          cardType: "OKCASHBAG",
          cardName: "OK캐시백",
          discount: 30,
          discountType: "%",
        },
        {
          cardId: 18,
          cardType: "POINT",
          cardName: "BC Top 포인트",
          discount: 100,
          discountType: "%",
        },
        {
          cardId: 19,
          cardType: "POINT",
          cardName: "기아멤버스 카드",
          discount: 20,
          discountType: "%",
        },
        {
          cardId: 20,
          cardType: "POINT",
          cardName: "삼성카드 포인트",
          discount: 100,
          discountType: "%",
        },
        {
          cardId: 21,
          cardType: "POINT",
          cardName: "현대카드 M",
          discount: 20,
          discountType: "%",
        },
        {
          cardId: 22,
          cardType: "POINT",
          cardName: "신한 Hi-Point 카드",
          discount: 20,
          discountType: "%",
        },
        {
          cardId: 23,
          cardType: "POINT",
          cardName: "블루멤버스 카드",
          discount: 20,
          discountType: "%",
        },
      ],
      //할인쿠폰
      coupons: [
        {
          couponId: 1,
          title: "5% 할인쿠폰(중복할인 가능)",
          discount: 5,
          doubleDiscount: true,
          discountType: "%",
        },
        {
          couponId: 2,
          title: "10% 할인쿠폰(중복할인 가능)",
          discount: 10,
          doubleDiscount: true,
          discountType: "%",
        },
        {
          couponId: 3,
          title: "15% 할인쿠폰(중복할인 가능)",
          discount: 15,
          doubleDiscount: true,
          discountType: "%",
        },
        {
          couponId: 4,
          title: "5000 할인쿠폰(중복할인 가능)",
          discount: 5000,
          doubleDiscount: true,
          discountType: "",
        },
        {
          couponId: 5,
          title: "10,000 할인쿠폰(중복할인 가능)",
          discount: 10000,
          doubleDiscount: true,
          discountType: "",
        },
        {
          couponId: 6,
          title: "20,000 할인쿠폰(중복할인 가능)",
          discount: 20000,
          doubleDiscount: true,
          discountType: "",
        },
        {
          couponId: 7,
          title: "5% 할인쿠폰(중복할인 불가능)",
          discount: 5,
          doubleDiscount: false,
          discountType: "%",
        },
        {
          couponId: 8,
          title: "10% 할인쿠폰(중복할인 불가능)",
          discount: 10,
          doubleDiscount: false,
          discountType: "%",
        },
        {
          couponId: 9,
          title: "15% 할인쿠폰(중복할인 불가능)",
          discount: 15,
          doubleDiscount: false,
          discountType: "%",
        },
        {
          couponId: 10,
          title: "5000 할인쿠폰(중복할인 불가능)",
          discount: 5000,
          doubleDiscount: false,
          discountType: "",
        },
        {
          couponId: 11,
          title: "10,000 할인쿠폰(중복할인 불가능)",
          discount: 10000,
          doubleDiscount: false,
          discountType: "",
        },
        {
          couponId: 12,
          title: "20,000 할인쿠폰(중복할인 불가능)",
          discount: 20000,
          doubleDiscount: false,
          discountType: "",
        },
      ],
    };
  },
  computed: {
    total() {
      var sum = 0;
      for (var menu of this.menus) {
        if (menu.isSelected) {
          sum += menu.price * menu.qty;
        }
      }
      this.noCutFee = sum;
      return sum;
    },
  },
  setup() {},
  created() {
    this.menus = this.menus.map((m) => {
      return {
        menuId: m.menuId,
        menuName: m.menuName,
        price: m.price,
        qty: 1,
        isSelected: false,
      };
    });
  },
  mounted() {
    console.table(this.menus);
  },
  updated() {},
  unmounted() {},
  methods: {
    lastFee() {
      console.log("가장높은 할인율1", this.highDisCount);
      console.log("카드", this.selectedCredit);
      console.log("통신사", this.selectedTelecom);
      console.log("오케이", this.selectedOkcashbag);
      console.log("포인트", this.selectedPoint);
      this.highDisCount = Math.max(
        this.selectedCredit,
        this.selectedTelecom,
        this.selectedOkcashbag,
        this.selectedPoint
      );
      console.log("가장높은 할인율2", this.highDisCount);
      console.log("헬로");
      this.discountSum = this.noCutFee * (this.highDisCount / 100);
      console.log("카드할인비용", this.discountSum);
      console.log("선택한 쿠폰 아이디", this.selectedCoupon);
      // 이게 위로 가야함
      for (var coupon of this.coupons) {
        if (this.selectedCoupon == 0) {
          //쿠폰이 선택되지 않았을때
          console.log("쿠폰이 선택되지 않았을 때");
          console.log("포문돌린 쿠폰아이디", coupon.couponId);
          console.log("선택한 쿠폰아이디", this.selectedCoupon);
          this.discountSum = this.noCutFee * (this.highDisCount / 100);
          return (
            (this.fee = this.noCutFee - this.discountSum),
            (this.allDis = this.total - this.fee)
          );
        } else if (coupon.couponId == this.selectedCoupon) {
          //쿠폰을 선택했을 때
          console.log("포문돌린 쿠폰아이디", coupon.couponId);
          console.log("선택한 쿠폰아이디", this.selectedCoupon);
          if (coupon.doubleDiscount == true) {
            console.log("쿠폰 할인가격", coupon.discount);
            //쿠폰이 중복할인 가능하면
            if (coupon.discount < 100) {
              //쿠폰이 퍼센테이지로 가격 할인을 하면
              this.discountSum = this.noCutFee * (coupon.discount / 100);
              console.log("1", this.discountSum);
              //쿠폰 할인 가격 구하기
              this.noCutFee -= this.discountSum;
              //할인 미적용 요금에서 쿠폰 할인 가격 빼기
              this.discountSum =
                this.highDisCount == 0
                  ? this.discountSum
                  : //제일 할인율 높은 카드가 0 이라면 변화 없음
                    this.noCutFee * (this.highDisCount / 100);
              //제일 할인율 높은 카드가 0이 아니라면 기존 요금에서 쿠폰 할인가격을 빼고 그걸 쿠폰 할인율로
              return (
                (this.fee = this.noCutFee - this.discountSum),
                (this.allDis = this.total - this.fee)
              );
            } else {
              //쿠폰이 마이너스로 가격 할인
              console.log(coupon.discount);
              this.discountSum = coupon.discount;
              console.log("2", this.discountSum);
              //쿠폰 할인 가격 구하기
              this.noCutFee -= this.discountSum;
              //할인 미적용 요금에서 쿠폰 할인 가격 빼기
              this.discountSum =
                this.highDisCount == 0
                  ? this.discountSum
                  : //제일 할인율 높은 카드가 0 이라면 변화 없음
                    this.noCutFee * (this.highDisCount / 100);
              //제일 할인율 높은 카드가 0이 아니라면 기존 요금에서 쿠폰 할인가격을 빼고 그걸 쿠폰 할인율로
              return (
                (this.fee = this.noCutFee - this.discountSum),
                (this.allDis = this.total - this.fee)
              );
            } //여기까진 맞음
          } else {
            //중복할인이 되지 않을 때
            console.log("중복할인이 되지 않을 때");

            if (coupon.discount < 100) {
              //쿠폰이 퍼센트로 깍을때
              console.log("쿠폰이 퍼센트로 깍을때");

              if (coupon.discount >= this.highDisCount) {
                //쿠폰 할인이 더 클때
                console.log("쿠폰 할인이 더 클때");

                this.discountSum = this.noCutFee * (coupon.discount / 100);
                return (
                  (this.fee = this.noCutFee - this.discountSum),
                  (this.allDis = this.total - this.fee)
                );
              } else {
                //카드 할인이 더 클때
                console.log("카드 할인이 더 클때");

                this.discountSum = this.noCutFee * (this.highDisCount / 100);
                return (
                  (this.fee = this.noCutFee - this.discountSum),
                  (this.allDis = this.total - this.fee)
                );
              }
            } else {
              //쿠폰이 마이너스로 깍을때
              console.log("쿠폰이 마이너스로 깍을 때");

              if (
                this.noCutFee - coupon.discount >=
                this.noCutFee * (this.highDisCount / 100)
              ) {
                //쿠폰 할인 가격이 카드 할인 가격보다 클 때
                console.log("쿠폰할인 가격이 카드 할인 가격보다 클 때");

                this.discountSum = this.noCutFee - coupon.discount;
                console.log(this.discountSum);
                return (
                  (this.fee = this.noCutFee - this.discountSum),
                  (this.allDis = this.total - this.fee)
                );
              } else {
                //쿠폰 할인 가격이 카드 할인 가격보다 작을 때
                console.log("쿠폰할인 가격이 카드 할인 가격보다 작을 때");

                this.discountSum = this.noCutFee * (this.highDisCount / 100);
                return (
                  (this.fee = this.noCutFee - this.discountSum),
                  (this.allDis = this.total - this.fee)
                );
              }
            }
          }
        }
      }

      //     if (coupon.discount < 100) {
      //       this.discountSum = this.noCutFee * (coupon.discount / 100);
      //       this.discountSum =
      //         this.highDisCount == 0
      //           ? this.discountSum
      //           : this.discountSum * (this.highDisCount / 100);
      //       return (this.fee = this.noCutFee - this.discountSum);
      //     } else {
      //       this.discountSum = this.noCutFee - coupon.discount;
      //       this.discountSum =
      //         this.highDisCount == 0
      //           ? this.discountSum
      //           : this.discountSum * (this.highDisCount / 100);
      //       return (this.fee = this.noCutFee - this.discountSum);
      //     }
      //   } else {
      //     this.discountSum =
      //       this.highDisCount == 0
      //         ? this.discountSum
      //         : this.discountSum * (this.highDisCount / 100);
      //     return (this.fee = this.noCutFee - this.discountSum);
      //   }
      // }
    },
  },
};
</script>
<style scoped>
div {
  background-color: rgb(85, 84, 84);
}
button {
  margin: 5px;
  width: 30%;
}
select {
  width: 70%;
  font-size: 15px;
}
label {
  background-color: rgb(219, 202, 172);
  margin: 5px;
  padding: 2px;
}
p {
  background-color: rgb(58, 58, 58);
  color: white;
  font-size: 20px;
}
</style>
