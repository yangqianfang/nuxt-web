<template>
  <footer>
    <div class="footer-menus" id="contact-us">
      <div class="contact-us">
        <p class="menu-title">联系我们</p>
        <p>地址：中国XX省XX市XX区XX路XX商务中心10号楼-04A</p>
        <p>电话：+86 13512341234</p>
        <p>传真：+86 13512341234</p>
        <p>邮箱：13512341234@163.com</p>
      </div>
      <div class="service-menu footer-menu">
        <p class="menu-title">服务概览</p>
        <ul class="menu-items">
          <li><a href="#">网站建设</a></li>
          <li><a href="#">域名购买</a></li>
          <li><a href="#">网页设计</a></li>
          <li><a href="#">移动应用</a></li>
        </ul>
      </div>
      <div class="service-menu footer-menu">
        <p class="menu-title">成功案例</p>
        <ul class="menu-items">
          <li><a href="#">桌面网站</a></li>
          <li><a href="#">科研项目</a></li>
          <li><a href="#">软件应用</a></li>
          <li><a href="#">移动网站</a></li>
        </ul>
      </div>
      <div class="service-menu footer-menu">
        <p class="menu-title">公司动态</p>
        <ul class="menu-items">
          <li><a href="#">信息关注</a></li>
          <li><a href="#">最新博客</a></li>
          <li><a href="#">最近新闻</a></li>
        </ul>
      </div>
      <div class="service-menu footer-menu">
        <p class="menu-title">帮助与支持</p>
        <ul class="menu-items">
          <li><a href="#">帮助中心</a></li>
          <li><a href="#">联系客服</a></li>
          <li><a href="#">文档中心</a></li>
        </ul>
      </div>
      <div class="qrcode">
        <p class="menu-title">公司二维码</p><img src="/assets/images/qrcode.png" alt="">
      </div>
      <div class="icps">
        <p class="icp-info"><a href="https://beian.miit.gov.cn" target="_blank">粤ICP备 20240103XX号-1</a></p>
        <p class="icp-info-plz"><img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAoCAYAAACWwljjAAAFQklEQVRYw+3Wa1BUdRjH8SOpMeg4WhZGpDIxiaaTeUFgWrxE4AVRQJGlRRAVIV1JkbgMgQLi5AVBQSVLSp0xlEAUKBEEFZCrCstll8UV2AV2YbmoGCrYv31+R95UL5pmmtamZ+bz6rz5nvOc/5zDcX9jGLs/iTxuyvIlWYkRFeTHA2HVRFtzfhthTG5KuH96/vUgNlC4mMgyw1NJit/aAXLKazYje9xtIMZ/OZz50gW+9hcNkvoLEemEPbnrSP47QYwxQ5Ifv54RqzcXwFFvSyjaOhfavN8F7Y5ZcC/HH9JOB4LNa9Zw5YA76OZV8vIGMdZtSp7cDrtOnOavYiQhTAiPwi1AMtIQaqyngsxpBtw2GAGDKfaQmpUAa6xc4Vfp4UtEdzAMycsT9JQ1Tyctl/2eEkuTlYysF/rCUNxMqDEzgTqzSXBnpgnIHCzgjvEEuD52DLBr3rA1MAaWmNtB582wdtIljZ9G9D+IPU6aTxIPBjHCcXvg3CEh9K2fDLWvjIH6D6fwTIyheuwEqLUyhzLOALq8pkN+bgRw3HY4FBsMzxojZxP9DequLjAlQwVrbpIjhyIY4UYGQ/buhdBqPxlk3Gion2IMDQIz3kJe/ZS34I7uHkmD7VSQVgYDNyIAwsNCgfXGXoOBPjP9DKrOCAogA2etGTmTHAMcFwFZye7wS5QlVHGjoEw4A2qPCUBZ6AzNcQ5Q/YYRdO+YB1U3dsDwypLio4FJ3ECryIzWz6Cm3NgTRHN8HiPF6eHAGSbAdh8feFZkB7krzaHE9h2o85sDsiAbkIsXQMN+e2CtGyF0kzdwXCgU5++D/ouLQFV4OEU/g2Q/iNuIPNaKkQflAWBqexxGjhLDVUcL6IwSQN3SGVChe6FJg9dckCx6D1QBliDZLIAxo7eA8eyv4KE0BJqTrHkZvnL9DJKn+Twmt0NsGGHZy2Dn3kQYfsQ53Hh4/r4RNGz8AIpdzKEuaAF0RC2E57MmQgE3ATjuM/CPiANW7AqSfQJQ5vk362eQKmd3JrmXsoSRocpNIMnbB9zbceDIWUPmuHFQNMkISqa9DpUvNK6YDpW2s8DfwBK48WFQnhMCgzUBoLy0BrRVe5P0NWjPLdKUsJiR1tR1wGp8IeZwMgx/SrgRvjxuAziNcwLvyathLOcJHLflhRDYGRYFrNET2rJ5yvPLoas0tOj/oL8UpC4JHyTSU+6MNCS4gvKoAB5WiKG+MAQSg0WwLXQ/ZJ3xhao0FxB5hYCbUwAEfhEF3Td8QP2dAOQnPwFlxgrolUVq9TPoaX+ZB2nLc2Gk6awj1MU78HZZwJMid2Byb550JQwVO0NfxlJgdz14vWKeRAiK6DlQF28PLZdcoLNcBIO92bb6GTQ8Q/13RURT6tlH2gvXMlITLYD6uI+gp2ozdF0VQXumM6ivCqGvahM8kPiDItkeGo8tB025GFQ3xFrSr06zI3/4yde7oN7m0sWk5eKWDqK5JWJQvAHac9ygq3Adr9gTNNc3QG85rzPfHe5/7wDtPwuhp/Zz6CjyhaZzwi6ivfetHdH/oP77+3PJQOsuRnqkQdCa4wWqyx6gyecpL64GTaEX7ycXUJz4GJp1B4O0X/Hg0Xp1tFV+8Ei1k6c5coHofxBrrzQinbKYo0SVJ+wn6iurGHlY5gY911aDJnMFaHXXiDp9GQyvtKfUA9QFTtBZ7gPdit0tpFd9OpwwFmlA9D/o9yNLDpxIKmI8PMnNSNtviCLVpYTITzrXEGWaq4qos0WgOPdpCenIF+eRrurjB4k0PXopYZG6gMg/D/gNBUxhAbSAmKMAAAAASUVORK5CYII="
            alt=""><a href="https://beian.mps.gov.cn/#/query/webSearch?code=4405070XXXXXXX" target="_blank">粤公网安备
            4405070XXXXXXX</a></p>
      </div>
      <p class="rights">© 2024 Livequeen有限公司官网 版权所有 {{ windowHeight }}{{ windowHeight }}</p>
      
      <div class="scrollToTop" v-if="scrollTop > windowHeight" style="display: block;">
        <div @click="scrollToTop"><i class="iconfont icon-up"></i></div>
      </div>
    </div>
  </footer>
</template>
<script setup>
import animateScrollTo from 'animated-scroll-to';

const scrollTop = ref(0); 
const windowHeight = ref(0);
const scrollToTop = () => {
  animateScrollTo(0)
}
const addSticky = () => {
  scrollTop.value = document.documentElement.scrollTop || document.body.scrollTop;
}
onMounted(() => {
  windowHeight.value = window.innerHeight;
  window.addEventListener('scroll', addSticky);
  addSticky()
})
onUnmounted(() => {
  window.removeEventListener('scroll', addSticky);
});
</script>