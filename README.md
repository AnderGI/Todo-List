# Todo-List
# This is the magic of programming:new bugs have appeared! Some have been solved. Working on it. Then the cod ewill probably to need to have some other changes for better understanding
This application has probably been one of the most challenging ones I have ever had during the first 4 months of pure daily-programming. It has been due to the fact that I had nearly no experience using localStorage and no experience using external libraries like date-fns (very useful by the way). Hence, I've learned a ton. All the funcionality is based on modular programming where, in this case, I have one file with different functions or modules that are responsible for one funcitonality.

#How it works
Once you open the aplication, no fields or todos are displayed. At first, a add field input will appear where you will be able to add a field. Those fields are going to have an active class or none (actuve class removed) depending on if the user clicks the field or not. Once that happens, the user will be able to add new todos throught the add todos input. Those will be related with the field that has the active class (the relationship will be the id of the field. The todos also have another id, which will be their unique id).

Everytime the user clicks on different fields the different todos (related to the field that has been clicked) will be shown (display:default/none). The todos can be removed, checked and they can have additional info, such as, priority, submission date, and a description with a maximun length of 50 characters. Those changes will also happen on localStorage as the todos, and the fields, will be stored on different array of object that will be retreived and saved in localStorage.

At the beginning all todos will be shown as no specific field has the active class. That way the user can have a quick glance at everything it has todo (xd).
