#!/usr/bin/env bash
cp app/js/config.js.dist app/js/config.js
bower i --allow-root
npm install --production
grunt test
