require.config({
    baseUrl: "/static/",
    paths: {
        "metro": "js/metro.min",
        "jquery": "js/jquery-3.3.1.min",
        "socket": "js/socket"
    },
    shim: {
        "metro": {
            deps: ['jquery']
        },
        "socket": {
            deps: ['jquery']
        }
    }
});

require(['jquery'], function() {

});

require(['metro'], function() {

});

require(['socket'], function() {

});