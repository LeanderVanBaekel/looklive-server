(function () {
    'use strict';

    /**
     * Invoked when the page is ready.
     *
     * @param  {Function} fn
     * @return {void}
     */
    function ready(fn) {
        if (document.readyState !== 'loading') {
            fn();
        } else {
            document.addEventListener('DOMContentLoaded', fn);
        }
    };

    /**
     * Set the classes on the appearence page.
     *
     * @return {void}
     */
    function appearance() {
        var firstProduct = document.querySelector('.product');
        var firstIndicator = document.querySelector(
            '.product-indicator[data-uuid="' + firstProduct.getAttribute('data-uuid') + '"]'
        );
        var indicators = document.querySelectorAll('.product-indicator');

        firstProduct.classList.add('product-active');
        firstIndicator.classList.add('product-indicator-active');

        Array.prototype.forEach.call(indicators, function (el) {
            el.addEventListener('click', function (event) {
                var id = event.currentTarget.getAttribute('data-uuid');

                document
                    .querySelector('.product-active')
                    .classList.remove('product-active');

                document
                    .querySelector('.product-indicator-active')
                    .classList.remove('product-indicator-active');

                document
                    .querySelector('.product[data-uuid="' + id + '"]')
                    .classList.add('product-active');

                event.currentTarget.classList.add('product-indicator-active');
            });
        });
    };  

    ready(function () {
        if (/appearance/.test(window.location.href)) {
            appearance();
        }
    });


    var dataRequest = {
        get: function (searchQuery, cb) {
            var urlData = { // URL elements, with a function to tape them together
                baseUrl : "https://leandervanbaekel.nl/api/",
                searchQuery: searchQuery,
                request : function(){
                        return pegasus(this.baseUrl + this.searchQuery);
                }
            };

            var urlRequest = urlData.request();

            urlRequest.then( // start request to API with a promise
                function(data, xhr) {
                    if (xhr.response) { 
                        var requestData = xhr.response; 
                        return cb(requestData);
                    } else {
                        alert("We hebben helaas geen pagina kunnen vinden."); // if no data give the user feedback
                        console.error(data, xhr.status); // log the error
                    }
                }
            );
        },
        insert: function (id) {
            dataRequest.get(id, function (requestData) {
                console.log(requestData);
                document.querySelector('main').innerHTML = requestData;
                appearance();
            });
        }
    };


    // logic for SPA
    var links = document.querySelectorAll('.product-link');

    for (var i = 0; i < links.length; i++) {
        links[i].addEventListener('click', function(event) {
            event.preventDefault();
            history.pushState(null, null, event.target.pathname);

            dataRequest.insert("appearance/" + event.target.dataset.uuid);
        });
    };

    window.onpopstate = function (e) {
        if (window.location.pathname == "/") {
            dataRequest.insert("feed");
        } else {
            var id = window.location.href.split('/');
            dataRequest.insert(id[4]);
        };
    };

}());





