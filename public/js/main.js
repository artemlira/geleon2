"use strict";

document.addEventListener("DOMContentLoaded", function () {
  // Burger menu
  function toggleMenu() {
    const burger = document.querySelector("#burger");
    const menu = document.querySelector("#mobile-menu");
    const body = document.querySelector("body");

    burger.addEventListener("click", () => {
      burger.classList.toggle("active");
      menu.classList.toggle("active");
      body.classList.toggle("overflow-clip");
    });

    menu.addEventListener("click", () => {
      burger.classList.remove("active");
      menu.classList.remove("active");
      body.classList.remove("overflow-clip");
    });

    window.addEventListener("resize", () => {
      if (window.innerWidth > 1300) {
        burger.classList.remove("active");
        menu.classList.remove("active");
        body.classList.remove("overflow-clip");
      }
    });
  }

  toggleMenu();

  // Swiper slider
  const brandSwiper = new Swiper(".brands-slider", {
    // Optional parameters
    direction: "horizontal",
    loop: true,
    spaceBetween: 80,
    speed: 1000,
    passiveListeners: true,
    // Navigation arrows
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    // If we need pagination
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    autoplay: {
      delay: 1800,
    },
  });

  const aboutSwiper = new Swiper(".about-slider", {
    // Optional parameters
    direction: "horizontal",
    loop: true,
    spaceBetween: 30,
    speed: 1000,
    passiveListeners: true,
    slidesPerView: 3,
    breakpoints: {
      460: {
        spaceBetween: 40,
      },
      788: {
        spaceBetween: 60,
      },
      1044: {
        spaceBetween: 80,
      },
      1300: {
        spaceBetween: 100,
      },
    },
    // Navigation arrows
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    // autoplay: {
    //   delay: 1800,
    // },
  });

  const reviewsSwiper = new Swiper(".reviews-swiper", {
    // Optional parameters
    direction: "horizontal",
    loop: true,
    spaceBetween: 80,
    speed: 1000,
    passiveListeners: true,
    slidesPerView: 1,
    breakpoints: {
      788: {
        slidesPerView: 2,
      },
      1280: {
        slidesPerView: 3,
      },
    },
    // If we need pagination
    pagination: {
      el: ".reviews-pagination",
      clickable: true,
    },
    autoplay: {
      delay: 1800,
    },
  });

  const clientsSwiper = new Swiper(".clients-swiper", {
    // Optional parameters
    direction: "horizontal",
    loop: true,
    spaceBetween: 30,
    speed: 1000,
    passiveListeners: true,
    slidesPerView: 3,
    breakpoints: {
      460: {
        spaceBetween: 40,
      },
      788: {
        slidesPerView: 4,
        spaceBetween: 60,
      },
      1044: {
        spaceBetween: 80,
      },
      1300: {
        spaceBetween: 100,
      },
    },
    // If we need pagination
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  // send message

  const form = document.querySelectorAll("form"),
    inputs = document.querySelectorAll("input"),
    success = document.querySelector("#success"),
    loading = document.querySelector("#loading"),
    failure = document.querySelector("#failure");

  const postData = async (url, data) => {
    loading.classList.remove("hidden");

    let res = await fetch(url, {
      method: "POST",
      body: data,
    });

    return await res;
  };

  const clearInputs = () => {
    inputs.forEach((item) => {
      item.value = "";
    });
  };

  const validation = (form) => {
    let result = true;
    const allInputs = form.querySelectorAll("input");

    allInputs.forEach((item) => {
      console.log(item.value);
      if (!item.value) {
        result = false;
      }
    });

    return result;
  };

  form.forEach((item) => {
    item.addEventListener("submit", (e) => {
      e.preventDefault();
      validation(item);

      if (validation(item)) {
        const formData = new FormData(item);

        postData("../application.php", formData)
          .then((res) => {
            console.log(res);
            loading.classList.add("hidden");
            success.classList.remove("hidden");
          })
          .catch((err) => {
            console.log(err);
            loading.classList.add("hidden");
            failure.classList.remove("hidden");
          })
          .finally(() => {
            clearInputs();
            setTimeout(() => {
              loading.classList.add("hidden");
              success.classList.add("hidden");
              failure.classList.add("hidden");
            }, 5000);
          });
      }
    });
  });

  // form validation
  // let validation = new JustValidate('#call-form');
  // let secondValidation = new JustValidate('#form');

  // validation
  //   .addField('#call-name', [
  //     {
  //       rule: 'required',
  //       errorMessage: 'Введите имя',
  //     },
  //     {
  //       rule: 'minLength',
  //       value: 2,
  //       errorMessage: 'Минимум 2 символа!',
  //     },
  //   ])
  //   .addField('#call-phone', [
  //     {
  //       rule: 'required',
  //       errorMessage: 'Введите телефон!',
  //     },
  //   ])
  //   .onSuccess(function () {

  //     // sendMail(firstName, firstPhone);
  //   });

  // secondValidation
  //   .addField('#name', [
  //     {
  //       rule: 'required',
  //       errorMessage: 'Введите имя',
  //     },
  //     {
  //       rule: 'minLength',
  //       value: 2,
  //       errorMessage: 'Минимум 2 символа!',
  //     },
  //   ])
  //   .addField('#phone', [
  //     {
  //       rule: 'required',
  //       errorMessage: 'Введите телефон!',
  //     },
  //   ])
  //   .onSuccess(function () {

  //     // sendMail(firstName, firstPhone);
  //   });
});
