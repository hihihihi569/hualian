<template>
<div class="main">
  <Header title="我的花脸"/>
  <div id="content">
    <Login />
  </div>
  <TarBar/>
</div>
</template>
<script>
import Header from '@/components/Header'
import TarBar from '@/components/TarBar'
import Login from '@/components/Login'
export default {
  name: 'mine',
  components: {
    Header,
    TarBar,
    Login
  }
}
</script>
<style>

</style>
