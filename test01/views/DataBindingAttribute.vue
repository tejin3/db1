<template>
  <div>
    <img v-bind:src="imgSrc" alt="" />
    <img :src="imgSrc" alt="" />
    <img v-bind:src="imgSrc" alt="">
    <div>안녕</div>

  </div>
</template>
<script>
export default {
  name: "",
  components: {},
  data() {
    return {
      imgSrc: "http://www.foodnmed.com/news/photo/201903/18296_3834_4319.jpg",
    };
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {}
}
</script>