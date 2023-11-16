// localStorage.clear();
let maindiv = document.querySelector(".main");
function localNotes(ky, val) {
    localStorage.setItem(ky, val);
    let notes = localStorage;
    console.log(notes)
    notesDisplay(notes);
}
document.querySelector("#addNote").addEventListener("click", () => {
    let key = document.getElementById("key").value;
    let value = document.getElementById("value").value;
    document.getElementById("key").value='';
    document.getElementById("value").value='';
    localNotes(key, value);
})
document.querySelector("#getNote").addEventListener('click',()=>{
        let notez=localStorage;
        notesDisplay(notez);
})

function notesDisplay(notes) {
    let divx=document.querySelector(".notesAll");
    let tg='';
    for(i=0;i<notes.length;i++){
        let key=localStorage.key(i)
        let val=localStorage.getItem(key);
       tg=tg+`
       <div class="card">
       <div id="headding">
        ${key}
       </div>
       <div id="tail">
        ${val}
        <button id="deleteNote" value=${key}>⛔</button>
       </div>
    </div>
       `
    }
    divx.innerHTML=tg;
}
document.querySelector(".notesAll").addEventListener('click',(details)=>{
    let deletKey=details.target.value;
    if(deletKey!=undefined){
        localStorage.removeItem(deletKey);
    }
    notesDisplay(localStorage);
})
