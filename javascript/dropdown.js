function Dropdown() {
    document.getElementById("dropdown").classList.toggle("show");
}
  
window.onclick = function(e) {
    if (!e.target.matches('#login')) {
    var myDropdown = document.getElementById("dropdown");
        if (myDropdown.classList.contains('show')) {
        myDropdown.classList.remove('show');
        }
    }
}