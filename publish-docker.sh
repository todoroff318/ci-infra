version="1.0.0-SNAPSHOT"

echo "Publishing v$version"

echo "Removing old dist"
rm -rf ./dist

echo "Building"
npm run build

echo "Removing old images"
docker image remove test
docker image remove testfr

echo "Building new images"
docker build -t test:$version
docker build -t testfr:$version

echo "Publish to Dockerhub"
docker push todoroff318/test:$version
docker push todoroff318/testfr:$version