var LinkedList = require('../lib/LinkedList');

const range = length => Array.apply(null, {length: length}).map(Number.call, Number);
const abcRange = length => range(length).map( num => String.fromCharCode( 97 + num ) );

// unit tests
// do not modify the below code
describe('LinkedList', function() {
  let list;
  
  beforeEach( () => {
    list = new LinkedList();
  })
  
  it('constructor', () => {
    expect(list).toEqual(jasmine.any(LinkedList));
  });
  
  it('push', () => {
    abcRange(26).map( character => list.push(character) );
    expect(list.length).toEqual(26);
  });
  
  it('pop', () => {
    abcRange(13).map( character => list.push(character) );
    expect(list.length).toEqual(13);
    range(10).map( () => list.pop() );
    expect(list.length).toEqual(3);
    expect(list.pop()).toEqual('c');
  });
  
  it('get', () => {
    list.push('first');
    expect(list.get(0)).toEqual('first');
    list.push('second');
    expect(list.get(1)).toEqual('second');
    expect(list.get(0)).toEqual('first');
    abcRange(26).map( character => list.push(character));
    expect(list.get(27)).toEqual('z');
    expect(list.get(0)).toEqual('first');
    expect(list.get(9)).toEqual('h');
    list.pop();
    expect(list.get(list.length-1)).toEqual('y');
  });
  
  it('delete', () => {
    abcRange(26).map( character => list.push(character) );
    list.delete(13);
    expect(list.length).toEqual(25);
    expect(list.get(12)).toEqual('m');
    expect(list.get(13)).toEqual('o');
    list.delete(0);
    expect(list.length).toEqual(24);
    expect(list.get(0)).toEqual('b');
  });
});

describe('LinkedList - delete', function() {
  let list;
  
  beforeEach( () => {
    list = new LinkedList();
  })
  
  it('should delete nothing and return null, when there is 0 item but I want to delete the 1st one', () => {
    expect(list.delete(0)).toEqual(null);
    expect(list.length).toEqual(0);
  });

  it('should delete and return the first one, when there is 2 items and I want to delete the 1st one ', () => {
    list.push(1);
    list.push(2);
    expect(list.delete(0)).toEqual(1);
    expect(list.length).toEqual(1);
    expect(list.get(0)).toEqual(2)
  });

  it('should delete nothing and return null, when there is 2 items but I want to delete the 4th one (out of index)', () => {
    list.push(1);
    list.push(2);
    expect(list.delete(3)).toEqual(null);
    expect(list.length).toEqual(2);
  });

  it('should delete the last one and make the previous one to be tail, when there is 3 items and I want to delete the 3rd one', () => {
    list.push(1);
    list.push(2);
    list.push(3);
    expect(list.delete(2)).toEqual(3);
    expect(list.length).toEqual(2);
  });

  it('should delete the second one and make the only one left to be head and tail, when there is 2 items and I want to delete the 2nd one', () => {
    list.push(1);
    list.push(2);
    expect(list.delete(1)).toEqual(2);
    expect(list.length).toEqual(1);
    expect(list.get(0)).toEqual(1);
  });

  it('should not decrease the length and return null, when no item has been deleted', ()=> {
    expect(list.delete(0)).toEqual(null);
    expect(list.length).toEqual(0)
  });

  it('should decrease the length and return the deleted value, when an item has been deleted', ()=> {
    list.push(list.push(0)).toEqual()
  });

});

describe('LinkedList - pop', () => {
  let list;

  beforeEach( () => {
    list = new LinkedList();
  })

  it('should delete nothing and return null, when there is 0 item but I want to pop', () => {
    expect(list.pop()).toEqual(null);
  });

  it('should delete and return the only one, when there is only one item and I want to pop it', ()=>{
    list.push(1)
    expect(list.pop()).toEqual(1);
    expect(list.length).toEqual(0)
  });

})