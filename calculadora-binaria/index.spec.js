const mockery = require('mockery');
const chai = require('chai');

const expect = chai.expect;

describe('CalculadoraBinaria', () => {
  beforeEach(() => {
    mockery.enable({
      warnOnReplace: false,
      warnOnUnregistered: false,
      useCleanCache: true
    });
  });
  afterEach(() => {
    mockery.disable();
    mockery.deregisterAll();
  });


  //Construir test
});