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


// Quotes - carousel
// document.querySelectorAll('.carousel-container').forEach(container => {
//     const carousel = container.querySelector('.carousel');
//     const prevBtn = container.querySelector('.arrow-btn-prev');
//     const nextBtn = container.querySelector('.arrow-btn-next');
//     let position = 0;

//     prevBtn.addEventListener('click', () => {
//         position += 120;
//         carousel.style.transform = `translateX(${position}px)`;
//     });

//     nextBtn.addEventListener('click', () => {
//         position -= 120;
//         carousel.style.transform = `translateX(${position}px)`;
//     });
// });


// document.querySelectorAll('.carousel-container').forEach(container => {
//     const carousel = container.querySelector('.carousel');
//     const carouselItems = container.querySelectorAll('.carousel-item');
//     const prevBtn = container.querySelector('.arrow-btn-prev');
//     const nextBtn = container.querySelector('.arrow-btn-next');
//     let position = 0;
//     const itemWidth = 120; // Assuming each carousel item has a width of 120px

//     window.onload = function () {
//         position = 0;
//         carousel.style.transform = `translateX(${position}px)`
//     };

//     prevBtn.addEventListener('click', () => {
//        if (position < 0) {
//             position += itemWidth;
//             carousel.style.transform = `translateX(${position}px)`;
//        }
//     });

//     nextBtn.addEventListener('click', () => {
//         const maxPosition = -(carouselItems.length - 1) * itemWidth;
//         if (position > maxPosition) {
//             position -= itemWidth;
//             carousel.style.transform = `translateX(${position}px)`;
//         }
//     });
// });

window.onload = function () {
    document.querySelectorAll('.carousel-container').forEach(container => {
        const carousel = container.querySelector('.carousel');
        const carouselItems = container.querySelectorAll('.carousel-item');
        const prevBtn = container.querySelector('.arrow-btn-prev');
        const nextBtn = container.querySelector('.arrow-btn-next');
        let position = 0;
        let itemWidth = 230;

        // Adjust itemWidth for mobile screens
        if (window.innerWidth <= 440) {
            itemWidth = 240;
        }

        carousel.style.transform = `translateX(${position}px)`;

        prevBtn.addEventListener('click', () => {
            if (position < 0) {
                position += itemWidth;
                carousel.style.transform = `translateX(${position}px)`;
            }
        });

        nextBtn.addEventListener('click', () => {
            const maxPosition = -(carouselItems.length - 1) * itemWidth;
            if (position > maxPosition) {
                position -= itemWidth;
                carousel.style.transform = `translateX(${position}px)`;
            }
        });

        // Update itemWidth on window resize
        window.addEventListener('resize', () => {
            if (window.innerWidth <= 440) {
                itemWidth = 240; // Adjust item width for mobile
            } else {
                itemWidth = 230; // Default item width for desktop
            }
        });
    });
};


