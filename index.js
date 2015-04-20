'use strict';

exports.push = function(heap, item) {
  heap.push(item);
  siftdown(heap, 0, heap.length - 1);
};

exports.pop = function(heap) {
  if (heap.length > 0) {
    var last = heap.pop();

    if (heap.length > 0) {
      var head = heap[0];
      heap[0] = last;
      siftup(heap, 0);
      return head;
    } else {
      return last;
    }
  }
};

exports.top = function(heap) {
  if (heap.length !== 0)
    return heap[0];
};

exports.pushpop = function(heap, item) {
  if (heap.length > 0 && cmplt(heap[0], item)) {
    var temp = heap[0];
    heap[0] = item;
    item = temp;
    siftup(heap, 0);
  }
  return item;
};

exports.heapify = function(heap) {
  for (var idx = Math.floor(heap.length / 2) - 1;
       idx >= 0; --idx)
    siftup(heap, idx);
};

function cmplt(x, y) {
  return x < y;
}

function siftdown(heap, startIdx, idx) {
  var item = heap[idx];

  while (idx > startIdx) {
    var parentIdx = (idx - 1) >> 1;
    var parentItem = heap[parentIdx];
    if (cmplt(item, parentItem)) {
      heap[idx] = parentItem;
      idx = parentIdx;
      continue;
    }
    break;
  }

  heap[idx] = item;
}

function siftup(heap, idx) {
  var endIdx = heap.length;
  var startIdx = idx;
  var item = heap[idx];

  var childIdx = idx * 2 + 1;

  while (childIdx < endIdx) {
    var rightIdx = childIdx + 1;

    if (rightIdx < endIdx && (!cmplt(
      heap[childIdx], heap[rightIdx]))) {
      childIdx = rightIdx;
    }
    heap[idx] = heap[childIdx];
    idx = childIdx;
    childIdx =  idx * 2 + 1;
  }

  heap[idx] = item;
  siftdown(heap, startIdx, idx);
}
