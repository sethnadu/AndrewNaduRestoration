// Ceiling Before

class CeilingBefore {
    constructor(element) {
     this.element = element;
     this.leftButton = document.querySelector(".left-button5");
     this.rightButton = document.querySelector(".right-button5");
     this.imgCarousel = document.querySelectorAll(".imgSlideShow5");
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
     const images = document.querySelectorAll('.imgSlideShow5');
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
     const images = document.querySelectorAll('.imgSlideShow5');
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

let ceilingBefore = document.querySelectorAll('.slideshow5').forEach(img => new CeilingBefore(img));

// Ceiling After

class CeilingAfter {
    constructor(element) {
     this.element = element;
     this.leftButton = document.querySelector(".left-button6");
     this.rightButton = document.querySelector(".right-button6");
     this.imgCarousel = document.querySelectorAll(".imgSlideShow6");
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
     const images = document.querySelectorAll('.imgSlideShow6');
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
     const images = document.querySelectorAll('.imgSlideShow6');
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

let ceilingAfter = document.querySelectorAll('.slideshow6').forEach(img => new CeilingAfter(img));