import * as hello from "./hello";

test("Hello World test", () => {
  expect(hello.helloWorld()).toEqual("Hello, World!");
});
