//Selects relating to the controls
const sections = document.querySelectorAll('.section');
// Parent
const sectBtns= document.querySelectorAll('.controls');
// Actual button
const sectBtn = document.querySelectorAll('.control');
// The body
const allSections = document.querySelector('.main-content');

function PageTransitions() {
// Iterates over each control button
for (let i = 0; i < sectBtn.length; i++) {
    sectBtn[i].addEventListener('click', function () {
        // Stores elements
      let currentBtn = document.querySelectorAll('.active-btn');
      // When you click, gets rid of class
      currentBtn[0].classList.remove('active-btn');
      // Adds active btn to clicked class, making it active button
      this.classList.add('active-btn');

      // Get the data-id of the clicked button
      let dataId = this.getAttribute('data-id');
      let targetSection = document.getElementById(dataId);

      // Iterates over each section and removes active class
      sections.forEach((section) => {
        section.classList.remove('active');
      });

      // Add 'active' class to the target section
      targetSection.classList.add('active');
    });
}
}
// Call the function 
PageTransitions();