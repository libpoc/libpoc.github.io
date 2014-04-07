
function RegistrationController($scope) {

    $scope.Types = [
        {
            option: "a student",
            value : "st"
        },
        {
            option: "teaching staff",
            value : "ts"
        },
        {
            option: "support staff",
            value: "ss"
        },
        {
            option : "a parent",
            value: "pp"
        },
        {
            option : "none of the above",
            value: "na"
        }
    ];

    $scope.Type = null;

    $scope.AgreeTnC = false;

    $scope.FirstName = '';
    $scope.LastName = '';
    $scope.Email1 = '';
    $scope.Email2 = '';
    $scope.Password1 = '';
    $scope.Password2 = '';
    $scope.IsStudent = false;


    $scope.CanSubmit = false;// function () {

//        return true;
//            ($scope.FirstName.length > 0 && $scope.LastName.length > 0) &&
//            ($scope.Email1.length > 1 && ($scope.Email1 === $scope.Email2)) &&
//            ($scope.Password1.length > 1 && ($scope.Password1 === $scope.Email2)) &&
//            $scope.AgreeTnC;

//    };





}