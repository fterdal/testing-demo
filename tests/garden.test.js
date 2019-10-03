const Garden = require('../garden')
const { expect } = require('chai')

describe('Garden', () => {
  describe('list method', () => {
    it('returns an array', () => {
      // throw new Error('no arrays here')
      const garden = new Garden()
      const listOfVeggies = garden.list()
      // if (!Array.isArray(listOfVeggies)) {
      //   throw new Error('expected an array 😩')
      // }
      expect(Array.isArray(listOfVeggies)).to.equal(true)
    })
  })
})
