exports.examples = (expect) => {
  describe('.recipes', () => {
    describe('.create(recipeParams)', () => {
      it('POSTs to /configuration/v1/recipes/create with recipeParams as the body', function () {
        const recipeParams = {
          name: 'sampleRecipe',
          readerConfigurationName: 'sampleReaderConfiguration',
          readerConfigurations: {}
        };
        return expect(this.subject.recipes.create(recipeParams)).to.wrap.request({
          method: 'post',
          path: '/itemsense/configuration/v1/recipes/create',
          body: recipeParams
        });
      });
    });

    describe('.update(recipeParams)', () => {
      it('PUTs to /configuration/v1/recipes/createOrReplace with recipeParams as the body', function () {
        const recipeParams = {
          name: 'sampleRecipe',
          readerConfigurationName: 'sampleReaderConfiguration',
          readerConfigurations: {}
        };
        return expect(this.subject.recipes.update(recipeParams)).to.wrap.request({
          method: 'put',
          path: '/itemsense/configuration/v1/recipes/createOrReplace',
          body: recipeParams
        });
      });
    });

    describe('.delete(recipeName)', () => {
      it('DELETEs to /configuration/v1/recipes/destroy/{recipeName}', function () {
        const recipeName = 'sampleRecipe';
        return expect(this.subject.recipes.delete(recipeName)).to.wrap.request({
          method: 'delete',
          path: `/itemsense/configuration/v1/recipes/destroy/${recipeName}`
        });
      });
    });

    describe('.get(recipeName)', () => {
      it('GETs to /configuration/v1/recipes/show/{recipeName}', function () {
        const recipeName = 'sampleRecipe';
        return expect(this.subject.recipes.get(recipeName)).to.wrap.request({
          method: 'get',
          path: `/itemsense/configuration/v1/recipes/show/${recipeName}`
        });
      });
    });

    describe('.getAll()', () => {
      it('GETs to /configuration/v1/recipes/show', function () {
        return expect(this.subject.recipes.getAll()).to.wrap.request({
          method: 'get',
          path: '/itemsense/configuration/v1/recipes/show'
        });
      });
    });
  });
};
