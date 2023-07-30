const header = document.querySelector(".header")
const menu = document.querySelector('.header__body');
const iconMenu = document.querySelector('.icon-menu');
const section = document.querySelectorAll("section")  
const fixedBlocks = document.querySelectorAll(".fixed-block")
const modalShowBtn = document.querySelectorAll(".modal-show-btn")
const modal = document.querySelectorAll(".modal")
const fixedBtn = document.querySelector(".fixed-btn")
const headerBtn = document.querySelector(".header__btn")
const successModal = document.querySelector(".success-modal")
const errorModal = document.querySelector(".error-modal")
const filter = document.querySelector(".filter-form")
const filterCheckbox = document.querySelector(".filter-form__checkbox")
const priceSlider = document.querySelector('.price-slider');
const floorSlider = document.querySelector('.floor-slider');
const filterReset = document.querySelector(".filter-form__reset")
const schemePopup = document.querySelector(".scheme-popup")
let paddingValue = window.innerWidth > 325 ? window.innerWidth - document.documentElement.clientWidth + 'px' : 0
let modalAnimSpd = 500
function windoOnResize() {
  paddingValue = window.innerWidth > 325 ? window.innerWidth - document.documentElement.clientWidth + 'px' : 0
}
window.addEventListener("resize", windoOnResize)
window.addEventListener('orientationchange', windoOnResize);

