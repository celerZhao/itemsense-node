exports.examples = (expect) => {
  describe('.readerDefinitions', () => {
    describe('.create(readerDefinitionParams)', () => {
      it('POSTs to /configuration/v1/readerDefinitions/create with readerDefinitionParams as the body', function() {
        const readerDefinitionParams = {
          name: 'sampleReaderDefinition',
          address: '127.0.0.1',
          type: 'XARRAY'
        };
        return expect(
          this.subject.readerDefinitions.create(readerDefinitionParams)
        ).to.wrap.request({
          method: 'post',
          path: '/itemsense/configuration/v1/readerDefinitions/create',
          body: readerDefinitionParams
        });
      });
    });

    describe('.update(readerDefinitionParams)', () => {
      it('PUTs to /configuration/v1/readerDefinitions/createOrReplace with readerDefinitionParams as the body', function() {
        const readerDefinitionParams = {
          name: 'sampleReaderDefinition',
          address: '127.0.0.1',
          type: 'XARRAY'
        };
        return expect(
          this.subject.readerDefinitions.update(readerDefinitionParams)
        ).to.wrap.request({
          method: 'put',
          path: '/itemsense/configuration/v1/readerDefinitions/createOrReplace',
          body: readerDefinitionParams
        });
      });
    });

    describe('.delete(readerDefinitionName)', () => {
      it('DELETEs to /configuration/v1/readerDefinitions/destroy/{readerDefinitionName}', function() {
        const readerDefinitionName = 'sampleReaderDefinition';
        return expect(this.subject.readerDefinitions.delete(readerDefinitionName)).to.wrap.request({
          method: 'delete',
          path: `/itemsense/configuration/v1/readerDefinitions/destroy/${readerDefinitionName}`
        });
      });
    });

    describe('.get(readerDefinitionName)', () => {
      it('GETs to /configuration/v1/readerDefinitions/show/{readerDefinitionName}', function() {
        const readerDefinitionName = 'sampleReaderDefinition';
        return expect(this.subject.readerDefinitions.get(readerDefinitionName)).to.wrap.request({
          method: 'get',
          path: `/itemsense/configuration/v1/readerDefinitions/show/${readerDefinitionName}`
        });
      });
    });

    describe('.getAll()', () => {
      it('GETs to /configuration/v1/readerDefinitions/show', function() {
        return expect(this.subject.readerDefinitions.getAll()).to.wrap.request({
          method: 'get',
          path: '/itemsense/configuration/v1/readerDefinitions/show'
        });
      });
    });

    describe('.groups()', () => {
      it('GETs to /configuration/v1/readerDefinitions/groups', function() {
        return expect(this.subject.readerDefinitions.groups()).to.wrap.request({
          method: 'get',
          path: '/itemsense/configuration/v1/readerDefinitions/groups'
        });
      });
    });

    describe('.getAllFeatures(readerName)', () => {
      it('GETs to /configuration/v1/readerDefinitions/{readerName}/featureChanges', function() {
        const readerName = 'reader1';
        return expect(this.subject.readerDefinitions.getAllFeatures(readerName)).to.wrap.request({
          method: 'get',
          path: `/itemsense/configuration/v1/readerDefinitions/${readerName}/featureChanges`
        });
      });
    });

    describe('.setFeature(readerName)', () => {
      it('POSTs to /configuration/v1/readerDefinitions/{readerName}/featureChanges with target state as body', function() {
        const readerName = 'reader1';
        const targetFeatureState = {
          feature: 'ANTENNA_HUB',
          action: 'enable'
        };
        return expect(
          this.subject.readerDefinitions.setFeature(readerName, targetFeatureState)
        ).to.wrap.request({
          method: 'post',
          path: `/itemsense/configuration/v1/readerDefinitions/${readerName}/featureChanges`,
          body: targetFeatureState
        });
      });
    });

    describe('.getFeature(readerName)', () => {
      it('GETs to /configuration/v1/readerDefinitions/{readerName}/featureChanges/{featureName}', function() {
        const readerName = 'reader1';
        const featureName = 'feature';
        return expect(
          this.subject.readerDefinitions.getFeature(readerName, featureName)
        ).to.wrap.request({
          method: 'get',
          path: `/itemsense/configuration/v1/readerDefinitions/${readerName}/featureChanges/${featureName}`
        });
      });
    });
  });
};
