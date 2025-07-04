import '../home_styles/toTopBtn.css'
import React, { useState, useEffect } from 'react'
function ToTopBtn() {

    const [scroll, setScroll] = useState(window.pageYOffset);

    useEffect(() => {
        document.addEventListener('scroll', () => {
            setScroll(window.pageYOffset);
        });
        return () => {
            document.removeEventListener('scroll', () => {
                setScroll(window.pageYOffset);
            });
        }
    }, [])

    useEffect(() => {
        document.querySelector('#scroll-top').addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
            setScroll(window.pageYOffset);
        });
    });

    return (
        <button id="scroll-top" aria-label="Scroll to top" className={scroll > 300 ? 'visible' : 'none'}>
            <i className="fas fa-arrow-up"></i>
        </button>
    )
}

export default ToTopBtn;