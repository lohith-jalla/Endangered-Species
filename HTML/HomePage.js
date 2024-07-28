document.addEventListener("DOMContentLoaded", function() {
    // Wait for 2 seconds
    setTimeout(function() {
      // Add the "loaded" class to the body after 2 seconds
      document.body.classList.add("loaded");
      // Remove the ::before element after the transition is complete
      setTimeout(function() {
        document.body.classList.remove("loaded");
      }, 1000); // Match the transition duration
    }, 0);
  });