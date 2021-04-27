import startsWithCapital from './Capital';

test('should return the boolean capital value of the first letter in a word', () =>{
    const word = 'Hello'
    expect(startsWithCapital(word)).toEqual(word + ' starts with capital letter ' + word.charAt(0) + ' ' + true)
})

test('it should not process an empty string', () =>{
    const empty = ''
    expect(startsWithCapital(empty)).toEqual('enter a word please')
})