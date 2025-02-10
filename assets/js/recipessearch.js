$(document).ready(function() {
    console.log("jQuery is working from CDN!");
  });




$(document).ready(function() {
    var $scrollContainer = $('#scroll-container');
    var scrollAmount = 150; // 每次滾動的像素量

    // 左移按鈕
    $('#scroll-left-btn').click(function() {
        $scrollContainer.animate({
            scrollLeft: '-=' + scrollAmount
        }, 300);
    });

    // 右移按鈕
    $('#scroll-right-btn').click(function() {
        $scrollContainer.animate({
            scrollLeft: '+=' + scrollAmount
        }, 300);
    });

    // 第二个容器的按钮
    $('#scroll-left-btn-1').click(function() {
        $('#scroll-container-1').animate({
            scrollLeft: '-=' + scrollAmount
        }, 300);
    });

    $('#scroll-right-btn-1').click(function() {
        $('#scroll-container-1').animate({
            scrollLeft: '+=' + scrollAmount
        }, 300);
    });


    //第三個容器
    $('#scroll-left-btn-2').click(function() {
        $('#scroll-container-2').animate({
            scrollLeft: '-=' + scrollAmount
        }, 300);
    });

    $('#scroll-right-btn-2').click(function() {
        $('#scroll-container-2').animate({
            scrollLeft: '+=' + scrollAmount
        }, 300);
    });


});

// document.addEventListener('DOMContentLoaded', function () {
//   const scrollLeftBtn1 = document.getElementById('scroll-left-btn-1');
//   const scrollRightBtn1 = document.getElementById('scroll-right-btn-1');
//   const scrollContainer1 = document.getElementById('scroll-container-1');

//   if (scrollLeftBtn1 && scrollRightBtn1 && scrollContainer1) {
//     scrollLeftBtn1.addEventListener('click', function () {
//       scrollContainer1.scrollBy({
//         left: -200,
//         behavior: 'smooth'
//       });
//     });

//     scrollRightBtn1.addEventListener('click', function () {
//       scrollContainer1.scrollBy({
//         left: 200,
//         behavior: 'smooth'
//       });
//     });
//   }
// });





let swiper = new Swiper(".mySwiper-rs", {
    slidesPerView: "auto",
    spaceBetween: 24    ,
    slidesPerView: 2,
    slidesPerGroup: 1,
    pagination: {
      el: ".swiper-pagination-custom",
      type: "fraction",
    },
    navigation: {
      nextEl: ".custom-button-next",
      prevEl: null,
    },
    breakpoints: {
      992: {
        slidesPerView: 3,
        spaceBetween: 48,
      },
    },
  });
  
  
  
  
  