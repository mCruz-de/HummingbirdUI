/*!
  * HummingbirdUI v4.0.1 (https://hummingbird-ui.net/)
  * Copyright 2023 HummingbirdUI
  * Licensed under MIT (https://github.com/mCruz-de/HummingbirdUI/blob/main/LICENSE)
  */


let breakpoint_mobile = 1080;

let overlay = document.createElement('div');
overlay.id = "overlay";
overlay.setAttribute('onclick','closeSidenav()');


function toggleSidenav(){
    document.body.classList.toggle('toggle-sidenav');
    if (window.innerWidth < breakpoint_mobile) {
      document.body.appendChild(overlay);
    }
}

function closeSidenav(){
  document.body.classList.toggle('toggle-sidenav');
  document.body.removeChild(overlay);
}

window.addEventListener("resize", function() {
  if (window.innerWidth < breakpoint_mobile) {
    document.body.classList.remove("toggle-sidenav");
    document.body.removeChild(overlay);
  }
});


/* dark mode */
function toggleDarkMode(){
  document.body.classList.toggle('dark-mode');
}