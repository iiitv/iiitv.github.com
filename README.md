# IIITV Blog

View online at [iiitv.github.io](http://iiitv.github.io).

See the inauguration post - http://iiitv.github.io/blog/welcome-to-the-blog.html 

The design is drawn from [@ansarimofid's work](https://github.com/ansarimofid/blog-iiitv).

## Development Instructions

### 1. Clone the repository

* Open terminal and type the following
```
git clone https://github.com/iiitv/iiitv.github.com.git
```

 ### 2. Go to the local repository on your system
 
 * Assuming your repository is on the Desktop
 * Open terminal
 * If your terminal is at home, do the following
 ```
 cd Desktop/iiitv.github.com/
 ```
 * But if you are already at desktop just type
 ```
 cd iiitv.github.com/
 ```
 
### 3. Install Jekyll to your system

You could do this in two ways-
1. Follow the steps given by [Jekyll](https://jekyllrb.com/docs/installation/).
2. Follow the instructions below:

#### To install Jekyll on your system you need the following

* GNU/Linux, Unix, or macOS
* Ruby version 2.1 or above, including all development headers
* RubyGems
* GCC and Make (in case your system doesn’t have them installed, which you can check by running gcc -v and make -v in your system’s command line interface)

#### (i) How to install Ruby

* Follow the steps given by [Ruby](https://www.ruby-lang.org/en/documentation/installation/).

###### Or if you are using apt (Debian or Ubuntu)

* Debian GNU/Linux and Ubuntu use the apt package manager. You can use it like this
```
 sudo apt-get install ruby-full
 ```
 
 #### (ii) How to install RubyGems
 
 * Follow the steps given by [RubyGems](https://rubygems.org/pages/download/).
 
 ###### Or do the following
 ```
 gem install rubygems-update
 update_rubygems  
 ```
 
 #### (iii) How to install Jekyll
 
 ###### Do the following
 
 ```
 gem install jekyll
 ```
 
 #### (iv) You also need to install Redcarpet
 
 ###### To install redcarpet do the following
 ```
 sudo gem install redcarpet

 ```
 
 ### 4. Running the project
 
 * Assuming your terminal is at your repository.
 * If not follow step 2.
 
 ##### To run the project
 
 * Do the following
 ```
 jekyll serve
 ```
 * This command will run the project on default ``` localhost:4000 ```.
 * Open any browser and go to the address ``` localhost:4000 ```.
