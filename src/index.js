const search = document.querySelector('.search');
const searchImg = document.querySelector('.search__img')
const close = document.querySelector('.search__btn-ds');

searchImg.addEventListener('click', function(e){
    e.stopPropagation();
    search.classList.add('search-activ');
    console.log("open");
});
close.addEventListener('click', function(){
    search.classList.remove('search-activ');
    console.log("close");
})
