const ops = new Map()
ops.set('+', (number1, number2) => number1 + number2)
ops.set('-', (number1, number2) => number1 - number2)
ops.set('*', (number1, number2) => number1 * number2)
ops.set('/', (number1, number2) => number1 / number2)

const doThis = (op, number1, number2) => {
    try {
        return ops.get(op)(number1, number2)
    }
    catch (error) {
        alert('Ошибка!')
    }
}


if (!Math.trunc) {
    Math.trunc = (v) => {
        v = +v;
        return (v - v % 1) || (!isFinite(v) || v === 0 ? v : v < 0 ? -0 : 0);
    };
}

export const task1 = (op, number) => {
    if (!task1_validate(op)) {
        alert('Ошибка!')
        return false
    }

    const result = []
    const numbers = []

    for (let i = 0; i <= number; i++) {
        numbers.push(i)
    }

    result.push(new Array(op, ...numbers))

    numbers.forEach(globalElement => {
        const row = [globalElement]
        numbers.forEach(subElement => row.push(Math.trunc(((doThis(op, +globalElement, +subElement))) * 100) / 100))
        result.push(row)
    })


    return result
}

const task1_validate = (op) => {
    return ops.has(op)
}


export const task2 = (str) => {
    
    if (!task2_validate(str)) {
        alert('Ошибка!')
        return false
    }

    const arr = str.split('').reverse()

    for (let i = 0; i < arr.length; i++) {
        if (i % 4 === 0) {
            arr.splice(i, 0, ',')
        }
    }

    str = arr.reverse().join('').substring(0, arr.length - 1)
    return str
}

const task2_validate = (value) => {
    return ((Number.isInteger(+value)) && (value !== '')) ? true : false
}

export const task3 = (max, val) => {

    if (!task3_validate(max, val)) {
        alert('Ошибка!')
        return false
    }

    const html = document.querySelector('html')
    html.style.setProperty('--max', +max)
    html.style.setProperty('--value', +val)

    return true
}

const task3_validate = (max, val) => {
    
    if (isNaN(+max) || (max === '') || (+max <= 0)) return false
    if (isNaN(+val) || (val === '') || (+val < 0)) return false
    if (+max < +val) return false
    return true
}
