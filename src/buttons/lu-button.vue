<template>
  <button class="lu-button"
  :disabled="buttonDisabled || loading"
  :class="[type ? 'lu-button--' + type : '',
  buttonSize ? 'lu-button--' + buttonSize : '',
  draw ? 'lu-button--' + draw : '',
  {
    'is-plain': plain,
    'is-round': round,
    'is-circle': circle,
    'is-disabled':buttonDisabled
  }]"
  @click="handleClick">
    <slot></slot>
  </button>
</template>

<script>
export default {
  inject: {
    elForm: {
      default: ''
    },
    elFormItem: {
      default: ''
    }
  },
  props:{
    type:{
      type:String,
      default:""
    },
    draw:{
      type:String,
      default:""
    },
    size: String,
    disabled: Boolean,
    loading: Boolean,
    plain:Boolean,
    round:Boolean,
    circle:Boolean
  },
  computed:{
    _elFormItemSize() {
      return (this.elFormItem || {}).elFormItemSize;
    },
    buttonSize() {
      return this.size || this._elFormItemSize || (this.$ELEMENT || {}).size;
    },
    buttonDisabled() {
      return this.disabled || (this.elForm || {}).disabled;
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