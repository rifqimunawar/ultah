onload = () =>{
        document.body.classList.remove("container");
};

const lines = document.querySelectorAll('.typewriter h1');

function startLineAnimation(index) {
  if (index < lines.length) {
    const line = lines[index];
    line.style.visibility = 'visible';
    line.style.animation = `typing-line${index + 1} 3.5s steps(30, end) forwards, blink-caret .5s step-end infinite`;
    line.addEventListener('animationend', () => startLineAnimation(index + 1));
  }
}

// Start the animation for the first line
startLineAnimation(0);
