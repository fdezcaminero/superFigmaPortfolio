function coolMenu() {
  const webS = document.querySelector('#webSite');
  webS.style.display = 'none';

  const mobileM = document.querySelector('#mobileMenu');
  mobileM.style.display = 'block';
}

function closeMenu() {
  const webS = document.querySelector('#webSite');
  webS.style.display = 'block';

  const mobileM = document.querySelector('#mobileMenu');
  mobileM.style.display = 'none';
}

coolMenu();
closeMenu();