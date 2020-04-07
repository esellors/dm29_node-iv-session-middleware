let id = 4;

let drinks = [
    { drinkId: 1, drinkName: 'Juice' },
    { drinkId: 2, drinkName: 'Milk' },
    { drinkId: 3, drinkName: 'Seltzer Water'}
]

module.exports = {
    getAll: (req, res, next) => {
        // console.log(req.session)
        res.status(200).json(drinks);
    },
    addOne: (req, res) => {
        const { drinkName } = req.body;

        const newDrink = {
            drinkId: id,
            drinkName
        }

        id++

        drinks.unshift(newDrink);

        res.status(200).json(drinks);
    }, 
    deleteOne: (req, res) => {
        const { drinkId } = req.params;

        const tgtIndex = drinks.findIndex(drink => drink.drinkId == drinkId);

        drinks.splice(tgtIndex, 1);

        res.status(200).json(drinks)
    }
}