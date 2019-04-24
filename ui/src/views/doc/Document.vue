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
        <template slot="show_details" slot-scope="row">
           <b-button size="sm" @click="toggleShow(row.item.id)" class="mr-2">
            {{ row.detailsShowing ? 'Hide' : 'Show'}} Details
          </b-button>
          <b-form-checkbox v-model="row.detailsShowing" @change="toggleShow(row.item.id)">
            Details via check
          </b-form-checkbox>
        </template>

        <template slot="row-details" slot-scope="row">
        <b-card>
          <b-row class="mb-2">
            <b-col sm="3" class="text-sm-right"><b>제목</b></b-col>
            <b-col>{{ row.item.title }}</b-col>
          </b-row>
          <b-button size="sm" @click="toggleShow(row.item.id)">Hide Details</b-button>
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
      { key : 'show_details', label: 'Details' }
    ], 
  }),
  mounted: async function () {
    console.log('api', api)
    const rs = await api.document.get();
    this.items = rs.data;
    this.items.map(item => {
      item._showDetails =false;
    })
  },
  methods: {
    toggleShow(id){
      this.items = this.items.map(item => {
        if(item.id == id){
          item._showDetails = !item._showDetails
        }
        return item
      })
    }
  }
}
</script>
