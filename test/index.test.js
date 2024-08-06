import { expect } from "chai";
import { describe, it } from "mocha";
import percentify from "../src/index.js";

const arr = [0.5, 0.25, 0.125, 0];

describe("Array", () => {
  it("First should be 0.57", () => expect(percentify(arr)[0]).to.equal(0.57));
  it("Last should be 0", () => expect(percentify(arr)[3]).to.equal(0));
});

describe("Array with Options", () => {
  it("Fist should be 1", () => expect(percentify(arr, 0)[0]).to.equal(1));
  it("Last should be 0", () => expect(percentify(arr, 0)[3]).to.equal(0));
});

describe("Empty Array", () => {
  it("First should be empty", () => expect(percentify([]).length).to.equal(0));
});
