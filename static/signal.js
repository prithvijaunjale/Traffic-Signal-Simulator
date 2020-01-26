window.onload = function(){
    var $ = function(e){
        return document.querySelector(e);
    }
    
    var setSubColor = function(c){
        $('#human-head').style.fill = c;
        $('#human-body').style.stroke = c;
    }
    
    // Function To Set Color
    // Fungsi Untuk Mengatur Warna
    var setColor = function(e, c){
        e.style.backgroundColor = c;
    }
  
    // Getting DOM objects
    // Mendapat Objek DOM
    var redLamp = $("#red");
    var yelLamp = $("#yellow");
    var greLamp = $("#green");
    var timerNum = $("#timer-num");
    
    // Color
    // Warna
    var green = "#00EE00";
    var yellow = "#DDDD00";
    var red = "#EE0000";
    var gDim = "#113311";
    var yDim = "#222211";
    var rDim = "#331111";
    
    var gOn = new isOn();
    var yOn = new isOn();
    var rOn = new isOn();
    
    function check(n){
        n = parseInt(n);
        while(isNaN(n)){
            n = parseInt(prompt("enter a valid number!"));
        }
        return Math.floor(n);
    }
    
    // Set Timer
    // Mengatur Timer

//    var redTimer = check(rTnew);
//    var yelTimer = check(yTnew);
//    var greTimer = check(gTnew);

    var redTimer = check(redT);
    var yelTimer = check(yelT);
    var greTimer = check(greT);
    var totalTime = greTimer + yelTimer + redTimer;
    var timeCount = greTimer;
    
    /**
    setTimeout(redActive, 0);
    
    function greenActive(){
            // Green Light Turn On
            // Lampu Hijau Menyala
            setColor(yelLamp, yDim);
            setColor(redLamp, rDim);
            setColor(greLamp, green);
            setTimeout(yellowActive, greTimer);a
    }
    function yellowActive(){
            // Yellow Light Turn On
            // Lampu Kuning Menyala
            setColor(greLamp, gDim);
            setColor(redLamp, rDim);
            setColor(yelLamp, yellow);
            setTimeout(redActive, yelTimer);
    }
    function redActive(){
            // Red Light Turn On
            // Lampu Merah Menyala
            setColor(yelLamp, yDim);
            setColor(greLamp, gDim);
            setColor(redLamp, red);
            setTimeout(greenActive, redTimer);
    }
    **/
    
    if(greTimer && yelTimer && redTimer){
        var i = 1;
        var intr = setInterval(function(){
            if(i <= greTimer){
                if(rOn.getOn()){
                    timeCount = greTimer;
                }
        
                yOn.setOn(false);
                rOn.setOn(false);
                gOn.setOn(true);
            
                timerNum.innerHTML = timeCount--;
                // Green Light Turn On
                // Lampu Hijau Menyala
                setColor(yelLamp, yDim);
                setColor(redLamp, rDim);
                setColor(greLamp, green);
                setSubColor("red");
            }else if(i > greTimer && i <= greTimer + yelTimer){
                if(gOn.getOn()){
                    timeCount = yelTimer;
                }
        
                gOn.setOn(false);
                rOn.setOn(false);
                yOn.setOn(true);
            
                timerNum.innerHTML = timeCount--;
                
                // Yellow Light Turn On
                // Lampu Kuning Menyala
                setColor(greLamp, gDim);
                setColor(redLamp, rDim);
                setColor(yelLamp, yellow);
                setSubColor("red");
            }else{
                if(yOn.getOn()){
                    timeCount = redTimer;
                }
        
                gOn.setOn(false);
                yOn.setOn(false);
                rOn.setOn(true);
            
                timerNum.innerHTML = timeCount--;
                
                if(timeCount == redTimer-1)
                    setSubColor("green");
                if(timeCount == 1)
                    setSubColor("red");
                // Red Light Turn On
                // Lampu Merah Menyala
                setColor(yelLamp, yDim);
                setColor(greLamp, gDim);
                setColor(redLamp, red)
            }
            i++;
            // If Done, Repeat
            // Jika Sudah, Ulangi
            if(i-1 >= totalTime)
                i = 0;
        }, 1000); 
    }else{
        alert("error, don't input 0")
    }
    // Update Every 1 seconds
    // Perbarui Setiap 1 Detik
    
}

// Helper
var isOn = function(){
    this.on = false;
    this.setOn = function(b){
        this.on = b;
    }
    this.getOn = function(){
        return this.on;
    }
}