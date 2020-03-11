const assert = require('chai').assert;
const app = require('../app');
//const YoJuan = require('../app').YoJuan;
//const addNumbers = require('../app').addNumbers;

//results
YoJuanResult = app.YoJuan();
addNumbersResult = app.addNumbers(5,5);
 
describe('App logs', function(){
  describe('YoJuan()', function(){
    it('YoJuan should return juan', function(){
      //let result = app.YoJuan();
      assert.equal(YoJuanResult, 'juan');
    });
  });

describe('addNumbers()', function(){
  it('addNumbers should be above 5', function(){
        //let result = app.addNumbers(5,5);
        assert.isAbove(addNumbersResult, 5);
  });

  it('addNumbers should be type number', function(){
        //let result = app.addNumbers(5,5);
        assert.typeOf(addNumbersResult, 'number');
  });
 })
});
