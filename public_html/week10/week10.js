/****************************************
* This function will display a xml file by
* by using xmlhttp request from the server. 
*****************************************/	
function listOfObject() {
    var countryHttp = new XMLHttpRequest();
        countryHttp.onreadystatechange = function (){
        if (countryHttp.readyState == 4 && countryHttp.status == 200){
         var city = JSON.parse(this.responseText);
         getObjectRsponse(city);
        }
        }
    var input = document.getElementById('objectInput').value;
    countryHttp.open("GET", "citylist/" + input + ".txt", true);
    countryHttp.send();
}
    
 /****************************************
* This getFunction will get each file on the
* client's demand.
*****************************************/	   
function getObjectRsponse(city){
    var output = "";
    for (var i = 0; i < city.length; i++){
        output += city[i] + "<hr>";
    }
    document.getElementById('objectOutput').innerHTML = output;
}
    

/****************************************
* This function will display a xml file by
* by using xmlhttp request from the server. 
*****************************************/	
function listOfObject2() {   
    var studentHttp = new XMLHttpRequest();
        studentHttp.onreadystatechange = function (){
        if (studentHttp.readyState == 4 && studentHttp.status == 200){
         var data = JSON.parse(this.responseText);
         getObjectRsponse2(data);   
            
        }
        }
        
    var input2 = document.getElementById('objectInput2').value;
    studentHttp.open("GET", "jsonTxt/" + input2);
    studentHttp.send(null);	
}

/****************************************
* This getFunction will get each file on the
* client's demand.
*****************************************/	   
function getObjectRsponse2(data){
    
    var output2 = "";
    for (var i = 0; i < data.students.length; i++){
        
         output2 += data.students[i].first + " ";
         output2 += data.students[i].last + " " + "<br>";
        
         output2 += data.students[i].address.city + " " + "<br>";
         output2 += data.students[i].address.state + " " + "<br>";
         output2 += data.students[i].address.zip + " " + "<br>";
         output2 += data.students[i].major + " " + "<br>";
        
         output2 += data.students[i].gpa + " <br>" + "<hr>";
    
    }
    document.getElementById('objectOutput2').innerHTML = output2;

}

/****************************************
* This function will validate the file name
* input, if it didn't mach then send invalid message
*****************************************/	
function validateFile(fileName)
{
    if (fileName == "json.txt" && fileName == "json1.txt")
    { 
        
        document.getElementById('objectInput2').style.border = 'thin solid lightblue';
    } 
    else
    {   
        document.getElementById('objectInput2').value = 'Invalid File Name';
    }
}
    
 /****************************************
* The reset function will clear all the 
* displayed data
*****************************************/	      
function reset() {
     document.getElementById('objectOutput').innerHTML = "";
}
function reset2() {
    document.getElementById('objectOutput2').innerHTML = "";
}
