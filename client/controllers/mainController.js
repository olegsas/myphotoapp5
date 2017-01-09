angular.module('myApp').controller('mainController', ['$scope', '$http', 'Upload', '$timeout',
    function($scope, $http, Upload, $timeout) {
        $scope.test = "Hello";

        $scope.pictures = [
        'http://data.whicdn.com/images/897396/large.png'
        ];

        $scope.uploadPic = function(file) {
            console.log("we uploads");
            console.log(file);
            file.upload = Upload.upload({
                url: 'http://localhost:3000/pictures/save',
                method: 'POST',
                file: file
            }).then(function(res){
                console.log(res);
                $scope.pictures.push('http://www.thegreatapps.com/application/upload/Apps/2016/10/cat-games-free-84.png');
            });
        }
    }

]);