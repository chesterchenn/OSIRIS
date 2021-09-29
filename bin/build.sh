#!/bin/sh

echo "Starting build to gh-pages"

BUILD_DIR="${GITHUB_WORKSPACE}/build"
echo "::debug::构建目录文件夹: ${BUILD_DIR}"

mkdir $BUILD_DIR
cd $BUILD_DIR
