import Route from '@ember/routing/route';

export default Route.extend({

  model(){

  },
  actions:{
    saveBeer: function(){
        alert("Action");
    }
  }

});
