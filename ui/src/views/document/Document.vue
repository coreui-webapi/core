<template>
  <div class="animated fadeIn">
    <b-card header-tag="header">
      <div slot="header">
        <i class="icon-drop"></i> 게시판
        
          <router-link to="/memo">
          <div style="float:right;">
          <b-button variant="outline-primary">글쓰기</b-button>
          </div>
          </router-link>
          <router-view></router-view>
        
      </div>
      <b-table responsive="sm" :items="items" :fields="fields">
     
        <template slot="textButton" slot-scope="row"> 
          <router-link :to="`/document/board/${row.item.id}`">
            <b-button variant="outline-primary" size="sm">더보기</b-button>
          </router-link>
          <router-view></router-view>
        </template>
        <template slot="modButton" slot-scope="row">
          <router-link :to="`/document/board/${row.item.id}`">
           <b-button variant="outline-primary" size="sm">수정</b-button>
          </router-link>
        </template>
        <template slot="delButton">
          <b-button variant="outline-primary" size="sm">삭제</b-button>
        </template>
      </b-table>
      
    </b-card>
  </div>  
</template>

<script>
import api from '@/api'

export default {
  name: 'Document',
  data: () => ({
    model: {},
    items: [],
    fields: [
      { key: 'id', label: 'id' },
      { key: 'title', label: '제목' },
      { key: 'textButton', label:'', thStyle:{ width:'80px' } },
      { key: 'modButton', label:'', thStyle:{ width:'80px' } },
      { key: 'delButton', label:'', thStyle:{ width:'80px' } }
    ],
  }),
  mounted: async function () {
    console.log('api', api)
    const rs = await api.document.get();
    this.items = rs.data;
  }
}
</script>
