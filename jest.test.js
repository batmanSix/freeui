// 测试数字相加
test("test common matcher", () => {
  expect(2 + 2).toBe(4);
  expect(2 + 2).not.toBe(5);
});

// 测试boolean 值
test("test to be true or false", () => {
  expect(1).toBeTruthy();
  expect(0).toBeFalsy();
});

// 测试数字大小
test("test number", () => {
  expect(4).toBeGreaterThan(3);
  expect(2).toBeLessThan(3);
});

// 测试对象值是否相等
test("test object", () => {
  expect({ name: "kangBo" }).toEqual({ name: "kangBo" });
});
