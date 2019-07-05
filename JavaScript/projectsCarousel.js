//Carousel for projects Interior/ Exterior

class ProjectsCarousel {
    constructor(element) {
     this.element = element;
     this.leftButton = this.element.querySelector(".left-button");
     this.rightButton = this.element.querySelector(".right-button");
     this.imgCarousel = this.element.querySelectorAll("img");
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
     const images = this.element.querySelectorAll('img');
     images.forEach((image) => {
         image.style.display = "none"});
         this.currentIndex -=1;
         if (this.currentIndex < 0) {
             this.currentIndex = images.length-1;
         }
         if(this.currentIndex > images.length-1) {
             this.currentIndex = 0;
         }
         this.imgCarousel[this.currentIndex].style.display = "block";
     

 };

 next() {
     const images = this.element.querySelectorAll('img');
     images.forEach((image) => {
         image.style.display = "none"});
         this.currentIndex +=1;
         if(this.currentIndex < 0) {
             this.currentIndex = images.length-1;
         }
         if(this.currentIndex > images.length-1) {
             this.currentIndex = 0;
         }
         this.imgCarousel[this.currentIndex].style.display = "block";
     
 };

}
// Interior Projects////
let fullRemodelBefore = document.querySelectorAll('.slideshow').forEach(img => new ProjectsCarousel(img));
let fullRemodelAfter = document.querySelectorAll('.slideshow2').forEach(img => new ProjectsCarousel(img));
let hallwayBefore = document.querySelectorAll('.slideshow3').forEach(img => new ProjectsCarousel(img));
let hallwayAfter = document.querySelectorAll('.slideshow4').forEach(img => new ProjectsCarousel(img));
let ceilingBefore = document.querySelectorAll('.slideshow5').forEach(img => new ProjectsCarousel(img));
let ceilingAfter = document.querySelectorAll('.slideshow6').forEach(img => new ProjectsCarousel(img));
let livingRoomBefore = document.querySelectorAll('.slideshow7').forEach(img => new ProjectsCarousel(img));
let livingRoomAfter = document.querySelectorAll('.slideshow8').forEach(img => new ProjectsCarousel(img));
let fireplaceBefore = document.querySelectorAll('.slideshow9').forEach(img => new ProjectsCarousel(img));
let fireplaceAfter = document.querySelectorAll('.slideshow10').forEach(img => new ProjectsCarousel(img));
let bathroomBefore = document.querySelectorAll('.slideshow11').forEach(img => new ProjectsCarousel(img));
let bathroomAfter = document.querySelectorAll('.slideshow12').forEach(img => new ProjectsCarousel(img));


