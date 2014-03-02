        var searchField = $("#search-field").ghostHunter({
                                results         : "#results",
                                info_template   : "<p>Pillole trovate: {{amount}}</p>",
                                result_template : "<a class='btn rss' href='{{link}}'>{{title}}</a>  ",
                            rss       : "/rss",
                            //Enable the "search as you type" by uncommenting the following line
                            zeroResultsInfo     : false,
                            onKeyUp   : true 
                          });

        function clearResults() {
          searchField.clear();
        }
