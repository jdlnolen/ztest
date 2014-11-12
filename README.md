ztest
=====

[![Build Status](https://travis-ci.org/jdlnolen/ztest.svg?branch=master)](https://travis-ci.org/jdlnolen/ztest)

[ ![Codeship Status for jdlnolen/ztest](https://codeship.io/projects/4c7e2d70-07a1-0132-c4dc-1a75e65bd607/status)](https://codeship.io/projects/31284)

This is a test repo for functional testing a meteor app with zombie.js (http://zombie.labnotes.org/). Uses a very simple test of the DOM on the home page. 

Running Locally
---------------

The only pre-reqs are zombie and mocha (install via npm):

```
npm install -g zombie

npm install -g mocha

```

After those are in place, you should be able to run ./run.sh to get mocha and zombie to run. 

If you need a dev environment to start, here is vagrant file for meteor:

https://github.com/jdlnolen/meteorbox

Travis-CI
---------

Repo should work out of the box after getting it set between your github account and travis using the provided .travis.yml

Codeship.io
-----------

The following commands work:

Setup Commands

```
npm update
npm install zombie mocha -g
curl -o meteor_install_script.sh https://install.meteor.com/
chmod +x meteor_install_script.sh
sed -i "s/type sudo >\/dev\/null 2>&1/\ false /g" meteor_install_script.sh
./meteor_install_script.sh
export PATH=$PATH:~/.meteor/
nohup bash -c "meteor 2>&1 &" && sleep 60; cat nohup.out
```

Test Commands

```
mocha tests/functional/*.js --timeout 10000
```
