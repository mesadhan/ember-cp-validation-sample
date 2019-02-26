import Controller from '@ember/controller';

export default Controller.extend({
  showAlert: false,
  isRegistered: false,
  didValidate: false,

  actions: {
    validate() {

      this.get('model')
        .validate()
        .then(({validations}) => {
          this.set('didValidate', true);

          if (validations.get('isValid')) {
            this.setProperties({
              showAlert: false,
              //isRegistered: true,
            });
          } else {
            this.set('showAlert', true);
          }
        });
    },

    togglePropertyAction(showAlert) {
      this.toggleProperty(showAlert); // true <-> false switch
    },

  }
});
