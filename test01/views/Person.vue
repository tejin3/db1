<template>
  <div>
    <div>
      <label>first num:</label>
      <input type="text" v-model="firstNum" />
    </div>
    <div>
      <label>last num:</label>
      <input type="text" v-model="lastNum" />
    </div>
    <div>
      <label>number:</label>
      <input type="text" v-model="number" />
    </div>
    <button @click="createPerson">생성</button>
    <table>
      <thead>
        <tr>
          <th>fisrt num</th>
          <th>last num</th>
          <th>number</th>
          <th></th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr :key="number.id" v-for="(number, idx) in list">
          <td><input type="text" v-model="number.first_num" /></td>
          <td><input type="text" v-model="number.last_num" /></td>
          <td><input type="text" v-model="number.number" /></td>
          <td><button @click="deletePerson(number.id)">삭제</button></td>
          <td><button @click="updatePerson(idx)">수정</button></td>
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
      list: [],
      firstNum: "123",
      lastNum: "456",
      number: "789",
    };
  },
  setup() {},
  created() {},
  mounted() {
    this.getList();
  },
  unmounted() {},
  methods: {
    async getList() {
      this.list = await this.$api("/api/getList", "get", {}); //http://localhost:3000/api/getList
      console.log(this.list);
    },
    async createPerson() {
      const r = await this.$api("/api/createPerson", "post", {
        param: [
          {
            first_num: this.firstNum,
            last_num: this.lastNum,
            number: this.number,
          },
        ],
      });
      console.log(r);
      this.getList();
    },
    async deletePerson(id) {
      const r = await this.$api("/api/deletePerson", "post", {
        param: [id],
      });
      console.log(r);
      this.getList();
    },
    async updatePerson(idx) {
      const r = await this.$api("/api/updatePerson", "post", {
        param: [
          {
            first_name: this.list[idx].first_name,
            last_name: this.list[idx].last_name,
            number: this.list[idx].number,
          },
          this.list[idx].id,
        ],
      });
      console.log(r);
      this.getList();
    },
  },
};
</script>
