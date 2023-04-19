const btn = document.querySelector(".btn-light-dark");
const moon = document.querySelector(".moon");
const sun = document.querySelector(".sun");

const themeFromLS = localStorage.getItem("theme")
const themeFromHugo = document.body.classList.contains("dark-theme") ? "dark" : null
const currentTheme = themeFromLS ? themeFromLS : themeFromHugo;

if (currentTheme == "dark") {
    document.body.classList.add("dark-theme");
    moon.style.display = 'none';
    sun.style.display = 'block';
    setSyntaxDark(true);
} else {
    document.body.classList.remove("dark-theme");
    moon.style.display = 'block';
    sun.style.display = 'none';
    setSyntaxDark(false);
}

btn.addEventListener("click", function () {
    document.body.classList.toggle("dark-theme");

    let theme = "light";
    if (document.body.classList.contains("dark-theme")) {
        theme = "dark";
        moon.style.display = 'none';
        sun.style.display = 'block';
        setSyntaxDark(true);
    } else {
        moon.style.display = 'block';
        sun.style.display = 'none';
        setSyntaxDark(false);
    }
    localStorage.setItem("theme", theme);
});

function getStyleSheet(file_name) {
  for (var i = 0; i < document.styleSheets.length; i++) {
    var sheet = document.styleSheets[i];
    if (sheet.href.includes(file_name)) {
      return sheet;
    }
  }
}

function setSyntaxDark(isDark) {
  sheet_light = getStyleSheet("syntax_light")
  sheet_dark = getStyleSheet("syntax_dark")
  
  if (isDark) {
    sheet_dark.disabled = false
    sheet_light.disabled = true
  } else {
    sheet_dark.disabled = true
    sheet_light.disabled = false
  }

}