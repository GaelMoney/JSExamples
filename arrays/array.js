

let toDos = ["feed the cat","wash the windows","Fuel the car"];
let finished = [false,false,false];


let btn_add = document.getElementById("add");
let btn_finish = document.getElementById("finish");
let btn_remove = document.getElementById("remove");

let inputValue = document.getElementById("input");

let listing = document.getElementById("listing");

updateListing();

btn_add.addEventListener("click", ()=>{
    //handle add
    if(inputValue.value != ""){
        toDos.push(inputValue.value);
        finished.push(false);
        updateListing();
        inputValue.value = "";
    }else{
        alert("enter a new to do!");
    }
});

btn_finish.addEventListener("click", ()=>{
    //handle finish
    i = Number(inputValue.value);
    
    if(isNaN(i)){
        alert("vul een nummer in");
    }else{
        if(i < finished.length){
            console.log("finish "+i);
            finished[i] = true;
        }
        else{
            alert("geen geldige index");
        }
    }

    updateListing();
});

btn_remove.addEventListener("click", ()=>{
    //handle romove
    i = Number(inputValue.value);
    if(isNaN(i)){
        alert("vul een nummer in");
    }else{
        if(i < finished.length){
            console.log("remove "+i);
            finished.splice(i,1);
            toDos.splice(i,1);
        }
        else{
            alert("geen geldige index");
        }
    }
    updateListing();

});



function updateListing(){
    listing.innerHTML = "<ol>";

    for(i = 0; i< toDos.length; i++){
        if(finished[i]){
            listing.innerHTML += "<li><del>"+toDos[i]+"</del></li>";            
        }else{
            listing.innerHTML += "<li>"+toDos[i]+"</li>";
        }


    }
    listing.innerHTML += "</ol>";

    
     
}