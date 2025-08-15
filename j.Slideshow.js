let slideIndex = 0;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");

    function showSlides(n) {
      if (n > slides.length) { slideIndex = 1 }
      if (n < 1) { slideIndex = slides.length }

      for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }

      for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
      }

      slides[slideIndex - 1].style.display = "block";
      dots[slideIndex - 1].className += " active";
    }

    function currentSlide(n) {
      slideIndex = n;
      showSlides(slideIndex);
    }

    // Automatic slideshow
    function autoSlide() {
      slideIndex++;
      if (slideIndex > slides.length) { slideIndex = 1 }
      showSlides(slideIndex);
      setTimeout(autoSlide, 4000); // Change slide every 4 seconds
    }

    // Initialize
    showSlides(slideIndex = 1);
    autoSlide();