<template>
  <div>
    <input type="text" v-model="text1" />
    <button v-bind:disabled="text1==''">조회</button>
  </div>
</template>
<script>
export default {
  name: "",
  components: {},
  data() {
    return {
      text1: ""

    };
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {}
}
</script>