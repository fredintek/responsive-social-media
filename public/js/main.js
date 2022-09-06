var root = document.querySelector(":root");

const menuItems = Array.from(document.querySelectorAll(".menu-item"));

// message elements
const messageNotification = document.querySelector("#messages-notifications");
const messages = document.querySelector(".messages");
const message = Array.from(messages.querySelectorAll(".message"));
const messageSearch = document.querySelector("#message-search");

//theme
const theme = document.querySelector("#theme");
const themeModal = document.querySelector(".customize-theme");
const closeTheme = document.querySelector(".close-card");
const fontSizes = Array.from(document.querySelectorAll(".choose-size span"));
const colorPalete = Array.from(document.querySelectorAll(".choose-color span"));
const bg1 = document.querySelector(".bg-1");
const bg2 = document.querySelector(".bg-2");
const bg3 = document.querySelector(".bg-3");

// message search bar functionality
//search chat
messageSearch.addEventListener("keyup", () => {
  const val = messageSearch.value.toLowerCase();
  message.forEach((chat) => {
    let name = chat.querySelector("h5").textContent.toLowerCase();
    if (name.indexOf(val) !== -1) {
      chat.style.display = "flex";
    } else {
      chat.style.display = "none";
    }
  });
});

// remove active class from all menu items
const removeActiveItem = function () {
  menuItems.forEach((item) => {
    item.classList.remove("active");
  });
};

menuItems.forEach((item) => {
  item.addEventListener("click", function (e) {
    e.preventDefault();
    removeActiveItem();
    item.classList.add("active");

    if (item.id !== "notifications") {
      document.querySelector(".notifications-popup").style.display = "none";
    } else {
      document.querySelector(".notifications-popup").style.display = "block";
      document.querySelector(
        "#notifications .notification-count"
      ).style.display = "none";
    }
  });
});

// =========== messages =============
messageNotification.addEventListener("click", () => {
  messages.style.boxShadow = "0 0 1rem var(--color-primary)";
  messageNotification.querySelector(".notification-count").style.display =
    "none";
  window.setTimeout(() => {
    messages.style.boxShadow = "none";
  }, 2000);
});

// theme customization
const openThemeModal = () => {
  themeModal.style.display = "grid";
};

theme.addEventListener("click", openThemeModal);

themeModal.addEventListener("click", (e) => {
  if (e.target.classList.contains("customize-theme")) {
    themeModal.style.display = "none";
  }
});

closeTheme.addEventListener("click", () => {
  themeModal.style.display = "none";
});

// font
const removeSizeSelector = () => {
  fontSizes.forEach((size) => {
    size.classList.remove("active");
  });
};

fontSizes.forEach((size) => {
  size.addEventListener("click", () => {
    removeSizeSelector();
    let fontSize;
    size.classList.toggle("active");
    if (size.classList.contains("font-size-1")) {
      fontSize = "10px";
      root.style.setProperty("--sticky-top-left", "5.4rem");
      root.style.setProperty("--sticky-top-right", "5.4rem");
    } else if (size.classList.contains("font-size-2")) {
      fontSize = "13px";
      root.style.setProperty("--sticky-top-left", "5.4rem");
      root.style.setProperty("--sticky-top-right", "-7rem");
    } else if (size.classList.contains("font-size-3")) {
      fontSize = "16px";
      root.style.setProperty("--sticky-top-left", "-2rem");
      root.style.setProperty("--sticky-top-right", "-17rem");
    } else if (size.classList.contains("font-size-4")) {
      fontSize = "19px";
      root.style.setProperty("--sticky-top-left", "-5rem");
      root.style.setProperty("--sticky-top-right", "-25rem");
    } else if (size.classList.contains("font-size-5")) {
      fontSize = "22px";
      root.style.setProperty("--sticky-top-left", "-12rem");
      root.style.setProperty("--sticky-top-right", "-35rem");
    }
    document.querySelector("html").style.fontSize = fontSize;
  });
});

// primary colors
const removeActiveColor = () => {
  colorPalete.forEach((color) => {
    color.classList.remove("active");
  });
};

colorPalete.forEach((color) => {
  color.addEventListener("click", () => {
    removeActiveColor();
    let primaryHue;
    if (color.classList.contains("color-1")) {
      primaryHue = 252;
    } else if (color.classList.contains("color-2")) {
      primaryHue = 52;
    } else if (color.classList.contains("color-3")) {
      primaryHue = 352;
    } else if (color.classList.contains("color-4")) {
      primaryHue = 152;
    } else if (color.classList.contains("color-5")) {
      primaryHue = 202;
    }
    color.classList.add("active");

    root.style.setProperty("--primary-color-hue", primaryHue);
  });
});

// background
let ligthColorLightness;
let darkColorLightness;
let whiteColorLightness;

const changeBg = () => {
  root.style.setProperty("--light-color-lightness", ligthColorLightness);
  root.style.setProperty("--dark-color-lightness", darkColorLightness);
  root.style.setProperty("--white-color-lightness", whiteColorLightness);
};

bg1.addEventListener("click", () => {
  bg1.classList.add("active");
  bg2.classList.remove("active");
  bg3.classList.remove("active");
  window.location.reload();
});

bg2.addEventListener("click", () => {
  darkColorLightness = "95%";
  whiteColorLightness = "20%";
  ligthColorLightness = "15%";

  bg2.classList.add("active");
  bg1.classList.remove("active");
  bg3.classList.remove("active");
  changeBg();
});

bg3.addEventListener("click", () => {
  darkColorLightness = "95%";
  whiteColorLightness = "10%";
  ligthColorLightness = "0%";

  bg3.classList.add("active");
  bg1.classList.remove("active");
  bg2.classList.remove("active");
  changeBg();
});
