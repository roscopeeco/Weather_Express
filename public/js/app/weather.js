
define(
	['jquery', 'knockout'],
	function($, ko, application) {

		function weather(params) {

			var self=this;

			var CONSTANTS={
				URLS:{
					GET:'api/weather/'
				}
			};

			this.location=ko.observable('Edinburgh');
			this.items=ko.observableArray([]);
			this.selectedItemIndex=0;

			this.loaded=ko.observable(false);
			this.loading=ko.observable(false);

			this.show=function(item) {

				var index=self.items.indexOf(item);

				if (index!=self.selectedItemIndex && index!=-1) {
					self.items()[self.selectedItemIndex].show(false);
					item.show(true);
					self.selectedItemIndex=index;
				}

			};

			this.get=function() {

				self.loading(true);

				/* Loads weather data */
				$.getJSON(
					CONSTANTS.URLS.GET+self.location(),
					function(data) {

						self.items.removeAll();

						var list=data.list,
							index=-1,
						 	currentDate,
							show=true;

						for (var i=0, ii=list.length;i<ii;i++) {

							d=new Date(list[i].dt_txt).toDateString();

							if (d!=currentDate) {

								/* we're only display 5 days worth so exit if there is  a sixth day */
								if (index==4) {
									break;
								}

								currentDate=d;
								index++;
								self.items.push(
									{
										day:currentDate,
										show:ko.observable(show),
										data:ko.observableArray([])
									}
								);
								show=false;
							}
							list[i].date=new Date(list[i].dt_txt);
							self.items()[index].data.push(list[i]);
						}

						self.loading(false);
						self.loaded(true);
					}
				);

			};

			this.get();

			return this;
		};

		return weather;
	}
);
