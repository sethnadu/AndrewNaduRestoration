// Ceiling Before

class LivingRoomBefore {
    constructor(element) {
     this.element = element;
     this.leftButton = document.querySelector(".left-button7");
     this.rightButton = document.querySelector(".right-button7");
     this.imgCarousel = document.querySelectorAll(".imgSlideShow7");
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
     const images = document.querySelectorAll('.imgSlideShow7');
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
     const images = document.querySelectorAll('.imgSlideShow7');
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

let livingRoomBefore = document.querySelectorAll('.slideshow7').forEach(img => new LivingRoomBefore(img));

// Ceiling After

class LivingRoomAfter {
    constructor(element) {
     this.element = element;
     this.leftButton = document.querySelector(".left-button8");
     this.rightButton = document.querySelector(".right-button8");
     this.imgCarousel = document.querySelectorAll(".imgSlideShow8");
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
     const images = document.querySelectorAll('.imgSlideShow8');
     images.forEach((image) => {
         image.style.display = "none"});
         this.currentIndex -=1;
         if (this.currentIndex < 0) {
             this.currentIndex = 6;
         }
         if(this.currentIndex > 6) {
             this.currentIndex = 0;
         }
         this.imgCarousel[this.currentIndex].style.display = "block";
     

 };

 next() {
     const images = document.querySelectorAll('.imgSlideShow8');
     images.forEach((image) => {
         image.style.display = "none"});
         this.currentIndex +=1;
         if(this.currentIndex < 0) {
             this.currentIndex = 6;
         }
         if(this.currentIndex > 6) {
             this.currentIndex = 0;
         }
         this.imgCarousel[this.currentIndex].style.display = "block";
     
 };

}

let livingRoomAfter = document.querySelectorAll('.slideshow8').forEach(img => new LivingRoomAfter(img));