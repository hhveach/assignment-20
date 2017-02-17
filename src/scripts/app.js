import Backbone from 'backbone';
import $ from 'jquery';
import {homeIntroducing, playlist, playlistGreatest, playlistRoute} from './templates.js';
import {bbcRadioCollection, bbcRadioModel} from './models.js';

let insert = document.querySelector('.main-content');

const AppRouter = Backbone.Router.extend({
  initialize: function(){
    Backbone.history.start();
  },

  routes: {
    'radio/1/:tod' : 'radioOneTod',
    'radio/2/:tod' : 'radioTwoTod',
    'radio/1' : 'radioOne',
    'radio/2' : 'radioTwo',
    'radio/3' : 'radioThree',
    '' : 'homePage',
    '*default' : 'errorPage'
  },

  radioOneTod: function(tod){
    let radioOneCollection = new bbcRadioCollection('1');
      radioOneCollection.fetch().then(function(serverRes){
        let results = '';
        if(tod === 'morning'){
          results = serverRes.playlist.a;
        }

        if(tod === 'afternoon'){
          results = serverRes.playlist.b;
        }

        if(tod === 'evening'){
          results = serverRes.playlist.c;
        }
        insert.innerHTML = playlistRoute(results, 1);
      })
  },

  radioTwoTod: function(tod){
    let radioOneCollection = new bbcRadioCollection('2');
      radioOneCollection.fetch().then(function(serverRes){
        let results = '';
        if(tod === 'morning'){
          results = serverRes.playlist.a;
        }

        if(tod === 'afternoon'){
          results = serverRes.playlist.b;
        }

        if(tod === 'evening'){
          results = serverRes.playlist.c;
        }
        insert.innerHTML = playlistRoute(results, 2);
      })


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
        let resultsTwo = serverRes.playlist.b;
        let resultsThree = serverRes.playlist.c;
          insert.innerHTML = playlistRoute(resultsOne, 1);
          insert.innerHTML += playlist(resultsTwo);
          insert.innerHTML += playlist(resultsThree);
    });
  },

  radioTwo: function(){
    let radioOneCollection = new bbcRadioCollection('2');
      radioOneCollection.fetch().then(function(serverRes){
        let resultsOne = serverRes.playlist.a;
        let resultsTwo = serverRes.playlist.b;
        let resultsThree = serverRes.playlist.c;
          insert.innerHTML = playlistRoute(resultsOne, 2);
          insert.innerHTML += playlist(resultsTwo);
          insert.innerHTML += playlist(resultsThree);
      });
  },

  radioThree: function(){
    let radioOneCollection = new bbcRadioCollection('2');
      radioOneCollection.fetch().then(function(serverRes){
        let results = serverRes.playlist.greatestriffs;
          insert.innerHTML = playlistGreatest(results);
      });
  },

  errorPage: function(){
    insert.innerHTML = `<h2 class="default">Oops! This page does not exist.</h2>`;
  }

})

const myApp = new AppRouter();
