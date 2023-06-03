// Side Menu
document.getElementById('toggleMenuBtn').addEventListener('click',()=>{
    let sideMenu = document.getElementById('sideMenu');
    sideMenu.style.right = 0;
});
window.addEventListener("mouseup", (e) => {
    let box = document.getElementById("sideMenu");
    if (e.target != box) {
        box.style.right = "-100%";
    }
});


// Header Search Btn
document.getElementById('header-search-btn').addEventListener('click',()=>{
    document.getElementById('search-box').style.visibility = 'visible'
    document.getElementById('search-form').style.bottom = '0'
})

window.addEventListener("mousedown", (e) => {
    let searchInput = document.getElementById('search-input');
    if (e.target != searchInput) {
        document.getElementById('search-box').style.visibility = 'hidden'
        document.getElementById('search-form').style.bottom = '30%'
    }
});





const images = document.querySelectorAll("[data-src]");

function preloadImage(img){
    const src = img.getAttribute("data-src");
    if(!src) {
        return;
    }
    img.src = src ;
};

const imgOptions = {
    threshold:0,
    rootMargin: "0px 0px 100px 0px"
};

const imgObserver = new IntersectionObserver((entries, imgObserver)=>{
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        } else {
            preloadImage(entry.target);
            imgObserver.unobserve(entry.target);
        }
    })
},imgOptions);

images.forEach(image => {
    imgObserver.observe(image);
})