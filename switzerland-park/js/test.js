
/* function pox() {
    const infra = document.querySelector(".infra .container")
    const infraSlides = document.querySelectorAll(".infra .swiper-slide")
    const parent = infra.parentNode
    let scrollDur = 300
    parent.style.height = parent.clientHeight + scrollDur * infraSlides.length + "px"
    let parentPaddVal = getComputedStyle(parent).getPropertyValue("padding-bottom").replace("px","")
    let infraTop =  infra.getBoundingClientRect().top +  window.pageYOffset
    let parentBottPos =  parent.getBoundingClientRect().bottom +  window.pageYOffset - parentPaddVal
    let topPos = window.innerHeight/2 - infra.clientHeight/2
    window.addEventListener("scroll", function sc() {
      let windowTop = window.pageYOffset || document.documentElement.scrollTop; 
     if (windowTop + topPos + infra.clientHeight >  parentBottPos ) {
        infra.style.position = "static"
        infra.style.transform = "translate(0,0)"
        infra.style.marginTop = "auto"
      }else if (windowTop + topPos > infraTop ) {
        infra.style.position = "fixed"
        infra.style.top = "50%"
        infra.style.left = "50%"
        infra.style.transform = "translate(-50%,-50%)"
        infra.style.marginTop = "0"
        infraswiper.slideTo(Math.floor(Math.abs(infraTop - windowTop)/scrollDur))
      }
      else {
        infra.style.position = "static"
        infra.style.transform = "translate(0%,0%)"
        infra.style.marginTop = "0"
      }
       window.addEventListener("resize", ()=>{
       window.removeEventListener("scroll", sc)
       infra.style.position = "static"
       infra.style.transform = "translate(0,0)"
       infra.style.marginTop = "auto" 
       parent.style.height = 0
       parent.style.height = "auto" 
       pox()
  ///pox()
      })
    }) 
}
pox() */
//window.addEventListener("resize",()=> pox())




/* section.forEach(sec=> {
  let options = {
    root: null,
    rootMargin: "0px",
    threshold: 1,
  };
  const callback = (entries, observer) => {
    entries.forEach((entry) => {
      console.log(entry.boundingClientRect)
      if (entry.isIntersecting) {
        sec.style.position = "fixed"
        sec.style.top = "50%"
        sec.style.left = "50%"
        sec.style.transform = "translate(-50%,-50%)"
      }else {
        if (entry.boundingClientRect.y > 792) {
        //  sec.classList.remove("fadeIn")
         sec.style.position = "static"
         sec.style.transform = "translate(0%,0%)"
        }
      }
    })
  };
  const myObserver = new IntersectionObserver(callback, options)
myObserver.observe(sec)
}) */
/* if ('IntersectionObserver' in window &&
    'IntersectionObserverEntry' in window &&
    'intersectionRatio' in window.IntersectionObserverEntry.prototype) {

  if ('isIntersecting' in window.IntersectionObserverEntry.prototype) {
   console.log(window.IntersectionObserver)
  }
}  
 *//*
let mapTl = gsap.timeline({
  scrollTrigger: {
    trigger: '.main-map__content',
    start: "top bottom",
    toggleActions: "play none none reverse",
  }
});
mapTl.from('.main-map__content', {x: 100, duration: 1, ease: "power2.out"})
  const imItems = document.querySelectorAll(".improvements__item") 
imItems.forEach(item => {
  const f = item.querySelector("img")
  const g = item.querySelector("h5")
  let impTl = gsap.timeline({
    scrollTrigger: {
      trigger: f,
      start: "center bottom",
      toggleActions: "play none none reverse",
    }
  });
  impTl.fromTo(f, 
  {
    clipPath: "polygon(0 100%, 31% 100%, 66% 0, 0 0)",
    duration: 1, 
  }, {
    clipPath: "polygon(0 100%, 100% 100%, 100% 0, 0 0)",
  });
  impTl.from(g, 
  {
    y: 30,
    opacity: 0,
    duration: 1, 
  });
})
const colAdv = document.querySelectorAll(".scaleFadeUp") 
colAdv.forEach(item => {
  const f = item.querySelector("img")
  const g = item.querySelector("h5")
  let impTl = gsap.timeline({
    scrollTrigger: {
      trigger: item,
      start: "center bottom",
      toggleActions: "play none none reverse",
    }
  });
  impTl.from(f, 
  {
    scale: 0,
    duration: 1, 
  });
  impTl.from(g, 
  {
    y: 30,
    opacity: 0,
    duration: 1, 
  });
})
const colInfo = document.querySelectorAll(".item-info") 
colInfo.forEach(item => {
  const f = item.querySelector(".item-info__img")
  const g = item.querySelector(".item-info__content")
  let impTl = gsap.timeline({
    scrollTrigger: {
      trigger: item,
      start: "center bottom",
      toggleActions: "play none none reverse",
    }
  });
  impTl.fromTo(item, 
  {
    clipPath: 'polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)',
  },
  {
    clipPath: 'polygon(0 100%, 100% 100%, 100% 0, 0 0)',
  });
  impTl.from(g, 
  {
    y: 30,
    opacity: 0,
    duration: 1, 
    delay: 0.5
  });
})
function news() {
  const news = document.querySelectorAll('.item-news')
  news.forEach(item => {
    let mapTl = gsap.timeline({
      scrollTrigger: {
        trigger: item,
        start: "top bottom",
        toggleActions: "play none none reverse",
      }
    });
    mapTl.from(item, {y: 100, duration: 1, ease: "power2.out"})
  })
}
news()
titles = document.querySelectorAll(".fadeUp")
titles.forEach(title => {
  gsap.from(title, {
    y: 50,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
      trigger: title,
      start: "center bottom",
      toggleActions: "play none none reverse",
    }
  })
})
const cardItems = document.querySelectorAll(".item-card")
cardItems.forEach((card,idx) => {
  gsap.from(card, {
    y: 100,
    duration: 1,
    delay: idx/5,
    scrollTrigger: {
      trigger: card,
      start: "top bottom",
      toggleActions: "play none none reverse",
    }
  })
})*/


