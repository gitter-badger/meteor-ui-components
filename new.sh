#!/bin/sh

dir='.'
mkdir $dir/$1
touch $dir/$1/$1.jade
touch $dir/$1/$1.styl
touch $dir/$1/$1.js

echo "if (Meteor.is_client) {

	Template.$1.events({

		'' : function(e, t) {
		}

	});


	Template.$1.helpers({

	});

	Template.$1.rendered = function() {

	}

}" >> $dir/$1/$1.js


echo ".$1
	display flex
" >> $dir/$1/$1.styl

echo "template(name=\"$1\")
  .$1
" >> $dir/$1/$1.jade

echo "Success! $1 component created."
