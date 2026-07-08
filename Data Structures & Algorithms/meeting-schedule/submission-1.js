/**
 * Definition of Interval:
 * class Interval {
 *   constructor(start, end) {
 *     this.start = start;
 *     this.end = end;
 *   }
 * }
 */

class Solution {
    /**
     * @param {Interval[]} intervals
     * @returns {boolean}
     */
    canAttendMeetings(intervals) {
        intervals = intervals.sort((a, b) => a.start - b.start);
        let prevEnd = 0;
        for (let interval of intervals) {
            console.log("prevEnd", prevEnd);
            console.log("e", JSON.stringify(interval));
            if (interval.start < prevEnd) return false;
            prevEnd = interval.end;
        };
        return true;
    }
}
