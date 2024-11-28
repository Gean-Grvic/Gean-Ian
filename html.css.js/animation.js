document.addEventListener("DOMContentLoaded", () => {
    const scrollElements = document.querySelectorAll(".scroll-animate");
  
    const observerOptions = {
      root: null, // Observing in the viewport
      rootMargin: "0px",
      threshold: 0.1, // Element becomes visible when 10% is in view
    };
  
    const scrollCallback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Add 'visible' to trigger animation
          entry.target.classList.add("visible");
          // After animation ends, add 'repeated' for it to animate repeatedly
          entry.target.addEventListener('animationiteration', () => {
            entry.target.classList.add("repeated");
          });
  
          observer.unobserve(entry.target); // Stop observing once animation is added
        } else {
          // Remove classes if element goes out of view
          entry.target.classList.remove("visible", "repeated");
        }
      });
    };
  
    const observer = new IntersectionObserver(scrollCallback, observerOptions);
  
    scrollElements.forEach((el) => observer.observe(el));
  });
  