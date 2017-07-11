exports.examples = (expect) => {
  describe('.softwareVersions', () => {
    describe('.createOrReplace(readerSoftwareVersionData)', () => {
      it('PUTs to /configuration/v1/softwareVersions/createOrReplace', function () {
        const readerSoftwareVersionData = { versionInfo: { versionIdentifier: { version: 'string', imageType: 'string' } }, description: 'description', updatedComment: 'comment' };
        return expect(
          this.subject.softwareVersions.createOrReplace(readerSoftwareVersionData)
        ).to.haveSent.and.resolveTo.request({
          method: 'put',
          path: '/itemsense/configuration/v1/softwareVersions/createOrReplace',
          body: readerSoftwareVersionData,
          header: ['Authorization', 'Basic c2VhbjpwYXNzd29yZA==']
        });
      });
    });

    describe('.destroy(imageType, softwareVersionId)', () => {
      it('DELETEs to /configuration/v1/softwareVersions/destroy/:imageType/:softwareVersionId', function () {
        const imageType = 'firmware_speedway';
        const softwareVersionId = 'sampleVersionId';
        return expect(
          this.subject.softwareVersions.destroy(imageType, softwareVersionId)
        ).to.haveSent.and.resolveTo.request({
          method: 'delete',
          path: `/itemsense/configuration/v1/softwareVersions/destroy/${imageType}/${softwareVersionId}`,
          header: ['Authorization', 'Basic c2VhbjpwYXNzd29yZA==']
        });
      });
    });

    describe('.list(imageType)', () => {
      it('GETs to /configuration/v1/softwareVersions/list/:imageType', function () {
        const imageType = 'firmware_speedway';
        return expect(
          this.subject.softwareVersions.list(imageType)
        ).to.haveSent.and.resolveTo.request({
          method: 'get',
          path: `/itemsense/configuration/v1/softwareVersions/list/${imageType}`,
          header: ['Authorization', 'Basic c2VhbjpwYXNzd29yZA==']
        });
      });
    });

    describe('.get(imageType, softwareVersionId)', () => {
      it('GETs to /configuration/v1/softwareVersions/show/:imageType/:softwareVersionId', function () {
        const imageType = 'firmware_speedway';
        const softwareVersionId = 'sampleVersionId';
        return expect(
          this.subject.softwareVersions.get(imageType, softwareVersionId)
        ).to.haveSent.and.resolveTo.request({
          method: 'get',
          path: `/itemsense/configuration/v1/softwareVersions/show/${imageType}/${softwareVersionId}`,
          header: ['Authorization', 'Basic c2VhbjpwYXNzd29yZA==']
        });
      });
    });

    describe('.update(versionPolicyObj)', () => {
      it('PUTs to /configuration/v1/softwareVersions/updatePolicy', function () {
        const versionPolicyObj = {
          versionIdentifier: {
            version: 'sampleVersionId',
            imageType: 'firmware_speedway'
          },
          policy: 'string',
          updatedComment: 'string'
        };
        return expect(
          this.subject.softwareVersions.update(versionPolicyObj)
        ).to.haveSent.and.resolveTo.request({
          method: 'put',
          path: '/itemsense/configuration/v1/softwareVersions/updatePolicy',
          body: versionPolicyObj
        });
      });
    });
  });
};
