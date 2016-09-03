exports.examples = function(expect) {
	describe('.softwareVersions', function() {
		describe('.create( readerSoftwareVersionData )', function() {
			it('PUTs to /configuration/v1/softwareVersions/createOrReplace', function() {
				let readerSoftwareVersionData = {versionInfo: { versionIdentifier: { version: "string", imageType: "string" }}};
				return expect( this.subject.softwareVersions.create(readerSoftwareVersionData) ).to.haveSent.and.resolveTo.request({
					method: 'put',
					path: '/itemsense/configuration/v1/softwareVersions/createOrReplace',
					body: readerSoftwareVersionData,
					header: ['Authorization', 'Basic c2VhbjpwYXNzd29yZA==']
				});
			});
		});

		describe('.destroy( imageType, softwareVersionId )', function() {
			it('DELETEs to /configuration/v1/softwareVersions/destroy/:imageType/:softwareVersionId', function() {
				let imageType = 'firmware_speedway';
				let softwareVersionId = 'sampleVersionId';
				return expect( this.subject.softwareVersions.destroy(imageType, softwareVersionId) ).to.haveSent.and.resolveTo.request({
					method: 'delete',
					path: `/itemsense/configuration/v1/softwareVersions/destroy/${imageType}/${softwareVersionId}`,
					header: ['Authorization', 'Basic c2VhbjpwYXNzd29yZA==']
				});
			});
		});

		describe('.list( imageType )', function() {
			it('GETs to /configuration/v1/softwareVersions/list/:imageType', function() {
				let imageType = 'firmware_speedway';
				return expect( this.subject.softwareVersions.list(imageType) ).to.haveSent.and.resolveTo.request({
					method: 'get',
					path: `/itemsense/configuration/v1/softwareVersions/list/${imageType}`,
					header: ['Authorization', 'Basic c2VhbjpwYXNzd29yZA==']
				});
			});
		});

		describe('.get( imageType, softwareVersionId )', function() {
			it('GETs to /configuration/v1/softwareVersions/show/:imageType/:softwareVersionId', function() {
				let imageType = 'firmware_speedway';
				let softwareVersionId = 'sampleVersionId';
				return expect( this.subject.softwareVersions.get(imageType, softwareVersionId) ).to.haveSent.and.resolveTo.request({
					method: 'get',
					path: `/itemsense/configuration/v1/softwareVersions/show/${imageType}/${softwareVersionId}`,
					header: ['Authorization', 'Basic c2VhbjpwYXNzd29yZA==']
				});
			});
		});
	});
}
