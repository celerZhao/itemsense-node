exports.examples = function(expect) {
	describe('.softwareUpgrades', function() {
		describe('.getAll()', function() {
			it('GETs to /control/v1/upgrades/show', function() {
				return expect( this.subject.softwareUpgrades.getAll() ).to.haveSent.and.resolveTo.request({
					method: 'get',
					path: '/itemsense/control/v1/upgrades/show',
					header: ['Authorization', 'Basic c2VhbjpwYXNzd29yZA=='],
					responseBody: [
					  {
					    id: "string",
					    upgradeRequest: {
					      readerGroupingType: "string",
					      groupingUnitIds: [
					        "string"
					      ],
					      target: {
					        version: "string",
					        imageType: "string"
					      },
					      policy: {
					        ratioMaxOutstanding: 0,
					        ratioMaxFailures: 0,
					        staggerDelaySeconds: 0,
					        failureAction: "string",
					        allowedReaderTypes: [
					          "string"
					        ]
					      }
					    }
					  }
					]
				});
			})
		})
	})
}
