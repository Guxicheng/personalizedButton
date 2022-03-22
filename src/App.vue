<template>
  <div id="app">
    <h1>
      个性化按钮
    </h1>
    <div class="btns">
      <lu-button>默认按钮</lu-button>
      <lu-button type="primary">主要按钮</lu-button>
      <lu-button type="success">成功按钮</lu-button>
      <lu-button type="info">信息按钮</lu-button>
      <lu-button type="warning">警告按钮</lu-button>
      <lu-button type="danger">危险按钮</lu-button>
    </div>
    <div class="btns">
      <lu-button round>圆角按钮</lu-button>
      <lu-button type="primary" round>主要按钮</lu-button>
      <lu-button type="success" round>成功按钮</lu-button>
      <lu-button type="info" round>信息按钮</lu-button>
      <lu-button type="warning" round>警告按钮</lu-button>
      <lu-button type="danger" round>危险按钮</lu-button>
    </div>
    <div class="btns"> 
      <lu-button circle>lu-</lu-button>
      <lu-button type="primary" circle>lu-</lu-button>
      <lu-button type="success" circle>lu-</lu-button>
      <lu-button type="info" circle>lu-</lu-button>
      <lu-button type="warning" circle>lu-</lu-button>
      <lu-button type="danger" circle>lu-</lu-button>
    </div>
    <div class="btns">
      <lu-button disabled>默认按钮</lu-button>
      <lu-button type="primary" disabled>主要按钮</lu-button>
      <lu-button type="success" disabled>成功按钮</lu-button>
      <lu-button type="info" disabled>信息按钮</lu-button>
      <lu-button type="warning" disabled>警告按钮</lu-button>
      <lu-button type="danger" disabled>危险按钮</lu-button>
    </div>
    <div class="btns">
      <lu-button round>默认按钮</lu-button>
      <lu-button size="medium" round>中等按钮</lu-button>
      <lu-button size="small" round>小型按钮</lu-button>
      <lu-button size="mini" round>超小按钮</lu-button>
    </div>
    <div class="btns">
      <lu-button draw="draw">draw</lu-button>
      <lu-button draw="center">center</lu-button>
      <lu-button draw="spin">spin</lu-button>
      <lu-button draw="circle">circle</lu-button>
    </div>
      
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
