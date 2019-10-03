const Garden = require('../garden')
const { expect } = require('chai')

describe('Garden', () => {
  describe('list method', () => {
    it('returns an array', () => {
      const garden = new Garden()
      const listOfVeggies = garden.list()
      expect(listOfVeggies).to.be.an('array')
    })
    it('returns the veggies in the garden', () => {
      const initialVeggies = [
        { type: 'corn', quantity: 4 },
        { type: 'tomato', quantity: 12 },
        { type: 'carrot', quantity: 7 },
      ]
      const garden = new Garden(initialVeggies)
      const listOfVeggies = garden.list()
      expect(listOfVeggies).to.deep.equal(initialVeggies)
    })
  })
})
