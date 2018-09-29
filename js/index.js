(function sortPosts() {
    var sortPostBtn = document.getElementById("sort-by-date");
    sortPostBtn.addEventListener("click", logger);

    function logger() {
        console.log("Hello post!");
    }
})();
