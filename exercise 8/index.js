// girilen sayıya kadar olan sayılarda 3e ve 5e bölünebilen sayıların toplamını bulan program
console.log(sum(10));

function sum(limit){
    let total = 0;
    for(let i=0;i<=limit;i++){
        if(i%3 === 0)
            total += i;
        if(i%5 === 0)
            total += i;
    }
    return total;
}