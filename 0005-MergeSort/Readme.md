In sorting n objects, merge sort has an average and worst-case performance of O(n log n).

In the worst case, the number of comparisons merge sort makes is equal to or slightly smaller than (n ⌈lg n⌉ - 2⌈lg n⌉ + 1), which is between (n lg n - n + 1) and (n lg n + n + O(lg n)).[4]

In the worst case, merge sort does about 39% fewer comparisons than quicksort does in the average case. In terms of moves, merge sort's worst case complexity is O(n log n)—the same complexity as quicksort's best case, and merge sort's best case takes about half as many iterations as the worst case.[citation needed]

Merge sort is more efficient than quicksort for some types of lists if the data to be sorted can only be efficiently accessed sequentially, and is thus popular in languages such as Lisp, where sequentially accessed data structures are very common. Unlike some (efficient) implementations of quicksort, merge sort is a stable sort.

Merge sort's most common implementation does not sort in place[citation needed]; therefore, the memory size of the input must be allocated for the sorted output to be stored in (see below for versions that need only n/2 extra spaces).

Merge sort also has some demerits. One is its use of 2n locations; the additional n locations are commonly used because merging two sorted sets in place is more complicated and would need more comparisons and move operations. But despite the use of this space the algorithm still does a lot of work: The contents of m are first copied into left and right and later into the list result on each invocation of merge_sort (variable names according to the pseudocode above).
