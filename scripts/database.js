//Below is the database of menu items
const database = {
    baseDishes: [
        {id: 1, name:"Hummus and Hot Sauce", price: 9.50 },
        {id: 2, name:"Chicken Fried Lam Kabob", price: 7.25 },
        {id: 3, name:"Hot Chicken Greek Salad", price: 8.75},
        {id: 4, name:"Brussel Sprout Moussaka", price: 7.84},
        {id: 5, name:"Okrakopita", price: 8.45},
        {id: 6, name:"Fried Onion and Grape Leaves", price: 6.99 },
        {id: 7, name:"Chess Baklava", price: 8.79},
        {id: 8, name:"Gyro Biscuits", price: 7.50},
        {id: 9, name:"Black Eye Pea Falafel", price: 8.99 },
        {id: 10, name:"Pecan Pastitsio", price: 6.45},
    ],
    vegetables: [
        {id: 1, name:"Okra", price: 3.24 },
        {id: 2, name:"Collard Greens", price: 2.99},
        {id: 3, name:"Swiss Chard", price: 4.50},
        {id: 4, name:"Corn", price: 1.99},
        {id: 5, name:"Brussel Sprouts", price: 1.75},
        {id: 6, name:"Sweet Potatoes", price: 2.50},
        {id: 7, name:"Grits", price: 3.25},
        {id: 8, name:"Fried Green Tomatoes", price: 3.14},
    ],
    sides: [
        {id: 1, name:"Chicken Fried Steak", price: 6.25 },
        {id: 2, name:"Bacon", price: 3.99},
        {id: 3, name:"Turkey Leg", price: 4.60},
        {id: 4, name:"Ribs", price: 8.12},
        {id: 5, name:"Catfish", price: 7.25},
        {id: 6, name:"Souvlaki", price: 6.33},
    ]
}

//Below are export functions for DB objects
export const getBaseDishes = () => {
    return database.baseDishes.map(baseDish => ({...baseDish}))
}
export const getVegetables = () => {
    return database.vegetables.map(vegetable => ({...vegetable}))
}
export const getSides = () => {
    return database.sides.map(side => ({...side}))
}
