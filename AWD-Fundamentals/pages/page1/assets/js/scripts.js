if (window.location.pathname === '/pages/page1/index.html') {
    const champion = localStorage.getItem('randomChampion');//key
    if (champion) {
        document.getElementById('champion-name').textContent = champion;//updates content of html
    } else {
        console.error("Champion data not found in localStorage.");
    }
}
