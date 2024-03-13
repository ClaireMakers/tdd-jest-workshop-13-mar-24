const Trainer = require("./Trainer");

describe("unit test for the Trainer class", () => { 
    test("When catchPokemon is called, the argument passed to the function is added to the pokemons array", () => { 
        const ash = new Trainer();

        const doublePokemon = {
            name: "Pikachu",
            healthPoints: 10,
            attackPoints: 2,
            getName: () => { return doublePokemon.name }
        } 

        ash.catchPokemon(doublePokemon); 
        expect(ash.pokemons).toEqual([doublePokemon]);
        expect(ash.pokemons[0].getName()).toEqual("Pikachu");
        expect(ash.pokemons[0]).toBe(doublePokemon)
    })
})