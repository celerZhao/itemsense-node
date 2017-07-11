import fs from 'fs';
import { stubRequest } from '../helpers';

function getScope(extraOptions) {
  const host = 'http://localhost:8080';
  const stubDefaults = {
    method: 'get',
    path: '/itemsense/support/v1/configuration',
  };
  return stubRequest(host)(Object.assign(stubDefaults, extraOptions));
}

exports.examples = (expect, sinon) => {
  describe('.configuration', () => {
    describe('.getAll()', () => {
      it('GETs to /support/v1/configuration', function () {
        const scope = getScope();
        return this.subject.configuration.getAll()
        .then(() => scope.done());
      });

      it('should return the response', function () {
        const responseBody = 'I have a great body';
        const scope = getScope({ responseBody });
        this.fsWriteFileStub = sinon.stub(fs, 'writeFile');
        return this.subject.configuration.getAll()
        .then((result) => {
          expect(result.toString()).to.equal(responseBody);
          sinon.assert.notCalled(this.fsWriteFileStub);
          this.fsWriteFileStub.restore();
          scope.done();
        });
      });

      it('should write reponse to a specified location', function () {
        const responseBody = 'I have a great body';
        const writeLocation = './config.tar.gz';
        const scope = getScope({ responseBody });
        this.fsWriteFileStub = sinon.stub(fs, 'writeFile', (location, thing, callback) => {
          callback();
        });
        return this.subject.configuration.getAll(writeLocation)
        .then((result) => {
          expect(result).to.equal(`Wrote ${writeLocation}`);
          sinon.assert.called(this.fsWriteFileStub);
          sinon.assert.calledWith(this.fsWriteFileStub, writeLocation);
          this.fsWriteFileStub.restore();
          scope.done();
        });
      });

      it('should responed with error', function () {
        const responseBody = 'I have a great body';
        const writeLocation = './config.tar.gz';
        const errMsg = 'earth shattering error';
        const scope = getScope({ responseBody });
        this.fsWriteFileStub = sinon.stub(fs, 'writeFile', (location, thing, callback) => {
          callback(errMsg);
        });
        this.subject.configuration.getAll(writeLocation)
        .then(() => {}, (error) => {
          expect(error).to.equal(errMsg);
          this.fsWriteFileStub.restore();
          scope.done();
        });
      });
    });
  });
};
