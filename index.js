import {btnRed, btnGreen, listEl} from './refs.js'
import updateMarkup from './updateMarkup.js'
import manageTodo from './manageTodo.js'
const STORAGE_KEY = 'todolist'
btnGreen.addEventListener('click', manageTodo.onUpdate)

listEl.addEventListener('click', manageTodo.completeTask)

updateMarkup(JSON.parse(localStorage.getItem(STORAGE_KEY)))

btnRed.addEventListener('click', manageTodo.onRemoveTask)

