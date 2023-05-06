function openNav() {
  document.getElementById('sidebar').style.transform = 'translateX(0)';
  document.querySelector('body').style.overflow = 'hidden';
  document.getElementById('overlay').style.opacity = '0.6';
  document.getElementById('overlay').style.visibility = 'visible';
}

function closeNav() {
  document.getElementById('sidebar').style.transform = 'translateX(100%)';
  document.querySelector('body').style.overflow = 'visible';
  document.getElementById('overlay').style.opacity = '0';
  document.getElementById('overlay').style.visibility = 'hidden';
}

function toggleFirstAccordion() {
  document.getElementById('accordion-1').classList.toggle('active');
}
function toggleSecondAccordion() {
  document.getElementById('accordion-2').classList.toggle('active');
}

function turnArrowOne() {
  document.querySelector('.features-mobile').classList.toggle('active');
}

function turnArrowTwo() {
  document.querySelector('.company-mobile').classList.toggle('active');
}
