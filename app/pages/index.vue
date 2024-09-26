<template>
  <div class="swipe-box" id="swipe-box">
    <div class="glide">
      <div class="glide__track" data-glide-el="track">
        <ul class="glide__slides">
          <li v-for="(item, index) in bannerList" :key="item.id" class="glide__slide">
            <div class="slide-caption" :class="`text-${index}`">
              <h1 :class="`h1-${index} `">科技推动人类进步，研发引领实业发展。</h1>
              <h3 :class="`h3-${index}`">自力更生是中华民族自立于世界民族之林的奋斗基点，自主创新是我们攀登世界科技高峰的必由之路。</h3>
              <button class="explore-btn" :class="`explorebt-${index}`" @click="readMord">查看更多</button>
            </div>
            <img class="img" :src="item.url" :alt="item.name">
          </li>
        </ul>
      </div>
      <div class="glide__arrows" data-glide-el="controls">
        <button class="glide__arrow glide__arrow--left iconfont icon-left" size="40" data-glide-dir="<"></button>
        <button class="glide__arrow glide__arrow--right iconfont icon-right" data-glide-dir=">"></button>
      </div>
      <div class="glide__bullets" data-glide-el="controls[nav]">
        <button v-for="(item, index) in bannerList" class="glide__bullet" :data-glide-dir="`= ${index}`"></button>

      </div>
    </div>
  </div>

  <div class="content-wrapper" >
    <!-- 关于我们 -->
    <section id="about-us" class="about-us" >
      <h2 class="title1">关于我们</h2>
      <p class="intro">网络公司不仅仅是提供域名注册、空间租用、网站开发、网站建设与网络营销活动策划相关的企业组织。</p>
      <div class="features">
        <div class="feature"  data-aos="fade-up" data-aos-delay="0">
          <i class="iconfont icon-light"></i>
          <h4 class="feature-title">品牌创意</h4>
          <p class="feature-content">为企业设计独特的并能完美呈现企业价值观的视觉</p>
        </div>
        <div class="feature"   data-aos="fade-up" data-aos-delay="300"> 
          <i class="iconfont icon-chart-line"></i>
          <h4 class="feature-title">整合营销</h4>
          <p class="feature-content">通过市场进入分析、制定网络营销战略、网络营销实施</p>
        </div>
        <div class="feature" data-sr-id="4" data-aos="fade-up" data-aos-delay="600">
          <i class="iconfont icon-cart_fill_light"></i>
          <h4 class="feature-title">电子商务</h4>
          <p class="feature-content">根据企业需求，开设不同的销售渠道，通过网上直销</p>
        </div>
        <div class="feature" data-sr-id="5" data-aos="fade-up" data-aos-delay="900">
          <i class="iconfont icon-pc-f"></i>
          <h4 class="feature-title">网页设计</h4>
          <p class="feature-content">通过网站建设、智能建站、域名主机、企业邮箱</p>
        </div>
        <div class="feature" data-sr-id="6" data-aos="fade-up" data-aos-delay="1200">
          <i class="iconfont icon-yibiao"></i>
          <h4 class="feature-title">网站优化</h4>
          <p class="feature-content">网站推广是指将网站推广到国内各大知名网站和搜索引擎</p>
        </div>
        <div class="feature" data-sr-id="7" data-aos="fade-up" data-aos-delay="1500">
          <i class="iconfont icon-website"></i>
          <h4 class="feature-title">网站架设</h4>
          <p class="feature-content">通过绑定域名和服务器，把网站展现给全世界</p>
        </div>
      </div>
    </section>
     <!-- 关于我们 end-->
    <!-- 成功案例 -->
    <section id="showcases" class="showcases section-bg">
      <h2 class="title1">成功案例</h2>
      <div class="filter-btns"><button class="filter-btn active" data-filter="*">全部</button><button class="filter-btn"
          data-filter=".web">Web</button><button class="filter-btn" data-filter=".mobile">移动</button><button
          class="filter-btn" data-filter=".backend">后端</button></div>
      <div class="cases" style="position: relative; height: 614.4px;">
        <div class="case-item mobile backend" style="position: absolute; left: 0px; top: 0px;"><img
            src="/assets/images/case-1.jpg" alt=""></div>
        <div class="case-item mobile web" style="position: absolute; left: 379.8px; top: 0px;"><img
            src="/assets/images/case-2.jpg" alt=""></div>
        <div class="case-item mobile web" style="position: absolute; left: 759.6px; top: 0px;"><img
            src="/assets/images/case-3.jpg" alt=""></div>
        <div class="case-item mobile backend" style="position: absolute; left: 1139.4px; top: 0px;">
          <img src="/assets/images/case-4.jpg" alt="">
        </div>
        <div class="case-item web mobile" style="position: absolute; left: 0px; top: 307.2px;"><img
            src="/assets/images/case-5.jpg" alt=""></div>
        <div class="case-item web backend" style="position: absolute; left: 379.8px; top: 307.2px;">
          <img src="/assets/images/case-6.jpg" alt="">
        </div>
        <div class="case-item backend web" style="position: absolute; left: 759.6px; top: 307.2px;">
          <img src="/assets/images/case-7.jpg" alt="">
        </div>
        <div class="case-item backend mobile" style="position: absolute; left: 1139.4px; top: 307.2px;"><img
            src="/assets/images/case-8.jpg" alt=""></div>
      </div>
    </section>
    <!-- 成功案例 -->
    <!-- 团队成员 -->
    <section id="team-intro" class="team-intro section-bg">
      <h2 class="title1">团队成员</h2>
      <div class="team-members">
        <div class="team-member">
          <div class="profile-image"><img src="/assets/images/member-1.jpg" alt=""></div>
          <h4 class="name">John</h4>
          <p class="position">前端工程师</p>
          <ul class="social-links">
            <li><a href=""><i class="fa fa-weixin"></i></a>
            </li>
            <li><a href=""><i class="fa fa-weibo"></i></a></li>
            <li><a href=""><i class="fa fa-github"></i></a>
            </li>
          </ul>
        </div>
        <div class="team-member">
          <div class="profile-image"><img src="/assets/images/member-2.jpg" alt=""></div>
          <h4 class="name">Sofia</h4>
          <p class="position">UI工程师</p>
          <ul class="social-links">
            <li><a href=""><i class="fa fa-weixin"></i></a>
            </li>
            <li><a href=""><i class="fa fa-weibo"></i></a></li>
            <li><a href=""><i class="fa fa-github"></i></a>
            </li>
          </ul>
        </div>
        <div class="team-member">
          <div class="profile-image"><img src="/assets/images/member-3.jpg" alt=""></div>
          <h4 class="name">David</h4>
          <p class="position">后端工程师</p>
          <ul class="social-links">
            <li><a href=""><i class="fa fa-weixin"></i></a>
            </li>
            <li><a href=""><i class="fa fa-weibo"></i></a></li>
            <li><a href=""><i class="fa fa-github"></i></a>
            </li>
          </ul>
        </div>
        <div class="team-member">
          <div class="profile-image"><img src="/assets/images/member-4.jpg" alt=""></div>
          <h4 class="name">Daniel</h4>
          <p class="position">项目经理</p>
          <ul class="social-links">
            <li><a href=""><i class="fa fa-weixin"></i></a>
            </li>
            <li><a href=""><i class="fa fa-weibo"></i></a></li>
            <li><a href=""><i class="fa fa-github"></i></a>
            </li>
          </ul>
        </div>
      </div>
    </section>
    <!-- 团队成员 END -->
    <!-- 数据奖项-->
    <section id="data-section" class="data-section" data-sr-id="15"
      style="visibility: visible; opacity: 1; transition: opacity 0.6s cubic-bezier(0.5, 0, 0, 1) 0s;">
      <div class="data-piece"><i class="fa fa-code"></i>
        <div class="num">15612 </div>
        <div class="data-desc">w行代码</div>
      </div>
      <div class="data-piece"><i class="fa fa-adjust"></i>
        <div class="num">88 </div>
        <div class="data-desc">个奖项</div>
      </div>
      <div class="data-piece"><i class="fa fa-user"></i>
        <div class="num">138 </div>
        <div class="data-desc">位客户</div>
      </div>
      <div class="data-piece"><i class="fa fa-folder"></i>
        <div class="num">220 </div>
        <div class="data-desc">个项目</div>
      </div>
    </section>
    <!-- 数据奖项end -->
    <!-- 公司动态 -->
    <section id="company-activities" class="company-activities">
      <h2 class="title1">公司动态</h2>
      <p class="intro">关注公司动态，获取第一手消息</p>
      <div class="activities">
        <div class="activity">
          <div class="act-image-wrapper"><img src="/assets/images/activity-1.jpg" alt=""></div>
          <div class="meta">
            <p class="data-published"><i class="fa fa-calculator"></i> 2024年01月13日
            </p>
            <p class="comments"><i class="fa fa-comments"></i> 123条评论 </p>
          </div>
          <h2 class="act-title">提供互联网接入的ISP公司</h2>
          <article>网络公司原本指的是提供网络服务的互联网内容提供商ICP公司，提供互联网接入的ISP公司，提供内容托管的IDC提供商,还有无线接入</article><button
            class="read-more-btn">阅读更多</button>
        </div>
        <div class="activity">
          <div class="act-image-wrapper"><img src="/assets/images/activity-2.jpg" alt=""></div>
          <div class="meta">
            <p class="data-published"><i class="fa fa-calculator"></i> 2024年01月13日
            </p>
            <p class="comments"><i class="fa fa-comments"></i> 123条评论 </p>
          </div>
          <h2 class="act-title">提供互联网接入的ISP公司</h2>
          <article>网络公司原本指的是提供网络服务的互联网内容提供商ICP公司，提供互联网接入的ISP公司，提供内容托管的IDC提供商,还有无线接入</article><button
            class="read-more-btn">阅读更多</button>
        </div>
        <div class="activity">
          <div class="act-image-wrapper"><img src="/assets/images/activity-3.jpg" alt=""></div>
          <div class="meta">
            <p class="data-published"><i class="fa fa-calculator"></i> 2024年01月13日
            </p>
            <p class="comments"><i class="fa fa-comments"></i> 123条评论 </p>
          </div>
          <h2 class="act-title">提供互联网接入的ISP公司</h2>
          <article>网络公司原本指的是提供网络服务的互联网内容提供商ICP公司，提供互联网接入的ISP公司，提供内容托管的IDC提供商,还有无线接入</article><button
            class="read-more-btn">阅读更多</button>
        </div>
      </div>
    </section>
    <!-- 公司动态 -->
  </div>
