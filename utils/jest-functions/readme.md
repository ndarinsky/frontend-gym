# Write Jest-like framework in 15 minutes (Frontend Gym)
You want this to work:

```js
expect(add(1, 2)).toBe(greaterThen(1));
```
You probably use jest to run tests each day, but have you ever checked how it was written?

This kata looks easy if you know the trick, which often used in old jquery times,
but if it is your first time writing something like this it will be way harder.

If you can explain and implement this cleanly, you’re demonstrating a very “senior frontend” skill: building a tiny, composable API that reads well.

# What interviewers are actually testing
1) High order functions and functions as values
Can you treat a function as data: create it, return it, pass it around, then call it later?

2) Closures
greaterThen(n) must capture n and remember it when checking a value.

3) API thinking
Can you build something that reads nicely (expect(x).toBe(...)) instead of dumping logic into one function?

# Possible followups
1) Implement not
```js
expect(add(1, 2)).not.toBe(greaterThen(1));
```
2) make deepEqual which will compare objects

# Project files
1) Read task.md
2) If you can't solve it check hints.md
3) or jump right to the solution.js for solution + tests

# how to run
Open terminal in file with solution.js
run in the terminal: node solution.js