
showStars(6);
function showStars(rows){
    for(let i = 1; i<rows; i++){
        let pattern = '';
    
        for(let j = 0; j<i; j++)
            pattern += '*';
        console.log(pattern);

    }

}