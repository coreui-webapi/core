<template>
<div>
<b-form-textarea
    id="title"
    v-model="title"
    placeholder="제목"
    rows="1"
  />
  <br>
<b-form-textarea
    id="text"
    v-model="text"
    placeholder="본문"
    rows="8"
  />
  <br>
  <input
    id="phone_number1"
    v-model="phone_number1"
    placeholder="000"
    maxlength="3"
   /> -
   <input
    id="phone_number2"
    v-model="phone_number2"
    placeholder="0000"
    maxlength="4"
   /> -
   <input
    id="phone_number3"
    v-model="phone_number3"
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
  data: function(){
    return{
      title:'',
      text:'',
      phone_number:''
    }
  },
  methods: {
 async buttonclick(){

   var phonenum = /^01([0|1|6|7|8|9]?)?([0-9])?([0-9])$/;

    console.log({
      title: title.value,
      content: text.value,
      phone_number: phone_number1.value + phone_number2.value + phone_number3.value
    })
    const result = await api.document.post({
      title: title.value,
      content: text.value,
      phone_number: phone_number1.value + phone_number2.value + phone_number3.value
    })
    if(result.status === 200){
      this.$router.push('/document')
    }
  }
}
}


</script>