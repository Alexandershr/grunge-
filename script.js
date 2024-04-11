// Select all navigation links
const navLinks = document.querySelectorAll('nav a');

// Add hover effect to each link
navLinks.forEach(link => {
  link.addEventListener('mouseover', () => {
    link.style.color = 'orange'; // Change color on mouse over
  });
  link.addEventListener('mouseout', () => {
    link.style.color = ''; // Reset color on mouse out
  });
});
document.addEventListener('DOMContentLoaded', function() {
    const shopNowButton = document.querySelector('.btn');
    
    shopNowButton.addEventListener('click', function() {
        alert('You clicked the Shop Guitars Now button!');
    });
});

