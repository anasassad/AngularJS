var numbers = [1,2,3,4,5,6,7,8,9,10];

var filteredArray = numbers.filter((value) => value > 4);

console.log(filteredArray);

var shoppingList = [
    'Dacia Diesel','Front Lights','Back Lights','Gasoil 2L','Diesel 5L','Wheels x4'
];

var keyword = "Lights" ;

var filteredShoppinList = shoppingList.filter(value => value.indexOf(keyword) !== -1);

console.log(filteredShoppinList);
