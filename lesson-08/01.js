/*
  Нужно написать функцию capitalizeWords, которая принимает строку и делает так, чтобы каждое слово начиналось с заглавной буквы.
  Например, если передать строку "hello world from javascript", функция должна вернуть "Hello World From JavaScript".

  🧙‍♂️Эту задачу можно решить при помощь цикла for. Рекомендуем реализовать этот вариант решения, как самый эффективный.
  Другой вариант - использовать метод split строк, и метод массива join.
*/

function capitalizeWords(str) {
     let text = str[0].toUpperCase()

    for (let i = 1; i < str.length; i++) {

        if(str[i - 1] === ' ' ) {
            text = text + str[i].toUpperCase()
            continue
        }
        text = text + str[i]
    }
     return text
}


