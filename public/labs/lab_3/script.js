function supernova_slider() {
    let nextBtn = document.querySelector(".gallery .buttons .next"),
        prevBtn = document.querySelector(".gallery .buttons .prev"),
        slide = document.querySelectorAll(".gallery .photos .block"),
        i = 0;

    prevBtn.onclick = (event) => {
        event.preventDefault();

        slide[i].classList.remove("active");
        i--;

        if (i < 0) {
            i = slide.length - 1;
        }
        slide[i].classList.add("active");
    };

    nextBtn.onclick = (event) => {
        event.preventDefault();

        slide[i].classList.remove("active");
        i++;

        if (i >= slide.length) {
            i = 0;
        }

        slide[i].classList.add("active");
    };

    slider_callback();
    let sliderInterval = window.setInterval(slider_callback, 3000);

    function slider_callback() {
        nextBtn.click();
    }
}

supernova_slider();