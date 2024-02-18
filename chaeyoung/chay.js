const image = document.querySelector('.image img');
const info = document.querySelector('.info');
const vid = document.querySelector('.video');

function menu(){
    window.location.href = "/index.html";
}

image.addEventListener('mouseover', () => {
    info.style.opacity = '0.9';
});

image.addEventListener('mouseout', () => {
    info.style.opacity = '0';
});

image.addEventListener('mouseover', () => {
    vid.style.opacity = '1';
    vid.play();
})
image.addEventListener('mouseout', () => {
    vid.style.opacity = '0';
    vid.pause();
})
