function reversed(text) {
    let arr = []
    for (let i = text.length; i >= 0; i--) {
        arr.push(text[i])
    }
    return arr.join('')
}

module.exports = reversed;