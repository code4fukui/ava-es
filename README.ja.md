# ava-es

ava-esはDeno用のテストランナーです。

## 使い方

```js
import { test } from "https://code4fukui.github.io/ava-es/ava.js";

test("plus", t => {
  t.is(1 + 1, 2);
})
```

```bash
deno test
```

## 対応関数

- `is`
- `true`

## オリジナル

- [ava](https://github.com/avajs/ava)

## ライセンス

MIT License — 詳細は [LICENSE](LICENSE) を参照してください。
