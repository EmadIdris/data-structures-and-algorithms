'use strict';
//-------------------------------------------------
const seeIfValid = require('../SQB');
//-------------------------------------------------
describe('Test Function', ()=>{
//-------------------------------------------------
  test('if empty ==> false', ()=>{
    expect(seeIfValid('')).toBe(false);
  });
//-------------------------------------------------
  test('if no brackets  ==> False ', ()=>{
    expect(seeIfValid('hello')).toBe(false);
  });
//-------------------------------------------------
  test('if matching ==> True', ()=>{
    expect(seeIfValid('{}')).toBe(true);
    expect(seeIfValid('{}(){}')).toBe(true);
  });
//-------------------------------------------------
  test('if concatenated is matching ==> true ', ()=>{
    expect(seeIfValid('(){}[[]]')).toBe(true);
  });
//-------------------------------------------------
  test('if concatenated with txt ==> True ', ()=>{
    expect(seeIfValid('{}{Emad}[Idris](())')).toBe(true);
  });
//-------------------------------------------------
  test('if !matching opening ==> False', ()=>{
    expect(seeIfValid('{')).toBe(false);
  });
//-------------------------------------------------
  test('if no opening ==> False', ()=>{
    expect(seeIfValid(')')).toBe(false);
  });
//-------------------------------------------------
  test('if diffent type of brackets ==> False', ()=>{
    expect(seeIfValid('{)')).toBe(false);
  });
//-------------------------------------------------
  test('if not Logic ==> False', ()=>{
    expect(seeIfValid('{(})')).toBe(false);
    expect(seeIfValid('[({}]')).toBe(false);
    expect(seeIfValid('(]hi(')).toBe(false);
  });
//-------------------------------------------------
});