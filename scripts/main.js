function coolMenu() {
  let webS = document.querySelector('#webSite');
  webS.style.display = "none";

  let mobileM = document.querySelector('#mobileMenu');
  mobileM.style.display = "block";
}

function closeMenu() {
  let webS = document.querySelector('#webSite');
  webS.style.display = "block";

  let mobileM = document.querySelector('#mobileMenu');
  mobileM.style.display = "none";
}
