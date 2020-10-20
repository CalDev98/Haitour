window.addEventListener("scroll", function(){
    var navbar = document.querySelector(".main-head");
    navbar.classList.toggle("sticky", window.scrollY > 0);
})

function scrollAppear () {
    var text = document.querySelector('.about-section');
    var textPosition = text.getBoundingClientRect().top;
    var screenPosition = window.innerHeight / 1.8;

    if (textPosition < screenPosition) {
        text.classList.add('about-appear');
    }
}

window.addEventListener('scroll', scrollAppear);