import advices from './advices.js';

// Function to open the modal
function openModal(modalId, advice) {
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

// Add event listeners to each <p> element
document.querySelectorAll('.advice-section details p').forEach((p, index) => {
    p.addEventListener('click', () => {
        const modalId = `modal${index + 1}`;
        const adviceIndex = index;
        const advice = advices[adviceIndex];
        openModal(modalId, advice);
    });
});
