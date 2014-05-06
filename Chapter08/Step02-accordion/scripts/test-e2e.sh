#!/bin/bash
BASE_DIR=`dirname $0`
echo ""
echo "Starting Karma Server for E2E tests (http://karma-runner.github.io)"
echo "-------------------------------------------------------------------"
karma start $BASE_DIR/../conf/karma-e2e.conf.js $*