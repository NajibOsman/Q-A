import Ember from 'ember';

export default Ember.Component.extend({
   addNewAnswer: false,
   actions:{
//Display a new form when the add the new answer action is clicked
    answerFormShow() {
      this.set('addNewAnswer', true);
    },

    //save answer to firebase
    saveNewAnswer(){
      var params ={
        author: this.get('author'),
        answer: this.get('answer'),
        question: this.get('mycurrentquestion')
      };
        this.set('addNewAnswer', false);

        this.sendAction('saveNewAnswer',params);

    }
  }
});
