# Task (15-20min)
I had 2 more tasks beside this task for 45min interview in netflix round1

Write jest functions to make expression like

expect(add(1,2)).toBe(greaterThen(1)) work

task implement: expect, toBe, greaterThen, add

# Tests: 
expect(add(1,2)).toBe(greaterThen(1)) - 3 > 1       ✓ PASS
expect(add(5,10)).toBe(greaterThen(10)) - 15 > 10   ✓ PASS
expect(add(2,2)).toBe(greaterThen(5)) - 4 > 5       ✗ FAIL (intentional)