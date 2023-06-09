// Initialize starting position and velocity
let position = { x: Math.random() * window.innerWidth, y: Math.random() * window.innerHeight };
let velocity = { x: (Math.random() - 0.5) * 20, y: (Math.random() - 0.5) * 20 };
const emoji = document.getElementById('bouncer');

const emojiSize = 80; // Size of the emoji in pixels

// Function to update position and handle bouncing
function update() {
  // Update position
  position.x += velocity.x;
  position.y += velocity.y;

  // Bounce off walls
  if (position.x < 0 || position.x > window.innerWidth - emojiSize) {
    velocity.x = -velocity.x;
  }
  if (position.y < 0 || position.y > window.innerHeight - emojiSize) {
    velocity.y = -velocity.y;
  }

  // Set position of the emoji
  emoji.style.left = `${position.x}px`;
  emoji.style.top = `${position.y}px`;

  // Request next frame
  requestAnimationFrame(update);
}

// Start the animation
update();
