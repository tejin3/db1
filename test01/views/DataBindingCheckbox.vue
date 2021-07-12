<template>
  <div>
  <label><input type="checkbox" v-bind:value="citiList[0]" v-model="cities" />서울</label>
  <label><input type="checkbox" v-bind:value="citiList[2]" v-model="cities" />부산</label>
  <label><input type="checkbox" :value="citiList[1]" v-model="cities" />제주</label>
<br>
<div>선택한지역 : {{cities}}
  <div>
  <label><input type="checkbox"></label>

  </div>
</div>
  </div>
</template>
<script>
export default {
  name: "",
  components: {},
  data() {
    return {
      cities: [],
      seoul: "02",
      citiList:[{
        v:"02",t:"서울"
      },
      {
        v:"064",t:"제주"
        
      },
      {
        v:"21",t:"부산"
      }]
    };
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {}
}
</script>