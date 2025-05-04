// Event Handling
const colorButton = document.getElementById('colorButton');
colorButton.addEventListener('click', () => {
  colorButton.textContent = 'You clicked me!';
  colorButton.style.backgroundColor = '#2196f3';
});

const hoverBox = document.getElementById('hoverBox');
hoverBox.addEventListener('mouseover', () => {
  hoverBox.style.backgroundColor = '#ffc107';
});
hoverBox.addEventListener('mouseout', () => {
  hoverBox.style.backgroundColor = '#ddd';
});

document.addEventListener('keydown', (event) => {
  document.getElementById('keyOutput').textContent = `You pressed: ${event.key}`;
});

const secretButton = document.getElementById('secretButton');
secretButton.addEventListener('dblclick', () => {
  alert("🎉 Secret Unlocked!");
});

// Image Gallery
const images = [
  'https://via.placeholder.com/300?text=Image+1',
  'https://via.placeholder.com/300?text=Image+2',
  'https://via.placeholder.com/300?text=Image+3'
];
let currentImage = 0;
const galleryImage = document.getElementById('galleryImage');

document.getElementById('nextBtn').addEventListener('click', () => {
  currentImage = (currentImage + 1) % images.length;
  galleryImage.src = images[currentImage];
});

document.getElementById('prevBtn').addEventListener('click', () => {
  currentImage = (currentImage - 1 + images.length) % images.length;
  galleryImage.src = images[currentImage];
});

// Accordion
const toggles = document.querySelectorAll('.accordion-toggle');
toggles.forEach((toggle) => {
  toggle.addEventListener('click', () => {
    const content = toggle.nextElementSibling;
    content.style.display = content.style.display === 'block' ? 'none' : 'block';
  });
});

// Form Validation
const form = document.getElementById('signupForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');

nameInput.addEventListener('input', () => {
  document.getElementById('nameFeedback').textContent = nameInput.value ? '' : 'Name is required';
});

emailInput.addEventListener('input', () => {
  const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput.value);
  document.getElementById('emailFeedback').textContent = valid ? '' : 'Invalid email';
});

passwordInput.addEventListener('input', () => {
  const valid = passwordInput.value.length >= 8;
  document.getElementById('passwordFeedback').textContent = valid ? '' : 'Minimum 8 characters';
});

form.addEventListener('submit', (e) => {
  if (!nameInput.value || !emailInput.value || passwordInput.value.length < 8) {
    e.preventDefault();
    alert('Please fill out the form correctly.');
  }
});
