<template>
  <div>
    안녕하세요요요
    "txt"
    <div class="txt">tet</div>
    @txt
    !txt
    {{txt}}
      testttt: "<p>안녕</p>"
      testttt: "<p>안녕</p>"
    {{testttt}}
  </div>
</template>
<script>
export default {
  name: "",
  components: {},
  data() {
    return {
      txt: "헬로",
      testttt: "<p>안녕</p>"
    };
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {}
}
</script>