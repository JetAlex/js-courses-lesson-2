/*
####Задача 2

Перепишите `if..else` с использованием нескольких операторов `?`.

Для читаемости — оформляйте код в несколько строк.

```js
var message;

if (login == 'Pitter') {
  message = 'Hi';
} else if (login == 'Owner') {
  message = 'Hello';
} else if (login == '') {
  message = 'unknown';
} else {
  message = '';
}
```
*/

var message = (login == 'Pitter') ? 'hi' :
  (login == 'Owner') ? 'Owner' :
  (login == '') ? 'unknown' : '';