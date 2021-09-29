#!/bin/sh

echo "Starting build to gh-pages"

REMOTE_REPO="https://${GITHUB_ACTOR}@github.com/${GITHUB_REPOSITORY}.git"
echo "远程仓库: ${REMOTE_REPO}"
BUILD_DIR="${GITHUB_WORKSPACE}/build"
echo "构建目录文件夹: ${BUILD_DIR}"
remote_branch="gh-pages"
echo "部署分支：${remote_branch}"

echo "Clone ${remote_branch} from repo ${REMOTE_REPO}"
git clone --branch $remote_branch $REMOTE_REPO .
LOCAL_BRANCH=$remote_branch

echo "本地分支是：${LOCAL_BRANCH}"

npm run build
echo "构建完成"

cd ${BUILD_DIR}

git config user.name "${GITHUB_ACTOR}"
git config user.email "${GITHUB_ACTOR}@users.noreply.github.com"
git add .
git commit -m "build from Action ${GITHUB_SHA}"
git push $REMOTE_REPO $LOCAL_BRANCH:$remote_branch

