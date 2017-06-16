import Ember from 'ember';

export default Ember.Component.extend({
  actions:{
    newQuestion(){
      var params = {
        question: this.get('question'),
        author: this.get('author'),
        category: this.get('category')
      };
      this.sendAction('saveNewQuestion',params);
      console.log(params);
    }
  }

});
