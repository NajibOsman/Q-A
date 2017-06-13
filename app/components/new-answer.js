import Ember from 'ember';

export default Ember.Component.extend({
  actions:{
    saveNewAnswer: function () {
      var params ={
        actualAnswer:this.get('actualAnswer'),
        author: this.get('author'),
        voteCount: 0,
        question: this.get('question')
      };
      
      this.sendAction('saveNewAnswer',params)
    }
  }

});
