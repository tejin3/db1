<template>
  <div>
    <div> 
      {{htmlString}}
    </div>
<div v-html="htmlString"></div>
  </div>
  <div v-html="tejin3"></div>
</template>
<script>
export default {
  name: "",
  components: {},
  data() {
    return {
      htmlString:"<p style='color:red;'>빨간색 글자.</p>",
      tejin3:"<p>맛있는것 먹고싶다 뭐가 있을까</p>"
    };
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {}
}
</script>