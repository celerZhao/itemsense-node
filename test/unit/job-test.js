exports.examples = function(expect) {
  describe('.jobs', function() {
    describe('.start(jobParams)', function() {
      it('POSTs to /control/v1/jobs/start with jobParams as the body', function() {
        const jobParams = { recipeName: 'sampleRecipe', durationSeconds: 0};
        return expect(this.subject.jobs.start(jobParams)).to.wrap.request({
          method: 'post',
          path: `/itemsense/control/v1/jobs/start`,
          body: jobParams
        });
      });
    });

    describe('.stop(jobId)', function() {
      it('POSTs to /control/v1/jobs/stop/{jobId}', function() {
        const jobId = "sampleJobId";
        return expect(this.subject.jobs.stop(jobId)).to.wrap.request({
          method: 'post',
          path: `/itemsense/control/v1/jobs/stop/${jobId}`
        });
      });
    });

    describe('.get(jobId)', function() {
      it('GETs to /control/v1/jobs/show/{jobId}', function() {
        const jobId = "sampleJobId";
        return expect(this.subject.jobs.get(jobId)).to.wrap.request({
          method: 'get',
          path: `/itemsense/control/v1/jobs/show/${jobId}`
        });
      });
    });

    describe('.getAll()', function() {
      it('GETs to /control/v1/jobs/show', function() {
        return expect(this.subject.jobs.getAll()).to.wrap.request({
          method: 'get',
          path: `/itemsense/control/v1/jobs/show`
        });
      });
    });
  });
}
