$(document).ready(function() {

    document.getElementById("main").style.visibility = "hidden"
    document.getElementById("endscreen").style.visibility = "hidden"

    var number = 60
    var intervalId
    var rights=0
    var wrongs=0
    var misses=0

    $("#start").on("click", start)
    $("#done").on("click", stop)
    

    function start(){
        document.getElementById("main").style.visibility = "visible"
        document.getElementById("introscreen").style.visibility = "hidden"
        run()
    }
    
    function run() {
        clearInterval(intervalId)
        intervalId = setInterval(decrement, 1000)
    }

    function decrement() {
        number--
        $("#time").html("Time remaining: "+ number)
            if (number === 0) {
            stop();
            alert("Time Up!");
        }
    }   

    function stop() {
        clearInterval(intervalId);
        document.getElementById("endscreen").style.visibility = "visible"
        document.getElementById("main").style.visibility = "hidden"

        var chosen1 = $("input:radio[name=question1]:checked").val()
        if(chosen1!=undefined){
            if(chosen1=="hit"){
                rights++
            }
            else{
            wrongs++
            }
        }

        else{
            misses++
        }

        var chosen2 = $('input:radio[name=question2]:checked').val()

        if(chosen2!=undefined){
            if(chosen2="hit"){
                rights++
            }
            else{
                wrongs++
            }
        }

        else{
            misses++
        }

        var chosen3 = $('input:radio[name=question3]:checked').val()

        if(chosen3!=undefined){
            if(chosen3=="hit"){
                rights++
            }
            else{
                wrongs++
            }
        }

        else{
            misses++
        }
        var chosen4 = $('input:radio[name=question4]:checked').val()

        if(chosen4!=undefined){
            if(chosen4=="hit"){
                rights++
            }
            else{
                wrongs++
            }
        }

        else{
            misses++
        }

        var chosen5 = $('input:radio[name=question5]:checked').val()

        if(chosen5!=undefined){
            if(chosen5=="hit"){
                rights++
            }
            else{
                wrongs++
            }
        }

        else{
            misses++
        }
    $("#rights").append(rights)
    $("#wrongs").append(wrongs)
    $("#misses").append(misses)

    }

})