// 스크롤 시 헤더 배경 변경
window.addEventListener("scroll", function () {
  const header = document.querySelector(".header");
  if (window.scrollY > 50) {
    // 50px 이상 스크롤 시
    header.style.backgroundColor = "rgba(54, 69, 79, 1)"; // 불투명하게
  } else {
    header.style.backgroundColor = "rgba(54, 69, 79, 0.9)"; // 다시 반투명하게
  }
});

const fadeEls = document.querySelectorAll(".fade-up");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  {
    threshold: 0.15,
  },
);

fadeEls.forEach((el) => observer.observe(el));

// 햄버거 메뉴 토글 (HTML에 햄버거 메뉴 구조가 있다면)
/*
document.querySelector('.menu-toggle').addEventListener('click', function() {
    document.querySelector('.nav-links').classList.toggle('active');
    this.classList.toggle('active');
});
*/
