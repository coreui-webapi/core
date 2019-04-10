<template>
  <div>
    <b-form-textarea
      id="title"
      v-model="model.title"
      rows="1"
      placeholder="제목"
    >{{text.title}}</b-form-textarea>
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
    this.items = rs.data;

    this.items.map(item => {
      if(item.id.toString()===this.$route.params.id){
        this.text = item
      }
    })
  }
}
</script>
