#!/usr/bin/env bash

./build.sh
mkdir -p ../ghpages-website
cp -r pages/* ../ghpages-website
cp lib/devx_landing_page.css ../ghpages-website
cp lib/devx_landing_page.js ../ghpages-website
