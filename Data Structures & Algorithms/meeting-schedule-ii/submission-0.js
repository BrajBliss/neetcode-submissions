class Solution {
    /**
     * @param {Interval[]} intervals
     * @returns {number}
     */
    minMeetingRooms(intervals) {
        if (!intervals || intervals.length === 0) {
            return 0;
        }

        // Step 1: Extract and sort start and end times independently
        const starts = intervals.map((i) => i.start).sort((a, b) => a - b);
        const ends = intervals.map((i) => i.end).sort((a, b) => a - b);

        let rooms = 0;
        let endPtr = 0;

        // Step 2: Iterate through all start times
        for (let startPtr = 0; startPtr < starts.length; startPtr++) {
            // If next meeting starts before the earliest ending meeting
            if (starts[startPtr] < ends[endPtr]) {
                rooms++; // Conflict! Allocate a new room
            } else {
                endPtr++; // Reuse room (earliest meeting finished)
            }
        }

        return rooms;
    }
}
