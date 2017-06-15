import Ember from 'ember';

export default Ember.Component.extend({
   addNewAnswer: false,
  actions:{
//Display a new form when the add the new answer action is clicked
    answerFormShow() {
      this.set('addNewAnswer', true);

    //save answer to firebase
    saveNewAnswer: function () {
      var params ={
        actualAnswer:this.get('actualAnswer'),
        author: this.get('author'),
        voteCount: 0,
        question: this.get('question')
      };

      this.set('addnewAnswer', false);
      this.sendAction('saveNewAnswer',params);
    }
  }

});
