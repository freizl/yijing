import Ajv from "ajv"
import { describe, expect, test } from '@jest/globals';
import wenyanZhCn from '../zh-CN/wen-yan.json';
import wenyanZhTw from '../zh-TW/wen-yan.json';

const ajv = new Ajv()

const schema = {
  type: "object",
  additionalProperties: false,
  properties: {
    title: { type: "string" },
    content: {
      type: "array",
      minItems: 2,
      maxItems: 2,
      items: {
        type: "object",
        properties: {
          "subtitle": { type: "string" },
          "content": {
            type: "array",
            items: {
              type: "string"
            }
          }
        }
      }
    },
  }
};

describe('说卦', () => {
  test.each([
    ['zh-CN/wen-yan.json', wenyanZhCn],
    ['zh-TW/wen-yan.json', wenyanZhTw]
  ])('%s shall be validated', (fileName, fileData) => {
    const validate = ajv.compile(schema);
    const valid = validate(fileData);
    expect(valid).toBe(true);
  });
});
