//let addBtn = document.querySelector('.add')
let taskArea = document.querySelector('.taskArea')
let dueDate = document.querySelector('.date')
let item = document.querySelector('.item')
let desc = document.querySelector('.desc')
let dateFor = document.querySelector('.umhla')
let id=0;
let itemDB = []
let checker = document.querySelector('.wrapper')
let wc = document.querySelector('.wc')







// let edit_item = document.querySelector('.edit_item')
// let edit_desc = document.querySelector('.edit_desc')
// let edit_date = document.querySelector('.edit_date')


dueDate.value  = new Date().toJSON().slice(0,10)
dueDate.min = new Date().toJSON().slice(0,10)


//dateFor.value = new Date().toLocaleDateString()
//let umhla = new Date().toLocaleDateString()
let task;

let confirmation=()=>{

    checker.style.display = "flex" 

    setTimeout(()=>{
        checker.style.display = "none"
    }, 3000)
}

let ts=()=>{
   // let wc = document.querySelector('.wc')
    wc.style.display = "flex" 

    setTimeout(()=>{
        wc.style.display = "none"
    }, 3000)
}

let fetchInputs = async ()=>{
    console.log(desc.value)
    if(itemDB.length > 1){

    }
    task ={
        item: item.value,
        due_date: dueDate.value,
        description: desc.value,
        createdAt: new Date().toJSON().slice(0,19),
        //createdAt: new Date().toLocaleTimeString()
        id: id + itemDB.length

    
    }
    console.log(id + itemDB.length)
    itemDB.unshift(task)
    console.log(itemDB)
    localStorage.setItem("itemDB", JSON.stringify(itemDB))

    loadTask()
    confirmation()
    clearInputs();
}
let clearInputs= ()=>{
    item.value = "";
    desc.value = "";

}


let loadTask = () =>{

    if (localStorage.getItem("itemDB")){
        itemDB =JSON.parse(localStorage.getItem("itemDB"));
    }


        taskArea.innerHTML = "";
        itemDB.map((e,x)=>{
        
                return (taskArea.innerHTML += `<div class="row mt-2 pb-2 task">
                <div class="col-1"><span class="taskDetails">${x + 1}</span></div>
                <div class="col-2"><span class="taskDetails">${e.item}</span></div>
                <div class="col-4 tap"><p class="taskDetails textArea">${e.description}</p></div>
                <div class="col-3"><span class="taskDetails">${e.due_date}</span></div>
                <div class="col-2"><i class="bi bi-eye" ></i><i class="bi bi-pencil ms-4"  data-bs-toggle="modal" data-bs-target="#editModal_${x}" data-backdrop='false' data-keyboard='false'></i><i class="bi bi-trash ms-4" onclick="deleteOne(this, ${x})"></i></div>

                <div class="modal " id="editModal_${x}" data-backdrop="false">
                    <div class="modal-dialog modal-dialog-centered">
                        <div class="modal-content">
                          <div class="modal-header border-none justify-content-around">
                            
                                <div class="col-4"><h1 class="modal-title fs-5" id="editModalLabel">Edit Item</h1></div>
                                <div class="col-3"><button class="btn btn-block btn-light w-100" data-bs-dismiss="modal"><strong>Reset</strong></button></div>
                                <div class="col-3"><button class="btn btn-dark btn-block w-100 add" onclick="update(this, ${x})"><strong>Save ${x+1}</strong></button></div>
                                
                            
                          </div>
                          <div class="modal-body border-none">
                            <div class=" ms-3">
                                <label for="item" class="col-3">Title</label>
                                <input type="text" class="col-8 border edit_item_${x} mI" value="${e.item}"  placeholder="Title"   >
                                
                            </div>
                            <div class=" ms-3 d-flex my-3  ">
                                <label for="item" class="col-3">Description</label>
                                <textarea type="text" height="50px"  class="col-8 border desc edit_desc_${x} mI"  placeholder="Description">${e.description}</textarea>
                                
                            </div>
                            <div class=" ms-3">
                                <label for="item" class="col-3">Due Date</label>
                                <input type="date" class="col-8 border date mI edit_date_${x} umhla" value="${e.due_date}" >
                            </div>
                          </div>
                          <div class="modal-footer border-none">
                             
                            <div class="wrapper wc p-2 border">  
                                <svg class="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52"> <circle class="checkmark__circle" cx="26" cy="26" r="25" fill="none"/> <path class="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8"/>
                                </svg>
                                <div>
                                    <h4 class="mt-1 text-center dpl ">Task Updated Successfully!</h4>
                    
                                </div>
                                <button type="button" class="btn btn-secondary btn-block" data-bs-dismiss="modal">X</button>
                            </div>
                          </div>
                        </div>
                      </div>
                  </div>
                

            </div>`);
            
        }) 
        console.log( new Date().toLocaleDateString() + new Date().toLocaleTimeString())
        
        }
    loadTask()


    let deleteOne = (e, i)=>{
    itemDB.splice(i, 1)
    
    localStorage.setItem("itemDB", JSON.stringify(itemDB))
    loadTask()
    }
    
    let update = (e, i)=>{
       

        let edit_item = document.querySelector(`.edit_item_${i}`)

        let edit_desc = document.querySelector(`.edit_desc_${i}`)
        let edit_date = document.querySelector(`.edit_date_${i}`)
        
        itemDB = JSON.parse(localStorage.getItem("itemDB"));

        itemDB[i].item = edit_item.value;
        itemDB[i].description = edit_desc.value;
        itemDB[i].due_date = edit_date.value;


        console.log(itemDB[i].item)

        localStorage.setItem("itemDB", JSON.stringify(itemDB))
        //ts()

        loadTask()

        

            
    }


    let edit = (e, i)=>{
        let edit_item = document.querySelector('.edit_item')
        let edit_desc = document.querySelector('.edit_desc')
        let edit_date = document.querySelector('.edit_date')
        
        console.log(edit_item)
        itemDB = JSON.parse(localStorage.getItem("itemDB"));
    }

    let viewOnly = (e, i)=>{
        itemDB = JSON.parse(localStorage.getItem("itemDB"));


        edit_item.value = itemDB[i].item;
        edit_desc.value = itemDB[i].description;
        edit_date.value = itemDB[i].due_date;
    }