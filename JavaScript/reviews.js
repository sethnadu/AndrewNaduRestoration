// Review Image 1

class Review {
    constructor(element) {
        this.element = element;
        this.imagesAll = document.querySelectorAll(".reviewsImageSlide");
        this.currentIndex1 = 0;
        this.changeImage1();
    }

    changeImage1() {
        const imagesAll = document.querySelectorAll(".reviewsImageSlide");
        const newArray1 = [];
        imagesAll.forEach((image) => {
            image.style.display = "none";
            newArray1.push(image);
            return this.currentIndex1;
            
        });
        
     this.timerStart1();

     if (this.currentIndex1 == newArray1.length) {
        this.currentIndex1 = 0;
      }
  
      newArray1[this.currentIndex1].style.display = "flex";
      this.currentIndex1 += 1;
    }

    timerStart1() {
        setTimeout(() => this.changeImage1(this.currentIndex1), 7500);
    }
}



let reviews = document.querySelectorAll(".reviewImages").forEach(img => new Review(img));





// Review Image 2
class ReviewOne {
    constructor(element) {
        this.element = element;
        this.imagesAll2 = document.querySelectorAll(".reviewsImageSlide1");
        this.currentIndex2 = 0;
        this.changeImage2();
    }

    changeImage2() {
        const imagesAll2 = document.querySelectorAll(".reviewsImageSlide1");
        const newArray2 = [];
        imagesAll2.forEach((image) => {
            image.style.display = "none";
            newArray2.push(image);
            return this.currentIndex2;
        });

     this.timerStart2();

     if (this.currentIndex2 == newArray2.length) {
        this.currentIndex2 = 0;
      }
  
      newArray2[this.currentIndex2].style.display = "flex";
      this.currentIndex2 += 1;
    }

    timerStart2() {
        setTimeout(() => this.changeImage2(this.currentIndex2), 7500);
    }
}



let reviews1 = document.querySelectorAll(".reviewsImageSlide1").forEach(img => new ReviewOne(img));



// Review Image 3
class ReviewTwo {
    constructor(element) {
        this.element = element;
        this.imagesAll3 = document.querySelectorAll(".reviewsImageSlide2");
        this.currentIndex3 = 0;
        this.changeImage3();
    }

    changeImage3() {
        const imagesAll3 = document.querySelectorAll(".reviewsImageSlide2");
        const newArray3 = [];
        imagesAll3.forEach((image) => {
            image.style.display = "none";
            newArray3.push(image);
            return this.currentIndex3;
        });

     this.timerStart3();
       
     if (this.currentIndex3 == newArray3.length) {
        this.currentIndex3 = 0;
      }
  
      newArray3[this.currentIndex3].style.display = "flex";
      this.currentIndex3 += 1;
    }

    timerStart3() {
        setTimeout(() => this.changeImage3(this.currentIndex3), 7500);
    }
}

let reviews2 = document.querySelectorAll(".reviewsImageSlide2").forEach(img => new ReviewTwo(img));

// Review Image 4
class ReviewThree {
    constructor(element) {
        this.element = element;
        this.imagesAll4 = document.querySelectorAll(".reviewsImageSlide3");
        this.currentIndex4 = 0;
        this.changeImage4();
    }

    changeImage4() {
        const imagesAll4 = document.querySelectorAll(".reviewsImageSlide3");
        const newArray4 = [];
        imagesAll4.forEach((image) => {
            image.style.display = "none";
            newArray4.push(image);
            return this.currentIndex4;
        });

     this.timerStart4();
      
     if (this.currentIndex4 == newArray4.length) {
        this.currentIndex4 = 0;
      }
  
      newArray4[this.currentIndex4].style.display = "flex";
      this.currentIndex4 += 1;
    }

    timerStart4() {
        setTimeout(() => this.changeImage4(this.currentIndex4), 7500);
    }
}



let reviews3 = document.querySelectorAll(".reviewsImageSlide3").forEach(img => new ReviewThree(img));

// Review Image 5
class ReviewFour {
    constructor(element) {
        this.element = element;
        this.imagesAll5 = document.querySelectorAll(".reviewsImageSlide4");
        this.currentIndex5 = 0;
        this.changeImage5();
    }

