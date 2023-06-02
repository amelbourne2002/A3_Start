const smallImgRow = document.querySelector('.small-img-row');
const smallImgCols = document.querySelectorAll('.small-img-col');
const arrowLeft = document.querySelector('.arrow-left');
const arrowRight = document.querySelector('.arrow-right');
let currentIndex = 0;

arrowLeft.addEventListener('click', () => {
    if (currentIndex > 0) {
    currentIndex--;
    smallImgRow.classList.add('slide-effect');
    smallImgRow.scrollBy({
        left: -smallImgCols[0].offsetWidth,
        behavior: 'smooth'
    });
    }
});

arrowRight.addEventListener('click', () => {
    if (currentIndex < smallImgCols.length - 1) {
    currentIndex++;
    smallImgRow.classList.add('slide-effect');
    smallImgRow.scrollBy({
        left: smallImgCols[0].offsetWidth,
        behavior: 'smooth'
    });
    }
});

smallImgRow.addEventListener('scroll', () => {
    smallImgRow.classList.remove('slide-effect');
    currentIndex = Math.round(smallImgRow.scrollLeft / smallImgCols[0].offsetWidth);
});

function img(anything){
    document.querySelector('.slide').src = anything;
}

function change(change){
    const line = document.querySelector('.home');
    line.style.background = change;
}


  
