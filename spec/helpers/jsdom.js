import {JSDOM} from 'jsdom';

beforeEach(function() { 
 // doing this for each and not once, so we have new window because of events on window
 const dom = new JSDOM('<html><body></body></html>');
 global.document = dom.window.document;
 global.window = dom.window;
 global.navigator = dom.window.navigator;
});