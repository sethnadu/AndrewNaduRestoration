// fireplace Before

class FireplaceBefore {
    constructor(element) {
     this.element = element;
     this.leftButton = document.querySelector(".left-button9");
     this.rightButton = document.querySelector(".right-button9");
     this.imgCarousel = document.querySelectorAll(".imgSlideShow9");
     this.currentIndex = 0;
     this.currentImg = this.imgCarousel[this.currentIndex];
     this.currentImg.style.display = "block";
    
     this.leftButton.addEventListener("click", () => {
         this.previous()
     });
     this.rightButton.addEventListener("click", () => {
         this.next()
     });
    }

 previous() {
     const images = document.querySelectorAll('.imgSlideShow9');
     images.forEach((image) => {
         image.style.display = "none"});
         this.currentIndex -=1;
         if (this.currentIndex < 0) {
             this.currentIndex = 1;
         }
         if(this.currentIndex > 1) {
             this.currentIndex = 0;
         }
         this.imgCarousel[this.currentIndex].style.display = "block";
     

 };

 next() {
     const images = document.querySelectorAll('.imgSlideShow9');
     images.forEach((image) => {
         image.style.display = "none"});
         this.currentIndex +=1;
         if(this.currentIndex < 0) {
             this.currentIndex = 1;
         }
         if(this.currentIndex > 1) {
             this.currentIndex = 0;
         }
         this.imgCarousel[this.currentIndex].style.display = "block";
     
 };

}

let fireplaceBefore = document.querySelectorAll('.slideshow9').forEach(img => new FireplaceBefore(img));

// Ceiling After

class FireplaceAfter {
    constructor(element) {
     this.element = element;
     this.leftButton = document.querySelector(".left-button10");
     this.rightButton = document.querySelector(".right-button10");
     this.imgCarousel = document.querySelectorAll(".imgSlideShow10");
     this.currentIndex = 0;
     this.currentImg = this.imgCarousel[this.currentIndex];
     this.currentImg.style.display = "block";
    
     this.leftButton.addEventListener("click", () => {
         this.previous()
     });
     this.rightButton.addEventListener("click", () => {
         this.next()
     });
    }

 previous() {
     const images = document.querySelectorAll('.imgSlideShow10');
     images.forEach((image) => {
         image.style.display = "none"});
         this.currentIndex -=1;
         if (this.currentIndex < 0) {
             this.currentIndex = 2;
         }
         if(this.currentIndex > 2) {
             this.currentIndex = 0;
         }
         this.imgCarousel[this.currentIndex].style.display = "block";
     

 };

 next() {
     const images = document.querySelectorAll('.imgSlideShow10');
     images.forEach((image) => {
         image.style.display = "none"});
         this.currentIndex +=1;
         if(this.currentIndex < 0) {
             this.currentIndex = 2;
         }
         if(this.currentIndex > 2) {
             this.currentIndex = 0;
         }
         this.imgCarousel[this.currentIndex].style.display = "block";
     
 };

}

let fireplaceAfter = document.querySelectorAll('.slideshow10').forEach(img => new FireplaceAfter(img));