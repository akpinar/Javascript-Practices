//fizz -> 3'e bölünebilen sayılar
//buzzz-> 5'e bölünebilen sayılar
//fizzBuzz-> hem 3'e hem 5'e bölünebilen sayılar

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