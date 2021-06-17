// Напишите функцию sum, которая суммирует все переданные в нее аргументы.
// Число аргументов функции может быть произвольным.

export default function sum(...values) {
  return values.reduce((acc, current) => {
    return acc + current;
  });
}
