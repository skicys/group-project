// Carousel Module
// Carousel Module
function carouselModule() {
  const carousel = document.querySelector('.johnny-carousel');
  let currdeg = 0;

  // Add event listeners for the buttons
  document.querySelector('.johnny-next').addEventListener('click', () => rotate('n'));
  document.querySelector('.johnny-prev').addEventListener('click', () => rotate('p'));

  // Rotate the carousel based on direction
  function rotate(direction) {
    if (direction === 'n') {
      currdeg -= 90;
    } else if (direction === 'p') {
      currdeg += 90;
    }
    carousel.style.transform = `rotateY(${currdeg}deg)`;
  }
}

// Initialize the carousel module after DOM content is loaded
document.addEventListener('DOMContentLoaded', carouselModule);



    const images = document.querySelectorAll('.johnny-img');
    images.forEach(img => {
      img.addEventListener('click', event => {
        event.preventDefault(); // Prevent navigation on click

        const href = img.parentElement.href; // Get the link to navigate
        img.classList.add('zoom-in'); // Add zoom-in animation class

        img.addEventListener('animationend', () => {
          // Start zoom-out and rotate effect
          img.style.animation = 'zoomOutRotate 2s forwards';

          // After zoom-out animation ends, navigate to the link
          img.addEventListener('animationend', () => {
            window.location.href = href; // Navigate to the page
          }, { once: true });
        }, { once: true });
      });
    });

    

   function showRiddle() {
      // Display the riddle in the #riddle element
      document.getElementById('riddle').innerText = "What walks on four legs in the morning, two legs at noon, and three legs in the evening?";
      alert("Riddle is now displayed!"); // Alert to confirm the riddle was displayed
    }

    function checkAnswer() {
      // Get the user's answer
      let userAnswer = document.getElementById('answer').value.trim().toLowerCase();
     
      // Correct answer
      let correctAnswer = "man";

    
      if (userAnswer === correctAnswer) {
        document.getElementById('riddle').innerText = "Correct, you can live!";
        alert("Correct, you can live!"); // Alert to confirm correct answer
      } else if (userAnswer !== "") {
        alert("Incorrect answer,you are dead..."); // Alert before redirecting
        // Redirect to index.html if the answer is incorrect and input is not empty
        window.location.href = "index.html";
      }
    }


// Advisor Toggle Button
const toggleButton = document.getElementById('johnny-toggle-button');
const advisoryIframe = document.getElementById('johnny-advisory-iframe');

toggleButton.addEventListener('click', () => {
  if (advisoryIframe.style.display === 'none') {
    advisoryIframe.style.display = 'block';
    toggleButton.textContent = 'Hide Advisories';
  } else {
    advisoryIframe.style.display = 'none';
    toggleButton.textContent = 'Show Advisories';
  }
});

// Canvas Resize and Mouse Interaction
const container = document.getElementById('container');
const canvas = document.getElementById('curveCanvas');
const ctx = canvas.getContext('2d');

function resizeCanvas() {
  canvas.width = container.clientWidth;
  canvas.height = container.clientHeight;
}

window.addEventListener('resize', resizeCanvas);
window.addEventListener('load', resizeCanvas);

container.addEventListener('mousemove', (event) => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  const rect = canvas.getBoundingClientRect();
  const mouseX = event.clientX - rect.left;
  const mouseY = event.clientY - rect.top;

  const startX = canvas.width / 2;
  const startY = canvas.height / 2;

  ctx.beginPath();
  ctx.moveTo(startX, startY);

  const controlX = (startX + mouseX) / 2;
  const controlY = startY - 50;

  ctx.quadraticCurveTo(controlX, controlY, mouseX, mouseY);

  // Simulated Time Zone Offset (for demonstration purposes)
  const longitude = (mouseX / canvas.width) * 360 - 180; // Longitude from -180° to 180°
  const offset = Math.floor(longitude / 15); // Approximate time zone offset
  const utcHour = new Date().getUTCHours();
  const localHour = (utcHour + offset + 24) % 24;

  const isDaytime = localHour >= 6 && localHour < 18;

  ctx.strokeStyle = isDaytime ? 'yellow' : 'blue';
  ctx.lineWidth = 2;
  ctx.stroke();

  const localTime = `${Math.floor(localHour+2).toString().padStart(2, '0')}:${Math.floor((localHour % 1) * 60).toString().padStart(2, '0')}`;
  ctx.font = '14px Arial';
  ctx.fillStyle = isDaytime ? 'black' : 'white';
  ctx.fillText(`Local Time: ${localTime}`, mouseX + 10, mouseY - 10);
});




