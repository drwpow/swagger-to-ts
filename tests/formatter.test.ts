import { default as openapiTS } from "../src/index";

describe("formatter", () => {
  it("basic", async () => {
    const schema = {
      openapi: "3.0.1",
      components: {
        schemas: {
          date: {
            type: "string",
            format: "date-time",
          },
        },
      },
    };
    expect(
      await openapiTS(schema, {
        formatter(schemaObj) {
          if (schemaObj.format === "date-time") {
            return "Date";
          }
          return;
        },
        version: 3,
      })
    ).toBe(`/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */

export interface paths {}

export interface components {
  schemas: {
    date: Date;
  };
}

export interface operations {}
`);
  });

  it("hasObject", async () => {
    const schemaHasObject = {
      openapi: "3.0.1",
      components: {
        schemas: {
          calendar: {
            type: "object",
            properties: {
              dates: {
                type: "object",
                properties: {
                  start: {
                    type: "string",
                    format: "date-time",
                  },
                },
              },
            },
          },
        },
      },
    };

    expect(
      await openapiTS(schemaHasObject, {
        formatter(schemaObj) {
          if (schemaObj.format === "date-time") {
            return "Date";
          }
          return;
        },
        version: 3,
      })
    ).toBe(`/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */

export interface paths {}

export interface components {
  schemas: {
    calendar: {
      dates?: {
        start?: Date;
      };
    };
  };
}

export interface operations {}
`);
  });
});
