let num = +prompt('Nechta misol ishlamoxci bolsangiz shu sonni kiriting')
console.log('Siz ' + num + ' ta misol ishladingiz');

function son(min, max) {
    return Math.round(Math.random() * (max - min) + 1)
}

for (let i = 0; i < num; i++) {
    let num1 = son(1, 25)
    let num2 = son(1, 25)
    let num3 = son(1, 4)

    if (num3 == 1) {
        let javob = +prompt(num1 + '+' + num2);
        total = num1 + num2
        if (javob == total) {
            console.log( "Sizning javob togri " + javob);
        } else {
            console.log("Sizning javob notogri " + javob + " togri javob " + total);
        }
    } else if (num3 == 2) {
        let javob = +prompt(num1 + '-' + num2);
        total = num1 - num2
        if (javob == total) {
            console.log("Sizning javob togri " + javob);
        } else {
            console.log("Sizning javob notogri " + javob + " togri javob " + total);
        }
    } else if (num3 == 3) {
        let javob = +prompt(num1 + '*' + num2);
        total = num1 * num2
        if (javob == total) {
            console.log("Sizning javob togri " + javob);
        } else {
            console.log("Sizning javob notogri " + javob + " togri javob " + total);
        }
    } else {
        let javob = +prompt(num1 + '/' + num2);
        total = num1 / num2
        if (javob == total) {
            console.log("Sizning javob togri " + javob);
        } else {
            console.log("Sizning javob notogri " + javob + " togri javob " + total);
        }
    }
    

}