//  JavaScript for Mobile Menu and Dropdowns 
document.getElementById('menu-toggle').addEventListener('click', function () {
    const menu = document.getElementById('mobile-menu');
    menu.classList.toggle('hidden');
});

document.querySelectorAll('.group').forEach(group => {
    group.addEventListener('mouseover', () => {
        const dropdown = group.querySelector('ul');
        if (dropdown) dropdown.classList.remove('hidden');
    });
    group.addEventListener('mouseleave', () => {
        const dropdown = group.querySelector('ul');
        if (dropdown) dropdown.classList.add('hidden');
    });
});

// Smooth scroll for nav links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Get navbar and header elements
const navbar = document.querySelector('nav');
const header = document.querySelector('header');

// Function to toggle navbar background and text color based on scroll position
function toggleNavbarAppearance() {
const headerHeight = header.offsetHeight;

if (window.scrollY > headerHeight) {
navbar.style.backgroundColor = 'rgba(0, 0, 0, 0.6)';

} else {
navbar.style.backgroundColor = 'transparent';

}
}


// Add scroll event listener
window.addEventListener('scroll', toggleNavbarAppearance);

 // Open the modal and populate it with data
 function openModal(name, position, contact, description, imageSrc) {
    // Set modal content dynamically
    document.getElementById("modalName").textContent = name;
    document.getElementById("modalPosition").textContent = position;
    document.getElementById("modalContactInfo").textContent = contact;
    document.getElementById("modalDescription").textContent = description;
    document.getElementById("modalImage").src = imageSrc;

    // Show the modal by adding the 'active' class
    const modal = document.getElementById("teamMemberModal");
    modal.classList.add("active");
  }

  function closeModal() {
    const modal = document.getElementById("teamMemberModal");
    modal.classList.remove("active");
    modal.classList.add("opacity-0", "pointer-events-none");
}


//   // Close the modal if the user clicks outside of the modal content
//   window.onclick = function(event) {
//     const modal = document.getElementById("teamMemberModal");
//     if (event.target === modal) {
//       closeModal();
//     }
//   }

  let currentSlide = 1;
function toggleSlide() {
    const slide1 = document.getElementById('slide1');
    const slide2 = document.getElementById('slide2');

    if (currentSlide === 1) {
        slide1.classList.add('translate-y-full');
        slide2.classList.remove('translate-y-full');
        currentSlide = 2;
    } else {
        slide1.classList.remove('translate-y-full');
        slide2.classList.add('translate-y-full');
        currentSlide = 1;
    }
}

// Automatically toggle slides every 5 seconds
setInterval(toggleSlide, 5000);
  
const learnMoreBtn = document.getElementById("learn-more-btn");
const dropdownOverview = document.getElementById("dropdown-overview");
const collapseButton = document.getElementById("collapse-button");
const imageContainer = document.getElementById("image-container");

// Event Listener for "Learn More" button
learnMoreBtn.addEventListener("click", () => {
  // Show the dropdown content
  dropdownOverview.classList.remove("hidden");
  dropdownOverview.classList.add("visible");

  // Hide the "Learn More" button
  learnMoreBtn.classList.add("hidden");

  // Show the "Collapse" button
  collapseButton.classList.remove("hidden");

  // Expand the image container
  imageContainer.classList.add("expanded");
});

// Event Listener for "Collapse" button
collapseButton.addEventListener("click", () => {
  // Hide the dropdown content
  dropdownOverview.classList.add("hidden");
  dropdownOverview.classList.remove("visible");

  // Show the "Learn More" button
  learnMoreBtn.classList.remove("hidden");

  // Hide the "Collapse" button
  collapseButton.classList.add("hidden");

  // Collapse the image container
  imageContainer.classList.remove("expanded");
});

// Import GSAP library if needed

document.addEventListener("DOMContentLoaded", () => {
    const counters = document.querySelectorAll(".counter");
  
    const animateCounters = () => {
      counters.forEach((counter) => {
        const target = +counter.getAttribute("data-target");
        gsap.fromTo(
          counter,
          { innerHTML: 0 },
          {
            innerHTML: target,
            duration: 2,
            ease: "power2.out",
            snap: { innerHTML: 1 },
            onUpdate: function () {
              counter.textContent = Math.ceil(counter.innerHTML);
            },
          }
        );
      });
    };
  
    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateCounters();
            observer.disconnect(); // Stop observing after first trigger
          }
        });
      },
      { threshold: 0.3 } // Trigger when 30% of the section is visible
    );
  
    observer.observe(document.querySelector("#statistics"));
  });
  
  
