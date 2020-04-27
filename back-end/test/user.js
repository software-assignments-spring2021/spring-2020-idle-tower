const chai = require('chai');

const { assert } = chai;
const chaiHttp = require('chai-http');
const app = require('../app');

chai.use(chaiHttp);

// POST /save-restaurant
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

// POST /remove-restaurant
describe('POST /remove-restaurant route', () => {
  it('should respond with JSON data = {error, message}', () => {
    chai.request(app)
      .post('/user/remove-restaurant/')
      .end((err, res) => {
        assert.equal(res.status, 200);
        // console.log("Response Body:", res.body);
        assert.exists(res.body.error);
        assert.exists(res.body.message);
      });
  });
});
