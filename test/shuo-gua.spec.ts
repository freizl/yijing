import Ajv from "ajv"
import { describe, expect, test } from '@jest/globals';
import shuoGuaZhCn from '../zh-CN/shuo-gua.json';
import shuoGuaZhTw from '../zh-TW/shuo-gua.json';

const ajv = new Ajv()

const schema = {
    type: "object",
    additionalProperties: false,
    properties: {
      title: { type: "string" },
      content: { type: "array", items: {type: "string"} },
    },
};

describe('说卦', () => {
  test.each([
    ['zh-CN/shuo-gua.json', shuoGuaZhCn],
    ['zh-TW/shuo-gua.json', shuoGuaZhTw]
  ])('%s shall be validated', (fileName, fileData) => {
    const validate = ajv.compile(schema);
    const valid = validate(fileData);
    expect(valid).toBe(true);
  });
});
