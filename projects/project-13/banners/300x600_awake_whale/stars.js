function generateRandomStars(numStars,w,h) {
    // const starContainer = document.createElement('div');
    const starContainer = document.getElementById("star-container")
    // starContainer.id = 'star-container';
    starContainer.style.position = 'absolute';
    starContainer.style.top = '0';
    starContainer.style.left = '0';
    starContainer.style.width = w +'px';
    starContainer.style.height = h + 'px';
    starContainer.style.pointerEvents = 'none'; // Ensure stars don't interfere with other elements

    for (let i = 0; i < numStars; i++) {
        const star = document.createElement('div');
        star.style.position = 'absolute';
        let size = Math.random() * 2 + 1; // Random size between 1 and 3 pixels
        let alpha = Math.random() * 0.4 + 0.6; // Random opacity between 0.5 and 1
        star.style.width = `${size}px`;  
        star.style.height = `${size}px`;     
        // star.style.width = '1px';
        // star.style.height = '1px';
        // star.style.webkitFilter = "blur(1px)";
        star.style.backgroundColor = 'white';
        star.style.borderRadius = '50%';
        star.style.opacity = alpha; 
        // Random position within the container
        star.style.top = `${Math.random() * 100}%`;
        star.style.left = `${Math.random() * 100}%`;

        starContainer.appendChild(star);
    }

    document.body.appendChild(starContainer);
    return starContainer.querySelectorAll('div');
}

function twinkleStars(starElements) {
    starElements.forEach(star => {
        const twinkle = () => {
            gsap.to(star, {
                duration: Math.random() * 1.5 + 0.8, // Random duration between 0.5 and 2.5 seconds
                opacity: Math.random()* 0.4 + 0.1, // Random opacity for twinkling effect
                repeat: -1, // Repeat indefinitely
                yoyo: true, // Reverse animation for a smooth twinkle
                ease: "sine.inOut"
            });
        };
        twinkle();
    });

    // Stop all twinkling after 15 seconds
    setTimeout(() => {
        console.log("Stopping twinkling stars");   
        //gsap.globalTimeline.clear(); // Clear all GSAP animations
        gsap.killTweensOf(starElements); // Stop all animations for the stars   
    }, 20000);
}

// Generate stars and apply twinkling effect
// const stars = generateRandomStars(300,300,310);
//twinkleStars(stars);