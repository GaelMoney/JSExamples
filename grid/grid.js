cols = document.getElementById("cols")
size = document.getElementById("size")
grid = document.getElementById("grid")

cols.addEventListener("change", update)
size.addEventListener("change", update)

function update(){
    grid.innerHTML = ""
    for(i=0;i<size.value;i++){
        console.log(cols.value)
        if(i % cols.value == 0 && i!=0)grid.innerHTML+="<br>"
        grid.innerHTML += "X"

    }
}