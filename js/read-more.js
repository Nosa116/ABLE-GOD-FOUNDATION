document.getElementById('read-more-btn').addEventListener('click', function() {
    var moreText = document.querySelectorAll('.more-text');
    moreText.forEach(function(paragraph) {
        if (paragraph.style.display === 'none' || paragraph.style.display === '') {
            paragraph.style.display = 'block';
        } else {
            paragraph.style.display = 'none';
        }
    });
    this.textContent = this.textContent === 'Read More' ? 'Read Less' : 'Read More';
});
