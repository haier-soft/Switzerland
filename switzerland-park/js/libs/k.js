if (document.querySelector(".flat")) {
    const btn = document.querySelector(".flat__btn")
    let thumbSwiper
    let flatSwiperMob
    let flatSwiperDesk
    let flatSwiperMobInit = false
    let flatSwiperDeskInit = false
    function flatSwiperInit() {
      if (window.innerWidth <= 991) {
        if (flatSwiperDeskInit) {
        flatSwiperDesk.destroy()
        thumbSwiper.destroy()
        flatSwiperDeskInit = false
        }
        if (!flatSwiperMobInit) {
          flatSwiperMob = new Swiper(".flat__mainswiper", {
            slidesPerView: 1,
            slidesPerGroup: 1,
            observer: true,
            observeParents: true,
            spaceBetween: 5, 
            autoplay: {
              delay: 3500,
              disableOnInteraction: false
            },
            breakpoints: {
              767.98: {
                spaceBetween: 20, 
              }
            },
            speed: 800
          })
          flatSwiperMobInit = true
          btn.addEventListener("click", () => {
            flatSwiperMob.slides[flatSwiperMob.activeIndex].click()
          })
        }
      } else {
        if (flatSwiperMobInit) {
        flatSwiperMob.destroy()
        flatSwiperMobInit = false
        }
        if (!flatSwiperDeskInit) {
          thumbSwiper = new Swiper(".flat__thumbswiper", {
            slidesPerView: 3,
            spaceBetween: 20,
            observer: true,
            observeParents: true,
            freeMode: true,
            speed: 800,
          })
          flatSwiperDesk = new Swiper(".flat__mainswiper", {
            slidesPerView: 1,
            observer: true,
            observeParents: true,
            effect: 'fade',
            thumbs: {
              swiper: thumbSwiper,
            },
            speed: 300
          })
          flatSwiperDeskInit = true
          btn.addEventListener("click", () => {
            flatSwiperDesk.slides[flatSwiperDesk.activeIndex].click()
          })
        }
      }
    }
  flatSwiperInit()
  window.addEventListener("resize", flatSwiperInit)
  }