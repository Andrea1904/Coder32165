const Todos = require("./index");
const assert = require("assert").strict;

// escenario manuales
/*
const todo =new Todos()
console.log(todo.list())

todo.add("run code")
console.log(todo.list())
*/

// escenarios mocha

describe("Pruebas de listado", function () {
  it("Crear contenedor", function () {
    const todos = new Todos();
    assert.strictEqual(todos.list().length, 0);
  });

  it("Crear  tarea ", function () {
    const todos = new Todos();

    todos.add("run code");
    assert.strictEqual(todos.list().length, 1);
    assert.deepStrictEqual(todos.list(), [
      { title: "run code", complete: false },
    ]);

    todos.add("run code dos");
    assert.strictEqual(todos.list().length, 2);
    assert.deepStrictEqual(todos.list(), [
      { title: "run code", complete: false },
      { title: "run code dos", complete: false },
    ]);
  });
});
