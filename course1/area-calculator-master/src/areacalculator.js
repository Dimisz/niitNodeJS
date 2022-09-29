const pi = 3.14;

const calculateArea = (choice,side,length,breadth,radius) =>{   
    let area = 0.0; 
    // write logic here
    switch(choice){
        case 'square':
            if(typeof(side) === 'number' && side > 0){
                area = side * 4;
            }
            else {
                area = -1;
            }
            break;
        case 'rectangle':
            if(typeof(length) === 'number' && typeof(breadth) === 'number' && length > 0 && breadth > 0){
                area = length * breadth;
            }
            else{
                area = -1;
            }
            break;
        case 'circle':
            if(typeof(radius) === 'number' && radius > 0){
                area = 3.14 * radius * radius;
            }
            else{
                area = -1;
            }
            break;
        default:
            area = -1;
    }
    // note that you check the values passed are not null before performing any operation on them
    return area
}

console.log(calculateArea('square',5))
console.log(calculateArea('circle',0,0,0,4.5))
module.exports = {calculateArea}
// expect(calculateArea('square',5)).to.be.equal(20)
// expect(calculateArea('circle',0,0,0,4.5)).to.be.equal(63.585)