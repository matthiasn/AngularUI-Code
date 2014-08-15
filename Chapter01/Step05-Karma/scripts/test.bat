@echo off
set BASE_DIR=%~dp0
karma start "%BASE_DIR%\..\conf\karma.conf.js" %*