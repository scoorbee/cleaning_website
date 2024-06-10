// SLIDER 
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:3,
            nav:false
        },
        1000:{
            items:5,
            nav:true,
            loop:false
        }
    }
})


// MOBILE HEADER
$("._menu_header_mob_btn i").click(function() {
    $("._menu_head_mob").addClass("_menu_head_mob_open");
});
$("._menu_head_mob_close").click(function() {
    $("._menu_head_mob").removeClass("_menu_head_mob_open");
});


// MENU
$("._menu_mob_btn i").click(function() {
    $("._menu_mob").addClass("_menu_mob_open");
});
$("#_menu_head_mob_close2").click(function() {
    $("._menu_mob").removeClass("_menu_mob_open");
});

$("._icon_rmv").click(function() {
    $("._mbl_menu_main").removeClass("_active");
    $("html").removeClass("modal-open");
    $("._all_toggles").removeClass("_active");
    $("._icon_rmv").removeClass("_active");
    $("._icon_click").removeClass("_active");
});

   



// function gsapAccordion() {
//     let groups = gsap.utils.toArray(".accordion-group");
//     let menus = gsap.utils.toArray(".accordion-menu");
//     let menuToggles = groups.map(createAnimation);
    
//     menus.forEach((menu) => {
//       menu.addEventListener("click", () => toggleMenu(menu));
//     });
  
//     function toggleMenu(clickedMenu) {
//       menuToggles.forEach((toggleFn) => toggleFn(clickedMenu)); // Remove active class from child elements
//       menus.filter(menu => menu !== clickedMenu).forEach(menu => { 
//         menu.closest('.accordion-group').querySelector('.accordion-menu').classList.remove('active'); 
//       }); 
//       // Toggle the active class on clicked menu
//       let parentMenu = clickedMenu.closest('.accordion-group').querySelector('.accordion-menu');
//       parentMenu.classList.toggle('active'); 
//     } 
  
//     function createAnimation(element) { 
//       let menu = element.querySelector(".accordion-menu"); 
//       let box = element.querySelector(".accordion-content"); 
//       let minusElement = element.querySelector(".accordion-minus"); 
//       let plusElement = element.querySelector(".accordion-plus"); 
      
//       gsap.set(box, { height: "auto" }); 
//       let animation = gsap.timeline() 
//         .from(box, { height: 0, duration: 0.5, ease: "power1.inOut" }) 
//         .from(minusElement, { duration: 0.2, autoAlpha: 0, ease: "none" }, 0) 
//         .to(plusElement, { duration: 0.2, autoAlpha: 0, ease: "none" }, 0) 
//         .reverse(); 
      
//       return function (clickedMenu) { 
//         if (clickedMenu === menu) { 
//           animation.reversed(!animation.reversed()); 
//         } else { 
//           animation.reverse(); 
//         } 
//       }; 
//     } 
//   } 
  
//   gsapAccordion();
  



//   const accordions = document.querySelectorAll(".accordion");

// accordions.forEach((accordion, index) => {
//   const header = accordion.querySelector(".accordion__header");
//   const content = accordion.querySelector(".accordion__content");
//   const icon = accordion.querySelector("#accordion-icon");

//   header.addEventListener("click", () => {
//     console.log("dd")
//     const isOpen = content.style.height === `${content.scrollHeight}px`;

//     accordions.forEach((a, i) => {
//       const c = a.querySelector(".accordion__content");
//       const ic = a.querySelector("#accordion-icon");

//       c.style.height = i === index && !isOpen ? `${c.scrollHeight}px` : "0px";
//       ic.classList.toggle("ri-add-line", i !== index || !isOpen);
//       ic.classList.toggle("ri-subtract-fill", i === index && !isOpen);
//     });
//   });
// });
