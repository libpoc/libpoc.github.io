function MemberDashboardController ($scope) {

    $scope.Members = [
        {
            number          : 'B7564832',
            forename        : 'Tom',
            surname         : 'Baker',
            type            : 'DE',
            ou              : '1 Bunratty',
            onloan          : 5,
            totalloans      : 73,
            overdue         : 1,
            date_joined     : '1/1/2013',
            last_loan       : '2/12/2013'
        },
        {
            number          : 'B0938398',
            forename        : 'William',
            surname         : 'Hartnell',
            type            : 'BU',
            ou              : '',
            onloan          : 55,
            totalloans      : 324,
            overdue         : 10,
            date_joined     : '2/11/2010',
            last_loan       : '1/1/2014'
        },
        {
            number          : 'B28493716',
            forename        : 'Pertwee',
            surname         : 'Jon',
            type            : 'LI',
            ou              : '',
            onloan          : 0,
            totalloans      : 3,
            overdue         : 0,
            date_joined     : '12/10/2013',
            last_loan       : '30/1/2013'
        },
        {
            number          : 'B39586732',
            forename        : 'Paul',
            surname         : 'McGann',
            type            : 'DE',
            ou              : '4 Something',
            onloan          : 5,
            totalloans      : 73,
            overdue         : 1,
            date_joined     : '31/12/2013',
            last_loan       : '2/1/2014'
        }

    ];


}
