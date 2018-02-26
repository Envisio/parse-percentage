const percentify = require('../lib/index');
const { expect } = require('chai');
const { describe, it } = require('mocha');

const arr = [0.7, 0.15, 0.05, 0];

describe('Array', () => {
  describe('.first', () => {
    it('should be 0.78', () => {
      expect(percentify(arr)[0]).to.equal(0.78);
    });
  });
  describe('.last', () => {
    it('should be 0', () => {
      expect(percentify(arr)[3]).to.equal(0);
    });
  });
});

describe('Array with Options', () => {
  describe('.first', () => {
    it('should be 1', () => {
      expect(percentify(arr, 0)[0]).to.equal(1);
    });
  });
  describe('.last', () => {
    it('should be 0', () => {
      expect(percentify(arr, 0)[3]).to.equal(0);
    });
  });
});

describe('Empty Array', () => {
  describe('.first', () => {
    it('should be empty', () => {
      expect(percentify([]).length).to.equal(0);
    });
  });
});
