var heapq = require('./index');

var heap = [];

heapq.push(heap, [1, 'a']);
heapq.push(heap, [3, 'b']);
heapq.push(heap, [2, 'c']);

heapq.top(heap);  // [1, 'a']

heapq.pop(heap);  // [1, 'a']
heapq.pop(heap);  // [2, 'c']
heapq.pop(heap);  // [3, 'b']
