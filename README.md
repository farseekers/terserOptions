1. `npm install`
2. Terser works by itself - `node index.js`
3. vite does not - `./node_modules/.bin/vite build`
gives
```
vite v5.2.12 building for production...
✓ 1 modules transformed.
x Build failed in 24ms
error during build:
Cannot set property code of  which has only a getter
    at logPluginError (file:///reproduction/node_modules/rollup/dist/es/shared/parseAst.js:894:16)
    at file:///reproduction/node_modules/rollup/dist/es/shared/node-entry.js:19800:26
    at process.processTicksAndRejections (node:internal/process/task_queues:95:5)
    at async transformChunk (file:///reproduction/node_modules/rollup/dist/es/shared/node-entry.js:17934:16)
    at async file:///reproduction/node_modules/rollup/dist/es/shared/node-entry.js:18008:17
    at async Promise.all (index 0)
    at async transformChunksAndGenerateContentHashes (file:///reproduction/node_modules/rollup/dist/es/shared/node-entry.js:18003:5)
    at async renderChunks (file:///reproduction/node_modules/rollup/dist/es/shared/node-entry.js:17912:137)
    at async Bundle.generate (file:///reproduction/node_modules/rollup/dist/es/shared/node-entry.js:18145:13)
    at async file:///reproduction/node_modules/rollup/dist/es/shared/node-entry.js:20692:27
```