# solvd_homework_8

In order to load datasamples to database

```bash
npm run load-db
```

In order to run console app with json database

```bash
npm start
```

I did scenario using console where users browse books, adds them to their cart,
and able to create orders, all of those data, except of cart is saved in simple json as an
example of database interaction.

Also I did another scenario showing objects interaction, encapsulation and polymorphism in
interaction example.

In order to run interaction example

```bash
npm run example
```

Task:
Design and implementation of an object-oriented
program in JavaScript to simulate the functioning of an online bookstore.

Classes description

**Book Class**: To represent individual books. Each book has properties: title, author, ISBN, price, and availability.
Book has a static property of schema in order to validate data when we create instances with createObject function. Book also have the method to display category which displays that current book has no category for Book instance

**ScienceFiction Class**: Extends Book,adding category property and changing displayCategory method in order to show data about category and category description

**Novel Class**: Extends Book,adding category property and changing displayCategory method in order to show data about category and category description

**User Class**: Create a class called `User` to represent users of the bookstore. Users should have properties like name, email, and a unique user ID generated with uid function.
User has a static property of schema in order to validate data when we create instances with
custom createObject function that validated created object.

**Customer Class**: Extends User class adding cart and orders properties and method to createOrder.
createOrder method generates new instance of Order which includes user cart items and adds it to user orders list.    


**Cart Class**: Designed a class called `Cart` to simulate a shopping cart. It has methods to add books, remove books, and calculate the total price of the books in the cart.

**Order Class**: Created an `Order` class to represent a user's order. It has information about the books ordered, and the total price. Orders are stored in User.orders and user is able to create multiple orders