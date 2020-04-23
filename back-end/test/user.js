const chai = require('chai');  
const assert = chai.assert;
const should = chai.should();
const app = require("../app");
const chaiHttp = require("chai-http");
chai.use(chaiHttp);



describe('POST /save-restaurant route', function() {
  it('should respond with JSON data = {error, message}', function() {
    chai.request(app).
      post('/user/save-restaurant/')
      .end((err,res)=>{
        assert.equal(res.status, 200);
        // console.log("Response Body:", res.body);
        assert.exists(res.body.error);
        assert.exists(res.body.message);
      })

  });
});
