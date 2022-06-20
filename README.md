# AngularJS


**Section 5 :**  *DigestCycle*


- **Digest Cycle :** running digest loops until all watchers report that nothing has changed .

    > Dirty checking

- ### Several ways to set up watchers :

    > `$scope.$watch` -- don't do this in a controller
    > `{{ someProp }}`
    > `<input ... ng-model="someProp"`

- Only applies to things done inside of the Angular context .