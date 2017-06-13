import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return Ember.RSVP.hash({
      quiz: this.store.findRecord('question', params.question_id),
      //answers: this.store.findAll('answer')
    });
  },
  actions:{
    saveNewQuestion(params){
      var newQuestion = this.store.createRecord('question',params);
      newQuestion.save();
      this.transitionTo('index');
    }
  }
});
