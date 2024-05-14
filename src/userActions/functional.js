
const LOGIN_OPTIONS = `Choose option:
1 Login
2 Create account
Your pick: `;
async function login() {
    const option = await inputText(LOGIN_OPTIONS);
    let user;
    if (option === "1") {
        const userId = await inputText("Enter your userId: ");
        const userData = data.users.find((user) => user._userId === userId);
        if (userData) {
            const { name, email, cart } = userData;
            user = new User({ name, email, userId: userData._userId });
            // do not need to validate with schema because we already had this in database
            // means that we already checked it
            user.cart.addBooks(cart.items);
        }
    } else if (option === "2") {
        user = await inputObject(User);
        if (user !== null) {
            data.users.push(user);
            await writeToDb("DataBase.json", data);
        }
    }

    if (!user) {
        console.log("Wrong userId!");
        return login();
    }
    return user;
}

const ACTION_OPTIONS = `
What kind of action do you want to perform?
1 Browse books
2 Add book to cart
3 Check cart
4 Place order
Your pick: `;

function browseBooks() {
    for (const [index, book] of data.books.entries()) {
        console.log("Book №" + (index + 1));
        for (const field in book) {
            console.log(`${upperFirst(field)}: ` + book[field]);
        }
        console.log();
    }
}

async function addToCart(cart) {
    for (const [index, book] of data.books.entries()) {
        console.log(`Book № ${index + 1}: ${book.title}`);
    }
    const bookNumber =
        parseInt(await inputText("Which one do you want to add to you cart?")) -
        1;
    if (data.books[bookNumber]) {
        cart.addBook(data.books[bookNumber]);
    } else {
        console.log("There is no such book with this number");
    }
}

function checkCart(cart) {
    console.log(`There is ${cart.items.length} books in your cart`);
    for (const book of cart.items) {
        console.log(`${book.title}`);
    }
}

async function placeOrder(user) {
    const order = new Order(user.cart.items, user.cart.calculateTotal());
    user.orders.push(order);
    user.cart.clear();
    const userDbIndex = data.users.findIndex(
        (dbUser) => dbUser._userId === user.userId
    );
    data.users[userDbIndex] = user;
    writeToDb("DataBase.json", data);
    console.log(
        "Your order is created and saved, watch out for delivery date."
    );
    for (const [index, book] of order.items.entries()) {
        console.log(`Book № ${index + 1}: ${book.title}`);
    }
}

async function actionsHandler(user) {
    const action = await inputText(ACTION_OPTIONS);
    console.log();
    if (action === "1") {
        browseBooks();
    } else if (action === "2") {
        await addToCart(user.cart);
    } else if (action === "3") {
        checkCart(user.cart);
    } else if (action === "4") {
        await placeOrder(user);
    }
}
export { login, actionsHandler };
