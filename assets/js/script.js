'use strict';


document.addEventListener('DOMContentLoaded', () => {
    // Element toggle function
    const elementToggleFunc = function (elem) {
        elem.classList.toggle("active");
    };


// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); });



// testimonials variables
const testimonialsItem = document.querySelectorAll("[data-testimonials-item]");
const modalContainer = document.querySelector("[data-modal-container]");
const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
const overlay = document.querySelector("[data-overlay]");

console.log("Modal Close Button:", modalCloseBtn); // Debugging line
console.log("Overlay:", overlay); // Debugging line

// modal variable
const modalImg = document.querySelector("[data-modal-img]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalText = document.querySelector("[data-modal-text]");

// modal toggle function
const testimonialsModalFunc = function () {
  modalContainer.classList.toggle("active");
  overlay.classList.toggle("active");
}

// add click event to all modal items
for (let i = 0; i < testimonialsItem.length; i++) {

  testimonialsItem[i].addEventListener("click", function () {

    modalImg.src = this.querySelector("[data-testimonials-avatar]").src;
    modalImg.alt = this.querySelector("[data-testimonials-avatar]").alt;
    modalTitle.innerHTML = this.querySelector("[data-testimonials-title]").innerHTML;
    modalText.innerHTML = this.querySelector("[data-testimonials-text]").innerHTML;

    testimonialsModalFunc();

  });

}

// add click event to modal close button
if (modalCloseBtn) {
        modalCloseBtn.addEventListener("click", testimonialsModalFunc);
    } else {
        console.error("modalCloseBtn not found in the DOM");
    }
    
    overlay.addEventListener("click", testimonialsModalFunc);



// custom select variables
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-select-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");

select.addEventListener("click", function () { elementToggleFunc(this); });

// add event in all select items
 selectItems.forEach(item => {
        item.addEventListener("click", function () {
            let selectedValue = this.innerText.toLowerCase();
            selectValue.innerText = this.innerText;
            elementToggleFunc(select);
            filterFunc(selectedValue);
        });
    });

// filter variables
const filterItems = document.querySelectorAll("[data-filter-item]");

    const filterFunc = function (selectedValue) {
        filterItems.forEach(item => {
            if (selectedValue === "all") {
                item.classList.add("active");
            } else if (selectedValue === item.dataset.category) {
                item.classList.add("active");
            } else {
                item.classList.remove("active");
            }
        });
    };


// add event in all filter button items for large screen
 let lastClickedBtn = filterBtn[0];

    filterBtn.forEach(btn => {
        btn.addEventListener("click", function () {
            let selectedValue = this.innerText.toLowerCase();
            selectValue.innerText = this.innerText;
            filterFunc(selectedValue);

            lastClickedBtn.classList.remove("active");
            this.classList.add("active");
            lastClickedBtn = this;
        });
    });



// contact form variables
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

// add event to all form input field
formInputs.forEach(input => {
        input.addEventListener("input", function () {
            // Check form validation
            if (form.checkValidity()) {
                formBtn.removeAttribute("disabled");
            } else {
                formBtn.setAttribute("disabled", "");
            }
        });
    });


// page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// add event to all nav link
for (let i = 0; i < navigationLinks.length; i++) {
    navigationLinks[i].addEventListener("click", function () {
        const selectedPage = this.innerHTML.toLowerCase();

        // Remove active class from all pages and links
        pages.forEach(page => page.classList.remove("active"));
        navigationLinks.forEach(link => link.classList.remove("active"));

        // Add active class to the selected page and link
        for (let j = 0; j < pages.length; j++) {
            if (selectedPage === pages[j].dataset.page) {
                pages[j].classList.add("active");
                this.classList.add("active");
                window.scrollTo(0, 0);
                break; // Stop the loop once we find the matching page
            }
        }
    });
}