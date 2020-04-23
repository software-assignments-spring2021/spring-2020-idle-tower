const chai = require('chai');

const { assert } = chai;
const chaiHttp = require('chai-http');
const app = require('../app');

chai.use(chaiHttp);


describe('POST /save-restaurant route', () => {
  it('should respond with JSON data = {error, message}', () => {
    chai.request(app)
      .post('/user/save-restaurant/')
      .end((err, res) => {
        assert.equal(res.status, 200);
        // console.log("Response Body:", res.body);
        assert.exists(res.body.error);
        assert.exists(res.body.message);
      });
  });
});
