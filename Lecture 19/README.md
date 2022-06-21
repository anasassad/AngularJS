#Angular JS

**Section 5** - __Lecture 18__
## Filter

>Summary

- Array has a special function called filter
  - Create new array where each item satisfies some condition of the comparison function     passed into the filter function
- Angular has a special filter called `filter`
  - Provided s string as 1st argument , it will filter array it's applied tom matching all string items against the provided one
- `ng-repeat="item in collection | filter : searchString"`