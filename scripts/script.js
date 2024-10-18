// Light and dark theme function
document.addEventListener("DOMContentLoaded", function () {
    const themeToggleBtn = document.getElementById('theme-toggle');
    const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
  
    let currentTheme = localStorage.getItem('theme');
    if (currentTheme === 'dark') {
      document.body.classList.add('dark-theme');
      themeToggleBtn.innerHTML = '<i class="bx bx-sun"></i>'; 

    } else if (currentTheme === 'light') {
      document.body.classList.remove('dark-theme');
      themeToggleBtn.innerHTML = '<i class="bx bx-moon"></i>'; 
      
    } else {
      if (prefersDarkScheme.matches) {
        document.body.classList.add('dark-theme');
        themeToggleBtn.innerHTML = '<i class="bx bx-sun"></i>';
      } else {
        themeToggleBtn.innerHTML = '<i class="bx bx-moon"></i>';
      }
    }
  
    themeToggleBtn.addEventListener('click', function () {
      if (document.body.classList.contains('dark-theme')) {
        document.body.classList.remove('dark-theme');
        localStorage.setItem('theme', 'light');
        themeToggleBtn.innerHTML = '<i class="bx bx-moon"></i>';
      } else {
        document.body.classList.add('dark-theme');
        localStorage.setItem('theme', 'dark');
        themeToggleBtn.innerHTML = '<i class="bx bx-sun"></i>';
      }
    });
  });
  
  // function to handle header scroll disappear
  let lastScrollTop = 0;
  const header = document.getElementById('header');
  
  window.addEventListener('scroll', () => {
    let currentScroll = window.pageYOffset || document.documentElement.scrollTop;
  
    if (currentScroll > lastScrollTop) {

      header.style.top = '-120px';
    } else {
      header.style.top = '0';
    }
  
    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
  });
  
  
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');
  
  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('nav-open');
  });
