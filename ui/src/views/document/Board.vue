<template>
  <div>
    <b-form-textarea
      id="title"
      v-model="model.title"
      rows="1"
    
    />
    <br>
    <b-form-textarea
      id="content"
      v-model="model.content"
      rows="8"
      :placeholder="text.content"  
      />
    <br>
    <div style="float:right;">
      <b-button varient="outline-primary" @click="buttonclick()">수정</b-button>
    </div>
  </div>
</template>


<script>
import api from '@/api'

export default {
  name: 'Board',
  data: () => ({
    model: {},
    items: [],
    fields: [
      {key: 'title'},
      {key: 'content'}
    ],
    text: []
  }),
  mounted: async function () {
    console.log('api', api)
    const rs = await api.document.get();
    this.model = rs.data;
    console.log(this.model)
    this.model.map(item => {
      if(item.id.toString()===this.$route.params.id){
        this.text = item
      }
    })
  }
}
</script>
