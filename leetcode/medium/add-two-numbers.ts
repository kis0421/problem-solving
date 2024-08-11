/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    const total = new ListNode(0, null);
    let cursor = total;
    let roundNumber = 0;
    let [currentL1, currentL2] = [l1, l2];

    while (currentL1 || currentL2) {
        const sum = (currentL1?.val || 0) + (currentL2?.val || 0) + roundNumber;
        if (sum >= 10) {
            roundNumber = 1;
            cursor.val = sum - 10;
        } else {
            roundNumber = 0;
            cursor.val = sum;
        }
        [currentL1, currentL2] = [currentL1?.next || null, currentL2?.next || null];
        if (currentL1 || currentL2) {
            cursor.next = new ListNode(roundNumber, null);
            cursor = cursor.next;
        }
    }

    if (roundNumber) {
        cursor.next = new ListNode(1, null);
    }

    return total;
};