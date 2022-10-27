function onSearch() {
    const query = document.getElementById("search-box").value;
    
    if (query === "") {
        alert("Type in the search bar first.");
        return;
    }
    //alert("Searching " + query + "...");
    location.href = "https://www.google.com/search?q=" + query;
}