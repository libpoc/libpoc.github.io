function OverviewDashboardController ($scope, $timeout) {

    $scope.Overview = {
        stock : {
            total : _.random(5000, 10000),
            out : _.random(500,1000),
            overdue : _.random (5,20)
        },

        today : {
            out : 0,
            in : 0,
            due : _.random (3,33)
        }
    };

    var last30Days = [
        {
            "key" : "Loans",
            "values" : []
        },
        {
            "key" : "Returns",
            "values" : []
        },
        {
            "key" : "Overdues",
            "values" : []
        }
    ];

    var now = new Date(Date.now()), dd={};
    for (var i = 1; i <= 30; i++) {
        dd = new Date().setDate (now.getDate() - i);
        last30Days[0].values.push ([new Date(dd), _.random(20,60)]);
        last30Days[1].values.push ([new Date(dd), _.random(5,33)]);
        last30Days[2].values.push ([new Date(dd), _.random(0,7)]);
    }

    $scope.Last30Days = last30Days;

    $scope.xAxisTickFormat = function(){
        return function(d){
//                    return d3.time.format('%X')(new Date(d));  //uncomment for time format
           // return d3.time.format('%x')(new Date(d));  //uncomment for date format
            return d3.time.format('%a %d %b')(new Date(d));  //uncomment for date format
        }
    }

    updateLoans = function () {
        var r = _.random(1,4);
        $scope.Overview.today.out += r;
        $scope.Overview.stock.out += r;
        $timeout (updateLoans, _.random(3,15)*1000);
    }

    updateIns = function () {
        var t = _.random(1,4);
        $scope.Overview.today.in += t;
        $scope.Overview.stock.out -= t;

        if (t == 1) {
            $scope.Overview.stock.overdue = Math.max ($scope.Overview.stock.overdue - t, 0);

            if ($scope.Overview.stock.overdue === 0) {
                OverviewDashboardController($scope, $timeout);
            }


        }

        $timeout (updateIns, _.random(5,20)*1000);
    }

    $timeout (updateLoans, _.random(3,15)*1000);
    $timeout (updateIns, _.random(5,20)*1000);

}

