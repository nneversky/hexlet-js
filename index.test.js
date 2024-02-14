import { smallestDivisor } from '../hexlet-js/index.js';

if (smallestDivisor(15) !== 3)
    throw new Error('Функция работает неверно!');

if(smallestDivisor(1) !== 1)
    throw new Error('Функция работает неверно!');


console.log('Все тесты пройдены!');