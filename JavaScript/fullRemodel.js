// Full Remodel Before

class FullRemodelBefore {
    constructor(element) {
     this.element = element;
     this.leftButton = document.querySelector(".left-button");
     this.rightButton = document.querySelector(".right-button");
     this.imgCarousel = document.querySelectorAll(".imgSlideShow1");
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
     const images = document.querySelectorAll('.imgSlideShow1');
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
     const images = document.querySelectorAll('.imgSlideShow1');
     images.forEach((image) => {
         image.style.display = "none"});
         this.currentIndex +=1;
         if(this.currentIndex < 0) {
             this.currentIndex = 12;
         }
         if(this.currentIndex > 12) {
             this.currentIndex = 0;
         }
         this.imgCarousel[this.currentIndex].style.display = "block";
     
 };

}

let fullRemodelBefore = document.querySelectorAll('.slideshow').forEach(img => new FullRemodelBefore(img));

// Full Remodel After

class InteriorCarousel2 {
    constructor(element) {
     this.element = element;
     this.leftButton = document.querySelector(".left-button2");
     this.rightButton = document.querySelector(".right-button2");
     this.imgCarousel = document.querySelectorAll(".imgSlideShow2");
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
     const images = document.querySelectorAll('.imgSlideShow2');
     images.forEach((image) => {
         image.style.display = "none"});
         this.currentIndex -=1;
         if (this.currentIndex < 0) {
             this.currentIndex = 3;
         }
         if(this.currentIndex > 3) {
             this.currentIndex = 0;
         }
         this.imgCarousel[this.currentIndex].style.display = "block";
     

 };

 next() {
     const images = document.querySelectorAll('.imgSlideShow2');
     images.forEach((image) => {
         image.style.display = "none"});
         this.currentIndex +=1;
         if(this.currentIndex < 0) {
             this.currentIndex = 3;
         }
         if(this.currentIndex > 3) {
             this.currentIndex = 0;
         }
         this.imgCarousel[this.currentIndex].style.display = "block";
     
 };

}

let interiorCarousel2 = document.querySelectorAll('.slideshow2').forEach(img => new InteriorCarousel2(img));