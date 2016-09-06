exports.examples = function(expect) {
	describe('.softwareUpgrades', function() {
		describe('.getAll()', function() {
			it('GETs to /control/v1/upgrades/show', function() {
				return expect( this.subject.softwareUpgrades.getAll() ).to.haveSent.and.resolveTo.request({
					method: 'get',
					path: '/itemsense/control/v1/upgrades/show',
					header: ['Authorization', 'Basic c2VhbjpwYXNzd29yZA==']
				});
			});
		});

		describe('.get( upgradeInstanceId )', function() {
			it('GETs to /control/v1/upgrades/show/:upgradeInstanceId', function() {
				let upgradeInstanceId = "exampleId";
				return expect( this.subject.softwareUpgrades.get(upgradeInstanceId) ).to.haveSent.and.resolveTo.request({
					method: 'get',
					path: `/itemsense/control/v1/upgrades/show/${upgradeInstanceId}`,
					header: ['Authorization', 'Basic c2VhbjpwYXNzd29yZA==']
				});
			});
		});

		describe('.start( upgradeData )', function() {
			it('POSTs to /control/v1/upgrades/start', function() {
				let upgradeData = {readerGroupingType: "facility", groupingUnitIds: ["facilityId"], target: "targetObject", policy: "policyObject"};
				return expect( this.subject.softwareUpgrades.start(upgradeData) ).to.haveSent.and.resolveTo.request({
					method: 'post',
					path: `/itemsense/control/v1/upgrades/start`,
					body: upgradeData,
					header: ['Authorization', 'Basic c2VhbjpwYXNzd29yZA==']
				});
			});
		});

		describe('.stop( upgradeInstanceId )', function() {
			it('POSTs to /control/v1/upgrades/stop/:upgradeInstanceId', function() {
				let upgradeInstanceId = "exampleId";
				return expect( this.subject.softwareUpgrades.stop(upgradeInstanceId) ).to.haveSent.and.resolveTo.request({
					method: 'post',
					path: `/itemsense/control/v1/upgrades/stop/${upgradeInstanceId}`,
					header: ['Authorization', 'Basic c2VhbjpwYXNzd29yZA==']
				});
			});
		});

		describe('.trigger( upgradeData )', function() {
			it('POSTs to /control/v1/upgrades/trigger/direct/devices', function() {
				let upgradeData = {readerGroupingType: 'string', groupingUnitIds: ["string"]};
				return expect( this.subject.softwareUpgrades.trigger(upgradeData) ).to.haveSent.and.resolveTo.request({
					method: 'post',
					path: `/itemsense/control/v1/upgrades/trigger/direct/devices`,
					body: upgradeData,
					header: ['Authorization', 'Basic c2VhbjpwYXNzd29yZA==']
				});
			});
		});
	});
}
