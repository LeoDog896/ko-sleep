import sleep from '../src/sleep'

test('should sleep', async function () {
  const start = new Date();
  await sleep(30);

  expect(new Date().getTime() - start.getTime()).toBeGreaterThanOrEqual(30)
})

test('should sleep with human time string', async function () {
  const start = new Date();
  await sleep('30ms');
  expect(new Date().getTime() - start.getTime()).toBeGreaterThanOrEqual(30)
})