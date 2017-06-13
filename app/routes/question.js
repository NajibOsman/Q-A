import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      quiz: this.store.findAll('quiz'),
      answers: this.store.findAll('answer')
    });
  },
  actions:{
    saveNewQuestion(params){
      var newQuestion = this.store.createRecord('quiz',params);
      newQuestion.save();
      this.transitionTo('index');
    }
  }
});
