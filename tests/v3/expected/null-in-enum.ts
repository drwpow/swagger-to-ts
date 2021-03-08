/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */

export interface paths {
  "/test": {
    get: {
      responses: {
        /** A list of types. */
        200: unknown;
      };
    };
  };
}

export interface components {
  schemas: {
    /** Enum with null and nullable */
    MyType: {
      myField?: ("foo" | "bar") | null;
    };
    /** Enum with null */
    MyTypeNotNullable: {
      myField?: "foo" | "bar" | null;
    };
    /** Enum with null */
    MyTypeNotNullableNotNull: {
      myField?: "foo" | "bar";
    };
    /** Enum with null */
    MyTypeMixed: {
      myField?: "foo" | 2 | false | null;
    };
  };
}

export interface operations {}
