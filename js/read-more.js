document.addEventListener('DOMContentLoaded', function() {
    var moreContent = document.querySelector('.more-content');
    var readMoreBtn = document.getElementById('read-more-btn');

    readMoreBtn.addEventListener('click', function() {
        // Toggle the 'show' class
        moreContent.classList.toggle('show');

        // Update button text based on whether the content is shown
        if (moreContent.classList.contains('show')) {
            this.textContent = 'Read Less';
        } else {
            this.textContent = 'Read More';
        }
    });
});
