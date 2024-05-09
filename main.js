// import quotes from './quotes.js';
import advices from './advices.js';

// // Function to open the modal for quotes
// function openQuoteModal(modalId, quote) {
//     const modalContent = `
//         <div id="${modalId}" class="modal">
//             <div class="modal-content">
//                 <div class="quote">${quote.text}</div>
//                 <div class="author">~ ${quote.author}</div>
//                 <span class="close" data-modal-id="${modalId}">&times;</span>
//             </div>
//         </div>
//     `;
//     document.getElementById('modalContainer').innerHTML = modalContent;

//     // Add event listener to the close button
//     const closeButton = document.querySelector(`#${modalId} .close`);
//     closeButton.addEventListener('click', () => {
//         closeModal(modalId);
//     });
// }

// Function to open the modal for advices
function openAdviceModal(modalId, advice) {
    const modalContent = `
        <div id="${modalId}" class="modal">
            <div class="modal-content">
                <div class="advice">${advice.content}</div>
                <div class="person">${advice.person}</div>
                <span class="close" data-modal-id="${modalId}">&times;</span>
            </div>
        </div>
    `;
    document.getElementById('modalContainer').innerHTML = modalContent;

    // Add event listener to the close button
    const closeButton = document.querySelector(`#${modalId} .close`);
    closeButton.addEventListener('click', () => {
        closeModal(modalId);
    });
}

// Function to close the modal
function closeModal(modalId) {
    document.getElementById(modalId).remove();
}

// Add event listeners to each <p> element within <details> elements for quotes
document.querySelectorAll('.quotes-section details p').forEach((p, index) => {
    p.addEventListener('click', () => {
        const modalId = `modal${index + 1}`;
        const quoteIndex = index;
        const quote = quotes[quoteIndex];
        openQuoteModal(modalId, quote);
    });
});

// Add event listeners to each <p> element within <details> elements for advices
document.querySelectorAll('.advice-section details p').forEach((p, index) => {
    p.addEventListener('click', () => {
        const modalId = `modal${index + 1}`;
        const adviceIndex = index;
        const advice = advices[adviceIndex];
        openAdviceModal(modalId, advice);
    });
});


document.querySelectorAll('.carousel-container').forEach(container => {
    const carousel = container.querySelector('.carousel');
    const prevBtn = container.querySelector('.arrow-btn-prev');
    const nextBtn = container.querySelector('.arrow-btn-next');
    const cards = carousel.querySelectorAll('.carousel-item');
    let currentPosition = 0;
    let touchStartX = 0;
    let touchEndX = 0;
    const cardWidth = cards[0].offsetWidth;

    // Set initial position to 0
    carousel.style.transform = `translateX(${currentPosition}px)`;

    prevBtn.addEventListener('click', () => {
        currentPosition += cardWidth;
        if (currentPosition > 0) {
            currentPosition = 0;
        }
        carousel.style.transform = `translateX(${currentPosition}px)`;
    });

    nextBtn.addEventListener('click', () => {
        currentPosition -= cardWidth;
        const minPosition = -(cardWidth * (cards.length - 1));
        if (currentPosition < minPosition) {
            currentPosition = minPosition;
        }
        carousel.style.transform = `translateX(${currentPosition}px)`;
    });

    carousel.addEventListener('touchstart', (e) => {
        touchStartX = e.touches[0].clientX;
    });

    carousel.addEventListener('touchmove', (e) => {
        touchEndX = e.touches[0].clientX;
    });

    carousel.addEventListener('touchend', () => {
        const diff = touchStartX - touchEndX;
        const threshold = cardWidth / 4;
        if (Math.abs(diff) > threshold) {
            if (diff > 0) {
                // Swiped left
                currentPosition -= cardWidth;
                const minPosition = -(cardWidth * (cards.length - 1));
                if (currentPosition < minPosition) {
                    currentPosition = minPosition;
                }
            } else {
                // Swiped right
                currentPosition += cardWidth;
                if (currentPosition > 0) {
                    currentPosition = 0;
                }
            }
            carousel.style.transform = `translateX(${currentPosition}px)`;
        }
        touchStartX = 0;
        touchEndX = 0;
    });
});




