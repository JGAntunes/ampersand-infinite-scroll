/*$AMPERSAND_VERSION*/
var View = require('ampersand-view');

function InfiniteScrollClosure(options){	
	var def = {
		reverse: false,
		threshold: 20,
		fetch: {
			limit: 10
		}
	};
	options || (options = {});
	var reverse = (options.reverse || def.reverse);
	var threshold = (options.threshold || def.threshold);
	var fetch = (options.fetch || def.fetch);

	this.events.scroll = 'infiniteScroll';

	this.infiniteScroll = function cb(){
		if(this.el.scrollHeight - this.el.scrollTop >= this.el.clientHeight - threshold){
			this.collection({data: fetch});
		}
	};
}

var InfiniteScrollView;

InfiniteScrollView = function(options){
	InfiniteScrollClosure.call(this, options.infiniteScroll);
	BaseView.call(this, options);
};

var BaseView = View.extend();
InfiniteScrollView.prototype = Object.create(BaseView.prototype);
InfiniteScrollView.extend = BaseView.extend;

module.exports = InfiniteScrollView;