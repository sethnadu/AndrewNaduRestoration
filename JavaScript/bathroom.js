// Bathroom Before

class BathroomBefore {
    constructor(element) {
     this.element = element;
     this.leftButton = document.querySelector(".left-button11");
     this.rightButton = document.querySelector(".right-button11");
     this.imgCarousel = document.querySelectorAll(".imgSlideShow11");
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
     const images = document.querySelectorAll('.imgSlideShow11');
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
     const images = document.querySelectorAll('.imgSlideShow11');
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

let bathroomBefore = document.querySelectorAll('.slideshow11').forEach(img => new BathroomBefore(img));

// Bathroom After

class BathroomAfter {
    constructor(element) {
     this.element = element;
     this.leftButton = document.querySelector(".left-button12");
     this.rightButton = document.querySelector(".right-button12");
     this.imgCarousel = document.querySelectorAll(".imgSlideShow12");
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
     const images = document.querySelectorAll('.imgSlideShow12');
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
     const images = document.querySelectorAll('.imgSlideShow12');
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

let bathroomAfter = document.querySelectorAll('.slideshow12').forEach(img => new BathroomAfter(img));