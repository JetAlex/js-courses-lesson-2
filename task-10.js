/*
#### Задача 10

Отсортировать массив по возрастанию.

```javascript
var arr = [6,5,4,3,2,1];
// [1,2,3,4,5,6]
```

**Внимание**!

- Не разрашается использовать специальные методы массивов.
*/


const arr = [6,5,4,3,2,1];
const arrLength = arr.length;

for (let i = 0; i < arrLength; i++) {
  for (let j = 0; j < arrLength; j++) {
    if (arr[i] < arr[j]) {
      const tempValue = arr[i];
      arr[i] = arr[j];
      arr[j] = tempValue;
    }
  }
}

console.log(arr);

