app.controller("ctrl", ($scope,factory,$window) => {
  $scope.totalRating = 0;
  let promise = factory.getData();
  promise.then(
    data => {
      $scope.data = data.data;
      for (let ele of data.data.topScores) {
        $scope.totalRating += parseFloat(ele.score);
      }
      $scope.totalRating = $scope.totalRating / 4;
    },
    error => {
      console.log(error);
    }
  );
  $scope.getNumber = () => {
    return new Array(5);
  };
  var screenWidth = $window.pageYOffset ;
  $scope.$watch('screenWidth', function() {
    if(screenWidth>700)console.log("size chota hogya");
  });
  
  // $scope.customQuery = $mdMedia('(min-width: 1234px)');

  $scope.options = {
    size: 50,
    //other options
    readOnly: true,
    skin: {
      type: "tron",
      width: 2,
      color: "#388E3C",
      spaceWidth: 3
    },
    barColor: "#388E3C",
    fontSize: "auto",
    dynamicOptions: true,
    trackWidth: 6,
    barWidth: 8,
    textColor: "#494B52",
    step: 0.1,
    max: 5
  };
});
