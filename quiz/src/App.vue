<template>
  <div class="outer__cont">
    <Header></Header>
    <main>
      <h1>
        Тестирование
      </h1>
    </main>
    <Footer></Footer>
  </div>


</template>


<script setup>
  import Header from './components/Header.vue'
  import Footer from './components/Footer.vue'


</script>
<style scoped lang="scss">

.outer__cont{
    width: 1000px;
    min-height: 744px;
    height: auto;
}
main{
  height: auto;
  min-height: 630px;
  h1{
    margin: 100px 100px 100px 100px;
    font-size: 38px; 
  }
}
</style>
