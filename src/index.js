module.exports = function zeros(expression) {
    // your solution
    var szero = 0;
    var mas = expression.split('*');
    console.log(mas);
    var countOfExclamationPoint; // количество !
    var number; // сам факториал
    var oddNumber = true; // проверяем на четность
    var countOfTwo = 0; // количество 2
    var countOfFive = 0; // количество 5  
    var countOfTen = 0;

    for (var i = 0; i < mas.length; i++) // проходим столько, сколько есть чисел с факториалом
    {
        countOfExclamationPoint = mas[i].substr(mas[i].indexOf('!')).length; // считаем количество !
        number = mas[i].substr(0, mas[i].indexOf('!')); // получаем число факториала из строки
        console.log("number");
        console.log(number);
        oddNumber = number % 2 == 0 ? false : true; // проверяем на четность
        var count;

        if (countOfExclamationPoint == 1) {
            count = 1;
        } else {
            count = oddNumber ? 1 : 2; // самое первое число в ряду факториала в зависимости от четности
        }

        while (count <= number) // считаем сколько двоек и пятерок входит в последовательность факториала
        {
            var temp = count;

            while (temp % 2 == 0) {
                countOfTwo++;
                temp = temp / 2;
            }

            while (temp % 5 == 0) {
                countOfFive++;
                temp = temp / 5;
            }
            /*
            console.log(count);
            if (count % 10 != 0) {

                if (count % 2 == 0) {
                    countOfTwo += count / 2;
                }

                if (count % 5 == 0) {
                    countOfFive += count / 5;
                }

            } else {
                countOfTen += 1;

                if (count / 10 == 2)
            }
*/
            count += countOfExclamationPoint;


        }
        console.log(number + "countOfTwo");
        console.log(countOfTwo);
        console.log(number + "countOfFive");
        console.log(countOfFive);
        console.log(number + "countOfTen");
        console.log(countOfTen);
    }
    /*  3   |       2             1                2
    mas[0].subString(mas[0].indexOf('!'));

    1- вернет позицию первого восклицат знака (первое вхождение). с этого места начнем брать substr
    2- получаем строку состоящую из ! знаков начиная с пункта 1 и до конца строки

    */
    szero = countOfTwo < countOfFive ? countOfTwo : countOfFive;
    console.log(countOfTwo);
    console.log(countOfFive);
    console.log(countOfTen);
    szero += countOfTen;

    return szero;
}