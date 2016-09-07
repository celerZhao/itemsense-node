exports.examples = function(expect) {
	describe('.messageQueue', function() {
		describe('.configure(messageQueueParams)', function() {
      it('PUTs to /data/v1/items/queues with messageQueueParams as the body', function() {
        const messageQueueParams = { fromZone: 'exitZone', toZone: 'entryZone' };
        return expect(this.subject.messageQueue.configure(messageQueueParams)).to.wrap.request({
          method: 'put',
          path: `/itemsense/data/v1/items/queues`,
          body: messageQueueParams
        });
      });
    });

	});
}
