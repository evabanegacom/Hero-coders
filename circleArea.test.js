import areaOfaCircle from './circleArea';

test('properly calculates the area of a circle', () =>{
    expect(areaOfaCircle(3)).toBe('area of circle ' + 28.278 +'mm')
})