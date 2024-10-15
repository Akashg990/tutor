document.addEventListener('DOMContentLoaded', function () {
    const searchButton = document.getElementById('search-button');
    const searchInput = document.getElementById('search-input');
    const tutorList = document.getElementById('tutor-list');

    searchButton.addEventListener('click', function () {
        const searchQuery = searchInput.value.toLowerCase();
        
        // Get all the tutor cards
        const tutorCards = document.querySelectorAll('.tutor-card');

        // Filter the tutors based on the search query
        tutorCards.forEach(function (card) {
            const subjects = card.getAttribute('data-subject').toLowerCase();

            // Show or hide the tutor card based on the search match
            if (subjects.includes(searchQuery)) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });
});
