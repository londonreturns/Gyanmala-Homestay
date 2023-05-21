function display() {
    event.preventDefault();
    const shareLink = document.querySelector('.share_link');

    // Check if the class toggle is on
    if (shareLink.classList.contains('share_open')) {
        shareLink.classList.remove('share_open');
        console.log('The class toggle is currently off.');
    } else {
        shareLink.classList.add('share_open');
        console.log('The class toggle is currently on.');
    }
}
