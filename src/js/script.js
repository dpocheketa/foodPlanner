$(function(){

	function Eating(title){
        this.title = title;
        this.components = ko.observableArray();
        this.sumField = function(){
        	return 5;
        };

		this.calories = ko.computed(function(){
			var arr = this.components();
			var l = arr.length;
			var sum = 0;
			for (var i = 0; i < l; i++) {
				sum+= arr[i].calories
			};
			return sum;

		},this);
	};


	var viewModel = {
		data: ko.observableArray(),
		breakfest: new Eating("breakfest"),
		dinner: new Eating("dinner"),
		supper: new Eating("supper"),
		addTo: function(x, dish){
			viewModel[x].components.push(dish);
			
		}
	};
	
	for (var i = 0; i < data.length; i++) {
		data[i].selected = ko.observable(false);
		viewModel.data.push(data[i]);
	};

	viewModel.dailyCalories = ko.computed(function(){
		return viewModel.breakfest.calories() + viewModel.dinner.calories() + viewModel.supper.calories();
	});


	ko.applyBindings(viewModel);
});