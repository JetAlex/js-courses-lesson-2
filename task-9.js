/*
#### Задача 9

Отсортировать массив по убыванию.

```javascript
var arr = [1,2,3,4,5,6];
// [6,5,4,3,2,1]
```

**Внимание**!

- Не разрашается использовать специальные методы массивов.

*/

const arr = [1,2,3,4,5,6];
const arrLength = arr.length;

for (let i = 0; i < arrLength; i++) {
  for (let j = 0; j < arrLength; j++) {
    if (arr[i] > arr[j]) {
      const tempValue = arr[i];
      arr[i] = arr[j];
      arr[j] = tempValue;
    }
  }
}

console.log(arr);

