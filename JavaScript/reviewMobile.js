class Panel {
    constructor(element) {
        this.element = element;
        this.openButton = document.querySelector(".panel-button-open");
        this.closeButton = document.querySelector(".panel-button-close");
        this.panel = document.querySelector(".reviewMobileClick");
        this.panelBar = document.querySelector(".panel-bar");
        this.panelContent = document.querySelector(".panel-content");

        this.openButton.addEventListener("click", () => {
            this.panelOpen();
        });

        this.closeButton.addEventListener("click", () => {
            this.panelOpen();
        });
        
    }
    panelOpen() {
        this.panelContent.classList.toggle("showContent");
        this.openButton.classList.toggle("hide-button");
        this.closeButton.classList.toggle("hide-button");
        
    }
}

const together = document.querySelectorAll(".reviewMobileClick");
together.forEach(panel => new Panel(panel));