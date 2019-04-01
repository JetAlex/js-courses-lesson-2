/*
#### Задача 11

Дан массив с элементами `[2, 5, 9, 15, 0, 4]`. С помощью цикла `for` и оператора `if` выведите на экран столбец тех элементов массива, которые больше 3-х, но меньше 10.

**Внимание**!

- Не разрашается использовать специальные методы массивов.
*/

const arr = [2, 5, 9, 15, 0, 4];
const arrLength = arr.length;

for (let i = 0; i < arrLength; i++) {
  const currEl = arr[i];
  (currEl > 3 && currEl < 10) && console.log(currEl);
}
