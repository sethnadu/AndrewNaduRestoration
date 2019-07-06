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
let kitchenBefore = document.querySelectorAll('.slideshow13').forEach(img => new ProjectsCarousel(img));
let kitchenAfter = document.querySelectorAll('.slideshow14').forEach(img => new ProjectsCarousel(img));
let ceilingBefore = document.querySelectorAll('.slideshow5').forEach(img => new ProjectsCarousel(img));
let ceilingAfter = document.querySelectorAll('.slideshow6').forEach(img => new ProjectsCarousel(img));
let livingRoomBefore = document.querySelectorAll('.slideshow7').forEach(img => new ProjectsCarousel(img));
let livingRoomAfter = document.querySelectorAll('.slideshow8').forEach(img => new ProjectsCarousel(img));
let fireplaceBefore = document.querySelectorAll('.slideshow9').forEach(img => new ProjectsCarousel(img));
let fireplaceAfter = document.querySelectorAll('.slideshow10').forEach(img => new ProjectsCarousel(img));
let bathroomBefore = document.querySelectorAll('.slideshow11').forEach(img => new ProjectsCarousel(img));
let bathroomAfter = document.querySelectorAll('.slideshow12').forEach(img => new ProjectsCarousel(img));
let masterBathroomBefore = document.querySelectorAll('.slideshow15').forEach(img => new ProjectsCarousel(img));
let masterBathroomDuring = document.querySelectorAll('.slideshow16').forEach(img => new ProjectsCarousel(img));
let masterBathroomAfter = document.querySelectorAll('.slideshow17').forEach(img => new ProjectsCarousel(img));


// Exterior Projects////
let deckAfter = document.querySelectorAll('.exteriorshow1').forEach(img => new ProjectsCarousel(img));
let patioBefore = document.querySelectorAll('.exteriorshow2').forEach(img => new ProjectsCarousel(img));
let patioAfter = document.querySelectorAll('.exteriorshow3').forEach(img => new ProjectsCarousel(img));
let walkwayAfter = document.querySelectorAll('.exteriorshow4').forEach(img => new ProjectsCarousel(img));
let chimneyBefore = document.querySelectorAll('.exteriorshow5').forEach(img => new ProjectsCarousel(img));
let chimneyAfter = document.querySelectorAll('.exteriorshow6').forEach(img => new ProjectsCarousel(img));

let stoneWalkwayBefore = document.querySelectorAll('.exteriorshow7').forEach(img => new ProjectsCarousel(img));
let stoneWalkwayAfter = document.querySelectorAll('.exteriorshow8').forEach(img => new ProjectsCarousel(img));
let wallBefore = document.querySelectorAll('.exteriorshow9').forEach(img => new ProjectsCarousel(img));
let wallAfter = document.querySelectorAll('.exteriorshow10').forEach(img => new ProjectsCarousel(img));
let walkwayStoneBrickAfter = document.querySelectorAll('.exteriorshow11').forEach(img => new ProjectsCarousel(img));
let stoneWallBefore = document.querySelectorAll('.exteriorshow12').forEach(img => new ProjectsCarousel(img));
let stoneWallAfter = document.querySelectorAll('.exteriorshow13').forEach(img => new ProjectsCarousel(img));
let porchBefore = document.querySelectorAll('.exteriorshow14').forEach(img => new ProjectsCarousel(img));
let porchAfter = document.querySelectorAll('.exteriorshow15').forEach(img => new ProjectsCarousel(img));
let houseBefore = document.querySelectorAll('.exteriorshow16').forEach(img => new ProjectsCarousel(img));
let houseAfter = document.querySelectorAll('.exteriorshow17').forEach(img => new ProjectsCarousel(img));
let brickWallBefore = document.querySelectorAll('.exteriorshow18').forEach(img => new ProjectsCarousel(img));
let brickWallAfter = document.querySelectorAll('.exteriorshow19').forEach(img => new ProjectsCarousel(img));
let cementPatioBefore = document.querySelectorAll('.exteriorshow20').forEach(img => new ProjectsCarousel(img));
let cementPatioAfter = document.querySelectorAll('.exteriorshow21').forEach(img => new ProjectsCarousel(img));