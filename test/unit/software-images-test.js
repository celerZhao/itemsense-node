exports.examples = (expect) => {
  describe('.softwareImages', () => {
    describe('.get(imageType, imageName)', () => {
      it('GETs /configuration/v1/images/:image_type/:image_name and resolves to API response', function () {
        const imageType = 'firmware_speedway';
        const imageName = 'octane-5.6.2.240.upg';

        return expect(
          this.subject.softwareImages.get(imageType, imageName)
        ).to.haveSent.and.resolveTo.request({
          method: 'get',
          path: `/itemsense/configuration/v1/images/${imageType}/${imageName}`,
          header: ['Authorization', 'Basic c2VhbjpwYXNzd29yZA=='],
          status: 200
        });
      });
    });
  });
};