</template>
<script setup> 
import "animate.css"  
import animateScrollTo from 'animated-scroll-to';
import Glide from '@glidejs/glide'
import { animateCSS, delay } from '~/utils'
import banner01 from '~/assets/images/01.jpg'
import banner02 from '~/assets/images/02.jpg'
onMounted(() => { 
  var glide = new Glide('.glide').mount();
  activeClass(0);
  glide.on(['run.before'], function (e) {
    let { index } = glide
    removeClass(index)
  });
  glide.on(['run.after'], async function (e) {
    let { index } = glide;
    console.log("after-", index)
    activeClass(index);
  }) 
});

const removeClass = (index) => {
  let h1 = `.h1-${index}`;
  let h3 = `.h3-${index}`;
  let bt = `.explorebt-${index}`;
  document.querySelector(h1).style.opacity = 0
  document.querySelector(h3).style.opacity = 0
  document.querySelector(bt).style.opacity = 0
}

async function activeClass(index) {
  let h1 = `.h1-${index}`;
  let h3 = `.h3-${index}`;
  let bt = `.explorebt-${index}`;
  await delay(100);
  animateCSS(h1, "fadeInUp");
  document.querySelector(h1).style.opacity = 1;
  animateCSS(h3, "fadeInUp");
  document.querySelector(h3).style.opacity = 1;
  animateCSS(bt, "fadeInUp");
  document.querySelector(bt).style.opacity = 1;
}

// 查看更多
function readMord(){
  animateScrollTo(document.getElementById('about-us'))
}

const bannerList = reactive([
  { id: 0, url: banner01, name: '活动1' },
  { id: 0, url: banner02, name: '活动2' },
  { id: 2, url: 'https://s1.xiaomiev.com/activity-outer-assets/web/su7/1-3.jpg?x-fds-process=image/resize,q_90,f_webp', name: '活动3' },

]); 
</script>
<style lang="less">
 
</style>