// Задание 4
// Напишите функцию, которая принимает два числа.
// Каждую секунду необходимо выводить числа в интервале от первого до второго принятого числа. Используйте setInterval.
// Например, пользователь ввёл числа 5 и 15. 
// Каждую секунду в консоль должно печататься число, начиная с 5 и заканчивая 15 (всего 11 чисел: 5 6 7 8 9 10 11 12 13 14 15).


function funcTimeout(a, b) {
  let i = setInterval(() => {
    console.log(a++);
    if (a > b) clearInterval(i);
  }, 1000)
}

funcTimeout(5, 15); // выводит 5 6 7 8 9 10 11 12 13 14 15 через 1 секунду