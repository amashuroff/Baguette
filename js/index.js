
const hideMenuOverlay = () => {
    document.querySelector('.navigation-link').addEventListener('click', () => {
        document.getElementById("navi-toggle").checked = false;    
    })
}
hideMenuOverlay();