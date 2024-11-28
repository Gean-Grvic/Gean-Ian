document.querySelectorAll('.thumbnail').forEach(thumbnail => {
    const video = thumbnail.querySelector('video');

  
    // Play video on hover
    thumbnail.addEventListener('mouseover', () => {
      video.play();
    });
  
    // Pause video when unhovered
    thumbnail.addEventListener('mouseout', () => {
      video.pause();
    });
  });
  document.querySelectorAll('.thumbnail-anime').forEach(thumbnail => {
    const video = thumbnail.querySelector('video');

  
    // Play video on hover
    thumbnail.addEventListener('mouseover', () => {
      video.play();
    });
  
    // Pause video when unhovered
    thumbnail.addEventListener('mouseout', () => {
      video.pause();
    });
  });
  
    //Manga section
    document.addEventListener('DOMContentLoaded', function () {
      // Define the showGallery function
      function showGallery(category) {
          // Get the selected category gallery element
          const selectedGallery = document.getElementById(category);

          // Check if the gallery is currently visible
          if (selectedGallery.style.display === 'flex') {
              // If it's visible, hide it
              selectedGallery.style.display = 'none';
          } else {
              // Otherwise, hide all galleries first
              const galleries = document.querySelectorAll('.manga-category');
              galleries.forEach(gallery => gallery.style.display = 'none');

              // Then show the selected gallery
              selectedGallery.style.display = 'flex';
          }
      }

      // Export the function to be accessible in HTML
      window.showGallery = showGallery;

      // Optionally, you can also ensure the initial state is set correctly
      const galleries = document.querySelectorAll('.manga-category');
      galleries.forEach(gallery => gallery.style.display = 'none'); // Initially hide all galleries
  });

    document.addEventListener("DOMContentLoaded", () => {
      const categoryItems = document.querySelectorAll(".manga-category");
  
      // Ensure there are equal or corresponding elements
      if (categoryItems.length !== content3Elements.length) {
          console.error("Mismatch between '.manga-container' and '#content-manga' elements.");
          return; // Stop execution if the numbers don't match
      }
  
      categoryItems.forEach((item, index) => {
          item.addEventListener("click", () => {
              // Check if the current item is already clicked
              const isAlreadyClicked = item.classList.contains("clicked");
  
              // Remove 'clicked' class from all items and content elements
              categoryItems.forEach(category => category.classList.remove("clicked"));
              content3Elements.forEach(content => content.classList.remove("clicked"));
  
              // Toggle 'clicked' only if it wasn't already clicked
              if (!isAlreadyClicked) {
                  item.classList.add("clicked");
                  content3Elements[index].classList.add("clicked");
              }
          });
      });
  });