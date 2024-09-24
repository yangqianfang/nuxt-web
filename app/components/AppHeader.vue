<template>

  <header class="header">
    <div class="logo">Livequeen</div>
    <nav>
      <span>首页</span><span>关于我们</span><span>成功案例</span><span>服务流程</span><span>团队介绍</span><span>公司动态</span><span>联系我们</span> </nav>
    <div class="burger">
      <div class="burger-line1"></div>
      <div class="burger-line2"></div>
      <div class="burger-line3"></div>
    </div>
  </header>
</template>
<style lang="less">
:root {
  --primary-color: #FB6354;
  --secondary-color: #e3e3e3;
  --text-color-lightest: #e7e9ec;
  --text-color-darker: #2e2e2e;
  --text-color-dark: #494949;
  --text-color-gray: #8b8b8b;
  --text-color-dark-gray: #727272;
  --text-color-light-gray: #c6c6c6;
  --backgrop-color: rgba(42, 42, 42, .69)
}

header {
  width: 100vw;
  height: 20px;
  max-width: 100%; 
  display: grid;
  padding: 0 20px;
  grid-template-columns: 1fr 3fr;
  align-items: center;
  position: relative;
  z-index: 200;
}

.logo {
  font-size: 10px;
  font-weight: 600;
  color: var(--text-color-lightest);
  cursor: pointer
}

header nav {
  justify-self: end
}

header nav i {
  color: var(--text-color-lightest)
}

header nav span {
  color: var(--text-color-lightest);
  text-decoration: none;
  font-weight: 600;
  margin: 0 5px; 
  cursor: pointer
}

header.sticky {
  position: fixed;
  background-color: #fff;
  box-shadow: 0 0 10px #0003;
  animation: dropDown-117de754 .5s ease-in-out forwards
}
</style>