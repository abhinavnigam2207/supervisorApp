'use strict';

supervisorApp.controller('DashBoardCtrl', [ '$scope', 'HttpService', '$timeout', function(scope, HttpService, $timeout) {
	
	scope.workers = [];
	scope.selected = -1;
	scope.selectedWorker = null;
	scope.assignTask ={};


	scope.initData = function(){
		HttpService.getWorkers().then(function(resp){
			scope.workers = resp && resp.data;
			angular.forEach(scope.workers, function(worker){
				scope.startWorking(worker)
			});
		});
	};

	scope.ringBell = function(){
		let firstAvailable = scope.workers.find(function(worker){
			return !worker.taskAssigned;
		});
		if(firstAvailable) {
			alert("Worker Available  \n\n Name: " + firstAvailable.name + ",  Mobile Number: "+ firstAvailable.mobileNumber);
		}
		else{
			alert("Sorry ! No worker is available at this moment.");
		}
	};

	scope.select = function(index, worker){
		scope.selected = index;
		scope.selectedWorker = worker;
		scope.assignTask ={};
	};

	scope.assignTaskToEmp = function(){
		angular.forEach(scope.workers, function(worker){
			if(worker.id==scope.selectedWorker.id){
				worker.taskAssigned = scope.assignTask.name;
				worker.taskDuration = scope.assignTask.duration;
				scope.startWorking(worker);
			}
		});
	};

	scope.startWorking = function(worker){
		$timeout(function(){
			worker.taskAssigned = null;
			if(scope.selectedWorker &&  worker.id==scope.selectedWorker.id){
				scope.assignTask ={};
				scope.selectedWorker = null;
				scope.selected = -1;
			}
		}, worker.taskDuration*1000);
	};

	scope.initData();
}]);