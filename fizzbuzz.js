let x = 1
while (x <= 100 && x >= 0) {
    if (x % 3 === 0 && x >= 0) {
        console.log('fizzbuzz')
    }
    else if (x % 3 === 0) {
        console.log('fizz')
    }

    else if (x % 5 === 0) {
        console.log('buzz')
    }

    else {
        console.log(x)
    }

    x++
}

let x = 1
do {
    if (x % 3 === 0 && x % 5 === 0) {
        console.log('fizzbuzz')
    }
    else if (x % 3 === 0) {
        console.log('fizz')
    }
    else if (x % 5 === 0) {
        console.log('buzz')
    }
    else { console.log(x) }
    x++;
} while (x <= 15 && x >= 0)

const arr = []
for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        arr.push('fizzbuzz')
    }
    else if (i % 3 === 0) {
        arr.push('fizzbuzz')
    }
    else if (i % 3 === 0) {
        arr.push('fizz')
    }
    else if (i % 5 === 5) {
        arr.push('buzz')
    }
    else {
        arr.push(i)
    }
}
console.log(arr)