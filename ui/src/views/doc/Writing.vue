<template>
  <div class="animated fadeIn">
    <b-card header-tag="header">
      <div>
        <b-form-textarea
          style="margin-bottom: 10px; resize: none"
          id="title"
          v-model="title"
          placeholder="제목"
          rows="1"
          max-rows="1" />
        <b-form-textarea
          style="margin-bottom: 10px; resize: none"
          id="text"
          v-model="text"
          placeholder="본문"
          rows="3"
          max-rows="10" />
      </div>
      <div>
        <b-form-input id="phoneNumber" v-model="phoneNumber" type="tel" placeholder="01x-xxxx-xxxx" >
        </b-form-input>
      </div>
      <b-button @click="write()"> 등록 </b-button>
    </b-card>
  </div> 
</template>


<script>
import api from '@/api'

export default {
  data: function() {
    return {
      title: '',
      text: '',
      phoneNumber: ''
    }
  },
  methods: {
    async write() {
      var regExp = /^\d{3}-\d{3,4}-\d{4}$/;
       console.log({
         title: title.value,
         content: text.value,
         phoneNumber: phoneNumber.value
       });
      
       if(!regExp.test(phoneNumber.value)){
         alert("핸드폰 번호를 정확히 입력해 주세요"); 
       }
       else {
         const result = await api.document.post({
         title: title.value,
         content: text.value
        });
        console.log(result);

        if(result.status === 200 ) {
         this.$router.push('/doc');
        }
       }
    }

  }
}
</script>