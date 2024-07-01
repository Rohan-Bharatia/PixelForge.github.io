function handleSearchbar() {
    let input = document.getElementById("links");
    let filter = input.value.toUpperCase();
    let ul = document.getElementById("links");
    let li = ul.getElementsByTagName("li");

    for(let i = 0; i < li.length; i++) {
        let a = li[i].getElementsByTagName("a")[0];

        if(a.innerHTML.toUpperCase().indexOf(filter) > -1)
        {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}