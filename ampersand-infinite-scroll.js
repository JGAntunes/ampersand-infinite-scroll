/*$AMPERSAND_VERSION*/
var View = require('ampersand-view');
var _ = require('underscore');

function InfiniteScrollClosure(options){	
	var def = {
		reverse: false,
		gap: 20
	};
	options || (options = {});
	var reverse = (options.reverse || def.reverse);
	var gap = (options.gap || def.gap);

	_.extend(this, {events: {scroll: 'infiniteScroll'}}); 

	this.infiniteScroll = function cb(){
		if(this.el.scrollHeight - this.el.scrollTop <= this.el.clientHeight + gap){
			this.collection.fetchPage();
		}
	};
}

var InfiniteScrollView;

InfiniteScrollView = function(options){
	options || (options = {});
	BaseView.call(this, options);
	InfiniteScrollClosure.call(this, options);
};

var BaseView = View.extend();
InfiniteScrollView.prototype = Object.create(BaseView.prototype);
InfiniteScrollView.extend = BaseView.extend;

module.exports = InfiniteScrollView;