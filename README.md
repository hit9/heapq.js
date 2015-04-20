heapq.js
========

Heap queue implementation for nodejs/iojs.

```
var heapq = require('heapq');

var heap = [];

heapq.push(heap, [3, 'a']);
heapq.push(heap, [4, 'b']);
heapq.push(heap, [2, 'c']);
heapq.push(heap, [1, 'd']);

heapq.pop(heap);  // [1, 'd']
heapq.pop(heap);  // [2, 'c']
```

License
--------

MIT (c) Chao Wang <hit9@icloud.com>
