ztest
=====

[![Build Status](https://travis-ci.org/jdlnolen/ztest.svg?branch=master)](https://travis-ci.org/jdlnolen/ztest)

[ ![Codeship Status for jdlnolen/ztest](https://codeship.io/projects/4c7e2d70-07a1-0132-c4dc-1a75e65bd607/status)](https://codeship.io/projects/31284)

Test repo for zombie integration test. 

Travis-CI
---------

Repo should work out of the box after getting it set between your github account and travis using the provided .travis.yml

Codeship.io
-----------

The following commands work:

Setup Commands

```
git clone https://github.com/meteor/meteor.git ~/meteor
export PATH=~/meteor/:$PATH
npm install -g meteorite mocha zombie
METEOR_PATH=~/meteor
mrt update
nohup bash -c "mrt 2>&1 &" && sleep 60; cat nohup.out
```

Test Commands

```
mocha tests/functional/*.js --timeout 10000
```
