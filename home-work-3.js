let _true = 0
let _false = 0

if(confirm('Преобразование Number(“false”) вернет число 0')) {
    _true++
} else {
    _false++
} if (confirm('Значение переменной let нельзя изменить после инициализации')) {
    _false++
} else {
    _true++
} if (confirm('У объекта Math существует метод для вычисления квадратного корня')) {
    _true++
} else {
    _false++
} if (confirm('Результат выполнения логической операции - это булево значение')) {
    _true++
} else {
    _false++
} if (confirm('JS - слишком сложный и ему невозможно научиться')) {
    _false++
} else {
    _true++
}
alert ('Правдивых ответов: ' + _true)
alert ('Ложных ответов: ' + _false)