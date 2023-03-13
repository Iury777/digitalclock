function clock(){
    let date = new Date()
    let hour = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    
    let allTimes = hour +":"+ minutes +":"+ seconds;

    let time = document.getElementById('clock');
    
    time.innerHTML = allTimes

    
}

setInterval(clock,500);