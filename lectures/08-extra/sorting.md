# Sorting Algorithms

## Bubble Sort

Bubble Sort is a simple comparison-based sorting algorithm. It works by repeatedly stepping through the list to be sorted, comparing adjacent items and swapping them if they are in the wrong order. The pass through the list is repeated until the list is sorted. The algorithm gets its name because smaller elements "bubble" to the top of the list, while larger elements sink to the bottom.

Here is a step-by-step explanation and implementation of Bubble Sort in JavaScript:

**How Bubble Sort Works**

1. **Compare Adjacent Elements**: Start with the first two elements of the list and compare them.
2. **Swap if Necessary**: If the first element is greater than the second element, swap them.
3. **Move to the Next Pair**: Move to the next pair of elements and repeat the process.
4. **Repeat for Entire List**: Continue this process for each pair of adjacent elements from the beginning to the end of the list. At the end of the first pass, the largest element will have moved to the last position.
5. **Repeat Passes**: Repeat the entire process for the remaining elements (excluding the last sorted elements). Each pass moves the next largest element to its correct position.
6. **Stop When Sorted**: The algorithm stops when no more swaps are needed, which means the list is sorted.

**Bubble Sort Implementation in JavaScript**

```jsx
javascriptCopy code
function bubbleSort(arr) {
    let n = arr.length;
    let swapped;
    do {
        swapped = false;
        for (let i = 0; i < n - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                // Swap the elements
                [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
                swapped = true;
            }
        }
        // Each pass places the largest element in its correct position, so reduce n
        n--;
    } while (swapped);
    return arr;
}

// Example usage:
let unsortedNumbers = [64, 34, 25, 12, 22, 11, 90];
let sortedNumbers = bubbleSort(unsortedNumbers);
console.log(sortedNumbers);

```

**Explanation of the Code**

1. **Initialize Variables**: `n` is the length of the array. `swapped` is a flag to track whether any elements were swapped during the pass.
2. **Outer Loop (do-while)**: This loop continues to execute as long as `swapped` is true, meaning that at least one swap occurred in the previous pass.
3. **Inner Loop (for)**: This loop iterates through the array, comparing each pair of adjacent elements.
4. **Compare and Swap**: If the current element is greater than the next element, they are swapped, and `swapped` is set to true.
5. **Reduce n**: After each pass, reduce the length of the array to be sorted by one because the last element is already in its correct position.
6. **Return Sorted Array**: Once no swaps are needed, the array is sorted, and the function returns the sorted array.

**Time Complexity**

- **Worst and Average Case**: O(n^2) - This occurs when the array is in reverse order or in random order.
- **Best Case**: O(n) - This occurs when the array is already sorted. In this case, only one pass through the array is needed to confirm that it is sorted (with the help of the `swapped` flag).

Bubble Sort is simple to implement and understand but is inefficient for large datasets due to its quadratic time complexity. It is mainly used for educational purposes and for small or nearly sorted arrays where its simplicity can be an advantage.

## Selection Sort

Sure, let's use the **Selection Sort** algorithm instead. This algorithm divides the input list into two parts: the sublist of items already sorted, which is built up from left to right, and the sublist of items remaining to be sorted that occupy the rest of the list. Initially, the sorted sublist is empty and the unsorted sublist is the entire input list. The algorithm proceeds by finding the smallest (or largest, depending on the sorting order) element in the unsorted sublist, exchanging it with the leftmost unsorted element, and moving the sublist boundaries one element to the right.

Here's how you can implement Selection Sort in JavaScript:

```jsx
javascriptCopy code
function selectionSort(arr) {
    let n = arr.length;

    for (let i = 0; i < n - 1; i++) {
        // Find the minimum element in the unsorted portion of the array
        let minIndex = i;
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }

        // Swap the found minimum element with the first element of the unsorted portion
        if (minIndex !== i) {
            let temp = arr[i];
            arr[i] = arr[minIndex];
            arr[minIndex] = temp;
        }
    }

    return arr;
}

// Example usage:
let unsortedNumbers = [64, 34, 25, 12, 22, 11, 90];
let sortedNumbers = selectionSort(unsortedNumbers);
console.log(sortedNumbers);

```

