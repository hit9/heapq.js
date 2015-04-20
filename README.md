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

- *heapq.push(heap, item[, cmp])*, push an item into heap. *O(log n)*
- *heapq.pop(heap[, cmp])*, pop the smallest item from heap. *O(log n)*
- *heapq.top(heap)*, get the smallest item. *O(1)*
- *heapq.pushpop(heap[, cmp])*, push an item on the heap and pop out the smallest item,
   this runs more efficiently than `heapq.push()` followed by a separate call to `heapq.pop()`. *O(log n)*
- *heapq.heapify(arr[, cmp])*, transform array `heap` into a heap in-place. *O(nlog n)*

Comparator
----------

Default comparator:

```
function(x, y) {return x < y;}
```

- this results a "top smallest heap".
- this works with items: numbers, strings, or arrays like [non-negative, obj] etc.

Heap Sort
---------

An example of heap sort: *O(nlog n)*:

```js
var heapq = require('heapq');

function heapSort(arr) {
  var heap = [];

  for (var i = 0; i < arr.length; ++i)
    heapq.push(heap, arr[i]);

  var arr_ = [];

  while (heap.length > 0)
    arr_.push(heapq.pop(heap));

  return arr_;
}

heapSort([3, 4, 5, 0, 2, 1]); // [0, 1, 2, 3, 4, 5]
```

License
--------

MIT (c) Chao Wang <hit9@icloud.com>
