import Ember from "ember";
import { module, test } from 'qunit';
import startApp from '../helpers/start-app';

var App;

module('An Integration test', {
	
    beforeEach: function() {
		 App = startApp();
    },
	
    afterEach: function() {
		Ember.run(App, App.destroy);
    }
	
});

test("Page contents", function(assert) {
    assert.expect(4);
    visit('/').then(function() {
        assert.equal(find('h2').text(), 'Each Example - Using those damn dirty apes!', "Make sure the header is correct");
		assert.equal(find('.ape-item').length, 5, "List contains expected number of apes");
		assert.equal(find('.highlighted').length, 1, "List contains one highlighted ape");
		assert.equal(find('.highlighted').index(), 1,  "The highlighted ape is the first item");
    });
});