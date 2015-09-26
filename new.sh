#!/bin/sh

case $1 in
	"ui") dir='packages/meteor-ui-components';;
	"page") dir="client/templates";;
	"layout") dir="client/templates/layouts";;
esac

mkdir $dir/$2
touch $dir/$2/$2.jade
touch $dir/$2/$2.styl
touch $dir/$2/$2.js

echo "if (Meteor.isClient) {

	Template.$2.events({

		'' : function(e, t) {
		}

	});


	Template.$2.helpers({

	});

	Template.$2.rendered = function() {

	}

}" >> $dir/$2/$2.js


echo ".$2
	//
" >> $dir/$2/$2.styl

echo "template(name=\"$2\")
  .$2
" >> $dir/$2/$2.jade

echo "\e[32m Success! A $2 $1 component was created."
