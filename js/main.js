let slide = document.querySelectorAll(".slide-number span") 
slide.forEach((li) => {
    li.addEventListener("click", (e) => {
        slide.forEach((li) => {
        li.classList.remove("active");
    });
        e.currentTarget.classList.add("active");
    });
});
// ===========================Start Search Bar===========================
function search() {
    let searchBar = document.querySelector(".search").value.toUpperCase();
    let games = document.querySelectorAll(".container-game .box")
    let gamesName = document.querySelectorAll(".container-game .box .text p ")
    for (let i = 0; i < gamesName.length;i++) {
        if (gamesName[i].innerHTML.toUpperCase().indexOf(searchBar) >= 0) {
            games[i].style.display = "";
        } else {
            games[i].style.display = "none";
        }
    }
}
// ===========================End Search Bar===========================