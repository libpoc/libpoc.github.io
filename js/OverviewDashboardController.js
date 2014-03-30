function OverviewDashboardController ($scope) {


    $scope.Overview = {
        stock : {
            total : 10324,
            out : 2843,
            overdue : 43
        },

        today : {
            out : 17,
            in : 24,
            due : 67
        }
    }

    var i = 0;
    $scope.Last30Days = [];
    for (i = 0; i <= 30; i++) {
        $scope.Last30Days.push ({
            date : new Date() - i,
            loans : _.random (20,60)
        });
    }

    var last30Days = [
        {
            "key" : "Loans",
            "values" : [[0, 34], [-1, 22],[-2, 56],[-3, 32],[-4, 37],[-5, 51],[-6, 19],[-7, 27],[-8, 31],[-9, 25],[-10, 57]]
        },
        {
            "key" : "Returns",
            "values" : [[0, 7], [-1, 13],[-2, 18],[-3, 44],[-4, 32],[-5, 1],[-6, 35],[-7, 7],[-8, 9],[-9, 22],[-10, 46]]
        },
        {
            "key" : "Overdues",
            "values" : [[0, 3], [-1, 5],[-2, 7],[-3, 2],[-4, 1],[-5, 0],[-6, 0],[-7, 0],[-8, 3],[-9, 5],[-10, 3]]
        }


    ];
    $scope.Last30Days = last30Days;

    $scope.xAxisTickFormat = function(){
        return function(d){
//                    return d3.time.format('%X')(new Date(d));  //uncomment for time format
            return d3.time.format('%x')(new Date(d + Date.now()));  //uncomment for date format
        }
    }



}