This `selectionSort` function works as follows:

1. Iterate through the array, maintaining a boundary between the sorted and unsorted sublists.
2. For each position in the array, find the minimum element in the unsorted sublist.
3. Swap the minimum element found with the first element of the unsorted sublist.
4. Continue the process until the entire array is sorted.

## Insertion Sort

Another way to sort a list of numbers without using built-in methods is to implement the **Insertion Sort** algorithm. Insertion Sort builds the final sorted array one item at a time. It is much less efficient on large lists than more advanced algorithms such as quicksort, heapsort, or merge sort.

Here is how you can implement Insertion Sort in JavaScript:

```jsx
javascriptCopy code
function insertionSort(arr) {
    let n = arr.length;
    for (let i = 1; i < n; i++) {
        let key = arr[i];
        let j = i - 1;

        // Move elements of arr[0..i-1] that are greater than key,
        // to one position ahead of their current position
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j = j - 1;
        }
        arr[j + 1] = key;
    }
    return arr;
}

// Example usage:
let unsortedNumbers = [64, 34, 25, 12, 22, 11, 90];
let sortedNumbers = insertionSort(unsortedNumbers);
console.log(sortedNumbers);

```

This `insertionSort` function works as follows:

1. Iterate from the second element to the end of the array.
2. For each element, compare it with the elements in the sorted part of the array (to its left).
3. Move all elements that are greater than the current element to one position ahead.
4. Place the current element in its correct position.
5. Repeat the process until the entire array is sorted.

Insertion Sort is particularly useful for small or nearly sorted arrays, but it is not efficient for large unsorted arrays.

## Merge Sort

Another way to sort a list of numbers without using built-in methods is to implement the **Merge Sort** algorithm. Merge Sort is a divide-and-conquer algorithm that divides the list into smaller sublists, sorts those sublists, and then merges them back together into a sorted list.

Here is how you can implement Merge Sort in JavaScript:

```jsx
javascriptCopy code
function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }

    // Divide the array into two halves
    const mid = Math.floor(arr.length / 2);
    const left = arr.slice(0, mid);
    const right = arr.slice(mid);

    // Recursively sort each half
    return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
    let result = [];
    let leftIndex = 0;
    let rightIndex = 0;

    // Merge the two sorted arrays
    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            result.push(left[leftIndex]);
            leftIndex++;
        } else {
            result.push(right[rightIndex]);
            rightIndex++;
        }
    }

    // Concatenate the remaining elements
    return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

// Example usage:
let unsortedNumbers = [64, 34, 25, 12, 22, 11, 90];
let sortedNumbers = mergeSort(unsortedNumbers);
console.log(sortedNumbers);

```

This `mergeSort` function works as follows:

1. If the array has one or zero elements, it is already sorted, so return it.
2. Divide the array into two halves.
3. Recursively sort each half using `mergeSort`.
4. Merge the two sorted halves using the `merge` function.

The `merge` function combines two sorted arrays into a single sorted array by repeatedly taking the smallest remaining element from each of the input arrays.

Merge Sort has a time complexity of O(n log n), making it more efficient for larger lists compared to simpler algorithms like Bubble Sort, Selection Sort, or Insertion Sort.

## Quick Sort

Another way to sort a list of numbers without using built-in methods is to implement the **Quick Sort** algorithm. Quick Sort is also a divide-and-conquer algorithm that works by selecting a 'pivot' element from the array and partitioning the other elements into two sub-arrays according to whether they are less than or greater than the pivot. The sub-arrays are then sorted recursively.

Here is how you can implement Quick Sort in JavaScript:

```jsx
javascriptCopy code
function quickSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }

    // Choose a pivot element
    const pivot = arr[Math.floor(arr.length / 2)];
    const left = [];
    const right = [];

    // Partition the array into two halves
    for (let i = 0; i < arr.length; i++) {
        if (i === Math.floor(arr.length / 2)) continue;
        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }

    // Recursively sort the left and right halves, and concatenate the results
    return quickSort(left).concat(pivot, quickSort(right));
}

// Example usage:
let unsortedNumbers = [64, 34, 25, 12, 22, 11, 90];
let sortedNumbers = quickSort(unsortedNumbers);
console.log(sortedNumbers);

```

