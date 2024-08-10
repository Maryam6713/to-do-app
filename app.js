//----------custom cursor
var cursorDot = document.querySelector("#cursor-dot")
var cursorLine = document.querySelector("#cursor-outline")


window.addEventListener("mousemove" , function(e){

    var posX = e.clientX
    var posY = e.clientY

    cursorDot.style.left = `${posX}px`;
    cursorDot.style.top = `${posY}px`;

    cursorLine.animate({
        left:`${posX}px`,
        top: `${posY}px`

    }, {duration: 500, fill : "forwards"})
});

//------------For Display Task
var inp = document.querySelector('#inp')
var lists = document.querySelector('#taskList')

function addTask() {
    if (inp.value.trim() !== "") {
        var li = document.createElement('li');
        li.innerHTML = `<input type="text" value="${inp.value}" disabled>
                        <div class="icons">
                            <i class="fas fa-edit" onclick="updtTask(event)"></i>
                            <i class="fas fa-trash" onclick="deltTask(event)"></i>
                        </div>`;
        lists.appendChild(li);
        inp.value = "";
    }
}
//-----------For Add Task by Enter Key
function clickButton(event) {
    if (event.keyCode === 13) {
        addTask();
    }
}
//----------For Delete each task
function deltTask(event) {
    event.target.closest('li').remove();
}

//--------For update task
function updtTask(event) {
    var input = event.target.closest('li').querySelector('input[type="text"]');
    
    if (input.disabled) {
        input.disabled = false;
        input.focus();
    } else {
        input.disabled = true;
    }
}


//------For delete all task
function deleteAll() {
    if (lists.children.length === 0) {
        swal("You have nothing to delete!");
    } else {
        swal({
            title: "Do you want to delete all?",
            icon: "warning",
            buttons: ["Cancel", "Delete"],
        }).then((willDelete) => {
            if (willDelete) {
                lists.innerHTML = ''; 
                swal("All items deleted successfully!", {
                    icon: "success",
                    buttons: "OK"
                });
            } else {
                swal("Deletion canceled!");
            }
        });
    }
}

