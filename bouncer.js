// Initialize starting position and velocity
const logoSize = 180; // Size of the logo in pixels
let position = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
let velocity = { x: (Math.random() - 0.5) * 15, y: (Math.random() - 0.5) * 15 };
const logo = document.getElementById('bouncer');

// Function to update position and handle bouncing
function update() {
  // Update position
  position.x += velocity.x;
  position.y += velocity.y;

  // Bounce off walls
  if (position.x < 0 || position.x > window.innerWidth - logoSize) {
    velocity.x = -velocity.x;
  }
  if (position.y < 0 || position.y > window.innerHeight - logoSize) {
    velocity.y = -velocity.y;
  }

  // Set position of the logo
  logo.style.left = `${position.x}px`;
  logo.style.top = `${position.y}px`;

  // Request next frame
  requestAnimationFrame(update);
}

// Start the animation
update();
