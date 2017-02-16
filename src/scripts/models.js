import Backbone from 'backbone';

export const bbcRadioModel = Backbone.Model.extend({})

export const bbcRadioCollection = Backbone.Collection.extend({

	model: bbcRadioModel,

	url: ``,

	initialize: function(params){
      this.url = `/proxy?api=http://www.bbc.co.uk/radio${params}/playlist.json`;
	},

	parse: function(rawServerRes){
		return rawServerRes;
	}
})
