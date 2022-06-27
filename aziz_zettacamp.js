let numbers = [3, 1, 2, 3, 7, 5, 6, 8, 2, 1];
var max = numbers[0];

function result() {
    for (var i in numbers) {
        if (numbers[i] > max) {
            max = numbers[i];
        }
    }
    return max;
}
console.log(result());