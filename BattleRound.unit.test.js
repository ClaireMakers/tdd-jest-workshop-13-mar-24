const BattleRound = require("./BattleRound");
const Trainer = require("./Trainer");

jest.mock("./Trainer");

describe("BattleRound unit tests", () => {
  beforeEach(() => {
    // Before each test, reset the mock
    // This helps starting each test case
    // with a "fresh" mocked class
    Trainer.mockClear();
  });
    
    
    test("When we play a battle round, it should return the pokemon with the most remaining healthPoints", () => {
        const doublePokemon1 = {
            attackPoints: 3,
            healthPoints: 10
        }

        const doublePokemon2 = {
          attackPoints: 5,
          healthPoints: 30,
        };

    // 1. We use the normal constructor - Jest will take care of creating a mock.
        const mockTrainer1 = new Trainer();
        const mockTrainer2 = new Trainer(); 

    // 2. We mock the method getMove, replacing its normal implementation
      // selectPokemon
        mockTrainer1.selectPokemon.mockImplementation(() => { return doublePokemon1; });
        mockTrainer2.selectPokemon.mockImplementation(() => {return doublePokemon2; });

    // 3. The rest is the same as when using the previous technique.
        const battleRound = new BattleRound(mockTrainer1, mockTrainer2);

        expect(battleRound.playBattleRound()).toBe(doublePokemon2);
  });
});
