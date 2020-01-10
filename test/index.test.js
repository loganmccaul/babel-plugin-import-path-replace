const babel = require("@babel/core");
const importPathReplace = require("../lib/index");

it("should replace nothing", () => {
  const example = 'import { test } from "../test";';

  const { code } = babel.transform(example, {
    plugins: [importPathReplace]
  });

  expect(code).toEqual(example);
});

it("should replace part of the import", () => {
  const example = 'import { test } from "../test";';

  const { code } = babel.transform(example, {
    plugins: [
      [
        importPathReplace, {
          rules: [
            {
              match: '../',
              replacement: '../../'
            }
          ]
        }
      ]
    ]
  });

  expect(code).toEqual('import { test } from "../../test";');
});

it("should not replace non imports", () => {
  const example = "const str = '../';";

  const { code } = babel.transform(example, {
    plugins: [
      [
        importPathReplace, {
          rules: [
            {
              match: '../',
              replacement: '../../'
            }
          ]
        }
      ]
    ]
  });

  expect(code).toEqual(example);
});
