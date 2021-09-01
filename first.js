let data = [
    {name: 'David'},
    {name: 'Paul'},
    {name: 'Ekene'}
];

function getAge(yearOfBirth){
    let currentYear = new Date().getFullYear();
     return{
        value: currentYear - yearOfBirth
    }
}

module.exports = {
    data, 
    getAge: getAge
}