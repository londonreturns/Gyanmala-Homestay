// get current website's url
const link = encodeURI(window.location.href);
const msg = encodeURIComponent('Hey, I found this website');
const title = encodeURIComponent('Gyanmala Homestay');

// if facebook link is pressed
const fb = document.querySelector('.facebook');
fb.href = `https://www.facebook.com/share.php?u=${link}`;

// if twitter link is pressed
const twitter = document.querySelector('.twitter');
twitter.href = `http://twitter.com/share?&url=${link}&text=${msg}&hashtags=javascript,programming`;

// if reddit link is pressed
const reddit = document.querySelector('.reddit');
reddit.href = `http://www.reddit.com/submit?url=${link}&title=${title}`;


