/**
 * Created by GameDay on 25/03/14.
 */

function CoverController ($scope, $timeout) {

    var quotes = [
        {
            quote : "In a good bookroom you feel in some mysterious way that you are absorbing the wisdom contained in all the books through your skin, without even opening them.",
            who : "Mark Twain"
        },
        {
            quote : "Whatever the cost of our libraries, the price is cheap compared to that of an ignorant nation.",
            who : "Walter Cronkite"
        },
        {
            quote : "So big it doesn't need a name. It's just The Library",
            who : "The Doctor"
        },
        {
            quote : "Libraries were full of ideas–perhaps the most dangerous and powerful of all weapons.",
            who : "Sarah J. Maas"
        }
    ],
        backgrounds = [
            "cover1.jpg",
            "cover1s.jpg",
            "cover1r.jpg",
            "cover1bw.jpg",
            "cover2.jpg",
            "cover2r.jpg",
            "cover2s.jpg",
            "cover2bw.jpg",
            "cover3.jpg",
            "cover3r.jpg",
            "cover3s.jpg",
            "cover3bw.jpg"
        ],

        nb = 0,
        nq = 0,
        delay = 10000,
        cycleBackground = function () {
            nb++;
            $scope.Background = backgrounds[nb % backgrounds.length];
            $timeout (cycleBackground, delay);
        },
        cycleQuote = function () {
            nq++;
            $scope.Quote = quotes[nq % quotes.length];
            $timeout (cycleQuote, delay);
        };

    $scope.bg = function () {
        return nb % 2 === 0;
    }

    quotes = _.shuffle(quotes);
    backgrounds = _.shuffle(backgrounds);
    backgrounds = _.shuffle(backgrounds);
    backgrounds = _.shuffle(backgrounds);

    $scope.Background = backgrounds[0];
    $scope.Quote = quotes[0];

    $timeout (cycleBackground, delay);
    $timeout (function() {$timeout (cycleQuote, delay);}, delay/2);

    $('#SearchBox').focus();

    /*
    $scope.Background = backgrounds[_.random(0, backgrounds.length-1)];
    $scope.Quote = quotes[_.random(0, quotes.length-1)];

    var swbg = function () {
        $scope.Background = backgrounds[_.random(0, backgrounds.length-1)];
        $timeout (swbg, 12000);
    }

    var swqt = function () {
        $scope.Quote = quotes[_.random(0, quotes.length-1)];
        $timeout (swqt, 5000);
    }

    $timeout (swbg, 12000);
    $timeout (swqt, 5000);
    */



}