const arrows = document.querySelectorAll(".arrow-icon");
const movieLists = document.querySelectorAll(".movie-list");

arrows.forEach((arrow, i) => {
    const itemNumber = movieLists[i].querySelectorAll('img').length;
    let clickCounter = 0;
    arrow.addEventListener("click", () => {
        const ratio = Math.floor(window.innerWidth / 270);

        clickCounter++;
        if(itemNumber - (4 + clickCounter) + (4 - ratio) >= 0){
            movieLists[i].style.transform = `translateX(${movieLists[i].computedStyleMap().get('transform')[0].x.value -300}px)`
        }else{
            movieLists[i].style.transform = 'translateX(0)';
            clickCounter = 0;
        }
    })
})

// TOGGLE

const ball = document.querySelector('.toggle-ball');
const items = document.querySelectorAll('.container,.movie-list-title,.navbar-container,.sidebar,.sidebar-icon,.toggle');

ball.addEventListener('click', ()=>{
    items.forEach(item => {
        item.classList.toggle('active')
    })
    ball.classList.toggle('active')
})


// ================================================

const yellowBall = document.querySelector('.yellow-ball');
const allItems = document.querySelectorAll('.container,.movie-list-title,.navbar-container,.sidebar,.sidebar-icon,.toggle');

yellowBall.addEventListener('click', ()=>{
    allItems.forEach(item => {
        item.classList.toggle('yellow')
    })
    yellowBall.classList.toggle('yellow')
})