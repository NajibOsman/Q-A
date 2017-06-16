import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return Ember.RSVP.hash({
      question: this.store.findRecord('question', params.question_id),
      //answers: this.store.findAll('answer', params.answer_id)
    });
  },
  actions:{
    saveNewQuestion(params){
      var newQuestion = this.store.createRecord('question',params);
      newQuestion.save();
      this.transitionTo('index');
    },
    saveNewAnswer(params){
      var newAnswer = this.store.createRecord('answer', params);
      var ourQuestion=params.question;
      ourQuestion.get('answers').addObject(newAnswer);
      newAnswer.save().then(function(){
        ourQuestion.save();
      });
      this.transitionTo('question');

    }
  }
});
