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

API Refs
--------

- *heapq.push(heap, item)*, push an item into heap. (O(logn))
- *heapq.pop(heap)*, pop the smallest item from heap. (O(logn))
- *heapq.top(heap)*, get the smallest item. (O(1))
- *heapq.pushpop(heap)*, push an item on the heap and pop out the smallest item,
   this runs more efficiently than `heapq.push()` followed by a separate call to `heapq.pop()`. O(logn)
- *heapq.heapify(arr)*, transform array `heap` into a heap in-place. O(n)

License
--------

MIT (c) Chao Wang <hit9@icloud.com>
