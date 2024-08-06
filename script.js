let btn_add=document.querySelector(".btn-add");
let input=document.querySelector("input");
let pl=document.querySelector(".pending-list");
let wl=document.querySelector(".progress-list");
let cl=document.querySelector(".completed-list");

btn_add.addEventListener("click",()=>{
    if(input.value.trim()!=""){
        addtodo(input.value);
        console.log("pending list added.");
    }
    input.value="";
});

function addtodo(task){
    let item=document.createElement("li");
    pl.appendChild(item);
    item.classList.add("pending");

    let work=document.createElement("div");
    work.innerText=task;
    work.classList.add("work")
    item.appendChild(work);

    let btn_todo=document.createElement("button");
    btn_todo.innerText="Start";
    btn_todo.classList.add("todobtn");
    item.appendChild(btn_todo);

    btn_todo.addEventListener("click",function(){
        let item=this.parentElement;
        if(item.classList.contains("pending")){
            wl.appendChild(item);
            item.classList.remove("pending");
            item.classList.add("progress");
            this.innerText="Finish";
        }else if(item.classList.contains("progress")){
            cl.appendChild(item);
            item.classList.remove("progress");
            item.classList.add("completed");
            this.innerText="delete";
        }else if(item.classList.contains("completed")){
            item.remove();
        }
    });
}