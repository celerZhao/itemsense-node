exports.examples = (expect) => {
  describe('.softwareUpgrades', () => {
    describe('.getAll()', () => {
      it('GETs to /control/v1/upgrades/show', function () {
        return expect(this.subject.softwareUpgrades.getAll()).to.haveSent.and.resolveTo.request({
          method: 'get',
          path: '/itemsense/control/v1/upgrades/show',
          header: ['Authorization', 'Basic c2VhbjpwYXNzd29yZA==']
        });
      });
    });

    describe('.get(upgradeInstanceId)', () => {
      it('GETs to /control/v1/upgrades/show/:upgradeInstanceId', function () {
        const upgradeInstanceId = 'exampleId';
        return expect(
          this.subject.softwareUpgrades.get(upgradeInstanceId)
        ).to.haveSent.and.resolveTo.request({
          method: 'get',
          path: `/itemsense/control/v1/upgrades/show/${upgradeInstanceId}`,
          header: ['Authorization', 'Basic c2VhbjpwYXNzd29yZA==']
        });
      });
    });

    describe('.start(upgradeData)', () => {
      it('POSTs to /control/v1/upgrades/start', function () {
        const upgradeData = {
          target: {
            type: 'FACILITY',
            values: ['facilityId']
          },
          versionIdentifier: {
            version: 'foo',
            imageType: 'FIRMWARE_SPEEDWAY'
          }
        };
        return expect(
          this.subject.softwareUpgrades.start(upgradeData)
        ).to.haveSent.and.resolveTo.request({
          method: 'post',
          path: '/itemsense/control/v1/upgrades/start',
          body: upgradeData,
          header: ['Authorization', 'Basic c2VhbjpwYXNzd29yZA==']
        });
      });
    });

    describe('.stop(upgradeInstanceId)', () => {
      it('POSTs to /control/v1/upgrades/stop/:upgradeInstanceId', function () {
        const upgradeInstanceId = 'exampleId';
        return expect(
          this.subject.softwareUpgrades.stop(upgradeInstanceId)
        ).to.haveSent.and.resolveTo.request({
          method: 'post',
          path: `/itemsense/control/v1/upgrades/stop/${upgradeInstanceId}`,
          header: ['Authorization', 'Basic c2VhbjpwYXNzd29yZA==']
        });
      });
    });

    describe('.trigger(upgradeData)', () => {
      it('POSTs to /control/v1/upgrades/trigger/direct/devices', function () {
        const upgradeData = { readerGroupingType: 'string', groupingUnitIds: ['string'] };
        return expect(
          this.subject.softwareUpgrades.trigger(upgradeData)
        ).to.haveSent.and.resolveTo.request({
          method: 'post',
          path: '/itemsense/control/v1/upgrades/trigger/direct/devices',
          body: upgradeData,
          header: ['Authorization', 'Basic c2VhbjpwYXNzd29yZA==']
        });
      });
    });
  });
};
