  <template>
  <div>
    <b-form-textarea
      id="title"
      v-model="model.title"
      placeholder="제목"
      rows="1"
    />
    <br>
    <b-form-textarea
      id="content"
      v-model="model.content"
      placeholder="본문"
      rows="8"
    />
    <br>
    <input
      id="phone_number1"
      v-model="model.phone_number1"
      placeholder="000"
      maxlength="3"
    /> -
    <input
      id="phone_number2"
      v-model="model.phone_number2"
      placeholder="0000"
      maxlength="4"
    /> -
    <input
      id="phone_number3"
      v-model="model.phone_number3"
      placeholder="0000"
      maxlength="4"
    />
    <br>
    <div style="float:right;">
      <b-button varient="outline-primary" @click="buttonclick()">등록</b-button>
    </div>
    <router-view></router-view>
  </div>
  </template>

  <script>
  import api from '@/api'

  export default {
  name: 'Memo',
  data: () => ({
      model:{},
  }),
  methods: {
  async buttonclick(){
    
    const phonenum = /^01([0|1|6|7|8|9]?)([0-9]{3,4})([0-9]{4})$/;

    this.model.phoneNumber = [1, 2, 3].reduce((acc, cur) => acc + this.model[`phone_number${cur}`], "")

    console.log(this.model)

    if(phonenum.test(this.model.phoneNumber)){
      const result = await api.document.post(this.model)
      if(result.status === 200){
        alert("글이 등록되었습니다.");
        this.$router.push('/document')
      }    
    }
    else{
      alert("휴대폰 번호를 올바르게 입력해주세요.");
    }
    
  }
  }
  }


  </script>