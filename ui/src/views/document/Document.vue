<template>
  <div class="animated fadeIn">
    <b-card header-tag="header">
      <div slot="header">
        <i class="icon-drop"></i> 게시판
        
          <router-link to="/memo"><button type="button" value="write">글쓰기</button></router-link>
          <router-view></router-view>
        
      </div>
      <b-table responsive="sm" :items="items" :fields="fields" :current-page="currentPage" :per-page="perPage">
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
    ],
  }),
  mounted: async function () {
    console.log('api', api)
    const rs = await api.document.get();
    this.items = rs.data;
  }
}
</script>
