class Todos {
  constructor() {
    this.todos = [];
  }

  list() {
    return this.todos; 
  }

  add(title) {
    let todo = {
      title: title,
      complete: false,
    };
    this.todos.push(todo);
    
  }

  complete(title) {

    if (this.todos.length === 0) {
      throw new Error(" No hay info");
    }
    let todoBien = false;
    console.log("--------------------------");
    this.todos.forEach((todo) => {
      if (todo.title === title) {
        todo.complete = true;
        //
        console.log("--------------------------");
        todoBien = true;
        return;
      }
    });

    if (!todoBien) {
      throw new Error(" No hay info");
    }
  }

  saveFile(cb) {
    let file = "";
    this.todos.forEach((todo) => {
      file += `${todo.title}, ${todo.complete}`;
    });
    fs.writeFile("todo", file, cb);
  }
}
module.exports = Todos;
