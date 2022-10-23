// function which read Creds.json in "../data/" and checks for the username and password
// if the username and password is correct then it will return true else false

// Language: javascript
// Path: scripts/login.js
// function which read Creds.json in "../data/" and checks for the username and password
// if the username and password is correct then it will return true else false

function login(){
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var creds = [];
    $.getJSON("../data/Creds.json", function(data){
        //for each element in data.credentials, push it to creds array
        $.each(data.credentials, function(key, value){
            creds.push(value);
        }
        );
        console.log(creds);
        //for each element in creds array, check if username and password matches
        $.each(creds, function(key, value){
            if(value.username == username && value.password == password){
                window.location.href = "../pages/resume.html";
            }
        }
        );
    }
    );
}
