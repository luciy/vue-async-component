<template>
  <div class="component">
    <h2 class="title">组件A</h2>
    <el-input
      type="textarea"
      :rows="2"
      placeholder="请输入内容"
      v-model="textareaValue">
    </el-input>
  </div>
</template>

<script>
  export default {
    name: 'ComponentA',
    props: {
      url: String,
      textarea: {
        type: String,
        default: ''
      }
    },
    computed: {
      textareaValue: {
        get() {
          return this.textarea;
        },
        set(val) {
          this.$emit('update:textarea', val);
        }
      }
    }
  };
</script>

<style lang="scss" scoped>
  .component {
    .title {
      line-height: 2;
    }
  }
</style>
