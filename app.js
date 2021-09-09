let input = document.querySelector('.input')
let power = ''

// Поле вывода математических операции
function insert (num) {
    if(input.textContent == 0) {
        input.textContent = ''
        input.textContent = input.textContent + num
    } else 
    input.textContent = input.textContent + num
}

// Кнопка очистки
function clean () {
    input.textContent = '0'
    power = ''
}

// Кнопка удаления
function back () {
    let exp = input.textContent
    input.textContent = exp.substring(0, exp.length - 1)
    if(input.textContent == 0) {
        input.textContent = '0'
    }
}

// Кнопка равенства
function equal () {
    let exp = input.textContent
    if(input.textContent.includes('^')) {
        let tmp = input.textContent.split('^')
        let num = eval(power)
        let pow = +tmp[1]
        input.textContent = Math.pow(num, pow)
        power = ''
        return
    }

    if(exp) {
        input.textContent = eval(exp)
    }

}

// Кнопка процента
function percent() {
    input.textContent = eval(input.textContent)/100
}

// Кнопка констант (PI, e)
function constant(name) {
    if(input.textContent == 0) {
        input.textContent = ''
    }
    if(name == 'pi') {
        input.textContent = input.textContent + Math.PI.toFixed(8)
    }

    if(name == 'e') {
        input.textContent = input.textContent + Math.E.toFixed(8)
    }
}

// Кнопка квадратного корня
function sqrt() {
    input.textContent = Math.sqrt(eval(input.textContent))
}

// Кнопка возведение в квадрат
function pow() {
    input.textContent = Math.pow(eval(input.textContent), 2)
}

// Кнпока отрицтальной степени
function pow1 () {
    input.textContent = Math.pow(eval(input.textContent), -1)
}

// Кнопка любой степени
function powy() {
    power = input.textContent;
    input.textContent += "^";
}

// Кнопка вычисление факториала
function factorial(n) {
    return (n != 1) ? n * factorial(n - 1) : 1;
}

function fact() {
    input.textContent = factorial(+eval(input.textContent));
}

// Кнопки вычисление логарифмов
function log(name) {
    if(name == 'lg') {
        input.textContent = Math.log10(eval(input.textContent)).toFixed(8)
    }

    if(name == 'ln') {
        input.textContent = Math.log(eval(input.textContent)).toFixed(8)
    }
}
// Перевод градусов в радианы
document.querySelector('.type').addEventListener('click', function() {
    if (document.querySelector('.type').textContent == "deg") {
        this.textContent = "rad";
        console.log('Градусы')
    } else if (document.querySelector('.type').textContent == "rad") {
        this.textContent = "deg";
        console.log('Радианы')
    }
})

// Кнопки Тригонометрии
function f(name) {
    if (name == 'sin') {
        if(document.querySelector('.type').textContent == "deg") {
            //В градусах
            input.textContent = parseFloat(Math.sin(eval(input.textContent) / 180 * Math.PI).toFixed(8).toString());
        } else {
            //В радианах
            input.textContent = parseFloat(Math.sin(eval(input.textContent)).toFixed(8).toString());
        }        
    }
    if (name == 'cos') {
        if(document.querySelector('.type').textContent == "deg") {
            //В градусах
            input.textContent = parseFloat(Math.cos(eval(input.textContent) / 180 * Math.PI).toFixed(8).toString());
        } else {
            //В радианах
            input.textContent = parseFloat(Math.cos(eval(input.textContent)).toFixed(8).toString());
        } 
    }
    if (name == 'tan') {
        if(document.querySelector('.type').textContent == "deg") {
            //В градусах
            input.textContent = parseFloat(Math.tan(eval(input.textContent) / 180 * Math.PI).toFixed(8).toString());
        } else {
            //В радианах
            input.textContent = parseFloat(Math.tan(eval(input.textContent)).toFixed(8).toString());
        }  
    }
    if (name == 'cot') {
        if(document.querySelector('.type').textContent == "deg") {
            //В градусах
            input.textContent = parseFloat(1/Math.tan(eval(input.textContent) / 180 * Math.PI).toFixed(8).toString());
        } else {
            //В радианах
            input.textContent = parseFloat(1/Math.tan(eval(input.textContent)).toFixed(8).toString());
        } 
    }
}