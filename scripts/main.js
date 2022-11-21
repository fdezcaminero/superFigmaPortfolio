function coolMenu() {
    let x = document.getElementsByTagName("body")[0];
    x.style.backgroundColor = "#e5e5e5";

  let webS = document.querySelector('#webSite');
  webS.style.display = "none";

  let mobileM = document.querySelector('#mobileMenu');
  mobileM.style.display = "block";
}

function closeMenu() {
  let x = document.getElementsByTagName("body")[0];
  x.style.backgroundColor = "#fff";

  let webS = document.querySelector('#webSite');
  webS.style.display = "block";

  let mobileM = document.querySelector('#mobileMenu');
  mobileM.style.display = "none";
}
