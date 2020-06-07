#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

git add -A

git commit -m 'update'

git push -f "https://github.com/winteroo/mockServer.git" master

echo "*********全部更改已提交***********"

cd -
