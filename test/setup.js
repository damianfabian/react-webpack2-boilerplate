var jsdom = require('jsdom').jsdom;
require('babel-polyfill')

process.env.NODE_ENV = 'test';

var globalObjects = ['window', 'navigator', 'document'];

global.document = jsdom('');
global.window = document.defaultView;
Object.keys(document.defaultView).forEach((property) => {
    if (typeof global[property] === 'undefined') {
        globalObjects.push(property);
        global[property] = document.defaultView[property]
    }
});

global.navigator = {
    userAgent: 'node.js'
}

function donothing () {
    return null
}

require.extensions['.css'] = donothing;
require.extensions['.less'] = donothing;
require.extensions['.scss'] = donothing;
require.extensions['.png'] = donothing;
require.extensions['.gif'] = donothing;