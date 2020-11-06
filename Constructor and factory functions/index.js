
let address = createAddress('a','b','c');

//Factory Functions

function createAddress(street, city, zipCode){
    return {
        street,
        city,
        zipCode
    };
}

console.log(address);


let address2 = new CreateAddress('d','e','f');

//Constructor Function

function CreateAddress(street, city, zipCode){
    this.street = street;
    this.city = city;
    this.zipCode = zipCode;
    
}

console.log(address2);
