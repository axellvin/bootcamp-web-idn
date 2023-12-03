// Navbar
$(document).ready(function() {
  $("nav a").click(function(event) {
      event.preventDefault();
      $("html, body").animate({
          scrollTop: $($(this).attr("href")).offset().top
        }, 800);
    });
});

// Header
document.addEventListener('DOMContentLoaded', function () {
    const textElement = document.getElementById('typing-text');
    const textContent = textElement.textContent;
  
    textElement.textContent = '';
  
    function typeWriter() {
      let i = 0;
      const typingInterval = setInterval(function () {
        textElement.textContent += textContent[i];
        i++;
  
        if (i === textContent.length) {
          clearInterval(typingInterval);
        }
      }, 100);
    }
    
    window.addEventListener('load', typeWriter);
  });
  