import '../home_styles/fadingWindow.css'; // Import the CSS for styling

function FadingWindow({ title, subtitle }) {

    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
    const container = document.getElementById('first-view-container');
    let fadeThreshold = 400; // Pixels to scroll before complete fade

    // Scroll to top functionality
    const scrollTopButton = document.getElementById('scroll-top');

    window.addEventListener('scroll', () => {
        // Show/hide scroll-to-top button
        if (window.pageYOffset > 300) {
            scrollTopButton.classList.add('visible');
        } else {
            scrollTopButton.classList.remove('visible');
        }
    });

    scrollTopButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    let isVisible = true;

    // Enable pointer events for the container
    container.style.pointerEvents = 'auto';

    // Function to update opacity based on scroll position
    function updateOpacity(scrollAmount) {
        const opacity = Math.max(0, 1 - (scrollAmount / fadeThreshold));
        document.querySelector('#first-title').style.transform = `translateX(-${Math.abs(scrollAmount)}px)`;
        document.querySelector('#first-subtitle').style.transform = `translateX(${Math.abs(scrollAmount)}px)`;
        document.querySelector('#animation-container').style.transform = `translateY(${Math.abs(scrollAmount / 1.7)}px)`;
        container.style.opacity = opacity;

        if (opacity === 0 && isVisible) {
            container.style.pointerEvents = 'none';
            isVisible = false;
        } else if (opacity > 0 && !isVisible) {
            container.style.pointerEvents = 'auto';
            isVisible = true;
        }
    }

    // Handle wheel events for smooth fade effect
    let accumulatedDelta = 0;
    container.addEventListener('wheel', (e) => {
        e.preventDefault();

        // Accumulate scroll delta
        if (e.deltaY > 0) { // Scrolling down
            accumulatedDelta = Math.min(fadeThreshold, accumulatedDelta + Math.abs(e.deltaY));
        } else { // Scrolling up
            accumulatedDelta = Math.max(0, accumulatedDelta - Math.abs(e.deltaY));
        }

        updateOpacity(accumulatedDelta);
    }, { passive: false });

    // Handle touch events
    let touchStartY = 0;
    container.addEventListener('touchstart', (e) => {
        touchStartY = e.touches[0].clientY;
    }, { passive: true });

    container.addEventListener('touchmove', (e) => {
        e.preventDefault();
        const touchY = e.touches[0].clientY;
        const touchDiff = touchStartY - touchY;

        if (touchDiff > 0) { // Scrolling up/away
            accumulatedDelta = Math.min(fadeThreshold, accumulatedDelta + Math.abs(touchDiff / 2));
        } else { // Scrolling down/towards
            accumulatedDelta = Math.max(0, accumulatedDelta - Math.abs(touchDiff / 2));
        }

        touchStartY = touchY;
        updateOpacity(accumulatedDelta);
    }, { passive: false });

    // Add smooth return on touch end if not past threshold
    container.addEventListener('touchend', () => {
        if (accumulatedDelta < fadeThreshold * 0.5) {
            const returnInterval = setInterval(() => {
                accumulatedDelta = Math.max(0, accumulatedDelta - 10);
                updateOpacity(accumulatedDelta);

                if (accumulatedDelta === 0) {
                    clearInterval(returnInterval);
                }
            }, 16);
        } else {
            accumulatedDelta = fadeThreshold;
            updateOpacity(fadeThreshold);
        }
    });












    return (
        <div id="first-view-container">
            <div id="first-view">
                <div id="frame">
                    <h1 id="first-title">
                        {title}
                    </h1>
                    <h2 id="first-subtitle">
                        {subtitle}
                    </h2>
                </div>
                {/* Canvas element where the Lottie animation will be rendered */}
                <div id="animation-container">
                    <dotlottie-player src="https://lottie.host/4211b6db-d1f9-41ab-a9cf-01d08981d880/Fl9hwi6Nkj.lottie"
                        background="transparent" speed="1" style={{ width: "200px", height: "200px" }} loop autoplay></dotlottie-player>
                </div>
            </div>
        </div>
    )
}

export default FadingWindow;