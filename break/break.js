i = document.getElementById("break_img")
p = document.getElementById("clock")

breakStart = new Date()
breakEnd = new Date()


e = setInterval(updateTime,1000) //code zorgt dat de update time functie elke seconde wordt uitgevoerd

function updateTime(){
    d = new Date()
     p.innerHTML = "Break Time from "+breakStart.toTimeString()+" until " +breakEnd.toTimeString()+"<br/> Time: "+d.getHours() +" : "+ d.getMinutes() +" : "+ d.getSeconds()
   
   
}
function breakNow(){
    
   
}
function endBreak(){
   
   
}


