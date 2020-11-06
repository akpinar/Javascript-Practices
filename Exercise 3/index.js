

const output = fizzBuzz(15);
console.log(output);

function fizzBuzz(input){

    if( typeof input !== 'number')
        return NaN;

    if ((input % 3 === 0) && (input % 5 === 0))
        return 'fizzBuzz';

    if ((input % 3) === 0)
        return 'fizz';
    
     if ((input % 5) === 0)
        return 'buzz';
    
    

        return input;

    
}