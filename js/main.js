function getPosts(userId){
    let request = new XMLHttpRequest();
    request.open("get","https://jsonplaceholder.typicode.com/posts?userId="+userId)
    request.responseType="json"
    request.send();
    request.onload=function(){
        if(request.status>=200 && request.status<300){
let posts=request.response;
document.getElementById("posts").innerHTML=""
for (post of posts){
    let content=`
    <div class="post">
                    <h3>${post.title}</h3>
                    <h4>${post.body}</h4>
                </div>
    
    `
    document.getElementById("posts").innerHTML +=content;
}

        }
            else{
                alert("error")
            }
    }
  
}
function getUsers(){
    let request = new XMLHttpRequest();
    request.open("get","https://jsonplaceholder.typicode.com/users")
    request.responseType="json"
    request.send();
    request.onload=function(){
        if(request.status>=200 && request.status<300){
let users=request.response;
document.getElementById("emails-content").innerHTML=""
for (user of users){
    let content=`
    <div id="user" onclick="userClicked(${user.id},this)">
    <h3>${user.name}</h3>
    <h3${user.email}</h3>
</div>
    `
    document.getElementById("emails-content").innerHTML +=content;
}

        }
            else{
                alert("error")
            }
    }
  
}
getPosts();
getUsers();
 function userClicked(id, ele){
getPosts(id)
// let selectedElements=document.getElementsByClassName("selected");
// for (element of selectedElements){
//     element.classlist.remove("selected");
// }
// ele.classlist.add("selected")
}


