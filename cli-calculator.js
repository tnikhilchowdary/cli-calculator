const readline = require('readline');
const math = require('./math.js');

const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

r1.question("Enter First Number: ", (num1) => {
    r1.question("Enter Second Number: ", (num2) => {
        r1.question('Choose operation (add, sub, mul, div): ', (op) => {
            const a = parseFloat(num1);
            const b = parseFloat(num2);
            let result;

            switch(op) {
                case 'add':
                    result = math.add(a, b);
                    break;
                case 'sub':
                    result = math.subtract(a, b);
                    break;
                case 'mul':
                    result = math.multiply(a, b);
                    break;
                case 'div':
                    result = math.divide(a, b);
                    break;
                default:
                    result = 'Invalid operation';
            }

            console.log(`Result: ${result}`);
            r1.close();
        });
    });
});
