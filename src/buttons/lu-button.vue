<template>
  <button class="lu-button"
  :class="[type ? 'lu-button--' + type : '']"
  @click="handleClick">
    <slot></slot>
  </button>
</template>

<script>
export default {
  props:{
    type:{
      type:String,
      default:""
    }
  },
  methods: {
    handleClick(evt) {
      this.$emit('click', evt);
    }
  }
};
</script>

<style scoped>
@import "./button.css";
</style>