This `quickSort` function works as follows:

1. If the array has one or zero elements, it is already sorted, so return it.
2. Choose a pivot element from the array. In this implementation, we choose the middle element.
3. Partition the array into two sub-arrays: one containing elements less than the pivot and the other containing elements greater than the pivot.
4. Recursively sort the left and right sub-arrays using `quickSort`.
5. Concatenate the sorted left sub-array, the pivot, and the sorted right sub-array.

Quick Sort has an average time complexity of O(n log n), making it efficient for large datasets. However, its worst-case time complexity is O(n²), which can occur if the pivot selection is poor (e.g., if the array is already sorted). To mitigate this, more sophisticated pivot selection strategies can be used, such as choosing a random element as the pivot.

## Heap Sort

Another way to sort a list of numbers without using built-in methods is to implement the **Heap Sort** algorithm. Heap Sort involves building a heap from the input data and then repeatedly extracting the maximum element from the heap and rebuilding the heap until all elements have been extracted.

Here is how you can implement Heap Sort in JavaScript:

```jsx
javascriptCopy code
function heapSort(arr) {
    let n = arr.length;

    // Build a max heap
    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
        heapify(arr, n, i);
    }

    // One by one extract elements from heap
    for (let i = n - 1; i >= 0; i--) {
        // Move current root to end
        [arr[0], arr[i]] = [arr[i], arr[0]];

        // Call max heapify on the reduced heap
        heapify(arr, i, 0);
    }

    return arr;
}

function heapify(arr, n, i) {
    let largest = i; // Initialize largest as root
    let left = 2 * i + 1; // left = 2*i + 1
    let right = 2 * i + 2; // right = 2*i + 2

    // If left child is larger than root
    if (left < n && arr[left] > arr[largest]) {
        largest = left;
    }

    // If right child is larger than largest so far
    if (right < n && arr[right] > arr[largest]) {
        largest = right;
    }

    // If largest is not root
    if (largest != i) {
        [arr[i], arr[largest]] = [arr[largest], arr[i]];

        // Recursively heapify the affected sub-tree
        heapify(arr, n, largest);
    }
}

// Example usage:
let unsortedNumbers = [64, 34, 25, 12, 22, 11, 90];
let sortedNumbers = heapSort(unsortedNumbers);
console.log(sortedNumbers);

```

This `heapSort` function works as follows:

1. **Build a max heap** from the input data. The array can be seen as a nearly complete binary tree.
2. **Extract the elements** from the heap one by one. Swap the current root (the maximum value) with the last item of the heap, reduce the heap size by one, and heapify the root.
3. The `heapify` function ensures that the subtree rooted at the given index follows the max-heap property.

Heap Sort has a time complexity of O(n log n) for all cases, making it a reliable and efficient sorting algorithm for large datasets.

## Shell Sort

Another way to sort a list of numbers without using built-in methods is to implement the **Shell Sort** algorithm. Shell Sort is an optimization over Insertion Sort, where elements are moved by multiple positions instead of just one. The idea is to arrange the list of elements so that, starting anywhere, taking every hhh-th element produces a sorted list. Such an arrangement is said to be hhh-sorted.

Here is how you can implement Shell Sort in JavaScript:

```jsx
javascriptCopy code
function shellSort(arr) {
    let n = arr.length;

    // Start with a big gap, then reduce the gap
    for (let gap = Math.floor(n / 2); gap > 0; gap = Math.floor(gap / 2)) {
        // Do a gapped insertion sort for this gap size.
        for (let i = gap; i < n; i++) {
            // Save arr[i] in temp and make a hole at position i
            let temp = arr[i];
            let j;

            // Shift earlier gap-sorted elements up until the correct location for arr[i] is found
            for (j = i; j >= gap && arr[j - gap] > temp; j -= gap) {
                arr[j] = arr[j - gap];
            }

            // Put temp (the original arr[i]) in its correct location
            arr[j] = temp;
        }
    }

    return arr;
}

// Example usage:
let unsortedNumbers = [64, 34, 25, 12, 22, 11, 90];
let sortedNumbers = shellSort(unsortedNumbers);
console.log(sortedNumbers);

```

