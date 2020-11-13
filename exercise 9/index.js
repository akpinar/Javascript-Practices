//Öğrenci harf notunu hesaplayan program
const array = [80,80,50];

console.log(calculateGrade(array));

function calculateGrade(marks){
    const avarage = calculateAvarage(marks)

    if(avarage < 60) return 'F';
    if(avarage < 70) return 'D';
    if(avarage < 80) return 'C';
    if(avarage < 90) return 'B';
    return 'A';
}

function calculateAvarage(array){
    let sum = 0;
    for (let value of array) {
        sum += value;
    }
    return sum / array.lenght;
}
