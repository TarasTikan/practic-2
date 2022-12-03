import {inputEl} from './refs.js'
import updateMarkup from './updateMarkup.js'
const STORAGE_KEY = 'todolist'
function onUpdate () {
    console.log(inputEl.value)
    const todoo = {
        id: Date.now(),
        value: inputEl.value,
        cls: 'listItem'
    }
    let data = JSON.parse(localStorage.getItem(STORAGE_KEY));
console.log(data)
    if (!data) {
      data = []
    }
    
    data.push(todoo);
    localStorage.setItem(STORAGE_KEY,JSON.stringify(data))
    inputEl.value = ''
    updateMarkup(data)
}


function completeTask (e) {
    if(e.target.nodeName !== 'LI') return
    e.target.classList.replace('listItem', 'listItemComplete')
    const parse = JSON.parse(localStorage.getItem(STORAGE_KEY))
    parse.find ((item) =>{
        if(Number(e.target.id) === item.id) {
            item.cls = 'listItemComplete'
        }  
    }) 
    localStorage.setItem(STORAGE_KEY, JSON.stringify(parse))
    console.log(e.target.classList)
    }

    function onRemoveTask () {
        const storage = JSON.parse(localStorage.getItem(STORAGE_KEY))
    const filtr = storage.filter((item)=> item.cls !== 'listItemComplete')
    localStorage.setItem(STORAGE_KEY, JSON.stringify(filtr))
    updateMarkup(JSON.parse(localStorage.getItem(STORAGE_KEY)))
    }

    export default {onUpdate, completeTask, onRemoveTask}