    changeImage5() {
        const imagesAll5 = document.querySelectorAll(".reviewsImageSlide4");
        const newArray5 = [];
        imagesAll5.forEach((image) => {
            image.style.display = "none";
            newArray5.push(image);
            return this.currentIndex4;
        });

     this.timerStart5();
        
     if (this.currentIndex5 == newArray5.length) {
        this.currentIndex5 = 0;
      }
  
      newArray5[this.currentIndex5].style.display = "flex";
      this.currentIndex5 += 1;
    }

    timerStart5() {
        setTimeout(() => this.changeImage5(this.currentIndex5), 7500);
    }
}



let reviews4 = document.querySelectorAll(".reviewsImageSlide4").forEach(img => new ReviewFour(img));

// Review Image 6
class ReviewFive {
    constructor(element) {
        this.element = element;
        this.imagesAll6 = document.querySelectorAll(".reviewsImageSlide5");
        this.currentIndex6 = 0;
        this.changeImage6();
    }

    changeImage6() {
        const imagesAll6 = document.querySelectorAll(".reviewsImageSlide5");
        const newArray6 = [];
        imagesAll6.forEach((image) => {
            image.style.display = "none";
            newArray6.push(image);
            return this.currentIndex6;
        });

     this.timerStart6();
       
     if (this.currentIndex6 == newArray6.length) {
        this.currentIndex6 = 0;
      }
  
      newArray6[this.currentIndex6].style.display = "flex";
      this.currentIndex6 += 1;
    }

    timerStart6() {
        setTimeout(() => this.changeImage6(this.currentIndex6), 7500);
    }
}



let reviews5 = document.querySelectorAll(".reviewsImageSlide5").forEach(img => new ReviewFive(img));


// Review Image 7
class ReviewSix {
    constructor(element) {
        this.element = element;
        this.imagesAll7 = document.querySelectorAll(".reviewsImageSlide6");
        this.currentIndex7 = 0;
        this.changeImage7();
    }

    changeImage7() {
        const imagesAll7 = document.querySelectorAll(".reviewsImageSlide6");
        const newArray7 = [];
        imagesAll7.forEach((image) => {
            image.style.display = "none";
            newArray7.push(image);
            return this.currentIndex6;
        });

     this.timerStart7();
       
     if (this.currentIndex7 == newArray7.length) {
        this.currentIndex7 = 0;
      }
  
      newArray7[this.currentIndex7].style.display = "flex";
      this.currentIndex7 += 1;
    }

    timerStart7() {
        setTimeout(() => this.changeImage7(this.currentIndex7), 7500);
    }
}



let reviews6 = document.querySelectorAll(".reviewsImageSlide6").forEach(img => new ReviewSix(img));

// Review Image 8
class ReviewSeven {
    constructor(element) {
        this.element = element;
        this.imagesAll8 = document.querySelectorAll(".reviewsImageSlide7");
        this.currentIndex8 = 0;
        this.changeImage8();
    }

    changeImage8() {
        const imagesAll8 = document.querySelectorAll(".reviewsImageSlide7");
        const newArray8 = [];
        imagesAll8.forEach((image) => {
            image.style.display = "none";
            newArray8.push(image);
            return this.currentIndex8;
        });

     this.timerStart8();
       
     if (this.currentIndex8 == newArray8.length) {
        this.currentIndex8 = 0;
      }
  
      newArray8[this.currentIndex8].style.display = "flex";
      this.currentIndex8 += 1;
    }

    timerStart8() {
        setTimeout(() => this.changeImage8(this.currentIndex8), 7500);
    }
}



let reviews7 = document.querySelectorAll(".reviewsImageSlide7").forEach(img => new ReviewSeven(img));

// Review Image 9
class ReviewEight {
    constructor(element) {
        this.element = element;
        this.imagesAll9 = document.querySelectorAll(".reviewsImageSlide8");
        this.currentIndex9 = 0;
        this.changeImage9();
    }

    changeImage9() {
        const imagesAll9 = document.querySelectorAll(".reviewsImageSlide8");
        const newArray9 = [];
        imagesAll9.forEach((image) => {
            image.style.display = "none";
            newArray9.push(image);
            return this.currentIndex6;
        });

     this.timerStart9();
       
     if (this.currentIndex9 == newArray9.length) {
        this.currentIndex9 = 0;
      }
  
      newArray9[this.currentIndex9].style.display = "flex";
      this.currentIndex9 += 1;
    }

    timerStart9() {
        setTimeout(() => this.changeImage9(this.currentIndex9), 7500);
    }
}



let reviews8 = document.querySelectorAll(".reviewsImageSlide8").forEach(img => new ReviewEight(img));