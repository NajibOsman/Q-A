import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      questions: this.store.findAll('question'),
      //answers: this.store.findAll('answer')
    });
  },
  actions:{
    saveNewQuestion(params){
      console.log(params);
      var newQuestion = this.store.createRecord('quiz',params);
      newQuestion.save();
      this.transitionTo('index');
    }
  }
});
