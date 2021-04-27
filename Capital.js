const startsWithCapital = (word) => {
    const checking =  word.charAt(0) === word.charAt(0).toUpperCase()
    if(word.length === 0){
        return 'enter a word please'
    }
    else if (checking === true) {
        return word + ' starts with capital letter ' + word.charAt(0) + ' ' + true
    }else if( checking === false){
        return word + ' starts with small letter ' + word.charAt(0) + ' ' + false
    }else{
        console.log(word)
    }
}

// console.log(startsWithCapital(""))
// console.log(startsWithCapital("Inherent-resolve"))

module.exports = startsWithCapital