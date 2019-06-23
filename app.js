var app = angular.module('weekCalendar', []);

app.controller('MainCtrl', function ($scope) {
  var currentSelected;
  $scope.dot = new Array();
  $scope.users = new Array();
  $scope.weekdays = {};
  var users = [
    {
      "number": "INC1932310",
      "Sys_id": "dsfsdfdfdfgdsfd345246436345",
      "Time_data": [
        {
          "SUM": "5.50",
          "U_date_value": "2019-02-01",
        },
        {
          "SUM": "1.50",
          "U_date_value": "2019-02-05"
        }
      ]
    },
    {
      "number": "TSK1956312",
      "Sys_id": "dsfsdfdfdfgdsfd345246436345",
      "Time_data": [
        {
          "SUM": "5.50",
          "U_date_value": "2019-04-01"
        }
      ]
    }
  ];

  /* Method to call getPrevious fucntion*/
  $scope.prev = function () {
    $scope.getPrevious(currentSelected);
  };

  /* Method to call getNext fucntion*/
  $scope.next = function () {
    $scope.getNext(currentSelected);
  };

  /* Method to get weekday data*/
  $scope.getWeekDays = function (current) {
    var week = new Array();
    current.setHours(0,0,0);
    current.setDate((current.getDate() - current.getDay()));
    for (var i = 0; i < 7; i++) {
      week.push(
        { "date": new Date(current), "day": Math.max(current) }
      );
      current.setDate(current.getDate() + 1);
    }
    currentSelected = week[0].date;
    $scope.firstDate = week[0].date;
    $scope.lastDate = week[6].date;
    return week;
  }

  /* Method to get current week data*/
  $scope.getCurrent = function () {
    var currentDate = new Date();
    $scope.dot = $scope.getWeekDays(currentDate);
  }

  /* Method to get previous week data*/
  $scope.getPrevious = function (today) {
    var previousWeekDate = new Date(today.getFullYear(), today.getMonth(), today.getDate() - 7);
    $scope.dot = $scope.getWeekDays(previousWeekDate);
  }

  /* Method to get next week data*/
  $scope.getNext = function (today) {
    var nextWeekDate = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 7);
    $scope.dot = $scope.getWeekDays(nextWeekDate);
  }

  /* Method to create prefilled data object*/
  var setModelData = function () {
    $scope.weekdays = { "INC1932310": { "23": '32452345' } };
    // console.log("DOT", $scope.dot);
    // console.log("USERS", $scope.users);
    // console.log("WEEKDAYS", $scope.weekdays);
  };

  /* Method to set initial data */
  $scope.init = function () {
    $scope.getCurrent();
    $scope.users = users;
    setModelData();
  }
});