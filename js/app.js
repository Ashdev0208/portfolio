window.addEventListener('DOMContentLoaded' , () => {
    const video = document.querySelector('.video video'),
    playerBtn = document.querySelector('.play-img');
    playerBtn.onclick = () => {
        video.classList.toggle('active');
        video.play();
        video.classList.remove('end')
    }

    video.onclick = () => {
        video.classList.remove('active');
        video.classList.add('end')
    }
 });