import {listEl} from './refs.js'
export default function updateMarkup (storageData) {
    listEl.innerHTML = ''
   const storage = storageData.map(({cls, id, value}) => {
       return `<li class='${cls}' id='${id}'>${value}</li>`
    }).join('')
    listEl.insertAdjacentHTML('beforeend', storage)
}