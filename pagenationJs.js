//Author : Rajavasanthan
//Version : 0.1
//First Insert Loading GIF into DIV, Then Make the pagenation DIV's Opacity Low, Fire Ajax Request
//On Success, Remove the Loading GIF Make the Opacity to Normal and Loop Throgh the JSON Data to create DIV's

function getAudio(rowStart, rowLimit) {  
    //Insert Loading GIF into audio_loading DIV
    $(".audio_loading").append("<img src='images/loading-small-icon.gif' />").fadeIn("slow");
    
    //Set the Opacity to Low for pagenation DIV
    $("#pagenation").css("opacity","0.3");
    
    //Fire Ajax Request
    $.ajax({
        type: "POST",
        url: "generateAudioList.php",
        datatype: 'json',
        data: "rowstart=" + rowStart + "&rowlimit=" + rowLimit,
        success: function(returnData) {
            //Remove the Audio Loading GIF from GIF
            $(".audio_loading").html("");
            
            //Rest the pagenation Opacity to Normal
            $("#pagenation").css("opacity","1");
            
            //Clear the Pagenation, so that new contant will be placed
            $("#pagenation").html("");
            
            //Loop through JSON Data to create DIV's
            for (var jsonObj in returnData) {
                $("#pagenation").append("<div class='audio_holder' id='" + returnData[jsonObj].title + "'><h4>" + returnData[jsonObj].title + "</h4><audio controls>\n\
            <source src='" + returnData[jsonObj].path + ".mp3' type='audio/mpeg'>Your browser does not support the audio element.</audio>\n\
<div class='audio_dis'>" + returnData[jsonObj].dis + "</div></div>");
            }
        }
    });
}
