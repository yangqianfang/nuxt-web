<template>

  <header class="header" :class="{ sticky: scrollTop > windowHeight,open:isMobile }">
    <div class="logo">羿熙科技</div>
    <nav>
      <span v-for="(item, index) in menuList" :key="index" @click=scrollToTop(item.to)>
        {{ item.name }}
      </span>
    </nav>
    <div class="burger" @click="toggleMobile">
      <div class="burger-line1"></div>
      <div class="burger-line2"></div>
      <div class="burger-line3"></div>
    </div>
  </header>
</template>
<script setup>
import animateScrollTo from 'animated-scroll-to';
const menuList = [
  { name: '首页', to: '', },
  { name: '关于我们', to: 'about-us' },
  { name: '成功案例', to: 'showcases' },
  { name: '服务流程', to: "service" },
  { name: '团队介绍', to: "team-intro" },
  { name: '公司动态', to: "company-activities" },
  { name: '联系我们', to: "contact-us" }
];
const scrollTop = ref(0);
const isMobile = ref(false)
const windowHeight = ref(0);
const scrollToTop = (elm) => {
  let toElm = elm ? document.getElementById(elm) : 0;
  animateScrollTo(toElm)
}
const addSticky = () => {
  scrollTop.value = document.documentElement.scrollTop || document.body.scrollTop;
}
const  toggleMobile = ()=>{
  isMobile.value = !isMobile.value
}
onMounted(() => {
  windowHeight.value = window.innerHeight;
  window.addEventListener('scroll', addSticky);
  addSticky();
})
onUnmounted(() => {
  window.removeEventListener('scroll', addSticky);
});
</script>
<style lang="less"></style>