let istatus = document.querySelector("h5")
let addFriend  = document.querySelector("#add")
let check = 0



addFriend.addEventListener("click",function () {
if (check == 0) {
    istatus.innerHTML = "Friend"
    istatus.style.color = "green"
    addFriend.innerHTML = "remove Friend"
    check = 1
}
else{
    istatus.innerHTML = "Stranger"
    istatus.style.color = "red"
    addFriend.innerHTML = "Add Friend"
    check = 0
}
    
})

