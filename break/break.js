i = document.getElementById("break_img")
p = document.getElementById("clock")


breakStart = new Date()
breakStart.setHours(13)
breakStart.setMinutes(29)
breakStart.setSeconds(00)

breakEnd = new Date()
breakEnd.setHours(13)
breakEnd.setMinutes(29)
breakEnd.setSeconds(10)

endBreak()

e = setInterval(updateTime,1000)

function updateTime(){
    d = new Date()
     p.innerHTML = "Break Time from "+breakStart.toTimeString()+" until " +breakEnd.toTimeString()+"<br/> Time: "+d.getHours() +" : "+ d.getMinutes() +" : "+ d.getSeconds()
    if(d > breakStart && d < breakEnd)
    {                
        breakNow()
    }else{
        endBreak()
    }       
   
}
function breakNow(){
    
    i.src = "https://cdn.pixabay.com/photo/2016/12/11/12/00/kermit-1899261_640.jpg"
}
function endBreak(){
   
    i.src = "https://thumbs.dreamstime.com/b/hard-working-business-man-office-32465984.jpg"
}