//enable scroll
function enableScroll() {
  if (fixedBlocks) {
    fixedBlocks.forEach(block => block.style.paddingRight = '0px')
  } 
  document.body.style.paddingRight = '0px'
  document.body.classList.remove("no-scroll")
}
//disable scroll
function disableScroll() {
  if (fixedBlocks) {
    fixedBlocks.forEach(block => block.style.paddingRight = paddingValue)
  }
  document.body.style.paddingRight = paddingValue
  document.body.classList.add("no-scroll");
}
//form onsubmit
function formSuccess(form) {
  form.querySelectorAll("input").forEach(inp => {
    if (inp.type != "hidden") {
      inp.value = ""
    }
  })
  form.querySelectorAll(".form__placeholder").forEach(item => item.style.display = "block")
  let modal = document.querySelector(".modal.open")
  if (modal) {
    modal.querySelector(".modal__overlay").classList.remove("open")
    modal.classList.remove("open")
  }
  openModal(successModal)
}
//reset filter form
function filterFormOnReset(form) {
  form.querySelectorAll("input").forEach(inp => {
    inp.checked = false
    priceSlider.noUiSlider.reset()
    floorSlider.noUiSlider.reset()
    filterReset.classList.remove("show")
  })
}
//show modal
function openModal(modal) {
  if (fixedBtn.classList.contains("intersect") || window.innerWidth <= 767) {
    fixedBtn.classList.remove("show")
    if (window.innerWidth <= 767) {
      headerBtn.style.transform = "translateY(100%)"
    }
    setTimeout(() => {
      if (!iconMenu.classList.contains("active")) {
        disableScroll()
      }
      modal.classList.add("open")
      setTimeout(() => {
        modal.querySelector(".modal__overlay").classList.add("open")
      }, 30)
    }, 300);
  } else {
    if (!iconMenu.classList.contains("active")) {
      disableScroll()
    }
    modal.classList.add("open")
    setTimeout(() => {
      modal.querySelector(".modal__overlay").classList.add("open")
    }, 30)
  }
}
// unshow modal
function closeModal(modal) {
  modal.querySelector(".modal__overlay").classList.remove("open")
  setTimeout(() => {
    if (!iconMenu.classList.contains("active")) {
      enableScroll()
    }
    modal.classList.remove("open")
    if (fixedBtn.classList.contains("intersect")) {
      fixedBtn.classList.add("show")
    }
    if (window.innerWidth <= 767) {
      headerBtn.style.transform = "translateY(0)"
    }
  }, modalAnimSpd)
}
// modal button on click
modalShowBtn.forEach(btn => {
  btn.addEventListener("click", e => {
    e.preventDefault()
    let href = btn.getAttribute("data-modal")
    openModal(document.querySelector(href))
  })
})
// unshow modal when clicked outside || close-btn
modal.forEach(item => {
  item.querySelector(".modal__close").addEventListener("click", e => {
    closeModal(item)
  })
  item.addEventListener("click", e => {
    if(!(window.innerWidth > 1260 && item.classList.contains("mob-modal")) && !item.querySelector(".modal__content").contains(e.target)) {
      closeModal(item)
    }
  })
})
//close mobile modal on resize
document.querySelectorAll(".mob-modal").forEach(mod => {
  window.addEventListener("resize", ()=> {
    if (mod.classList.contains("open") && window.innerWidth > 1260) {
      closeModal(mod)
    }
  })
})
//drop menu
iconMenu.addEventListener("click", () => {
  if (iconMenu.classList.contains("active")) {
    iconMenu.classList.remove("active");
    iconMenu.setAttribute('aria-label', 'Открыть меню');
    menu.classList.remove("active");
    enableScroll()
  } else {
    iconMenu.classList.add("active");
    iconMenu.setAttribute('aria-label', 'Закрыть меню');
    menu.classList.add("active");
    disableScroll()
  }
})
//show/unshow fixed btn
if (section && section[1]) {
  window.addEventListener("scroll", () => {
    let windowTop = window.pageYOffset || document.documentElement.scrollTop; 
    if (windowTop > section[1].getBoundingClientRect().top) {
      if (window.innerHeight - document.querySelector(".footer__top").getBoundingClientRect().bottom + 30 >= 0) {
        fixedBtn.classList.remove("intersect","show")
        if (window.innerWidth <= 767) {
          headerBtn.style.transform = "translateY(100%)"
        }
      } else {
        fixedBtn.classList.add("intersect","show")
        headerBtn.style.transform = "translateY(0%)"
      }   
    } else {
      fixedBtn.classList.remove("intersect","show")
    }
  })
} 
//mask input
const inp = document.querySelectorAll('input[type=tel]')
 if (inp) {
  inp.forEach(item => {
  item.addEventListener("focus", () => {
      item.parentNode.querySelector(".form__placeholder").style.display = "none"
  })
  item.addEventListener("blur", () => {
    if (item.value.length === 0) item.parentNode.querySelector(".form__placeholder").style.display = "block"
  }) 
  Inputmask({ "mask": "+7 999 999-99-99" }).mask(item);
  })
} 
//item-building images count
if (document.querySelector(".item-building")) {
  const buildItm = document.querySelectorAll(".item-building")
  buildItm.forEach(item => {
    let imgCount = item.querySelectorAll(".item-building__images img").length
    if (imgCount > 0) {
      item.querySelector(".item-building__overlay span").textContent = imgCount + 1 + " фото"
    }
  })
}
//building swiper
if (document.querySelector(".main-building__swiper")) {
  const mainBuildSwiper = new Swiper(".main-building__swiper", {
    slidesPerView: 1,
    centeredSlides: true,
    spaceBetween: 10,
    observer: true,
    observeParents: true,
    speed: 800,
    initialSlide: 1,
    breakpoints: {
      480.98: {
        slidesPerView: 1.3,
        spaceBetween: 20
      },
      767.98: {
        slidesPerView: 2,
        spaceBetween: 20
      },
      991.98: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      1520.98: {
        slidesPerView: 2,
        spaceBetween: 40,
      },
    },
    navigation: {
      nextEl: '.main-building-btn--next',
      prevEl: '.main-building-btn--prev',
    }
  })
}
//improvements swiper
if (document.querySelector(".improvements__swiper")) {
  const improvmntSwiper = new Swiper('.improvements__swiper', {
    slidesPerView: 1.14,
    observer: true,
    observeParents: true,
    speed: 800,
    initialSlide: 1,
    centeredSlides: true,
    breakpoints: {
      480.98: {
        slidesPerView: 1.35,
      },
      767.98: {
        slidesPerView: 1.65,
      },
      991.98: {
        slidesPerView: 2.4,
        centeredSlides: false,
      },
      1260.98: {
        slidesPerView: 3,
        centeredSlides: false,
      }
    }
  })
}
//features swiper
if (document.querySelector(".features__swiper")) {
  let init = false
  let featuresSwiper
  function initFeaturesSwiper() {
    if (window.innerWidth <= 767) {
      if (!init) {
        init = true
        featuresSwiper = new Swiper('.features__swiper', {
          slidesPerView: 1,
          observer: true,
          observeParents: true,
          pagination: {
            el: '.features__pagination',
            type: 'bullets',
            clickable: true
          },
          speed: 800,
        })
      }
    } else if (window.innerWidth > 767 && init) {
      init = false
      featuresSwiper.destroy()
    }
  }
  initFeaturesSwiper()
  window.addEventListener("resize", initFeaturesSwiper)
}
//init swiper and fix it on scroll
if (document.querySelector(".infra__swiper")) {
  const infra = document.querySelector(".infra__swiper")
  let slideCount = infra.querySelectorAll(".swiper-slide").length
  let infraSwiper = new Swiper(infra, {
    slidesPerView: 1,
    observer: true,
    observeParents: true,
    pagination: {
      el: '.infra__pagination',
      type: 'bullets',
      clickable: true
    },
    effect: 'fade',
    speed: 700
  })
  let activeIndex = {value: 0}
  let ifraSwiperAnim = gsap.to(activeIndex, {
    value: slideCount - 1,
    scrollTrigger: {
      trigger: ".infra .container",
      start: "center center",
      end: "+=" + 300 * slideCount,
      pin: true,
      scrub: true,
      invalidateOnRefresh: true,
      onUpdate: (self) => {
        infraSwiper.slideTo(Math.round(activeIndex.value))
      },
    }
  })
}
// flat__images slider
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
            pauseOnMouseEnter: true,
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
//filter-form
if (filter) {
  filter.querySelectorAll("input").forEach(inp => {
    inp.addEventListener("change", () => {
      filterReset.classList.add("show")
    })
  })
  filterCheckbox.querySelectorAll("input").forEach(inp => {
    inp.addEventListener("change", () => {
      if (filterCheckbox.querySelectorAll("input:checked").length === filterCheckbox.querySelectorAll("input").length) {
        filterCheckbox.querySelectorAll("input").forEach(inp => inp.checked = false)
      }
    })
  })
  //price slider
  if (priceSlider) {
    noUiSlider.create(priceSlider, {
      start: [3.34, 8.34],
      connect: true,
      range: {
        'min': 3.34,
        'max': 15
      }
    });
    const priceStart = document.getElementById("price-start");
    const priceEnd = document.getElementById("price-end");
  
    priceStart.addEventListener("change", () => {
      priceSlider.noUiSlider.set([priceStart.value, null])
    });
    priceEnd.addEventListener("change", () => {
      priceSlider.noUiSlider.set([null, priceEnd.value])
    });
    let priceValues = [priceStart, priceEnd];
  
    let updateCount = 0
    priceSlider.noUiSlider.on('update', function (values, handle) {
      updateCount++
      priceValues[handle].value = values[handle]
      if (updateCount > 2) {
        filterReset.classList.add("show")
      }
    });
  }
   //floor slider
  if (floorSlider) {
    noUiSlider.create(floorSlider, {
      start: [6, 10],
      connect: true,
      range: {
        'min': 2,
        'max': 18
      }
    });
    const floorStart = document.getElementById("floor-start");
    const floorEnd = document.getElementById("floor-end");
      floorStart.addEventListener("change", () => {
      floorSlider.noUiSlider.set([floorStart.value, null])
    });
    floorEnd.addEventListener("change", () => {
      floorSlider.noUiSlider.set([null, floorEnd.value])
    });
    let floorValues = [floorStart, floorEnd];
    let updateCount = 0
    floorSlider.noUiSlider.on('update', function (values, handle) {
      updateCount++
      floorValues[handle].value = parseInt(values[handle])
      if (updateCount > 2) {
        filterReset.classList.add("show")
      }
    });
  }
  document.querySelector(".filter__header").addEventListener("click", () =>{
    if (window.innerWidth <= 1260) {
      openModal(document.querySelector(".mob-modal"))
    }   
  }) 
}
// change image on mousemove/touchmove in catalog__block
if (document.querySelector(".catalog-cat__main")) {
  document.querySelectorAll(".catalog-cat__item").forEach(item => {
    const catImg = item.querySelectorAll(".catalog-cat__img")
    for (let i = 0; i < catImg.length; i++) {
      let span1 = document.createElement("span")
      let span2 = document.createElement("span")
      item.querySelector(".catalog-cat__hovers").append(span1)
      item.querySelector(".catalog-cat__controls").append(span2)
    }
    function move(el, pos) {
      let parentLeft = item.querySelector(".catalog-cat__hovers").getBoundingClientRect().left
      let elWidth = el.clientWidth
      let activeEl = Math.ceil((pos - parentLeft) / elWidth)
      if (activeEl >= 1 && activeEl <= catImg.length) {
        setActive(activeEl)
      } else {
        setActive(1)
      }
    }
    function leave() {
      setActive(1)
    }
    function setActive(activeEl) {
      item.querySelectorAll(".catalog-cat__img").forEach(img => img.style.opacity = 0)
      item.querySelectorAll(".catalog-cat__img")[activeEl - 1].style.opacity = 1
      item.querySelectorAll(".catalog-cat__controls span").forEach(span => span.style.backgroundColor = "transparent")
      item.querySelectorAll(".catalog-cat__controls span")[activeEl - 1].style.backgroundColor = "#006422"
    }
    item.querySelectorAll(".catalog-cat__hovers span").forEach((el, idx) => {
      el.addEventListener("touchmove", (e) => {
        move(el, e.touches[0].clientX)
      })
      el.addEventListener("touchend", () => leave())
      el.addEventListener("mousemove", (e) => {
        move(el, e.clientX)
      })
      el.addEventListener("mouseleave", () => leave())
    })
  })
}
// scheme-popup position on mousemove
if (schemePopup) {
  document.querySelectorAll(".item-apartaments .on-sale").forEach(item => {  
    function move(xPos, yPos) {
      schemePopup.classList.add("open")
      let top = item.getBoundingClientRect().top
      let left = item.getBoundingClientRect().left
      console.log(schemePopup.clientHeight + top)
      console.log(window.innerHeight)
      if (window.innerWidth < left + schemePopup.clientWidth + item.clientWidth + 50) {
        schemePopup.style.left = xPos - schemePopup.clientWidth - 10 + "px"
      } else {
        schemePopup.style.left = xPos + 15 + "px"
      }
      if (window.innerHeight < top + schemePopup.clientHeight + 25) {
        console.log("hh")
        schemePopup.style.top = yPos - schemePopup.clientHeight - 5 + "px"
      } else {
        schemePopup.style.top = yPos + 25 + "px"
      }
    } 
    item.addEventListener("mousemove", (e) => {
      if (window.innerWidth > 1260) {
        move(e.clientX, e.clientY)
        item.addEventListener("mouseleave", () => {
          schemePopup.classList.remove("open")
        })
      }
    })
    item.addEventListener("click", e => {
      if (window.innerWidth <= 1260) {
        e.preventDefault()
        openModal(schemePopup)
      }      
    })
  })
}
//tabs on click
const catTab = document.querySelectorAll(".catalog__tab")
const catBlock = document.querySelectorAll(".catalog__block")
catTab.forEach((tab, idx) => {
  tab.addEventListener("click", e => {
    e.preventDefault()
    catTab.forEach(tab => {
      tab.classList.remove("active")
    })
    catBlock.forEach(block => {
      block.classList.remove("active")
    })
    catTab[idx].classList.add("active")
    catBlock[idx].classList.add("active")
  })
})
// day/night views
if (document.querySelector(".views")) {
  const viewsBtn = document.querySelectorAll(".views__btn")
  const viewsBar = document.querySelector(".views__bar")
  viewsBtn.forEach(btn => {
    btn.addEventListener("click", () => {
      if (btn.classList.contains("views__btn--night")) {
        viewsBar.style.transform = "translateX(100%)";
        viewsBar.style.backgroundColor = "#313534"
        document.querySelector(".views__video--day").style.clipPath = "polygon(0 0, 0 0, 0 100%, 0% 100%)"
      } else {
        viewsBar.style.transform = "translateX(0%)";
        viewsBar.style.backgroundColor = "#ffffff"
        document.querySelector(".views__video--day").style.clipPath = "polygon(0 0, 100% 0, 100% 100%, 0 100%)"
      }
      viewsBtn.forEach(btn => btn.classList.remove("active"))
      btn.classList.add("active")
    })
  })
}
//add parallax to img in choice sec
if (document.querySelector(".main-choice__img")) {
  let choiceImg = document.querySelector(".main-choice__img img")
  choiceImg.addEventListener("mouseenter", e => {
    if (window.innerWidth > 1520) {
      choiceImg.style.transitionDuration = '.5s'
      const startY = e.clientY
      const startX = e.clientX
      choiceImg.addEventListener("mousemove",(event)=> {
        choiceImg.style.transitionDuration = '0s'
        let diffX = event.clientX - startX
        let diffY = event.clientY - startY
        choiceImg.style.transform = 'translate3d('+ diffX / 30 +'px,'+ diffY / 30 +'px,0)'
      })
      choiceImg.addEventListener("mouseleave", () => {
        choiceImg.style.transform = 'translate3d(0,0,0)'
        choiceImg.style.transitionDuration = '.5s'
      })
    }
  })
}
//custom fancybox
const fancyItems = document.querySelectorAll("[data-fancy]")
fancyItems.forEach(item => {
  item.addEventListener("click", () => {
    let imgSrc = []
    let objectFit = item.getAttribute("data-fit") ? item.getAttribute("data-fit"): ""
    let val = item.getAttribute("data-fancy")
    fancyItems.forEach(el => {
      if (!el.closest(".swiper-slide-duplicate") && el.getAttribute("data-fancy") === val) {
      imgSrc.push(el.getAttribute("data-src"))
      }   
    })
    let initialSl = imgSrc.indexOf(item.getAttribute("data-src"))
    document.querySelector("footer").insertAdjacentHTML('afterend', `
    <div class="modal fancy-modal">
        <div class="modal__overlay">
        <button class="modal__close" aria-label="Закрыть всплывающее окно"></button>
           <div class="modal__content">
               <div class="swiper fancy-swiper">
                   <div class="swiper-wrapper">
                      ${imgSrc.map(item => `<div class="swiper-slide ${objectFit}">
                            <div class="swiper-img">
                                <img src=${item} alt="">
                            </div>
                        </div>`
                      ).join("")}
                   </div>
               </div>
           </div>
        </div>
    </div>
  `);
    let fancySwiper = new Swiper(".fancy-swiper", {
      slidesPerView: 1,
      observer: true,
      observeParents: true,
      centeredSlides: true,
      spaceBetween: 5,
      initialSlide: initialSl,
      breakpoints: {
        991.98: {
          spaceBetween: 40,
        },
        767.98: {
          spaceBetween: 20
        }
      },
    })
    const fancyModal = document.querySelector(".fancy-modal")
    openModal(fancyModal)
    fancyModal.addEventListener("click", e => {
      if (!fancyModal.querySelector(".modal__content").contains(e.target) || fancyModal.querySelector(".modal__close").contains(e.target)) {
        closeModal(fancyModal)
        setTimeout(() => {
          fancyModal.remove()
        }, modalAnimSpd);
      }
    })
  })

})
//map-content animation
gsap.from('.main-map__content', {
  x: 100, 
  duration: 1, 
  ease: "power2.out",
  scrollTrigger: {
    trigger: '.main-map__content',
    start: "30px bottom",
    toggleActions: "play none none reverse",
  }
})
