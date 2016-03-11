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
        send: function (searchQuery, cb) {
            var urlData = { // URL elements, with a function to tape them together
                baseUrl : "http://localhost:3000/api/",
                searchQuery: searchQuery,
                request : function(){
                        return pegasus(this.baseUrl + this.searchQuery);
                }
            };

            var urlRequest = urlData.request();
            console.log(urlRequest);

            urlRequest.then( // start request to API with a promise
                                
                function(data, xhr) {
                    console.log(data, xhr);
                    if (xhr.response) { 
                        var requestData = xhr.response; 
                        console.log(requestData);
                        //return requestData;
                        return cb(requestData);
                    } else {
                        console.log(xhr.response);
                        alert("We hebben helaas geen pagina kunnen vinden."); // if no movie data give the user feedback
                        console.error(data, xhr.status); // log the error
                    }
                },
                function(data, xhr) { // if something goes horribly wrong.....
                    alert("Onze excuses! Er is iets mis gegaan bij het laden van de pagina. Controleer de internetverbinding en herlaad de pagina.");
                    console.error(data, xhr.status);
                }
            );
        }
    };


    // logic for SPA
    var links = document.querySelectorAll('.product-link');

    for (var i = 0; i < links.length; i++) {
        links[i].addEventListener('click', function(event) {
            event.preventDefault();
            history.pushState(null, null, event.target.pathname);
            // window.location.href = event.target.href;
            // xhr request!!
            var id = "appearance/" + event.target.dataset.uuid;
            dataRequest.send(id, function (requestData) {
                console.log(requestData);
                document.querySelector('main').innerHTML = requestData;
            });
        });
    };

    window.onpopstate = function (e) {
        console.log(window.location);
        if (window.location.pathname == "/") {
            dataRequest.send("feed" , function (requestData) {
            document.querySelector('main').innerHTML = requestData;
            });
        } else {
            var id = window.location.href.split('/');
            dataRequest.send(id[4], function (requestData) {
                console.log(requestData);
                document.querySelector('main').innerHTML = requestData;
            });
        };
    };

}());





