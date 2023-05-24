// scripts.js
document.getElementById('changeLang').addEventListener('click', function() {
    // Assuming you have 'index-en.html' for English and 'index-lv.html' for Latvian.
    const isEnglish = window.location.href.includes('index-en.html');
    
    if (isEnglish) {
        window.location.href = 'index.html';
    } else {
        window.location.href = 'index-en.html';
    }
});
