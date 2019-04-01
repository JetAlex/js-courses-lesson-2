/*
####Задача 7

Написать код который посчитает сумму всех парных элементов в масиве.

```js
var arr = [1,2,3,4];
```

**Внимание**!

- Не разрашается использовать специальные методы массивов.

*/

let arr = [1,2,3,4];
const arrLength = arr.length;
let sum = 0;

for (let i = 1; i < arrLength; i+=2) {
  sum +=arr[i];
}

//  for (let i = 0; i < arrLength; i++) {
//    if (i % 2) sum +=arr[i];
//  }

console.log(sum);
