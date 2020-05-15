<template>
  <div id="main">
    <Header />
    <div id="content">
      <div class="cinema_menu">
        <router-link tag="div" to="/cinema/pcity" class="city_switch">
          全城
          <i class="iconfont icon-lower-triangle"></i>
        </router-link>
        <router-link tag="div" to="/cinema/pro" class="brand_swtich">
          品牌
          <i class="iconfont icon-lower-triangle"></i>
        </router-link>
        <router-link tag="div" to="/cinema/feu" class="feature_switch">
          特色
          <i class="iconfont icon-lower-triangle"></i>
        </router-link>
      </div>
    <Citylist />
    </div>
    <TarBar />
  </div>
</template>
<script>
import Header from '@/components/Header'
import TarBar from '@/components/TarBar'
import Citylist from '@/components/Citylist'
export default {
  name: 'cinema',
  components: {
    Header,
    TarBar,
    Citylist
  }
}
</script>
<style>
#content {
  flex: 1;
  overflow: auto;
  margin-bottom: 50px;
  position: relative;
  display: flex;
  flex-direction: column;
}
#content .cinema_menu{ width: 100%; height: 45px; border-bottom:1px solid #e6e6e6; display: flex; justify-content:space-around; align-items:center; background:white;}
#content .cinema_body{ flex:1; overflow:auto;}
</style>
