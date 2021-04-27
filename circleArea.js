const areaOfaCircle = (radius) => {
    const PI = 3.142
    // Radius is in millimeter
    return 'area of circle ' + (PI * (radius * radius)) + 'mm'
  }
  
  // testing = areaOfaCircle(3)
  // console.log(testing)

module.exports = areaOfaCircle