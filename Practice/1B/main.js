function fetchData() {
    const http = new XMLHttpRequest()
    http.open("GET", "https://jsonplaceholder.typicode.com/users")
    http.send()
    http.onload = () =>{
        let res = JSON.parse(http.responseText)
        console.log(res);
        localStorage.setItem("users", JSON.stringify(res))
        displayData()
    }
}

let displayData = () => {
    let tbody = document.getElementById("tbody")
    tbody.innerHTML = "";
    let storedUser = JSON.parse(localStorage.getItem("users"))
    storedUser.map((user,index)=>(
        tbody.innerHTML += `
        <tr>
            <td>${index + 1}</td>
            <td>${user.name}</td>
            <td>${user.email}</td>
        </tr>
        `
    ))
}

fetchData()


let btn = document.getElementById("submit")

btn.addEventListener("click", (e)=>{
    e.preventDefault()
    const email = document.getElementById("email").value;
    const name = document.getElementById("name").value;

    let postObject = {
        name,
        email
    }

    let xhr = new XMLHttpRequest();
    xhr.open("POST", "https://jsonplaceholder.typicode.com/users/");
    xhr.setRequestHeader("Content-type", "application/json; charset=UTF-8");
    xhr.send(JSON.stringify(postObject));
    xhr.onload = ()=>{
        if(xhr.status == 201){
            let storedUser = JSON.parse(localStorage.getItem("users"));
            storedUser.unshift(postObject)
            localStorage.setItem("users", JSON.stringify(storedUser));
            displayData();
        }
    }
})