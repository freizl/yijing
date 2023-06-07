import Ajv from "ajv"
import { describe, expect, test } from '@jest/globals';
import sixtyFourGuaZhCn from '../zh-CN/64gua.json';
import sixtyFourGuaZhTw from '../zh-TW/64gua.json';

const ajv = new Ajv()

const schema = {
  type: "array",
  uniqueItems: true,
  minItems: 64,
  maxItems: 64,
  items: {
    type: "object",
    additionalProperties: false,
    properties: {
      id: { type: "string" },
      name: { type: "string" },
      gua_ci: { type: "string" },
      tuan_ci: { type: "string" },
      da_xiang: { type: "string" },
      symbol: { type: "string" },
      yao_ci: {
        type: "array",
        items: {
          type: "string"
        }
      },
      xiao_xiang: {
        type: "array",
        items: { type: "string" }
      }
    },
  },
};

describe('六十四卦', () => {
  test.each([
    ['zh-CN/64gua.json', sixtyFourGuaZhCn],
    ['zh-TW/64gua.json', sixtyFourGuaZhTw]
  ])('%s shall be validated', (fileName, fileData) => {
    const validate = ajv.compile(schema);
    const valid = validate(fileData);
    expect(valid).toBe(true);
  });
});
