class Garden {
  constructor(veggies = []) {
    this.veggies = veggies
  }
  list() {
    return this.veggies
  }
}

module.exports = Garden
