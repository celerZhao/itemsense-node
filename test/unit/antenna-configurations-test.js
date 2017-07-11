exports.examples = (expect) => {
  describe('.antennaConfigurations', function () {
    describe('.getAll()', () => {
      it('GETs to /configuration/v1/thresholds/antennaConfigurations', function () {
        return expect(
          this.subject.antennaConfigurations.getAll()
        ).to.haveSent.and.resolveTo.request({
          method: 'get',
          path: '/itemsense/configuration/v1/thresholds/antennaConfigurations',
          header: ['Authorization', 'Basic c2VhbjpwYXNzd29yZA==']
        });
      });
    });

    describe('.get(antennaConfId)', () => {
      it('GETs to /configuration/v1/thresholds/antennaConfigurations/{antennaConfId}', function () {
        const antennaConfId = '234234';
        return expect(this.subject.antennaConfigurations.get(antennaConfId)).to.wrap.request({
          method: 'get',
          path: `/itemsense/configuration/v1/thresholds/antennaConfigurations/${antennaConfId}`,
        });
      });
    });

    describe('.create(antennaConf)', () => {
      it('POSTs to /configuration/v1/thresholds/antennaConfigurations', function () {
        const antennaConf = {
          name: 'configuration_name',
          side: 'LEFT',
          in: [
            { antennaId: 1 },
            { antennaId: 3 }
          ],
          out: [
            { antennaId: 2 },
            { antennaId: 4 }
          ]
        };
        return expect(this.subject.antennaConfigurations.create(antennaConf)).to.wrap.request({
          method: 'post',
          path: '/itemsense/configuration/v1/thresholds/antennaConfigurations',
        });
      });
    });

    describe('.update(antennaConfId, antennaConf)', () => {
      it('PUTs to /configuration/v1/thresholds/antennaConfigurations', function () {
        const antennaConf = {
          name: 'configuration_name',
          side: 'LEFT',
          in: [
            { antennaId: 1 },
            { antennaId: 3 }
          ],
          out: [
            { antennaId: 2 },
            { antennaId: 4 }
          ]
        };
        const antennaConfId = '234234';
        return expect(
          this.subject.antennaConfigurations.update(antennaConfId, antennaConf)
        ).to.wrap.request({
          method: 'put',
          path: `/itemsense/configuration/v1/thresholds/antennaConfigurations/${antennaConfId}`,
          body: antennaConf
        });
      });
    });

    describe('.get(antennaConfId)', () => {
      it('DELETEs to /configuration/v1/thresholds/antennaConfigurations/{antennaConfId}', function () {
        const antennaConfId = '234234';
        return expect(this.subject.antennaConfigurations.delete(antennaConfId)).to.wrap.request({
          method: 'delete',
          path: `/itemsense/configuration/v1/thresholds/antennaConfigurations/${antennaConfId}`,
        });
      });
    });
  });
};
