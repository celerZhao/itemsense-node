exports.examples = (expect) => {
  describe('.messageQueue', () => {
    it('PUTs to /data/v1/items/queues with messageQueueParams as the body', function () {
      const filterParams = { fromZone: 'exitZone', toZone: 'entryZone' };
      return expect(this.subject.messageQueue.configure(filterParams)).to.wrap.request({
        method: 'put',
        path: '/itemsense/data/v1/items/queues',
        body: filterParams
      });
    });
  });
};
