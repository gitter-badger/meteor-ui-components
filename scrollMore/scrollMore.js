if (Meteor.isClient) {

	Template.scrollMore.events({

		'click .button' : function(e, t) {
			var top = $(t).next().offset().top;
			$('html,body').animate({scrollTop: top});
		}

	});


	Template.scrollMore.helpers({

	});

	Template.scrollMore.rendered = function() {

	}

}
