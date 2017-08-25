https://github.com/karma-runner/karma-jasmine/issues/185

```
npm install

cd node_modules/karma
npm install
npm run build

cd ../../
npm test
```

Specs work as expected with just jasmine: checkout e4046253c43d91619017f9dc632811cedf19fd8e

Specs work as expected in non-debug mode with karma/karma-jasmine: checkout 0e4c1b340a8067036c9cba2bdf79b9d981051753

Specs do not work as expected in debug mode with karma/karma-jasmine: checkout 0e4c1b340a8067036c9cba2bdf79b9d981051753
