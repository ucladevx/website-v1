#!/usr/bin/env bash

./build.sh
cp -r pages/* ../ucladevx.github.io
cp lib/devx_landing_page.css ../ucladevx.github.io
cp lib/devx_landing_page.js ../ucladevx.github.io
