'use strict';
describe('controller specs', function () {
    beforeEach(module('myApp.filters'));

    var tomorrowAtNine = moment().add('days', 1).hours(21).minutes(0).format();
    var event1 = { start: moment().add('days', 1) };
    var event2 = { start: moment().add('days', 1),
        end: moment().add('days', 1).add('hours', 2) };

    it("should return 'Tomorrow at 9:00 PM' for the appropriate time",
        inject(function (momentFilter) {
            expect(momentFilter(tomorrowAtNine)).toBe("Tomorrow at 9:00 PM");
        }));

    it("should return 'All Day' when event has no specified end date",
        inject(function (durationFilter) {
            expect(durationFilter(event1)).toBe("All Day");
        }));

    it("should return '120 min' for the modified event",
        inject(function (durationFilter) {
            expect(durationFilter(event2)).toBe("120 min");
        }));
});
