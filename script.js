// Function to filter tutors based on search query
document.getElementById('search-bar').addEventListener('input', function () {
    var searchQuery = document.getElementById('search-bar').value.toLowerCase();  // Convert input to lowercase
    var tutorCards = document.querySelectorAll('.tutor-card');  // Select all tutor cards

    tutorCards.forEach(function (card) {
        var tutorSubject = card.getAttribute('data-subject').toLowerCase();  // Get subject from data attribute
        // Check if the search query is found in the tutor's subject
        if (tutorSubject.includes(searchQuery)) {
            card.style.display = 'block';  // Show the tutor if subject matches
        } else {
            card.style.display = 'none';   // Hide the tutor if subject doesn't match
        }
    });
});
