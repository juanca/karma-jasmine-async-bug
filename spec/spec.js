it('fails on purpose', function() {
  console.log('Expected failure');
  expect(true).toEqual(false);
});

it('fails without purpose (asynchronously)', function(done) {
  console.log('Unexpected failure');
  expect(true).toEqual(true);
  done();
});