/* function MapTJ() {
  const mm = document.querySelectorAll(".main-map__content")
  mm.forEach(item => {
    let mapTl = gsap.timeline({
      scrollTrigger: {
        trigger: item,
        start: "top bottom",
        toggleActions: "play none none reverse",
      }
    });
    mapTl.from(item, {x: 100, duration: 1, ease: "power2.out"})
  })
}
MapTJ() 
 */
                           // mapTl.repeat()
                           // mapTl.eventCallback("onUpdate", null)
                        
                            //console.log(mapTl.scrollTrigger.refresh())
/* const itemCard = gsap.utils.toArray(".item-card")
itemCard.forEach((card, i) => {
  gsap.to(card, {
    y: 30,
    duration: .5,
    ScrollTrigger: {
      trigger: card,
      start: "top top", 
    },
  })
}); */

        /* if ((window.innerWidth - left - item.clientWidth - 50 ) <  schemePopup.clientWidth) {
          schemePopup.style.left = left - schemePopup.clientWidth - 8 + "px"
        } else {
          schemePopup.style.left = left + item.clientWidth + 8 + "px"
        }
        if (window.innerHeight > schemePopup.clientHeight + top ) {
          schemePopup.style.top = top + "px"
          
        } else {
          schemePopup.style.top = top - schemePopup.clientHeight + item.clientHeight + 1 + "px"
        } */
        if (window.innerWidth > 1200) {
          schemePopup.classList.add("open")
          let top = item.getBoundingClientRect().top
          let left = item.getBoundingClientRect().left
          if (window.innerWidth < left + schemePopup.clientWidth + item.clientWidth + 50) {
            schemePopup.style.left = e.clientX - schemePopup.clientWidth - 10 + "px"
          } else {
            schemePopup.style.left = e.clientX + 15 + "px"
          }
          if (window.innerHeight < top + schemePopup.clientHeight) {
            schemePopup.style.top = e.clientY - schemePopup.clientHeight - 5 + "px"
  
          } else {
            schemePopup.style.top = e.clientY + 25 + "px"
          }
          item.addEventListener("mouseleave", () => {
            schemePopup.classList.remove("open")
          })
        }