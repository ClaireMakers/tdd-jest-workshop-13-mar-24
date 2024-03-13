const Pokemon = require("./Pokemon");


describe("Unit tests for the Pokemon Class", () => { 
    test("When I call the constructor method, the class is created with a name, healthPoints and attackPoints", () => {
        const pokemon = new Pokemon("Vulpix", 10, 2);
        
        expect(pokemon.attackPoints).toEqual(2);
        expect(pokemon.name).toEqual("Vulpix");
        expect(pokemon.healthPoints).toEqual(10);
    });
})

describe("Integration tests for the Pokemon Class", () => { 
    
})