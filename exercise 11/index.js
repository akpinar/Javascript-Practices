//Asal sayı bulan program

showPrimes(20);
function showPrimes(limit){
    for(let i = 2; i<limit+1;i++){
        let isPrime = true;
        for(let j = 2; j<i; j++){
            if(i%j === 0){
                isPrime = false;
                break;
            }
        }
        if (isPrime) console.log(i)
    }
}