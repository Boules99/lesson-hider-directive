
angular.module("directivePractice").directive('lessonHider', function() {
  return {
    restrict: 'E',
    templateUrl: './lessonHider.html',
    scope: {
      lesson: '=',
      dayAlert: '&'
    },
    controller: function($scope, lessonService) {
      $scope.getSchedule = lessonService.getSchedule();
    },
    link: function(scope, element, attributes) { //Why does this link thing go here instead of in the service?
      scope.getSchedule.then(function(response) {
        scope.schedule = response.data;

      scope.schedule.forEach(function(scheduleDay) {
        if (scheduleDay.lesson === scope.lesson) {
            scope.lessonDay = scope.schedule.weekday; //Don't understand how this works!
            element.css('text-decoration', 'line-through');
            return;
        }
      });
    });
  }
  }
});
