class Carousel {
    constructor(element) {
        this.element = element;
        this.images = document.querySelectorAll(".carouselImage");
        this.currentIndex = 0;
        this.changeImage();
    }

    changeImage() {
        const images = document.querySelectorAll(".carouselImage");
        const newArray = [];
        images.forEach((image) => {
            image.style.display = "none";
            newArray.push(image);
            return this.currentIndex;
        });

     this.timerStart();

     if (this.currentIndex == newArray.length) {
        this.currentIndex = 0;
      }
  
      newArray[this.currentIndex].style.display = "flex";
      this.currentIndex += 1;
    }

    timerStart() {
        setTimeout(() => this.changeImage(this.currentIndex), 5000);
    }
}



let carousel = document.querySelectorAll(".carousel").forEach(img => new Carousel(img));