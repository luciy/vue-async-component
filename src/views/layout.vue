<template>
  <div class="layout">
    <el-button type="primary" @click.stop="handleLoadButtonClick('urlA')">加载异步组件A</el-button>
    <el-button type="primary" @click.stop="handleLoadButtonClick('urlB')">加载异步组件B</el-button>
    <el-input
      class="input"
      type="textarea"
      :rows="2"
      placeholder="请输入内容"
      v-model="textarea">
    </el-input>
    <sync-component
      :url="renderUrl"
      :textarea.sync="textarea">
    </sync-component>
  </div>
</template>

<script>
  import SyncComponent from '@/components/sync-component';
  export default {
    name: 'LayoutView',
    data() {
      return {
        textarea: '',
        renderUrl: '',
        urlA: '/static/componentA.js',
        urlB: '/static/componentB.js'
      };
    },
    components: {
      SyncComponent
    },
    methods: {
      handleLoadButtonClick(type) {
        this.renderUrl = this[type];
      }
    }
  };
</script>

<style lang="scss">
  .layout {
    width: 800px;
    margin: 0 auto;
  }
  .input {
    margin: 20px 0;
  }
</style>
