// alert("Hello, welcome to the autosuggest application!");
console.log("bye from js")

data ={
    "name": "Talha",
    "gender": "male",
}

var users = [
    {
        "name": "Talha",
        "gender": "male",
         "img": "talha.jpeg"
        
        },
    {
        "name": "najam",
        "gender": "male",          
        "img": "najam.jpeg"
    }
]
var id = 0;

function toggleuser(){
    id = (id+1) % 2
    // 1: image
    var userImage = document.getElementById("user-image");
    userImage.src = users[id].img;

    // 2: name
    var userName = document.getElementById("user-namee");
    userName.innerHTML = users[id].name;

    // 3: gender
    var userGender = document.getElementById("user-gender");
    userGender.innerHTML = users[id].gender;

}
