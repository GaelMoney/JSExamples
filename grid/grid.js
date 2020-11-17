cols = document.getElementById("cols")                              //get DOM elements
size = document.getElementById("size")
grid = document.getElementById("grid")

cols.addEventListener("change", update)                             //call update when user changes value
size.addEventListener("change", update)

function update(){
    grid.innerHTML = ""                                             //clear grid
    for(i=0;i<size.value;i++){                                      //loop according to size
        
        if(i % cols.value == 0 && i!=0)grid.innerHTML+="<br>"       //Add <br> when grid item is devidable by number of collums
        grid.innerHTML += "X"                                       //Add 'X' for every griditem

    }
}