This `shellSort` function works as follows:

1. Start with a large gap and reduce the gap in each iteration. The gap is usually initialized to half the size of the array and halved in each iteration until it reaches 1.
2. For each gap size, perform a gapped insertion sort. This means that elements at a distance of the gap are compared and swapped if they are out of order.
3. Repeat the process until the gap size is 1, which means the array is fully sorted.

Shell Sort's time complexity can vary depending on the gap sequence used, but it generally falls between O(n) and O(n^2). It's more efficient than simple quadratic algorithms like Bubble Sort, Selection Sort, and Insertion Sort, especially for medium-sized arrays.

## Counting Sort

Another way to sort a list of numbers without using built-in methods is to implement the **Counting Sort** algorithm. Counting Sort is an integer sorting algorithm that operates by counting the number of occurrences of each unique value in the input array. It is particularly useful for sorting integers when the range of possible values is not significantly larger than the number of items.

Here is how you can implement Counting Sort in JavaScript:

```jsx
javascriptCopy code
function countingSort(arr) {
    if (arr.length === 0) {
        return arr;
    }

    // Find the maximum and minimum values in the array
    let min = arr[0];
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        } else if (arr[i] > max) {
            max = arr[i];
        }
    }

    // Create a count array and initialize all values to 0
    let count = new Array(max - min + 1).fill(0);

    // Count the number of occurrences of each value in the input array
    for (let i = 0; i < arr.length; i++) {
        count[arr[i] - min]++;
    }

    // Modify the input array based on the count array
    let sortedIndex = 0;
    for (let i = 0; i < count.length; i++) {
        while (count[i] > 0) {
            arr[sortedIndex] = i + min;
            sortedIndex++;
            count[i]--;
        }
    }

    return arr;
}

// Example usage:
let unsortedNumbers = [64, 34, 25, 12, 22, 11, 90];
let sortedNumbers = countingSort(unsortedNumbers);
console.log(sortedNumbers);

```

This `countingSort` function works as follows:

1. **Find the minimum and maximum values** in the array to determine the range of the input data.
2. **Create a count array** with a size equal to the range of input values and initialize all elements to 0.
3. **Count the occurrences** of each value in the input array and store the counts in the count array.
4. **Modify the input array** based on the counts. Iterate through the count array, and for each non-zero count, fill in the input array with the corresponding value the number of times it appears.

Counting Sort has a time complexity of O(n + k), where n is the number of elements in the input array and k is the range of the input values. This makes it very efficient for sorting integers when the range is not significantly larger than the number of items. However, it is not suitable for sorting arbitrary data types or large ranges of values due to its space complexity.

## Radix Sort

Another way to sort a list of numbers without using built-in methods is to implement the **Radix Sort** algorithm. Radix Sort processes the numbers digit by digit, starting from the least significant digit to the most significant digit, using a stable sorting algorithm (such as Counting Sort) as a subroutine to sort the digits.

Here is how you can implement Radix Sort in JavaScript:

```jsx
javascriptCopy code
function countingSortForRadix(arr, exp) {
    let n = arr.length;
    let output = new Array(n).fill(0);
    let count = new Array(10).fill(0);

    // Store count of occurrences in count[]
    for (let i = 0; i < n; i++) {
        let index = Math.floor(arr[i] / exp) % 10;
        count[index]++;
    }

    // Change count[i] so that count[i] contains actual position of this digit in output[]
    for (let i = 1; i < 10; i++) {
        count[i] += count[i - 1];
    }

    // Build the output array
    for (let i = n - 1; i >= 0; i--) {
        let index = Math.floor(arr[i] / exp) % 10;
        output[count[index] - 1] = arr[i];
        count[index]--;
    }

    // Copy the output array to arr[], so that arr[] now contains sorted numbers according to current digit
    for (let i = 0; i < n; i++) {
        arr[i] = output[i];
    }
}

function radixSort(arr) {
    // Find the maximum number to know the number of digits
    let max = Math.max(...arr);

    // Do counting sort for every digit. Note that instead of passing digit number, exp is passed.
    // exp is 10^i where i is the current digit number
    for (let exp = 1; Math.floor(max / exp) > 0; exp *= 10) {
        countingSortForRadix(arr, exp);
    }

    return arr;
}

// Example usage:
let unsortedNumbers = [170, 45, 75, 90, 802, 24, 2, 66];
let sortedNumbers = radixSort(unsortedNumbers);
console.log(sortedNumbers);

```

