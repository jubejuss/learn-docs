#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run docs:build

# liigu dist folderisse
cd gh-pages

# initsieeri git
git init
git add .
git commit -m 'deploy'

# pushi reposse NB! VAATA ET ÕIGE NIMEGA AADRESSI PANED
git push -f git@github.com:jubejuss/learn-docs.git master:gh-pages

cd -