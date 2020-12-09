import { Todo, TodoList } from './classes'
import { crearTodoHtml } from './js/funciones'

import './styles.css'


export const todoList = new TodoList();

todoList.todos.forEach(crearTodoHtml );

console.log('todos', todoList.todos);