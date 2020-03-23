// Типы данных и переменные

var name = 'Богдан';
console.log(name);
var name1 = 'Анжела';
console.log(name1);

// Условный оператор if

if (name == 'Богдан') {
    console.log('да');
} else {
    console.log('нет');
}

// Циклический оператор for

for (
    var i = 0;
    i < 10;
    i++
) {
    console.log(i);
}

// Функции

function summ(a, b, c) {
    var result = a + b + c;

    return result
}

var result = summ(10, 20, 30);
console.log(result);

var result = summ(15, 25, 35);
console.log(result);

// Массивы и объекты 1 задание
var array = ['Привет', 'loftschool']

array.push('я изучаю');
array.push('javascript');

for (let i = 0; i < array.length; i++) {
    console.log(array[i])
}

// Массивы и объекты 2 задание

var array1 = [96, 82, 57]

array1.push(24);
array1.push(76);
array1.push(29);
array1.push(32);
array1.push(192);
array1.push(322);
array1.push(123);

for (
    let i = 0;
    i < array1.length;
    i++
) {
    const name = array1[i];
    if (name > 100) {
        console.log(name)
    }
}

// Массивы и объекты 3 задание

var obj = {
    name: 'Богдан',
    lastName: 'Сутужко',
    age: '23',
}

console.log(obj.name);
console.log(obj.lastName);
console.log(obj.age);

obj.sex = 'male'

console.log(obj.sex);

// Массивы и объекты 4 задание

function hello(human) {
    result = ('Привет, меня зовут') + ' ' + obj.name + ' ' + obj.lastName + ' ' + ('и мне') + ' ' + obj.age + ' ' + ('года!');
    return result;
}

hello(obj)
console.log(result)
