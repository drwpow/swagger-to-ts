import { join } from "path";
import openapiTS from "../../src/index";

describe("remote $refs", () => {
  it("resolves remote $refs", async () => {
    const types = await openapiTS(join(__dirname, "spec", "spec.yml"));
    expect(types).toEqual(`/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */

export interface paths {}

export interface components {
  schemas: {
    /** this is a duplicate of subschema/remote1.yml */
    Circular: string;
    Remote1: external["subschema/remote1.yml"]["components"]["schemas"]["Remote1"];
    Pet: external["https://raw.githubusercontent.com/drwpow/openapi-typescript/main/tests/v3/specs/petstore.yaml"]["components"]["schemas"]["Pet"];
  };
}

export interface operations {}

export interface external {
  "https://raw.githubusercontent.com/drwpow/openapi-typescript/main/tests/v3/specs/petstore.yaml": {
    paths: {
      "/pet": {
        put: external["https://raw.githubusercontent.com/drwpow/openapi-typescript/main/tests/v3/specs/petstore.yaml"]["operations"]["updatePet"];
        post: external["https://raw.githubusercontent.com/drwpow/openapi-typescript/main/tests/v3/specs/petstore.yaml"]["operations"]["addPet"];
      };
      "/pet/findByStatus": {
        /** Multiple status values can be provided with comma separated strings */
        get: external["https://raw.githubusercontent.com/drwpow/openapi-typescript/main/tests/v3/specs/petstore.yaml"]["operations"]["findPetsByStatus"];
      };
      "/pet/findByTags": {
        /** Muliple tags can be provided with comma separated strings. Use         tag1, tag2, tag3 for testing. */
        get: external["https://raw.githubusercontent.com/drwpow/openapi-typescript/main/tests/v3/specs/petstore.yaml"]["operations"]["findPetsByTags"];
      };
      "/pet/{petId}": {
        /** Returns a single pet */
        get: external["https://raw.githubusercontent.com/drwpow/openapi-typescript/main/tests/v3/specs/petstore.yaml"]["operations"]["getPetById"];
        post: external["https://raw.githubusercontent.com/drwpow/openapi-typescript/main/tests/v3/specs/petstore.yaml"]["operations"]["updatePetWithForm"];
        delete: external["https://raw.githubusercontent.com/drwpow/openapi-typescript/main/tests/v3/specs/petstore.yaml"]["operations"]["deletePet"];
      };
      "/pet/{petId}/uploadImage": {
        post: external["https://raw.githubusercontent.com/drwpow/openapi-typescript/main/tests/v3/specs/petstore.yaml"]["operations"]["uploadFile"];
      };
      "/store/inventory": {
        /** Returns a map of status codes to quantities */
        get: external["https://raw.githubusercontent.com/drwpow/openapi-typescript/main/tests/v3/specs/petstore.yaml"]["operations"]["getInventory"];
      };
      "/store/order": {
        post: external["https://raw.githubusercontent.com/drwpow/openapi-typescript/main/tests/v3/specs/petstore.yaml"]["operations"]["placeOrder"];
      };
      "/store/order/{orderId}": {
        /** For valid response try integer IDs with value >= 1 and <= 10.         Other values will generated exceptions */
        get: external["https://raw.githubusercontent.com/drwpow/openapi-typescript/main/tests/v3/specs/petstore.yaml"]["operations"]["getOrderById"];
        /** For valid response try integer IDs with positive integer value.         Negative or non-integer values will generate API errors */
        delete: external["https://raw.githubusercontent.com/drwpow/openapi-typescript/main/tests/v3/specs/petstore.yaml"]["operations"]["deleteOrder"];
      };
      "/user": {
        /** This can only be done by the logged in user. */
        post: external["https://raw.githubusercontent.com/drwpow/openapi-typescript/main/tests/v3/specs/petstore.yaml"]["operations"]["createUser"];
      };
      "/user/createWithArray": {
        post: external["https://raw.githubusercontent.com/drwpow/openapi-typescript/main/tests/v3/specs/petstore.yaml"]["operations"]["createUsersWithArrayInput"];
      };
      "/user/createWithList": {
        post: external["https://raw.githubusercontent.com/drwpow/openapi-typescript/main/tests/v3/specs/petstore.yaml"]["operations"]["createUsersWithListInput"];
      };
      "/user/login": {
        get: external["https://raw.githubusercontent.com/drwpow/openapi-typescript/main/tests/v3/specs/petstore.yaml"]["operations"]["loginUser"];
      };
      "/user/logout": {
        get: external["https://raw.githubusercontent.com/drwpow/openapi-typescript/main/tests/v3/specs/petstore.yaml"]["operations"]["logoutUser"];
      };
      "/user/{username}": {
        get: external["https://raw.githubusercontent.com/drwpow/openapi-typescript/main/tests/v3/specs/petstore.yaml"]["operations"]["getUserByName"];
        /** This can only be done by the logged in user. */
        put: external["https://raw.githubusercontent.com/drwpow/openapi-typescript/main/tests/v3/specs/petstore.yaml"]["operations"]["updateUser"];
        /** This can only be done by the logged in user. */
        delete: external["https://raw.githubusercontent.com/drwpow/openapi-typescript/main/tests/v3/specs/petstore.yaml"]["operations"]["deleteUser"];
      };
    };
    components: {
      schemas: {
        Order: {
          id?: number;
          petId?: number;
          quantity?: number;
          shipDate?: string;
          /** Order Status */
          status?: "placed" | "approved" | "delivered";
          complete?: boolean;
        };
        Category: {
          id?: number;
          name?: string;
        };
        User: {
          id?: number;
          username?: string;
          firstName?: string;
          lastName?: string;
          email?: string;
          password?: string;
          phone?: string;
          /** User Status */
          userStatus?: number;
        };
        Tag: {
          id?: number;
          name?: string;
        };
        Pet: {
          id?: number;
          category?: external["https://raw.githubusercontent.com/drwpow/openapi-typescript/main/tests/v3/specs/petstore.yaml"]["components"]["schemas"]["Category"];
          name: string;
          photoUrls: string[];
          tags?: external["https://raw.githubusercontent.com/drwpow/openapi-typescript/main/tests/v3/specs/petstore.yaml"]["components"]["schemas"]["Tag"][];
          /** pet status in the store */
          status?: "available" | "pending" | "sold";
        };
        ApiResponse: {
          code?: number;
          type?: string;
          message?: string;
        };
      };
    };
    operations: {
      updatePet: {
        responses: {
          /** Invalid ID supplied */
          400: unknown;
          /** Pet not found */
          404: unknown;
          /** Validation exception */
          405: unknown;
        };
        /** Pet object that needs to be added to the store */
        requestBody: {
          content: {
            "application/json": external["https://raw.githubusercontent.com/drwpow/openapi-typescript/main/tests/v3/specs/petstore.yaml"]["components"]["schemas"]["Pet"];
            "application/xml": external["https://raw.githubusercontent.com/drwpow/openapi-typescript/main/tests/v3/specs/petstore.yaml"]["components"]["schemas"]["Pet"];
          };
        };
      };
      addPet: {
        responses: {
          /** Invalid input */
          405: unknown;
        };
        /** Pet object that needs to be added to the store */
        requestBody: {
          content: {
            "application/json": external["https://raw.githubusercontent.com/drwpow/openapi-typescript/main/tests/v3/specs/petstore.yaml"]["components"]["schemas"]["Pet"];
            "application/xml": external["https://raw.githubusercontent.com/drwpow/openapi-typescript/main/tests/v3/specs/petstore.yaml"]["components"]["schemas"]["Pet"];
          };
        };
      };
      /** Multiple status values can be provided with comma separated strings */
      findPetsByStatus: {
        parameters: {
          query: {
            /** Status values that need to be considered for filter */
            status: ("available" | "pending" | "sold")[];
          };
        };
        responses: {
          /** successful operation */
          200: {
            content: {
              "application/xml": external["https://raw.githubusercontent.com/drwpow/openapi-typescript/main/tests/v3/specs/petstore.yaml"]["components"]["schemas"]["Pet"][];
              "application/json": external["https://raw.githubusercontent.com/drwpow/openapi-typescript/main/tests/v3/specs/petstore.yaml"]["components"]["schemas"]["Pet"][];
            };
          };
          /** Invalid status value */
          400: unknown;
        };
      };
      /** Muliple tags can be provided with comma separated strings. Use         tag1, tag2, tag3 for testing. */
      findPetsByTags: {
        parameters: {
          query: {
            /** Tags to filter by */
            tags: string[];
          };
        };
        responses: {
          /** successful operation */
          200: {
            content: {
              "application/xml": external["https://raw.githubusercontent.com/drwpow/openapi-typescript/main/tests/v3/specs/petstore.yaml"]["components"]["schemas"]["Pet"][];
              "application/json": external["https://raw.githubusercontent.com/drwpow/openapi-typescript/main/tests/v3/specs/petstore.yaml"]["components"]["schemas"]["Pet"][];
            };
          };
          /** Invalid tag value */
          400: unknown;
        };
      };
      /** Returns a single pet */
      getPetById: {
        parameters: {
          path: {
            /** ID of pet to return */
            petId: number;
          };
        };
        responses: {
          /** successful operation */
          200: {
            content: {
              "application/xml": external["https://raw.githubusercontent.com/drwpow/openapi-typescript/main/tests/v3/specs/petstore.yaml"]["components"]["schemas"]["Pet"];
              "application/json": external["https://raw.githubusercontent.com/drwpow/openapi-typescript/main/tests/v3/specs/petstore.yaml"]["components"]["schemas"]["Pet"];
            };
          };
          /** Invalid ID supplied */
          400: unknown;
          /** Pet not found */
          404: unknown;
        };
      };
      updatePetWithForm: {
        parameters: {
          path: {
            /** ID of pet that needs to be updated */
            petId: number;
          };
        };
        responses: {
          /** Invalid input */
          405: unknown;
        };
        requestBody: {
          content: {
            "application/x-www-form-urlencoded": {
              /** Updated name of the pet */
              name?: string;
              /** Updated status of the pet */
              status?: string;
            };
          };
        };
      };
      deletePet: {
        parameters: {
          header: {
            api_key?: string;
          };
          path: {
            /** Pet id to delete */
            petId: number;
          };
        };
        responses: {
          /** Invalid ID supplied */
          400: unknown;
          /** Pet not found */
          404: unknown;
        };
      };
      uploadFile: {
        parameters: {
          path: {
            /** ID of pet to update */
            petId: number;
          };
        };
        responses: {
          /** successful operation */
          200: {
            content: {
              "application/json": external["https://raw.githubusercontent.com/drwpow/openapi-typescript/main/tests/v3/specs/petstore.yaml"]["components"]["schemas"]["ApiResponse"];
            };
          };
        };
        requestBody: {
          content: {
            "multipart/form-data": {
              /** Additional data to pass to server */
              additionalMetadata?: string;
              /** file to upload */
              file?: string;
            };
          };
        };
      };
      /** Returns a map of status codes to quantities */
      getInventory: {
        responses: {
          /** successful operation */
          200: {
            content: {
              "application/json": { [key: string]: number };
            };
          };
        };
      };
      placeOrder: {
        responses: {
          /** successful operation */
          200: {
            content: {
              "application/xml": external["https://raw.githubusercontent.com/drwpow/openapi-typescript/main/tests/v3/specs/petstore.yaml"]["components"]["schemas"]["Order"];
              "application/json": external["https://raw.githubusercontent.com/drwpow/openapi-typescript/main/tests/v3/specs/petstore.yaml"]["components"]["schemas"]["Order"];
            };
          };
          /** Invalid Order */
          400: unknown;
        };
        /** order placed for purchasing the pet */
        requestBody: {
          content: {
            "*/*": external["https://raw.githubusercontent.com/drwpow/openapi-typescript/main/tests/v3/specs/petstore.yaml"]["components"]["schemas"]["Order"];
          };
        };
      };
      /** For valid response try integer IDs with value >= 1 and <= 10.         Other values will generated exceptions */
      getOrderById: {
        parameters: {
          path: {
            /** ID of pet that needs to be fetched */
            orderId: number;
          };
        };
        responses: {
          /** successful operation */
          200: {
            content: {
              "application/xml": external["https://raw.githubusercontent.com/drwpow/openapi-typescript/main/tests/v3/specs/petstore.yaml"]["components"]["schemas"]["Order"];
              "application/json": external["https://raw.githubusercontent.com/drwpow/openapi-typescript/main/tests/v3/specs/petstore.yaml"]["components"]["schemas"]["Order"];
            };
          };
          /** Invalid ID supplied */
          400: unknown;
          /** Order not found */
          404: unknown;
        };
      };
      /** For valid response try integer IDs with positive integer value.         Negative or non-integer values will generate API errors */
      deleteOrder: {
        parameters: {
          path: {
            /** ID of the order that needs to be deleted */
            orderId: number;
          };
        };
        responses: {
          /** Invalid ID supplied */
          400: unknown;
          /** Order not found */
          404: unknown;
        };
      };
      /** This can only be done by the logged in user. */
      createUser: {
        responses: {
          /** successful operation */
          default: unknown;
        };
        /** Created user object */
        requestBody: {
          content: {
            "*/*": external["https://raw.githubusercontent.com/drwpow/openapi-typescript/main/tests/v3/specs/petstore.yaml"]["components"]["schemas"]["User"];
          };
        };
      };
      createUsersWithArrayInput: {
        responses: {
          /** successful operation */
          default: unknown;
        };
        /** List of user object */
        requestBody: {
          content: {
            "*/*": external["https://raw.githubusercontent.com/drwpow/openapi-typescript/main/tests/v3/specs/petstore.yaml"]["components"]["schemas"]["User"][];
          };
        };
      };
      createUsersWithListInput: {
        responses: {
          /** successful operation */
          default: unknown;
        };
        /** List of user object */
        requestBody: {
          content: {
            "*/*": external["https://raw.githubusercontent.com/drwpow/openapi-typescript/main/tests/v3/specs/petstore.yaml"]["components"]["schemas"]["User"][];
          };
        };
      };
      loginUser: {
        parameters: {
          query: {
            /** The user name for login */
            username: string;
            /** The password for login in clear text */
            password: string;
          };
        };
        responses: {
          /** successful operation */
          200: {
            headers: {
              /** calls per hour allowed by the user */
              "X-Rate-Limit"?: number;
              /** date in UTC when token expires */
              "X-Expires-After"?: string;
            };
            content: {
              "application/xml": string;
              "application/json": string;
            };
          };
          /** Invalid username/password supplied */
          400: unknown;
        };
      };
      logoutUser: {
        responses: {
          /** successful operation */
          default: unknown;
        };
      };
      getUserByName: {
        parameters: {
          path: {
            /** The name that needs to be fetched. Use user1 for testing. */
            username: string;
          };
        };
        responses: {
          /** successful operation */
          200: {
            content: {
              "application/xml": external["https://raw.githubusercontent.com/drwpow/openapi-typescript/main/tests/v3/specs/petstore.yaml"]["components"]["schemas"]["User"];
              "application/json": external["https://raw.githubusercontent.com/drwpow/openapi-typescript/main/tests/v3/specs/petstore.yaml"]["components"]["schemas"]["User"];
            };
          };
          /** Invalid username supplied */
          400: unknown;
          /** User not found */
          404: unknown;
        };
      };
      /** This can only be done by the logged in user. */
      updateUser: {
        parameters: {
          path: {
            /** name that need to be updated */
            username: string;
          };
        };
        responses: {
          /** Invalid user supplied */
          400: unknown;
          /** User not found */
          404: unknown;
        };
        /** Updated user object */
        requestBody: {
          content: {
            "*/*": external["https://raw.githubusercontent.com/drwpow/openapi-typescript/main/tests/v3/specs/petstore.yaml"]["components"]["schemas"]["User"];
          };
        };
      };
      /** This can only be done by the logged in user. */
      deleteUser: {
        parameters: {
          path: {
            /** The name that needs to be deleted */
            username: string;
          };
        };
        responses: {
          /** Invalid username supplied */
          400: unknown;
          /** User not found */
          404: unknown;
        };
      };
    };
  };
  "subschema/remote1.yml": {
    paths: {};
    components: {
      schemas: {
        /** this is a duplicate of spec.yml#components/schemas/Remote1 */
        Remote1: string;
        Remote2: external["subschema/remote2.yml"]["components"]["schemas"]["Remote2"];
        Circular: components["schemas"]["Circular"];
      };
    };
    operations: {};
  };
  "subschema/remote2.yml": {
    paths: {};
    components: {
      schemas: {
        Remote2: string;
      };
    };
    operations: {};
  };
}
`);
  });
});
