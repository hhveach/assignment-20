import Backbone from 'backbone';
import $ from 'jquery';
import {homeIntroducing, playlist} from './templates.js';
import {bbcRadioCollection, bbcRadioModel} from './models.js';

let insert = document.querySelector('.main-content');

const AppRouter = Backbone.Router.extend({
  initialize: function(){
    Backbone.history.start();
  },

  routes: {
    '' : 'homePage',
    'radio/1' : 'radioOne',
    'radio/2' : 'radioTwo',
    '*default' : 'errorPage'
  },

  homePage: function(){
    let radioOneCollection = new bbcRadioCollection();
      radioOneCollection.fetch().then(function(serverRes){
        let results = serverRes.playlist.introducing;
          insert.innerHTML = homeIntroducing(results);
      });
  },

  radioOne: function(){
    let radioOneCollection = new bbcRadioCollection();
      radioOneCollection.fetch().then(function(serverRes){
        let results = serverRes.playlist.a;
          insert.innerHTML = playlist(results);
    });
  },

  radioTwo: function(){
    let radioOneCollection = new bbcRadioCollection();
      radioOneCollection.fetch().then(function(serverRes){
        let results = serverRes.playlist.a;
          insert.innerHTML = playlist(results);
      });
  },

  errorPage: function(){
    insert.innerHTML = `<h2 class="default">Hey, Stop It</h2>`;
  }

})

const myApp = new AppRouter();
