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
    <AsyncComponentRE
      :url="renderUrl"
      :textarea.sync="textarea">
    </AsyncComponentRE>
  </div>
</template>

<script>
  import AsyncComponentRE from '@/../AsyncComponent.min.js';
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
      AsyncComponentRE
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