This `radixSort` function works as follows:

1. **Find the maximum number** in the array to determine the number of digits in the largest number.
2. **Sort the array** digit by digit using a stable sorting algorithm (Counting Sort) for each digit position. Start from the least significant digit (units place) and move to the most significant digit.
3. **Use Counting Sort** as a subroutine to sort the numbers based on each digit.

Radix Sort has a time complexity of O(d*(n + k)), where d is the number of digits in the largest number, n is the number of elements in the input array, and k is the range of the digits (which is 10 for decimal numbers). Radix Sort is efficient for sorting numbers with a fixed number of digits but requires additional space for the output and count arrays.

## Bucket Sort

Another way to sort a list of numbers without using built-in methods is to implement the **Bucket Sort** algorithm. Bucket Sort works by distributing the elements of an array into a number of buckets. Each bucket is then sorted individually, either using a different sorting algorithm or by recursively applying the bucket sort.

Here is how you can implement Bucket Sort in JavaScript:

```jsx
javascriptCopy code
function bucketSort(arr, bucketSize = 5) {
    if (arr.length === 0) {
        return arr;
    }

    // Determine minimum and maximum values
    let minValue = arr[0];
    let maxValue = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < minValue) {
            minValue = arr[i];
        } else if (arr[i] > maxValue) {
            maxValue = arr[i];
        }
    }

    // Initialize buckets
    let bucketCount = Math.floor((maxValue - minValue) / bucketSize) + 1;
    let buckets = new Array(bucketCount);
    for (let i = 0; i < buckets.length; i++) {
        buckets[i] = [];
    }

    // Distribute input array values into buckets
    for (let i = 0; i < arr.length; i++) {
        buckets[Math.floor((arr[i] - minValue) / bucketSize)].push(arr[i]);
    }

    // Sort buckets and concatenate
    let sortedArray = [];
    for (let i = 0; i < buckets.length; i++) {
        insertionSort(buckets[i]); // You can use any sorting algorithm here
        sortedArray = sortedArray.concat(buckets[i]);
    }

    return sortedArray;
}

function insertionSort(arr) {
    let n = arr.length;
    for (let i = 1; i < n; i++) {
        let key = arr[i];
        let j = i - 1;

        // Move elements of arr[0..i-1] that are greater than key,
        // to one position ahead of their current position
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j = j - 1;
        }
        arr[j + 1] = key;
    }
    return arr;
}

// Example usage:
let unsortedNumbers = [29, 25, 3, 49, 9, 37, 21, 43];
let sortedNumbers = bucketSort(unsortedNumbers);
console.log(sortedNumbers);

```

This `bucketSort` function works as follows:

1. **Determine the minimum and maximum values** in the array to calculate the range of values.
2. **Initialize buckets** based on the range of values and the specified bucket size.
3. **Distribute the elements** of the array into their respective buckets.
4. **Sort each bucket** individually using a sorting algorithm (in this case, Insertion Sort).
5. **Concatenate the sorted buckets** to form the final sorted array.

Bucket Sort can be very efficient if the input data is uniformly distributed across the range, with a time complexity of O(n + k), where n is the number of elements in the array and k is the number of buckets. However, its performance can degrade if the data is not uniformly distributed.

## Gnome Sort

Another way to sort a list of numbers without using built-in methods is to implement the **Gnome Sort** algorithm. Gnome Sort is a simple sorting algorithm similar to insertion sort. It iterates through the array and swaps elements that are out of order, then steps back to check previous elements again.

Here is how you can implement Gnome Sort in JavaScript:

```jsx
javascriptCopy code
function gnomeSort(arr) {
    let index = 0;
    while (index < arr.length) {
        if (index == 0 || arr[index] >= arr[index - 1]) {
            index++;
        } else {
            [arr[index], arr[index - 1]] = [arr[index - 1], arr[index]];
            index--;
        }
    }
    return arr;
}

// Example usage:
let unsortedNumbers = [34, 2, 78, 12, 45, 32, 8, 66];
let sortedNumbers = gnomeSort(unsortedNumbers);
console.log(sortedNumbers);

```

