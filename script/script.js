
//dropdown

document.addEventListener('DOMContentLoaded', function () {
    // Get all dropdown toggles
    var dropdowns = document.querySelectorAll('.nav-item.dropdown');

    // Add event listeners for mouseenter and mouseleave
    dropdowns.forEach(function (dropdown) {
      dropdown.addEventListener('mouseenter', function () {
        this.querySelector('.dropdown-menu').classList.add('show');
      });

      dropdown.addEventListener('mouseleave', function () {
        this.querySelector('.dropdown-menu').classList.remove('show');
      });
    });
  });

// Navbar

  // Add an event listener for the scroll event
window.addEventListener('scroll', function() {
  // Get the navbar element
  var navbar = document.querySelector('.navbar');

  // Check if the user has scrolled beyond a certain threshold (e.g., 100 pixels)
  if (window.scrollY > 100) {
      // If scrolled beyond the threshold, add a class to change the color
      navbar.classList.add('scrolled');
  } else {
      // If not scrolled beyond the threshold, remove the class to revert to the original color
      navbar.classList.remove('scrolled');
  }
});


// FAQs
  const faqs = document.querySelectorAll(".faq");

  faqs.forEach((faq) => {
    faq.addEventListener("click", () =>{
      faq.classList.toggle("active");
    })
  });


  //Products
 
  var copy = document.querySelector('.logos-slide').cloneNode(true);
  document.querySelector('.logos').appendChild(copy);