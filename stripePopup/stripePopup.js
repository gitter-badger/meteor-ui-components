if (Meteor.isClient) {

	Template.stripePopup.events({

		'click .stripe': function(e) {
	    e.preventDefault();
			console.log(e);

	    StripeCheckout.open({
	      key: Meteor.settings.public.stripePublicKey,
	      amount: 1000, // this is equivalent to $50
	      name: 'Pre Order Season One',
	      description: 'Episodes 1-8 ($10.00)',
	      panelLabel: 'No problem',
	      token: function(res) {
	        stripeToken = res.id;
	        console.info(res);
	        Meteor.call('chargeCard', stripeToken);
	      }
	    });
	  }
	});


	Template.stripePopup.helpers({

	});

	Template.stripePopup.rendered = function() {

	}

}

if (Meteor.isServer) {
  Meteor.methods({
    'chargeCard': function(stripeToken) {
      check(stripeToken, String);
      var Stripe = StripeAPI(process.env.stripeSecretKey);

      Stripe.charges.create({
        source: stripeToken,
        amount: 5000, // this is equivalent to $50
        currency: 'usd'
      }, function(err, charge) {
        console.log(err, charge);
      });
    }
  });
}
