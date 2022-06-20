# AngularJS


**Section 5** 

## 2 Way binding / 1 Way binding / 1 Time binding

- 2-way binding `(ng-model)` means :

    > Listener for change on input automatically set up by Angular updates prop value on `$scope`
    
    > Direct update to prop vaue is automatically updated in UI
    
- 1-way binding `({{ prop }})` means :

    > Direct update to prop value is automatically updated in UI
    
- 1-time binding `({{ ::prop }})` means :

    >Initialized value of prop is automatically  updated in UI
    
    >Watcher for prop is removed , so UI never again gets updated
