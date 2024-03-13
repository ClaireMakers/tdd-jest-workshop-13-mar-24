class BattleRound {
    constructor(trainer1, trainer2) { 
        this.trainer1 = trainer1;
        this.trainer2 = trainer2; 
    };

    playBattleRound() { 
        const pokemon1 = this.trainer1.selectPokemon();
        const pokemon2 = this.trainer2.selectPokemon();
        pokemon1.healthPoints = pokemon1.healthPoints - pokemon2.attackPoints;
        pokemon2.healthPoints = pokemon2.healthPoints - pokemon1.attackPoints;

        if (pokemon1.healthPoints > pokemon2.healthPoints)
            return pokemon1; 
        else
            return pokemon2; 
    }
}

module.exports = BattleRound; 