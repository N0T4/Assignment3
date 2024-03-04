

const btns = document.querySelectorAll("[data-target]");
const close = document.querySelectorAll(".closeBtn");

btns.forEach(btn => {
  btn.addEventListener('click', () => {
    const target = btn.getAttribute('data-target');
    document.querySelector(target).classList.add('active');
  });
});

close.forEach(btn => {
  btn.addEventListener('click', () => {
    const target = btn.getAttribute('data-target');
    document.querySelector(target).classList.remove('active');
  });
});