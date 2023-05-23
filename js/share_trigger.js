// display function
function display() {
    // do not reload the page after button is pressed
    event.preventDefault();
    // get share_link class
    const shareLink = document.querySelector('.share_link');
    // Check if the class toggle is on
    if (shareLink.classList.contains('share_open')) {
        // if opened close it
        shareLink.classList.remove('share_open');
    } else {
        // if closed open it it
        shareLink.classList.add('share_open');
    }
}
