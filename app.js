let todo = [];
let req = prompt("please enter your request").trim().toLowerCase();

while (true) {
    if (req === "quit") {
        console.log("quitting app");
        break;
    } 
    else if (req === "list") {
        console.log("----------------");
        if (todo.length === 0) {
            console.log("No tasks found");
        } else {
            for (let i = 0; i < todo.length; i++) {
                console.log(i, todo[i]);
            }
        }
        console.log("----------------");
    } 
    else if (req === "add") {
        let task = prompt("please enter the task you want to add");
        todo.push(task);
        console.log("task added");
    } 
    else if (req === "delete") {
        let idx = Number(prompt("please enter the task index you want to delete"));
        todo.splice(idx, 1);
        console.log("task deleted");
    } 
    else {
        console.log("wrong request");
    }

    req = prompt("please enter your request").trim().toLowerCase();
}
