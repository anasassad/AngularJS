// var parent = {
//     name : 'Parent',
//     obj : {
//         localId : 14
//     },
//     walkingBehavior : function(){
//         console.log("WALKKING EVERY DAY");
//     }
// };

// var child = Object.create(parent);

// console.log("CHILD name",child.name);
// console.log("Parent name",child.name);
// console.log("CHILD localID",child.obj.localId);
// console.log("PARENT localID",child.obj.localId);
// console.log("Parent",parent);
// console.log("Child",child);

// child.name = "Anas";
// child.obj.localId = 20;

// console.log("CHILD name",child.name);
// console.log("Parent name",child.name);
// console.log("CHILD localID",child.obj.localId);
// console.log("PARENT localID",child.obj.localId);
// console.log("Parent",parent);
// console.log("Child",child);

// console.log(child.obj === parent.obj)

// var grandChild = Object.create(child);
// grandChild.walkingBehavior();

//function constructor
// function Dog(name) {
//         this.name = name;
//         console.log('This is a ', this);
//     }

// var dog = new Dog("Fluffy");

// //Its going to work as normal function 
// //This will refer to the window object
// Dog("MAX");
