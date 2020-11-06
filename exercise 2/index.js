
let imageWeight = 1500;
let imageHeight = 1600;


function isLandscape(width, height){
    return (width > height);

};

let image = isLandscape(imageWeight,imageHeight);

console.log(image);