function loadModalContent(url, modalId) {
    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.text();
        })
        .then(htmlContent => {
            const modalElement = document.getElementById(modalId);
            modalElement.innerHTML = htmlContent;
            modalElement.style.display = 'block';

            // Add a close button or functionality to hide the modal
            const closeModal = () => {
                modalElement.style.display = 'none';
            };

            // Optionally, listen for a close button if it's part of the modal content
            const closeButton = modalElement.querySelector('.close-modal');
            if (closeButton) {
                closeButton.addEventListener('click', closeModal);
            }

            // Close modal when clicking outside the modal
            window.addEventListener('click', (event) => {
                if (event.target === modalElement) {
                    closeModal();
                }
            });
        })
        .catch(error => {
            console.error('Error fetching modal content:', error);
            alert('There was an error loading the modal content.');
        });
}

// Event listeners for buttons to open modals
document.getElementById('addTaskButton').addEventListener('click', function() {
    loadModalContent('modals/addtask.html', 'modal-container');
});

document.getElementById('addMemberButton').addEventListener('click', function() {
    loadModalContent('modals/addmember.html', 'modal-container');
});

document.getElementById('viewCalendarButton').addEventListener('click', function() {
    loadModalContent('modals/viewcalendar.html', 'modal-container');
});