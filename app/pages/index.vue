<template>
  <div class="swipe-box">
    <!-- v-swiper:mySwiper="swiperOption"   @init="onInit"  -->
    <swiper :loop="false" @init="onInit" :modules="modules" navigation :pagination="{ clickable: true }"
      :scrollbar="{ draggable: true }" :autoplay="false" @swiper="onSwiper" @transitionStart="changeStart"
      @transitionEnd="onSlideChange">
      <swiper-slide v-for="(item, index) in bannerList" :key="item.id">
        <div class="slide-caption" :class="`text-${index}`">
          <h1>科技推动人类进步，研发引领实业发展。</h1>
          <h3>
            自力更生是中华民族自立于世界民族之林的奋斗基点，自主创新是我们攀登世界科技高峰的必由之路。</h3>
          <UButton class="explore-btn" size="lg" color="gray" label="探索更多" :trailing="false" />
        </div>
        <img class="img" :src="item.url" :alt="item.name">
      </swiper-slide>


    </swiper>
  </div>
</template>
<script>
// import "~/assets/animate.min.css"; 
import "animate.css"
// import Swiper core and required modules
import { Navigation, Pagination, Autoplay, A11y } from 'swiper/modules';

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { swiperAnimate, swiperAnimateCache } from '~/assets/js/swiper.animate1.0.3.min'

import { animateCSS } from '~/utils'
// Import Swiper styles
export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const onSwiper = (swiper) => {
      animateCSS(`.text-0`, "fadeInUp");
    };
    const changeStart = function (e) {
      console.log("befoer")
      let index = e.activeIndex;
      console.log(index)
      document.querySelector(`.text-${index}`).style.opacity = 0
    }
    const onSlideChange = function (e) { 
      let index = e.activeIndex;
      console.log("after")
      console.log(index)
      
      animateCSS(`.text-${index}`, "fadeInUp").then(function(){
        document.querySelector(`.text-${index}`). style.opacity = 1
      });

    };
    const bannerList = reactive(
      [
        { id: 0, url: 'https://s1.xiaomiev.com/activity-outer-assets/web/su7/1-1.jpg?x-fds-process=image/resize,q_90,f_webp', name: '活动1' },
        { id: 0, url: 'https://s1.xiaomiev.com/activity-outer-assets/web/su7/1-1.jpg?x-fds-process=image/resize,q_90,f_webp', name: '活动2' },
        { id: 2, url: 'https://s1.xiaomiev.com/activity-outer-assets/web/su7/1-3.jpg?x-fds-process=image/resize,q_90,f_webp', name: '活动3' },

      ]);

    const onInit = (e) => {


      // swiperAnimateCache(e)
      // swiperAnimate(e)
      // console.log('onInit')
    }

    const swiperOption = {
      on: {
        init() {
          swiperAnimateCache(this) // 隐藏动画元素
          swiperAnimate(this) // 初始化完成开始动画
        },
        slideChangeTransitionEnd() {
          swiperAnimate(this)
        }
      }
    }
    return {
      onSwiper,
      onSlideChange,
      swiperOption,
      animateCSS,
      bannerList,
      changeStart,
      modules: [Navigation, Pagination, Autoplay, A11y],
    };
  },
};
</script>
<style lang="less">
.swipe-box {
  width: 100%;
  height: 100%;
  position: relative;
  top: -20px;
  z-index: 2;

  .swiper-slide {
    height: 100%;

    .img {
      width: 100vw;
      max-width: 100%;
      height: 100vh;
      object-fit: cover;
    }
  }
}

.swiper-button-prev,
.swiper-button-next {
  color: aliceblue
}

// slide 文本css
.slide-caption {
  position: absolute;
  z-index: 70;
  color: var(--text-color-lightest);
  text-align: center;
  max-width: 60vw;
  pointer-events: auto;

}

/* .slide-caption>* {
    opacity: 0
} */

.slide-caption h1 {
  font-size: 12px;
  font-weight: 600
}

.slide-caption h3 {
  font-size: 6px;
  margin: 18px 0
}

.backdrop {
  background: var(--backgrop-color);
  z-index: 60;
  position: absolute;
  height: 100%;
  width: 100%;
  left: 0;
  top: 0;
  opacity: .3
}

.explore-btn {
  background-color: var(--primary-color);
  border: 0;
  color: #fff;
  cursor: pointer;
  outline: none
}

.swipe-box .swiper-slide {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>