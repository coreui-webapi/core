<template>
  <div class="animated fadeIn">
    <b-card header-tag="header">
      <div slot="header">
        <i class="icon-drop"></i> 게시판
          <router-link to="/doc/Writing">
            <button type="button" value="write">글쓰기</button>
          </router-link>
      </div>
      <b-table responsive="sm" :items="items" :fields="fields" striped>
        <template slot="showDetails" slot-scope="row">
          <b-button size="sm" @click="toggleShow(row.item.id)" >
            {{row.item.show }}
            AA
          </b-button> 
        </template>

        <template slot="details">
          <b-card>
            <b-row>
              <b-col sm=3><b>title: </b></b-col>
            </b-row>
          </b-card>
        </template>
      </b-table>
    </b-card>
  </div>  
</template>

<script>
import api from '@/api'

export default {
  name: 'Doc',
  data: () => ({
    model: {},
    items: [],
    fields: [
      { key : 'id', label: 'id' },
      { key : 'title', label: '제목' },
      { key : 'showDetails', label: 'Details' }
    ], 
  }),
  mounted: async function () {
    console.log('api', api)
    const rs = await api.document.get();
    this.items = rs.data;
    this.items.map(item => {
      item.show =false;
    })
  },
  methods: {
    toggleShow(id){
      console.log(id)
      this.items.map(item => {
        if(item.id == id){
          item.show = !item.show
          console.log(item.show)
        }
      })
    }
  }
}
</script>
