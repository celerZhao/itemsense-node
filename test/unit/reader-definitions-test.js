exports.examples = function(expect) {
	describe('.readerDefinitions', function() {
		describe('.create(readerDefinitionParams)', function() {
      it('POSTs to /configuration/v1/readerDefinitions/create with readerDefinitionParams as the body', function() {
        const readerDefinitionParams = { name: 'sampleReaderDefinition', address: "127.0.0.1", type: 'XARRAY' };
        return expect(this.subject.readerDefinitions.create(readerDefinitionParams)).to.wrap.request({
          method: 'post',
          path: `/itemsense/configuration/v1/readerDefinitions/create`,
          body: readerDefinitionParams
        });
      });
    });

    describe('.update(readerDefinitionParams)', function() {
      it('PUTs to /configuration/v1/readerDefinitions/createOrReplace with readerDefinitionParams as the body', function() {
        const readerDefinitionParams = { name: 'sampleReaderDefinition', address: "127.0.0.1", type: 'XARRAY' };
        return expect(this.subject.readerDefinitions.update(readerDefinitionParams)).to.wrap.request({
          method: 'put',
          path: `/itemsense/configuration/v1/readerDefinitions/createOrReplace`,
          body: readerDefinitionParams
        });
      });
    });

    describe('.delete(readerDefinitionName)', function() {
      it('DELETEs to /configuration/v1/readerDefinitions/destroy/{readerDefinitionName}', function() {
        const readerDefinitionName = 'sampleReaderDefinition';
        return expect(this.subject.readerDefinitions.delete(readerDefinitionName)).to.wrap.request({
          method: 'delete',
          path: `/itemsense/configuration/v1/readerDefinitions/destroy/${readerDefinitionName}`
        });
      });
    });

    describe('.get(readerDefinitionName)', function() {
      it('GETs to /configuration/v1/readerDefinitions/show/{readerDefinitionName}', function() {
        const readerDefinitionName = 'sampleReaderDefinition';
        return expect(this.subject.readerDefinitions.get(readerDefinitionName)).to.wrap.request({
          method: 'get',
          path: `/itemsense/configuration/v1/readerDefinitions/show/${readerDefinitionName}`
        });
      });
    });

    describe('.getAll()', function() {
      it('GETs to /configuration/v1/readerDefinitions/show', function() {
        return expect(this.subject.readerDefinitions.getAll()).to.wrap.request({
          method: 'get',
          path: `/itemsense/configuration/v1/readerDefinitions/show`
        });
      });
    });

	});
}
