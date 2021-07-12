<template>
  <div>
    <div>메뉴선택</div>
    <button :key="menu.menuId" v-for="menu in menus" @click="clickMenu()">
      <!-- !-- v-bind="{dd: true}"  -->
      <!-- {{}}문자열로 연결 -->
      {{ menu.menuName }}<br />
      {{ menu.price }}
    </button>
    <br />
    <div>각종 할인카드 및 쿠폰선택</div>

    <!-- v--model.number 넘버로 받는다 -->
    <!-- 클릭 이벤트 @="a;b" -->
    <select>
      <option value="0">할인 카드 선택</option>
      <option
        :key="card.cardId"
        v-for="card in creditCards"
        v-show="card.cardType == 'CREDIT'"
      >
        {{ card.discount }}{{ card.discountType }} {{ card.cardName }}
      </option>
    </select>
    <select>
      <option>통신사 할인 선택</option>
      <option
        :key="card.cardId"
        v-for="card in creditCards"
        v-show="card.cardType == 'TELECOM'"
      >
        {{ card.discount }}{{ card.discountType }} {{ card.cardName }}
      </option>
    </select>
    <select>
      <option>OKCASHBAG 할인 선택</option>
      <option
        :key="card.cardId"
        v-for="card in creditCards"
        v-show="card.cardType == 'OKCASHBAG'"
      >
        {{ card.discount }}{{ card.discountType }} {{ card.cardName }}
      </option>
    </select>
    <select>
      <option>POINT결제 선택</option>
      <option
        :key="card.cardId"
        v-for="card in creditCards"
        v-show="card.cardType == 'POINT'"
      >
        {{ card.discount }}{{ card.discountType }} {{ card.cardName }}
      </option>
    </select>
    <select>
      <option>쿠폰 할인 선택</option>
      <option :key="coupon.couponId" v-for="coupon in coupons">
        {{ coupon.title }}
      </option>
    </select>
    <div>
      선택 메뉴 및 수량<br />
      <div v-show="menu1">
        <label>무제한 샐러드바</label>
        <br />
        <label>단품가격</label>
        <input type="number" readonly v-model="count0Basic" />
        <label>수량</label>
        <button @click="count0Minus">-</button>
        <input type="number" min="0" readonly v-model="count0" />
        <button @click="count0Plus">+</button>
        <label>합</label>
        <input type="number" readonly min="0" v-model="count0Sum" />
      </div>
      <div v-show="true">
        <label>안심 스테이크(150g)</label>
        <br />
        <label>단품가격</label>
        <input type="number" readonly v-model="count1Basic" />
        <label>수량</label>
        <button>-</button>
        <input type="number" readonly min="0" v-model="count1" />
        <button>+</button>
        <label>합</label>
        <input type="number" readonly min="0" v-model="count1Sum" />
      </div>
      <div v-show="makeMenu3">
        <label>립아이 스테이크(220g)</label>
        <br />
        <label>단품가격</label>
        <input type="number" v-model="count2Basic" />
        <label>수량</label>
        <button>-</button>
        <input type="number" readonly min="0" v-model="count2" />
        <button>+</button>
        <label>합</label>
        <input type="number" readonly min="0" v-model="count2Sum" />
      </div>
      <div v-show="makeMenu4">
        <label>채끝 등심 스테이크(210g)</label>
        <br />
        <label>단품가격</label>
        <input type="number" readonly v-model="count3Basic" />
        <label>수량</label>
        <button>-</button>
        <input type="number" readonly min="0" v-model="count3" />
        <button>+</button>
        <label>합</label>
        <input type="number" readonly min="0" v-model="count3Sum" />
      </div>
      <div v-show="makeMenu5">
        <label>자몽에이드</label>
        <br />
        <label>단품가격</label>
        <input type="number" readonly v-model="count4Basic" />
        <label>수량</label>
        <button>-</button>
        <input type="number" readonly min="0" v-model="count4" />
        <button>+</button>
        <label>합</label>
        <input type="number" readonly min="0" v-model="count4Sum" />
      </div>
      <div v-show="makeMenu6">
        <label>애플망고에이드</label>
        <br />
        <label>단품가격</label>
        <input type="number" readonly v-model="count5Basic" />
        <label>수량</label>
        <button>-</button>
        <input type="number" readonly min="0" v-model="count5" />
        <button>+</button>
        <label>합</label>
        <input type="number" readonly min="0" v-model="count5Sum" />
      </div>
      <div v-show="makeMenu7">
        <label>생맥주</label>
        <br />
        <label>단품가격</label>
        <input type="number" readonly v-model="count6Basic" />
        <label>수량</label>
        <button>-</button>
        <input type="number" readonly min="0" v-model="count6" />
        <button>+</button>
        <label>합</label>
        <input type="number" readonly min="0" v-model="count6Sum" />
      </div>
    </div>
    <div>
      할인 미적용 요금 <input type="number" readonly v-model="noCutFee" />
    </div>
    <button>최종 요금 계산</button>
    <div>최종요금</div>
  </div>
</template>
<script>
export default {
  name: "",
  components: {},
  data() {
    return {
      // dd: false,
      count0Basic: 25000,
      count1Basic: 35500,
      count2Basic: 22500,
      count3Basic: 30500,
      count4Basic: 6500,
      count5Basic: 6500,
      count6Basic: 400,
      count0: 1,
      count1: 1,
      count2: 1,
      count3: 1,
      count4: 1,
      count5: 1,
      count6: 1,

      menu1: true,
      makeMenu1: false,
      makeMenu2: false,
      makeMenu3: false,
      makeMenu4: false,
      makeMenu5: false,
      makeMenu6: false,
      makeMenu7: false,

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
    count0Sum() {
      return this.count0 * this.count0Basic;
    },
    count1Sum() {
      return this.count1 * this.count1Basic;
    },
    count2Sum() {
      return this.count2 * this.count2Basic;
    },
    count3Sum() {
      return this.count3 * this.count3Basic;
    },
    count4Sum() {
      return this.count4 * this.count4Basic;
    },
    count5Sum() {
      return this.count5 * this.count5Basic;
    },
    count6Sum() {
      return this.count6 * this.count6Basic;
    },
    noCutFee() {
      return (
        this.count0Sum +
        this.count1Sum +
        this.count2Sum +
        this.count3Sum +
        this.count4Sum +
        this.count5Sum +
        this.count6Sum
      );
    },
  },
  setup() {},
  created() {
    //먼저  시작
  },
  mounted() {
    //마지막에
  },
  unmounted() {},
  methods: {
    clickMenu() {
      //   this.makeMenu1 = true
    },
    clickMenu(id) {
      console.log(id);
    },
    count0Minus() {
      if (this.count0 < 1) {
        this.menu1 = false;
      } else {
        this.count0 -= 1;
      }
    },
    count0Plus() {
      this.count0 += 1;
    },
  },
};
</script>
