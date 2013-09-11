'use strict';

describe('Controller: PraiseCtrl', function () {

  // load the controller's module
  beforeEach(module('gaurillaApp'));

  var PraiseCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PraiseCtrl = $controller('PraiseCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
