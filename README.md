# Node.js vs Bun

Comparison of server side rendering React.

```sh
# run Node.js app by
npx ts-node index.node.tsx

# run Bun app by
bun run index.bun.tsx
```

## Details

Both apps is HTTP servers that renders react tree and respond html page:

- `Node.js` app based on express.
- `Bun` app base on `Bun.serve`.

Each server has next routes:

- `/` - uses `renderToString`
- `/string` - uses `renderToString`
- `/stream` - uses `renderToPipeableStream` in Node.js and `renderToReadableStream` in Bun

## Results

Used command:

```sh
# for Node.js
ab -n 500 -c 100 http://127.0.0.1:8090/

# for Bun
ab -n 500 -c 100 http://127.0.0.1:8090/
```

In macos via builtin `ab` program there is approximately the same number of receipts per second and response speed.
