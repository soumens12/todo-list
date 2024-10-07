const inputBox = document.getElementById('input-box');
const listContainer = document.getElementById('list-container');

const filterBox = document.getElementById('filter-box');

function addTask (){
    if(inputBox.value === ''){
        alert("You must write something!")
    } else
    {
        let li = document.createElement("li");
        li.innerHTML= inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML= "\u00d7";
        li.appendChild(span);
        
    }

    inputBox.value="";


    saveData();
}


listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    } else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove()
        saveData();
    }
});






function finalizeEdit(li, newValue) {
    li.innerHTML = newValue; // Set the new value back to the LI
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span); // Reattach the span (delete button)
    saveData(); // Save the updated task list to localStorage
}


function saveData(){
    localStorage.setItem("data", listContainer.innerHTML)
}

function showTask(){
    listContainer.innerHTML = localStorage.getItem("data")
}

showTask();


// Filtering function
filterBox.addEventListener('input', function() {
    const filterText = filterBox.value.toLowerCase();
    const tasks = listContainer.getElementsByTagName('li');

    Array.from(tasks).forEach(function(task) {
        const taskText = task.textContent.toLowerCase();
        if (taskText.includes(filterText)) {
            task.style.display = '';
        } else {
            task.style.display = 'none';
        }
    });
});