
// load sea.js
(function(m, o, d, u, l, a, r) {
    if(m[d]) return;
    function f(n, t) { return function() { r.push(n, arguments); return t; } }
    m[d] = a = { args: (r = []), config: f(0, a), use: f(1, a) };
    m.define = f(2);
    u = o.createElement('script');
    u.id = d + 'node';
    u.src = '../../../dist/seajs/1.1.0/sea.js';
    l = o.getElementsByTagName('head')[0];
    l.insertBefore(u, l.firstChild);
})(window, document, 'seajs');


// and its friends
seajs.config({

    alias: {

        // 外来模块
        '$': 'jquery/1.7.2/jquery',
        //'$': 'zepto/1.0.0/zepto',
        'jquery': 'jquery/1.7.2/jquery',
        'zepto': 'zepto/1.0.0/zepto',
        'underscore': 'underscore/1.3.3/underscore',
        'json': 'json/1.0.2/json',
        'handlebars': 'handlebars/1.0.0/handlebars',
        'moment': 'moment/1.6.2/moment',
        'async': 'async/0.1.18/async',
        'store': 'store/1.3.3/store',
        'swfobject': 'swfobject/2.2.0/swfobject',
        'backbone': 'backbone/0.9.2/backbone',
        'jasmine': 'jasmine/1.1.0/jasmine-html',


        // Infrastructure
        /* seajs 1.2 尚未开始 */
        'events': 'events/0.9.1/events',                     // 100%
        'class': 'class/0.9.2/class',                        // 100%
        'base': 'base/0.9.15/base',                          // 95%
        'widget': 'widget/0.9.15/widget',                    // 95%
        'templatable': 'widget/0.9.15/templatable',          // 95%
        'daparser': 'widget/0.9.15/daparser',                // 95%


        // Utilities
        'cookie': 'cookie/1.0.2/cookie',                     // 100%
        'easing': 'easing/0.9.2/easing',                     // 100%
        'iframe-shim': 'iframe-shim/0.9.1/iframe-shim',      // 95%
        'position': 'position/0.9.1/position',               // 95%

        'validator-core': 'validator/0.8.1/core.js',         // 60%
        'validator': 'validator/0.8.1/validator.js',         // 60%
        /* querystring 待迁移 */


        // Widgets
        'overlay': 'overlay/0.9.6/overlay',                  // 95%
        'mask': 'overlay/0.9.6/mask',                        // 95%
        'dialog': 'dialog/0.9.0/dialog',                     // 70%

        'triggerable': 'triggerable/0.9.3/triggerable',      // 95%
        'dropdown': 'triggerable/0.9.3/dropdown',            // 95%

        'switchable': 'switchable/0.9.4/switchable',         // 90%
        'tabs': 'switchable/0.9.4/tabs',                     // 90%
        'slide': 'switchable/0.9.4/slide',                   // 90%
        'accordion': 'switchable/0.9.4/accordion',           // 90%
        'carousel': 'switchable/0.9.4/carousel',             // 90%

        'calendar': 'calendar/0.8.0/calendar'                // 80%


        // Others
        /* spm */
        /* araledoc */


        // 二期组件
        // ua
        // placeholder
        // popup
        // tooltip
        // 等待详细规划和讨论
    },

    preload: [this.JSON ? '' : 'json', 'plugin-text']
});
