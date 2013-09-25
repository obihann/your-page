#your.page
I got fed up with [about.me](http://about.me), so I decided to create my own clone with HTML5 and SASS. Obviouslly any CMS type controls are missing however it provided me with a quick and free one page site.

##Table Of Contents
* [Download](#download)
* [Installation](#installation)
* [Credits](#credits)
* [License](#license)

##Download
Our beta release can be downloaded [here](https://github.com/obihann/your.page/archive/v.01-beta.tar.gz) or you can clone the repo like so:

	git clone https://github.com/obihann/your.page.git

##Installation

###(Step 0.1) Install Ruby
If you don't already have it, check out RVM (https://rvm.io/)

###(Step 1) Install Bundler
Bundler is a handy tool to help keep track of the necessary Ruby packages

	gem install bundler
	bundle install

What did I justt install?!?!? Basically just [SASS](http://sass-lang.com/), and a few plugins for it([Compass]((http://compass-style.org/), [Susy](http://susy.oddbird.net/), and [rgbapng](https://github.com/aaronrussell/compass-rgbapng))

###(Step 1.1) Install Node
If you don't already have Node (http://nodejs.org/), you have to check it out! Seriosuly, if you don't this just won't work. 

###(Step 2) Install Grunt
Grunt (http://gruntjs.com/) is a fun Node tool that manages the project, refreshes dynamically, and tells us when were being extra sexy (ok, that might just be in my head... but I am right?)
	
	npm install -g grunt-cli
	npm install

###(Step 4) Install eveyrthing else
Run the site (finally!). You should have already noticed that the un-complied code is in app, and a example is in public, which is where
you should be compiling too. 

	grunt
	
Now thats its running, feel free to fork this and make your own, have fun and show off yourself. If you area really up for it
my next step for this is better integration with github, possibly running it direclty and using jekyll. I want to avoid any 
back end server language such as PHP, or a database system as both of these will make this project much closer to a CMS than what it 
was inteded, just a basic one page introduction site.

##ToDo
* Clean up readme
* Look into how we can simplify the setup process
* Check if we can cleanup the repo
* Add a way to display external projects

##Credits
* [SASS](http://sass-lang.com/) - It makes coding CSS much easier
* [Compass](http://compass-style.org/) - An amazing CSS framework for SASS
* [Susy](http://susy.oddbird.net/) - A great responsive framework
* [Grunt](http://gruntjs.com/) - An awesome tool to simplify builds

##License
This tool is protected by the [GNU General Public License v2](http://www.gnu.org/licenses/gpl-2.0.html).

Copyright [Jeffrey Hann](http://jeffreyhann.ca/) 2013
