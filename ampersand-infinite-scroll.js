/* $AMPERSAND_VERSION */
var View = require('ampersand-view');
var assign = require('lodash.assign');

/**
 * Setup the closure function for the Infinite Scroll callback
 *
 * @param {Object}  options - the valid options are:
 *                  .gap - the pixel margin to fire the request
 */
function InfiniteScrollSetup (options) {
  options || (options = {});
  var self = this;
  var gap = (options.gap || 20); // defaults to 20

  self.events = self.events || {};
  assign(self.events, {scroll: 'infiniteScroll'});

  self.infiniteScroll = function () {
    if (this.el.scrollHeight - this.el.scrollTop <= this.el.clientHeight + gap) {
      this.collection.fetchPage();
    }
  };
}

// Correctly setup the prototype chain
var BaseView = View.extend();
InfiniteScrollView.prototype = Object.create(BaseView.prototype);
InfiniteScrollView.extend = BaseView.extend;

/**
 * Infinite Scroll View constructor
 *
 * @param {Object}  options - the valid options according to the `ampersand-view`
 *                            and this module
 */
function InfiniteScrollView (options) {
  options || (options = {});
  BaseView.call(this, options);
  InfiniteScrollSetup.call(this, options);
}

exports = module.exports = InfiniteScrollView;
