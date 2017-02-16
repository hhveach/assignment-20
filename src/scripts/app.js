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
    let radioOneCollection = new bbcRadioCollection('1');
      radioOneCollection.fetch().then(function(serverRes){
        let results = serverRes.playlist.introducing;
          insert.innerHTML = homeIntroducing(results);
      });
  },

  radioOne: function(){
    let radioOneCollection = new bbcRadioCollection('1');
      radioOneCollection.fetch().then(function(serverRes){
        let resultsOne = serverRes.playlist.a;
        // let resultsTwo = serverRes.playlist.b;
        // let resultsThree = serverRes.playlist.c;
          insert.innerHTML = playlist(resultsOne);
          // insert.innerHTML += playlist(resultsTwo);
          // insert.innerHTML += playlist(resultsThree);
    });
  },

  radioTwo: function(){
    let radioOneCollection = new bbcRadioCollection('2');
      radioOneCollection.fetch().then(function(serverRes){
        let results = serverRes.playlist.a;
          insert.innerHTML = playlist(results);
      });
  },

  errorPage: function(){
    insert.innerHTML = `<h2 class="default">Oops! This page does not exist.</h2>`;
  }

})

const myApp = new AppRouter();
