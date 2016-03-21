/**
 * Created by anudeep on 3/16/2016.
 */

//stringList is used to store values from input field called items
var stringList = new Array();
//used to store individual item
var inputValue;

function addToList() {
    //This function adds items to stringList
    var inputValue = document.getElementById('inputText').value;
    document.getElementById('inputText').value = '';
    if(inputValue == ""){
        alert("Empty value cannot be added to list");
    }
    else {
        stringList.push(inputValue);
        displayList();
    }
};

function displayList(){
    var text = "";
    var arraySize = stringList.length;
    if(stringList.length > 0){
        for(var iterator = 0; iterator < stringList.length; iterator++){
            text += "<li class='stringList' id = "+ iterator + " onclick='deleteText("+iterator+");'>" + stringList[iterator] + "</li>";
        }
    }
    else{
        text = "";
    }
    document.getElementById('displayList').innerHTML="<div>"+text+"</div>";
};

function deleteText(name){
    var textIndex = Number(name);
    stringList.splice(textIndex, 1);
    displayList();
};

function returnArray(){
    var arraySize = stringList.length;
    alert(stringList);
    return stringList;
}