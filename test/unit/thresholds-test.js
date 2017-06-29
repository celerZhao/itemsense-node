exports.examples = (expect) => {
  describe('.thresholds', () => {
    describe('.getAll()', () => {
      it('GETs to /configuration/v1/thresholds', function () {
        return expect(this.subject.thresholds.getAll()).to.haveSent.and.resolveTo.request({
          method: 'get',
          path: '/itemsense/configuration/v1/thresholds'
        });
      });
      it('GETs to /configuration/v1/thresholds with embed', function () {
        const embed = ['antennaConfiguration', 'string2'];
        return expect(this.subject.thresholds.getAll(embed)).to.haveSent.and.resolveTo.request({
          method: 'get',
          path: '/itemsense/configuration/v1/thresholds',
          query: { embed }
        });
      });
    });

    describe('.get(thresholdId)', () => {
      it('GETs to /configuration/v1/thresholds/thresholds/{thresholdId}', function () {
        const thresholdId = '234234';
        return expect(this.subject.thresholds.get(thresholdId)).to.wrap.request({
          method: 'get',
          path: `/itemsense/configuration/v1/thresholds/${thresholdId}`
        });
      });
      it('GETs to /configuration/v1/thresholds/thresholds/{thresholdId} with embed', function () {
        const thresholdId = '234234';
        const embed = ['antennaConfiguration', 'string2'];
        return expect(this.subject.thresholds.get(thresholdId, embed)).to.wrap.request({
          method: 'get',
          path: `/itemsense/configuration/v1/thresholds/${thresholdId}`,
          query: { embed }
        });
      });
    });

    describe('.create(thresholdConf)', () => {
      it('POSTs to /configuration/v1/thresholds/thresholds', function () {
        const thresholdConf = {
          name: 'THRESHOLD',
          facility: 'DEFAULT',
          readerArrangement: 'SIDE_BY_SIDE',
          readers: {
            reader_name_one: {
              antennaConfigurationId: 1
            },
            reader_name_two: {
              antennaConfigurationId: 2
            }
          }
        };
        return expect(this.subject.thresholds.create(thresholdConf)).to.wrap.request({
          method: 'post',
          path: '/itemsense/configuration/v1/thresholds'
        });
      });
    });

    describe('.update(thresholdId, thresholdConf)', () => {
      it('PUTs to /configuration/v1/thresholds', function () {
        const thresholdConf = {
          name: 'THRESHOLD',
          facility: 'DEFAULT',
          readerArrangement: 'SIDE_BY_SIDE',
          readers: {
            reader_name_one: {
              antennaConfigurationId: 1
            },
            reader_name_two: {
              antennaConfigurationId: 2
            }
          }
        };
        const thresholdId = '234234';
        return expect(this.subject.thresholds.update(thresholdId, thresholdConf)).to.wrap.request({
          method: 'put',
          path: `/itemsense/configuration/v1/thresholds/${thresholdId}`,
          body: thresholdConf
        });
      });
    });
    describe('.get(thresholdId)', () => {
      it('DELETEs to /configuration/v1/thresholds/{thresholdId}', function () {
        const thresholdId = '234234';
        return expect(this.subject.thresholds.delete(thresholdId)).to.wrap.request({
          method: 'delete',
          path: `/itemsense/configuration/v1/thresholds/${thresholdId}`
        });
      });
    });
  });
};
