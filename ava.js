import * as t from "https://deno.land/std/testing/asserts.ts";

export const test = (title, func) => {
  Deno.test(title, () => {
    const tt = {
      is: (a, b) => t.assertEquals(a, b),
      true: (a) => t.assert(a),
    };
    func(tt);
  });
};
