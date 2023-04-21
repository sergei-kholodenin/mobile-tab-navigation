const imgs = document.querySelectorAll('.content');
const btns = document.querySelectorAll('li');

btns.forEach((btn, i) => {
    btn.addEventListener('click', () => {
        imgs.forEach(img => img.classList.remove('show'));
        imgs[i].classList.add('show');
        btns.forEach(btn => btn.classList.remove('active'));
        btn.classList.add('active');
    })
})
