// name
// array of pokemons
// catchPokemon method
//select Pokemon method

class Trainer {
  constructor(name) {
    this.name = name;
    this.pokemons = [];
  }

  catchPokemon(pokemon) { 
    this.pokemons.push(pokemon);
  }

  selectPokemon() {
    return this.pokemons[0];
  }

  sayName() { 
    console.log(this.name)
  }
}

module.exports = Trainer; 