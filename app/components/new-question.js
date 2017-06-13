import Ember from 'ember';

export default Ember.Component.extend({
  actions:{
    newQuestion:(function () {
      var params = {
        Question: this.get('Question'),
        author: this.get('author'),
        category: this.get('category')
      }
      this.sendAction('saveNewQuestion',params)
    })
  }

});
