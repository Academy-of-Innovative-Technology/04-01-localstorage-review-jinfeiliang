var key = "Name";

let Save_Key = document.querySelector("#saveKey")
let Save_Value = document.querySelector("#saveValue")

let Load_Key = document.querySelector("#loadKey")
let Load_Value = document.querySelector("#loadValue")

let Update_Key = document.querySelector("#updateKey")
let Update_Value = document.querySelector("#updateValue")

let Delete_Key = document.querySelector("#deleteKey")

// SAVE
document.querySelector(".save").onclick = function() {
    console.log("Save");
    console.log(Save_Key.value);
    console.log(Save_Value.value);
    localStorage.setItem(Save_Key.value, Save_Value.value);
};


// LOAD
document.querySelector(".load").onclick = function() {
    console.log("Load");
    console.log(localStorage.getItem(Load_Key.value));
    Load_Value.value = localStorage.getItem(Load_Key.value);
};

// Update
document.querySelector(".update").onclick = function() {
    console.log("Update");
    localStorage.setItem(Update_Key.value, Update_Value.value);
};

// DELETE
document.querySelector(".delete").onclick = function() {
    console.log("Delete");
    localStorage.removeItem(Delete_Key.value);
};