This `gnomeSort` function works as follows:

1. Start from the first element of the array.
2. Compare the current element with the previous element.
    - If the current element is greater than or equal to the previous element, move to the next element.
    - If the current element is smaller than the previous element, swap them and move back to the previous element.
3. Repeat the process until you reach the end of the array.

Gnome Sort has an average and worst-case time complexity of O(n^2). It is easy to implement and understand but is less efficient for large datasets compared to more advanced algorithms like Quick Sort or Merge Sort.

## Cocktail Sort

Another way to sort a list of numbers without using built-in methods is to implement the **Cocktail Shaker Sort** algorithm. Cocktail Shaker Sort is a variation of Bubble Sort that sorts in both directions on each pass through the list, which helps to bubble up smaller elements as well as bubble down larger elements.

Here is how you can implement Cocktail Shaker Sort in JavaScript:

```jsx
javascriptCopy code
function cocktailShakerSort(arr) {
    let swapped;
    do {
        swapped = false;
        // Traverse the list from left to right as in bubble sort
        for (let i = 0; i < arr.length - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
                swapped = true;
            }
        }
        // If no elements were swapped, the list is sorted
        if (!swapped) break;

        swapped = false;
        // Traverse the list from right to left
        for (let i = arr.length - 1; i > 0; i--) {
            if (arr[i] < arr[i - 1]) {
                [arr[i], arr[i - 1]] = [arr[i - 1], arr[i]];
                swapped = true;
            }
        }
    } while (swapped);
    return arr;
}

// Example usage:
let unsortedNumbers = [64, 34, 25, 12, 22, 11, 90];
let sortedNumbers = cocktailShakerSort(unsortedNumbers);
console.log(sortedNumbers);

```

This `cocktailShakerSort` function works as follows:

1. Start at the beginning of the array and traverse towards the end, swapping adjacent elements if they are out of order.
2. If at least one swap has occurred, move back from the end of the array towards the beginning, swapping adjacent elements if they are out of order.
3. Repeat the process until a complete pass in both directions is made without any swaps, indicating that the list is sorted.

Cocktail Shaker Sort has an average and worst-case time complexity of O(n^2), similar to Bubble Sort, but it can be more efficient in practice for some datasets because it allows elements to bubble up and down in both directions on each pass through the list.

## Comb Sort

Another way to sort a list of numbers without using built-in methods is to implement the **Comb Sort** algorithm. Comb Sort is an improvement over Bubble Sort and works by eliminating small values near the end of the list, which slow down Bubble Sort. It uses a shrinking gap between compared elements to improve performance.

Here is how you can implement Comb Sort in JavaScript:

```jsx
javascriptCopy code
function combSort(arr) {
    let gap = arr.length;
    const shrink = 1.3;
    let sorted = false;

    while (!sorted) {
        gap = Math.floor(gap / shrink);
        if (gap <= 1) {
            gap = 1;
            sorted = true; // assume the array is sorted
        }

        let i = 0;
        while (i + gap < arr.length) {
            if (arr[i] > arr[i + gap]) {
                [arr[i], arr[i + gap]] = [arr[i + gap], arr[i]];
                sorted = false; // indicate that we had to swap, so array is not sorted
            }
            i++;
        }
    }
    return arr;
}

// Example usage:
let unsortedNumbers = [64, 34, 25, 12, 22, 11, 90];
let sortedNumbers = combSort(unsortedNumbers);
console.log(sortedNumbers);

```

This `combSort` function works as follows:

1. **Initialize the gap** to the length of the array and set the shrink factor to 1.3.
2. **Reduce the gap** by dividing it by the shrink factor in each iteration.
3. **Compare elements** that are a gap distance apart and swap them if they are out of order.
4. **Repeat the process** until the gap is 1 and the array is sorted.

Comb Sort has an average time complexity of O(n log n), making it more efficient than Bubble Sort for large datasets. The key advantage of Comb Sort is that it eliminates turtles (small values near the end of the list) early, which significantly improves the performance compared to Bubble Sort.