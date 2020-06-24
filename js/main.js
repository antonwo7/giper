
import { task1, task2, task3 } from './components/functions.js'

const task1_button = document.querySelector('#task1 button')
const task2_button = document.querySelector('#task2 button')
const task3_button = document.querySelector('#task3 button')

task1_button.addEventListener('click', e => {
    const op = e.target.parentNode.querySelector('input[name="op"]').value
    const number = e.target.parentNode.querySelector('input[name="number"]').value

    console.log(task1(op, number))

})

task2_button.addEventListener('click', e => {
    const str = e.target.parentNode.querySelector('input[name="str"]').value
    const result = task2(str)
    console.log((result) ? result : 'Ошибка!')

})

task3_button.addEventListener('click', e => {
    const max = e.target.parentNode.querySelector('input[name="max"]').value
    const val = e.target.parentNode.querySelector('input[name="val"]').value
    
    if(task3(max, val)){
        e.target.parentNode.querySelector('.gauge .to').innerHTML = max
        e.target.parentNode.querySelector('.gauge .value').innerHTML = val
    }
})