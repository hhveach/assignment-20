export const bbcRadioModel = Backbone.Model.extend({})

export const bbcRadioCollection = Backbone.Collection.extend({
	initialize: function(params){
    if(params !== undefined){
      this.url = `/proxy?api=http://www.bbc.co.uk/${params}/playlist.json`;
    }
	},

	parse: function(rawServerRes){
		return rawServerRes.results
	},

	url: '/proxy?api=http://www.bbc.co.uk/radio1/playlist.json',

	model: bbcRadioModel
})
