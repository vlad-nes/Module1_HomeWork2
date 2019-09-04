console.log(pizzaList)


// //Функции через for

//1
function getPizzasNames() {
    let pizzasNames = [];
    for (let i = 0 ; i < pizzaList.length; i++) { 
        pizzasNames.push(pizzaList[i].name);  
    }
    console.log('1)getPizzasNames', pizzasNames)
};
getPizzasNames();

//2
function getPizzaById(id) {
    for (let i = 0; i < pizzaList.length; i++) {
        if (pizzaList[i].id == id) {
            console.log('2)getPizzaById', pizzaList[i])
        }
      }
};
getPizzaById(7);

//3
function getPizzasByComposition(ingredient) {
    let pizzasComposition = [];
    for (let i = 0; i < pizzaList.length; i++) {
        if (pizzaList[i].composition.includes(ingredient)) {
            pizzasComposition.push(pizzaList[i]);
        }  
    }
    console.log('3)getPizzasByComposition', pizzasComposition)
};
getPizzasByComposition("ветчина");

//4
function getPizzasByCaloricity(maxCaloricity) {
    let pizzasCaloricity = [];
    for (let i = 0; i < pizzaList.length; i++) {
        if (maxCaloricity < pizzaList[i].caloricity) {
            pizzasCaloricity.push(pizzaList[i]);
        }  
    }
    console.log('4)getPizzasByCaloricity', pizzasCaloricity)
};
getPizzasByCaloricity(1100);

//5
function getAllWithoutPizzaById(id) {
    let pizzasId = [];
    for (let i = 0; i < pizzaList.length; i++) {
        if (pizzaList[i].id !== id) {
            pizzasId.push(pizzaList[i]);
        }
      }
      console.log('5)getAllWithoutPizzaById', pizzasId)
};
getAllWithoutPizzaById(7);

//6
function sortByMaxCompositions(maxCompositions) {
    let pizzasMaxCompositions = [];
    for (let i = 0; i < pizzaList.length; i++) {
        if (maxCompositions < pizzaList[i].composition.length) {
            pizzasMaxCompositions.push(pizzaList[i]);
        }  
    }
    console.log('6)sortByMaxCompositions', pizzasMaxCompositions) 
};
sortByMaxCompositions(10);

// //Фунции через .prototype

// //1
function getPizzasNamesProt() {
    let pizzasNamesProt = [];
    pizzasNamesProt = pizzaList.map(function (list) {
        return list.name
    })
    console.log('7)ProtoMap',pizzasNamesProt)
};
getPizzasNamesProt();

//2
function getPizzaByIdProt(id) {
    let findPizza = pizzaList.find(function(list) {
        return list.id == id
    })
    console.log('8)ProtoFind',findPizza)
};
getPizzaByIdProt(5);

//3
function getPizzasByCompositionProt(ingredient) {
    let filterPizza = pizzaList.filter(function(list) {
        return list.composition.includes(ingredient)
    })
    console.log('9)ProtoFilter',filterPizza)
};
getPizzasByCompositionProt('ветчина');

//4
function getPizzasByCaloricityProt(maxCaloricity) {
    let filterPizza = pizzaList.filter(function(list) {
        return list.caloricity > maxCaloricity
    })
    console.log('10)Again ProtoFilter',filterPizza)
};
getPizzasByCaloricityProt(1200);

//5
function getAllWithoutPizzaByIdProt(id) {
    let filterPizza = pizzaList.filter(function(list) {
        return list.id !== id
    })
    console.log('11)And again ProtoFilter',filterPizza)
};
getAllWithoutPizzaByIdProt(9);

//6
function sortByMaxCompositionsProt(maxCompositions) {
    let filterPizza = pizzaList.filter(function(list) {
        return list.composition.length > maxCompositions
    })
    console.log('12)And again ProtoFilter',filterPizza)
};
sortByMaxCompositionsProt(9);