#Angular JS

**Section 5** - __Lecture 17__
## ng repeat

>Summary

- `ng-repeat` is a directive that extends the functionality of HTML elements it's applied to
  - Behaves very similarly to for-each construct
- `ng-repeat="item in collection"`, where item can now be used in interpolation as an item in the collection at particular index of iteration
- `ng-repeat` exposes a special `$index` property to the body of its host tag
  - Holds the numeric index of the current item in the loop
