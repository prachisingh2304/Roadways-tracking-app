
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

//products
document.addEventListener("DOMContentLoaded", function() {
    const logosSlide = document.querySelector(".logos-slide");
    const images = Array.from(logosSlide.querySelectorAll("img"));
    const totalWidth = images.reduce((acc, img) => acc + img.width, 0);
    
    let cloneCount = Math.ceil(window.innerWidth / totalWidth);
  
    for (let i = 0; i < cloneCount; i++) {
      images.forEach(image => {
        const clone = image.cloneNode(true);
        logosSlide.appendChild(clone);
      });
    }
    
    // Restart the animation on window resize
    window.addEventListener("resize", () => {
      logosSlide.style.animation = "none";
      setTimeout(() => {
        logosSlide.style.animation = "";
      }, 50);
    });
  });
  
  //contact
 
  document.addEventListener('DOMContentLoaded', function() {
    var mobileInput = document.getElementById('mobileInput');
    var emailInput = document.getElementById('emailInput');
    var messageInput = document.getElementById('messageInput');
    var inputs = document.querySelectorAll('.form-control');

    mobileInput.addEventListener('invalid', function(event) {
        if (mobileInput.validity.valueMissing) {
            mobileInput.setCustomValidity('Please enter your mobile number.');
        } else if (mobileInput.validity.patternMismatch) {
            mobileInput.setCustomValidity('Please enter a valid 10-digit mobile number.');
        } else {
            mobileInput.setCustomValidity('');
        }
    });

    mobileInput.addEventListener('input', function(event) {
        mobileInput.setCustomValidity('');
    });

    emailInput.addEventListener('invalid', function(event) {
        if (emailInput.validity.valueMissing) {
            emailInput.setCustomValidity('Please enter your email address.');
        } else if (emailInput.validity.typeMismatch) {
            emailInput.setCustomValidity('Please enter a valid email address.');
        } else {
            emailInput.setCustomValidity('');
        }
    });

    emailInput.addEventListener('input', function(event) {
        emailInput.setCustomValidity('');
    });

    // Auto-resize textarea
    function autoResizeTextarea(element) {
        element.style.height = 'auto';
        element.style.height = element.scrollHeight + 'px';
    }

    messageInput.addEventListener('input', function() {
        autoResizeTextarea(messageInput);
    });

    // Initialize height
    autoResizeTextarea(messageInput);

    // Hide label on input
    inputs.forEach(function(input) {
        var label = input.nextElementSibling;
        input.addEventListener('input', function() {
            if (input.value) {
                label.style.visibility = 'hidden';
            } else {
                label.style.visibility = 'visible';
            }
        });
        // Initialize visibility based on initial value
        if (input.value) {
            label.style.visibility = 'hidden';
        }
    });
});

