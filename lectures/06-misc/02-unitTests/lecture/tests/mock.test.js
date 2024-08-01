// Test Driven Development



import {jest} from '@jest/globals';

jest.unstable_mockModule("axios", () => {
  return {
    // Mimik Axios
    default: {
      get: jest.fn().mockResolvedValue({
        data: {
          results: [
            {
              name: "bulbasaur",
              url: "https://pokeapi.co/api/v2/pokemon/1/",
            },
            {
              name: "ivysaur",
              url: "https://pokeapi.co/api/v2/pokemon/2/",
            },
            {
              name: "venusaur",
              url: "https://pokeapi.co/api/v2/pokemon/3/",
            },
            {
              name: "charmander",
              url: "https://pokeapi.co/api/v2/pokemon/4/",
            },
            {
              name: "charmeleon",
              url: "https://pokeapi.co/api/v2/pokemon/5/",
            },
          ],
        },
      }),
    },
  };
});

const mockRandom = jest.fn()
jest.unstable_mockModule('lodash', () => {
  return {
    default: {
      random: mockRandom
    }
  }
});

const { doSkillCheck, getNthPokemon } = await import("../mock-functions.js");

describe('Test Skill check', () => {
  test('return false for rolls between 1 - 9', () => {
    for (let number = 1; number <= 9; number++) {
      mockRandom.mockReturnValue(number);
      expect(doSkillCheck()).toBe(false)
    } 
  })

  test('retrun true for rolls vetewn 110 - 20', () => {
    for(let n = 10; n <=20; n++) {
      mockRandom.mockReturnValue(n);
      expect(doSkillCheck()).toBe(true)
    }
  })
})



// describe("testing nth pokemon function", () => {
//   test("return 2nd pokemon when n = 2", async () => {
//     const pokemon2 = await getNthPokemon(2);

//     expect(pokemon2).toEqual({
//       name: "ivysaur",
//       url: "https://pokeapi.co/api/v2/pokemon/2/",
//     })
//   });
// });
