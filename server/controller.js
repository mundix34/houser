let houses = [];
let id = 0;
module.exports = {
    getAll: (req, res) => {
        const dbSet = req.app.get('db');
        dbSet.get_properties()
        .then ( (houses) => res.status(200).send(houses) )
        .catch(err => res.status(404).send({ errorMessage: 'Oops, encountered error' }));
        // console.log(err);

    },
}