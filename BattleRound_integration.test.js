const BattleRound = require("./BattleRound");
const Pokemon = require("./Pokemon");
const Trainer = require("./Trainer");


describe("Integration test for BattleRound", () => {
    //two pokemons battling
    //two trainers battling
    //playBattleRound function that will do some maths to figure the winner

    test("When we play a battle round, it should return the pokemon with the most remaining healthPoints", () => { 
        const mew = new Pokemon("Mew", 50, 5); 
        const charmander = new Pokemon("Charmander", 12, 2);

        const ash = new Trainer("Ash");
        const gary = new Trainer("Gary");

        ash.catchPokemon(mew);
        gary.catchPokemon(charmander); 

        const battleRoundOne = new BattleRound(ash, gary);

        expect(battleRoundOne.playBattleRound()).toEqual(mew);
    })
});

