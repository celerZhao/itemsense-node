import fs from 'fs';
import { stubRequest } from '../helpers';

function getScope(extraOptions) {
  const host = 'http://localhost:8080';
  const stubDefaults = {
    method: 'get',
    path: '/itemsense/support/v1/logs',
  };
  return stubRequest(host)(Object.assign(stubDefaults, extraOptions));
}

exports.examples = (expect, sinon) => {
  describe('.logs', () => {
    describe('.get()', () => {
      it('GETs to /support/v1/logs passing queryParams', function () {
        const query = {
          from: '2017-05-02T15:35:01.560Z',
          to: '2017-05-02T15:35:01.560Z',
          extended: true
        };
        const scope = getScope({ query });
        return this.subject.logs.get(query)
        .then(() => {
          scope.done();
        });
      });

      it('GETs to /support/v1/logs passing no queryParams', function () {
        const scope = getScope();
        return this.subject.logs.get()
        .then(() => scope.done());
      });

      it('should return the response', function () {
        const responseBody = 'I have a great body';
        const scope = getScope({ responseBody });
        this.fsWriteFileStub = sinon.stub(fs, 'writeFile');
        return this.subject.logs.get()
        .then((result) => {
          expect(result.toString()).to.equal(responseBody);
          sinon.assert.notCalled(this.fsWriteFileStub);
          scope.done();
          this.fsWriteFileStub.restore();
        });
      });

      it('should write reponse to a specified location', function () {
        const responseBody = 'I have a great body';
        const writeLocation = './logs.tar.gz';
        const scope = getScope({ responseBody });
        this.fsWriteFileStub = sinon.stub(fs, 'writeFile', (location, thing, callback) => {
          callback();
        });
        return this.subject.logs.get(null, writeLocation)
        .then((result) => {
          expect(result).to.equal(`Wrote ${writeLocation}`);
          sinon.assert.called(this.fsWriteFileStub);
          sinon.assert.calledWith(this.fsWriteFileStub, writeLocation);
          scope.done();
          this.fsWriteFileStub.restore();
        });
      });

      it('should respond with an error', function () {
        const responseBody = 'I have a great body';
        const writeLocation = './logs.tar.gz';
        const errMsg = 'earth shattering error';
        const query = {
          from: '2017-05-02T15:35:01.560Z',
          to: '2017-05-02T15:35:01.560Z',
          extended: true
        };

        const scope = getScope({ query, responseBody });
        this.fsWriteFileStub = sinon.stub(fs, 'writeFile', (location, thing, callback) => {
          callback(errMsg);
        });
        this.subject.logs.get(query, writeLocation)
        .then(() => {}, (error) => {
          expect(error).to.equal(errMsg);
          scope.done();
          this.fsWriteFileStub.restore();
        });
      });
    });
  });
};
