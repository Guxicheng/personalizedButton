<template>
  <div id="app">
    <h1>
      个性化按钮
    </h1>
    <lu-button>默认按钮</lu-button>
    <lu-button type="primary">主要按钮</lu-button>
    <lu-button type="success">成功按钮</lu-button>
    <lu-button type="info">信息按钮</lu-button>
    <lu-button type="warning">警告按钮</lu-button>
    <lu-button type="danger">危险按钮</lu-button>
  </div>
</template>

<script>
import luButton from '../src/buttons/lu-button'; // 引入

export default {
  name: 'App',
  components: {
    luButton
  }
}
</script>

<style>

</style>
