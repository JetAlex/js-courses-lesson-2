/*
####Задача 8

Написать код который посчитает сумму всех парных элементов в масиве, в суммировании учавствуют только элементы больше 3.

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
  const currentEl = arr[i];
  if (currentEl > 3) sum +=currentEl;
}

//  for (let i = 0; i < arrLength; i++) {
//    const currentEl = arr[i];
//    if (i % 2 && currentEl > 3) sum +=currentEl;
//  }

console.log(sum);
