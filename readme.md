
# Questions:

# What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

Ans:
1.Selection Criteria:

getElementById(id):it selects a single element based on its unique id attribute.

getElementsByClassName(className):Selects all elements that have a specific class name.

querySelector(selector):Selects the first element that matches a specified CSS selector.

querySelectorAll(selector):Selects all elements that match a specified CSS selector.

2.ReturnTypes:
getElementById(id):Returns a single element or null (if no element with the id is given).

getElementsByClassName(className):Returns a live Html collection."Live" means if the elements are added or removed from the dom that matches the class ,the Html collection automatically updates.

querySelector(selector):Returns a single element object or null if no element matches the selector.

querySelectorAll(selector):Returns a "static" NodeList of elements."static means the nodeList does not update automatically if the dom changes after the selection is made.


# How do you create and insert a new element into the DOM?
Ans:
    To create an element first we need use document.createElement().
    After that add content or text to that new element with .innerHTMl or innerText.
    the add that element to dom using document.appendChild();

    Example:

    const new = document.createElement('p');
    new.innerText="this is an example";
    document.body.appendChild(new);

# What is Event Bubbling and how does it work?
Ans:Event bubbling is a javaScript mechanism where an event is triggered on a target element,it bubbles up through the Dom tree, being handled by the events ancestors.until it reaches the document root.
# What is Event Delegation in JavaScript? Why is it useful?
Ans:Event delegation is basically a pattern to handle events efficiently.Instead of adding eventListener to each and every element,we can add an event listener to the parentElement and call an event on a particular target using the .target property of the event object. 
    

# What is the difference between preventDefault() and stopPropagation() methods?
Ans:
preventDefault(): It is a method that prevents the default action associated with an event from occurring.

stopPropagation():this method prevent the event from propagating further in the Dom hierarchy.