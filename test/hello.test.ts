import * as hello from '../src/hello';

test('Hello World test', () => {
  expect(hello.helloWorld()).toEqual('Hello, World!');
});
