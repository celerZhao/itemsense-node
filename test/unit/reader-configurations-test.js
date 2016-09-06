exports.examples = function(expect) {
  describe('.readerConfigurations', function() {
    describe('.create(readerConfigurationParams)', function() {
      it('POSTs to /configuration/v1/readerConfigurations/create with readerConfigurationParams as the body', function() {
        const readerConfigurationParams = { name: 'sampleReaderDefinition', operations: "normal", configuration: {} };
        return expect(this.subject.readerConfigurations.create(readerConfigurationParams)).to.wrap.request({
          method: 'post',
          path: `/itemsense/configuration/v1/readerConfigurations/create`,
          body: readerConfigurationParams
        });
      });
    });

    describe('.update(readerConfigurationParams)', function() {
      it('PUTs to /configuration/v1/readerConfigurations/createOrReplace with readerConfigurationParams as the body', function() {
        const readerConfigurationParams = { name: 'sampleReaderDefinition', operations: "normal", configuration: {} };
        return expect(this.subject.readerConfigurations.update(readerConfigurationParams)).to.wrap.request({
          method: 'put',
          path: `/itemsense/configuration/v1/readerConfigurations/createOrReplace`,
          body: readerConfigurationParams
        });
      });
    });

    describe('.delete(readerConfigurationName)', function() {
      it('DELETEs to /configuration/v1/readerConfigurations/destroy/{readerConfigurationName}', function() {
        const readerConfigurationName = 'sampleReaderDefinition';
        return expect(this.subject.readerConfigurations.delete(readerConfigurationName)).to.wrap.request({
          method: 'delete',
          path: `/itemsense/configuration/v1/readerConfigurations/destroy/${readerConfigurationName}`
        });
      });
    });

    describe('.get(readerConfigurationName)', function() {
      it('GETs to /configuration/v1/readerConfigurations/show/{readerConfigurationName}', function() {
        const readerConfigurationName = 'sampleReaderDefinition';
        return expect(this.subject.readerConfigurations.get(readerConfigurationName)).to.wrap.request({
          method: 'get',
          path: `/itemsense/configuration/v1/readerConfigurations/show/${readerConfigurationName}`
        });
      });
    });

    describe('.getAll()', function() {
      it('GETs to /configuration/v1/readerConfigurations/show', function() {
        return expect(this.subject.readerConfigurations.getAll()).to.wrap.request({
          method: 'get',
          path: `/itemsense/configuration/v1/readerConfigurations/show`
        });
      });
    });
  });
}
