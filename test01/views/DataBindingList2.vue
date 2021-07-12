<template>
    <div>asdfs
        <select v-model="selectedGender"> 
            <option value="">전체</option>
            <option value="male">남자</option>
            <option value="female">여자</option>

        </select>
        <input type="search" v-model="nameCompany">
<button @click="getUserList">조회</button>
<input type="search" v-model="tel" @click="searchTel">
        <div >
            <table>
                <thead>
                    <tr>
                        <th>이름</th>
                        <th>회사</th>
                    <th>아이디</th>
                    <th>성별</th>
                    <th>전화번호</th>
                    </tr>
                </thead>
                <tbody>
                    <tr :key="i" v-for="(age,i) in userList">
                       
                       <td>{{age.name}}</td>
                       <td>{{age.company}}</td>
                        <td>{{age._id}}</td>
                       <td>{{age.gender}}</td>
                       <td>{{age.phone}}</td>

                    </tr>
                </tbody>
            </table>
            </div>
        <!-- <div :key="age._id"  v-for="age in userList">{{age._balance}}</div> -->

    </div>
</template>
<script>
import axios from 'axios' ;

export default {
    name: "",
    components: {},
    data() {
        return {
            url: "https://c59a744d-4a3f-4dfe-a8dc-8cf170d5301a.mock.pstmn.io/getUserList",
            userList: [],
            selectedGender: "",
            nameCompany: "",
            tel:"",
        };
    },
    setup() {},
    created() {},
    mounted() { //다 작동되면 자동으로 실행(호출?) ,뷰가 자동으로 실행
        // this.getUserList();
    },
    unmounted() {},
    methods: {

        searchTel(){},
        
        async getUserList() {
           var userList  = (await axios.get(this.url)).data.data;  //데이터에 접속해서 실제 이름인 data
      
            if(this.selectedGender == ""){ 
                 //성별 전체 선택
                if (this.nameCompany == "") {
                     //이름 입력 안함
                    this.userList = userList;
                }else {  
                    //이름 입력 함
                    this.userList = userList.filter(
                        (u) =>
                    u.name.toLowerCase().indexOf(this.nameCompany.toLowerCase()) > -1
                    //사용자 이름에서 입력한 이름을 포함하는 데이터
                    );
                }
            }else{ 
                //성별을 남자 혹은 여자 선택한 경우
                if(this.nameCompany == "") {  
                    //이름 입력 안함
                    this.userList = userList.filter(
                        (u) => u.gender == this.selectedGender
                        //사용자 성별이 사용자가 선택한 성별에 맞는 데이터
                    );
                } else {
                    //이름 입력함
                    this.userList = userList.filter(
                        (u) => 
                        u.gender == this.selectedGender &&
                        u.name.toLowerCase().indexOf(this.nameCompany.toLowerCase()) > -1
                        //성별과 이름을 조건 모두 만족하는 데이터
                    );
                    // var users2 = [];
                    // for(user of userList) {
                    //     if (user.gender == this.selectedGender && 
                    //     user.name.toLowerCase().indexOf(this.nameCompany.toLowerCase()) > -1){
                    //         users2.push(user);  //따로 선언하고 따로 담았다가 한방에 
                    //     }
                    // }
                }
            }
                    //this.userList = users2;
            }

//
            //     this.userList = userList;
            // } else {

            //     this.userList = userList.filter((u) => u.gender == this.selectedGender);
                // var newUserList = [];
                // for (var user of userList) {
                //     if(user.gender == this.selectedGender) {
                //         newUserList.push(user);
                //     }
                // }
                // this.userList = newUserList;
            }
            // userList = userList.toLowerCase();
            // selectedGender =  this.selectedGender.toLowerCase() 

// console.log(selectedGender);
           
           
        //    console.log(this.userList);
  
//   } 
//        }

}
</script>