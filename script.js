//inputs
const uname = document.querySelector("#name");
const age = document.querySelector("#age");
const email = document.querySelector("#email");
const inputs = document.querySelectorAll("input");

//span error messages
const nameSpan = document.querySelector("#nameSpan");
const ageSpan = document.querySelector("#ageSpan");
const emailSpan = document.querySelector("#emailSpan");

const table = document.querySelector("table");
const resetBtn = document.querySelector("#resetBtn");
const addBtn = document.querySelector("#addBtn");

const tbody = document.querySelector("tbody");

let nameData;
let ageData;
let emailData;

resetBtn.addEventListener("click", function(){
    location.reload();
});
addBtn.addEventListener("click", function(){
    
    let nameEx = /^[a-zA-Z]{5,30}$/;
    let ageEx = /^\d+$/;
    let emailEx = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    let flag = false;
    
    //user name validation
    if(uname.value === ""){
        nameSpan.textContent = "field required";
        flag = true;
    }
    else if(!nameEx.test(uname.value)){
        nameSpan.textContent = "invalid input";
        flag = true;
    }
    else {
        nameSpan.textContent = "";
    }

    //age validation
    if(age.value === ""){
        ageSpan.textContent = "field required";
        flag = true;
    }
    else if(!ageEx.test(age.value)){
        ageSpan.textContent = "invalid input";
        flag = true;
    }
    else {
        ageSpan.textContent = "";
    }

    //email validation
    if(email.value === ""){
        emailSpan.textContent = "field required";
        flag = true;
    }
    else if(!emailEx.test(email.value)){
        emailSpan.textContent = "invalid input";
        flag = true;
    }
    else {
        emailSpan.textContent = "";
    }

    if(!flag){
        table.style.display = "table";
        
        //store user data
        nameData = uname.value;
        ageData = age.value;
        emailData = email.value;
        storeData();
    }
});

function storeData(){
    //create tr
    const tr = document.createElement("tr");
    tbody.append(tr);

    //create td's
    for(let i=0; i<3; i++){
        const td = document.createElement("td");
        tr.append(td);
        if(i == 0)
            td.textContent = nameData;
        if(i == 1)
            td.textContent = ageData; 
        if(i == 2)
            td.textContent = emailData;
    }
}
