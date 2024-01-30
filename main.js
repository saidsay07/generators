// Функция генератор
function * strGenerator() {
    yield "H"
    yield "e"
    yield "l"
    yield "l"
    yield "o"
}
// Что бы вызвать функцию генератора str.next()
const string = strGenerator()

function * numberGenerator(n = 10) {
    for (let i = 0; i < n; i++) {
        yield i
    }
}

const number = numberGenerator(5)

// Искуственный генератор
const iterator = {
    [Symbol.iterator](n = 10) {
        let i = 0
        return {
            next() {
                if (i < n) {
                    return { value: ++i, done: false}
                }
                return { value: undefined, done: true}
            }
        }
    }
}

function * iter(n = 10) {
    for (let i = 0; i < n; i++) {
        yield i
    }
}

for (let key of iter(5)) {
    console.log(key)
}