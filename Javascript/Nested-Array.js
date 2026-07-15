const arr = [
    {
        name: "Arjun",
        age: 45,
        bookName: "The Art of Leadership",
        children: [{
            name: "Meera",
            age: 22,
            bookName: "Wings of Fire",
            children: [
                {
                    name: "Karthik",
                    age: 16,
                    bookName: "The Alchemist",
                    children: [
                        {
                            name: "Diya",
                            age: 10,
                            bookName: "Harry Potter and the Sorcerer's Stone"
                        }
                    ]
                },
                {
                    name: "Nisha",
                    age: 18,
                    bookName: "To Kill a Mockingbird"
                }
            ]
        },
        {
            name: "Rahul",
            age: 25,
            bookName: "Atomic Habits",
            children: [
                {
                    name: "Sneha",
                    age: 19,
                    bookName: "The Power of Now"
                }
            ]
        }
        ]
    },
    {
        name: "Vikram",
        age: 50,
        bookName: "Rich Dad Poor Dad",
        children: [
            {
                name: "Ananya",
                age: 28,
                bookName: "Think and Grow Rich",
                children: [
                    {
                        name: "Rohit",
                        age: 21,
                        bookName: "The Subtle Art of Not Giving a Fort",
                        children: [
                            {
                                name: "Ishita",
                                age: 14,
                                bookName: "The Hobbit"
                            }
                        ]
                    }
                ]
            }
        ]
    }
];

function reduceChildren(books, reducedChild) {
    //let flattendChildren = [];
	console.log("book", books);
	for(let book of books) {
		const { children, ...rest } = book;
		reducedChild.push(rest);
		if(children && children.length) {
		   reduceChildren(book.children, reducedChild);
		}
	}
	console.log(reducedChild, "flattendChildren");
	return reducedChild;
}

function getSort() {
    res = [];
    reduceChildren(arr, res)
    res = res.sort((a, b) => a.bookName > b.bookName ? 1 : a.bookName < b.bookName ? -1 : 0);
    console.log("Answer: ", res);
    
}

getSort()