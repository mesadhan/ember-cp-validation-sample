import Route from '@ember/routing/route';

export default Route.extend({

  model() {
    //return this.store.createRecord('person');

    return this.store.createRecord('person', {
      details: this.store.createRecord('person-detail')
    });
  },

  actions:{
    reset() {
      this.refresh();
    }
  }

});
