exports.examples = function(expect) {
	describe('.smnpSettings', function() {
		describe('.get()', function() {
      it('GETs /configuration/v1/settings/SNMP and returns SNMP settings', function() {
        const snmpSettings = {
                "authConfig": {
                  "type": "string"
                },
                "trapTargetConfig": {
                  "host": "string",
                  "port": 0,
                  "timeout": "PT5S",
                  "retries": 0,
                  "messageType": "string"
                }
        };

        return expect(this.subject.settings.get()).to.wrap.request({
          method: 'get',
          path: `/itemsense/configuration/v1/settings/SNMP`,
          responseBody: snmpSettings
        });
      });
    });

    describe('.configure(snmpOptions)', function () {
      it('PUTs to /itemsense/configuration/v1/settings/SNMP with settingsOptions as the body', function () {
        const settingsOptions = {
              "authConfig": {
                "type": "string"
              },
              "trapTargetConfig": {
                "host": "string",
                "port": 0,
                "timeout": "PT5S",
                "retries": 0,
                "messageType": "string"
              }
        };
        return expect(this.subject.settings.configure(settingsOptions)).to.wrap.request({
          method: 'put',
          path: '/itemsense/configuration/v1/settings/SNMP',
          body: settingsOptions,
          responseBody: settingsOptions
        });
      });
    });

    describe('.disable()', function() {
      it('DELETEs to /itemsense/configuration/v1/settings/SNMP', function() {
        return expect(this.subject.settings.disable()).to.wrap.request({
          method: 'delete',
          path: `/itemsense/configuration/v1/settings/SNMP`
        });
      });
    });
	});
}
