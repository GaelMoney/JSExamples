i = document.getElementById("break_img")
p = document.getElementById("clock")

breakStart = new Date()
breakEnd = new Date()
//stel de begin en eindtijd van je break hier in

e = setInterval(updateTime,1000) //code zorgt dat de update time functie elke seconde wordt uitgevoerd

function updateTime(){
    d = new Date()
     p.innerHTML = "Break Time from "+breakStart.toTimeString()+" until " +breakEnd.toTimeString()+"<br/> Time: "+d.getHours() +" : "+ d.getMinutes() +" : "+ d.getSeconds()
   
   //check hier hoe laat het is en of je wel of geen break moet hebben
}
function breakNow(){
    //pas hier de image aan voor als je een break hebt
   
}
function endBreak(){
   //Pas hier de image aan voor als je aan het werk bent
   
}


