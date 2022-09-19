function testWebP(callback) {

    var webP = new Image();
    webP.onload = webP.onerror = function () {
        callback(webP.height == 2);
    };
    webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function (support) {

    if (support == true) {
        document.querySelector('body').classList.add('webp');
    } else {
        document.querySelector('body').classList.add('no-webp');
    }
});

const leftBg = document.querySelector('.slice__section-left');

if(window.matchMedia("(min-width: 768px)").matches){
    document.querySelector('.slice__section-container').addEventListener('mousemove', function (e) {
        if (e.target.classList.contains('slice__section-container')) {
            leftBg.style.width = 0;
            leftBg.style.width = +leftBg.style.width.slice(0, -2) + e.screenX + "px";
        } else {
            leftBg.style.width = +leftBg.style.width.slice(0, -2) - (+leftBg.style.width.slice(0, -2) - e.screenX) + "px";
        }
})

}
