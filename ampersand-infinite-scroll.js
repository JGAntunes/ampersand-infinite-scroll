/*$AMPERSAND_VERSION*/
var extend = require('ampersand-class-extend');
var View = require('ampersand-view');

function InfiniteScrollClosure(view, options){	
	var def = {
		reverse: false,
		threshold: 20,
		fetch: {
			limit: 10
		}
	};
	options || (options = {});
	var el = (options.el || view.el);
	var reverse = (options.reverse || def.reverse);
	var threshold = (options.threshold || def.threshold);
	var fetch = (options.fetch || def.fetch);

	view.events['scroll ' + options.el] = infiniteScrollCb;

	function infiniteScrollCb(){
		if(el.scrollHeight - el.scrollTop >= el.clientHeight - threshold){
			this.collection({data: fetch});
		}
	}
}

function InfiniteScrollView(options){
	View.call(this, options);
	InfiniteScrollClosure.call(this, options.infiniteScroll);
}

InfiniteScrollView.extend = extend;

module.exports = InfiniteScrollView.extend(View);