// HallwayRoom Before

class HallwayRoomBefore {
    constructor(element) {
     this.element = element;
     this.leftButton = document.querySelector(".left-button3");
     this.rightButton = document.querySelector(".right-button3");
     this.imgCarousel = document.querySelectorAll(".imgSlideShow3");
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
     const images = document.querySelectorAll('.imgSlideShow3');
     images.forEach((image) => {
         image.style.display = "none"});
         this.currentIndex -=1;
         if (this.currentIndex < 0) {
             this.currentIndex = 4;
         }
         if(this.currentIndex > 4) {
             this.currentIndex = 0;
         }
         this.imgCarousel[this.currentIndex].style.display = "block";
     

 };

 next() {
     const images = document.querySelectorAll('.imgSlideShow3');
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

let hallwayRoomBefore = document.querySelectorAll('.slideshow3').forEach(img => new HallwayRoomBefore(img));

// HallwayRoom After

class HallwayRoomAfter {
    constructor(element) {
     this.element = element;
     this.leftButton = document.querySelector(".left-button4");
     this.rightButton = document.querySelector(".right-button4");
     this.imgCarousel = document.querySelectorAll(".imgSlideShow4");
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
     const images = document.querySelectorAll('.imgSlideShow4');
     images.forEach((image) => {
         image.style.display = "none"});
         this.currentIndex -=1;
         if (this.currentIndex < 0) {
             this.currentIndex = 15;
         }
         if(this.currentIndex > 15) {
             this.currentIndex = 0;
         }
         this.imgCarousel[this.currentIndex].style.display = "block";
     

 };

 next() {
     const images = document.querySelectorAll('.imgSlideShow4');
     images.forEach((image) => {
         image.style.display = "none"});
         this.currentIndex +=1;
         if(this.currentIndex < 0) {
             this.currentIndex = 15;
         }
         if(this.currentIndex > 15) {
             this.currentIndex = 0;
         }
         this.imgCarousel[this.currentIndex].style.display = "block";
     
 };

}

let hallwayRoomAfter = document.querySelectorAll('.slideshow4').forEach(img => new HallwayRoomAfter(img));