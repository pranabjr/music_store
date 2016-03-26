'use strict';

angular.module('musicApp')

        .controller('MenuController', ['$scope', 'menuFactory', function($scope, menuFactory) {
            
            $scope.tab = 1;
            $scope.filtText = '';
            $scope.showDetails = false;

            $scope.albums= menuFactory.getDishes();

                        
            $scope.select = function(setTab) {
                $scope.tab = setTab;
                
                if (setTab === 2) {
                    $scope.filtText = "rock";
                }
                else if (setTab === 3) {
                    $scope.filtText = "techno";
                }
                else if (setTab === 4) {
                    $scope.filtText = "classical";
                }
                else {
                    $scope.filtText = "";
                }
            };

            $scope.isSelected = function (checkTab) {
                return ($scope.tab === checkTab);
            };
    
            $scope.toggleDetails = function() {
                $scope.showDetails = !$scope.showDetails;
            };
        }])

        .controller('ContactController', ['$scope', function($scope) {

            $scope.feedback = {mychannel:"", firstName:"", lastName:"", agree:false, email:"" };
            
            var channels = [{value:"tel", label:"Tel."}, {value:"Email",label:"Email"}];
            
            $scope.channels = channels;
            $scope.invalidChannelSelection = false;
    
                        
        }])

        .controller('FeedbackController', ['$scope', function($scope) {
            
            $scope.sendFeedback = function() {
                
                console.log($scope.feedback);
                
                if ($scope.feedback.agree && ($scope.feedback.mychannel === "")) {
                    $scope.invalidChannelSelection = true;
                    console.log('incorrect');
                }
                else {
                    $scope.invalidChannelSelection = false;
                    $scope.feedback = {mychannel:"", firstName:"", lastName:"", agree:false, email:"" };
                    $scope.feedback.mychannel="";
                    $scope.feedbackForm.$setPristine();
                    console.log($scope.feedback);
                }
            };
        }])

        .controller('DishDetailController', ['$scope', '$stateParams', 'menuFactory', function($scope, $stateParams, menuFactory) {

            var dish= menuFactory.getDish(parseInt($stateParams.id,10));
            
            $scope.dish = dish;
            
        }])

        .controller('DishCommentController', ['$scope', function($scope) {
            
            $scope.mycomment = {rating:5, comment:"", author:"", date:""};
            
            $scope.submitComment = function () {
                
                $scope.mycomment.date = new Date().toISOString();
                console.log($scope.mycomment);
                
                $scope.dish.comments.push($scope.mycomment);
                
                $scope.commentForm.$setPristine();
                
                $scope.mycomment = {rating:5, comment:"", author:"", date:""};
            };
        }])

        .controller('IndexController',['$scope', '$stateParams', 'menuFactory', 'corporateFactory', function($scope, $stateParams, menuFactory, corporateFactory){

            var newAr=menuFactory.getNew();
            $scope.newAr=newAr;
            
            $scope.promotions= menuFactory.getPromotions();

            var promotion= menuFactory.getPromotion(parseInt($stateParams.id,10));
            
            $scope.promotion = promotion;

            var ftDish=menuFactory.getDish(0);
            $scope.ftDish=ftDish;

            var exChef=corporateFactory.getLeader(0);
            $scope.exChef=exChef;
       }])

        .controller('AboutController',['$scope', '$stateParams', 'corporateFactory', function($scope, $stateParams, corporateFactory){

            $scope.leaders= corporateFactory.getLeaders();

            var leader= corporateFactory.getLeader(parseInt($stateParams.id,10));
            
            $scope.leader = leader;


       }]) 

        // implement the IndexController and About Controller here


;
