# Todo-List
# The code may probably need to be refactor changed to avoid code repetition or dependencies. However, I belive that the different modules serve their functionality well.

This application has probably been one of the most challenging ones I have ever had during my first 4 months of pure daily-programming. It has been due to the fact that I had nearly no experience using localStorage and no experience using external libraries like date-fns (very useful by the way). Hence, I've learned a ton. All the funcionality is based on modular programming where, in this case, I have one file with different functions or modules that are responsible for one funcitonality and are (or try to be) as independent from each other as possible.

#How it works
- This app lets you add new fields (which will be the general todos where the user will be able to save new todos).
- The fields will be saved at local localStorage on an array of objects.
- The same will happen for todos but on a different array of objects.
- Todos and fields will be connected via two different features: DOM elements ( fields' id === todos'class) and object properties (the field.id === todo.id (which is different from the todo.uniqueId that is the unique identifier for each todo)
- The user can remove single todos or fields (with all their todos; if it has).
- Everytime the user clicks on a different field its active status will toggle between them, and the color. If a field its active the todos related to that field will be seen.
- The user can add info to the todos, by clicking on the add info button. Specifically, it could add the priority of it, a brief description (50 characters maximun) and its submission date.
- Depending on the priority of the todo, different colours will be shown bordering them. Red for highest, yellow for medium, green for lowest and white it no priority has been added.
- The user can also check on the checkbox todo input to check the todo.
- All the information will be saved during different page reloads.
- The information will be saved by getting and setting back (as frecuent as possible) information to localStorage.
