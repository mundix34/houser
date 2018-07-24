module.exports = {
    getAll: (req, res) => {
        const dbSet = req.app.get('db');
        dbSet.get_properties()
        .then ( (houser) => res.status(200).send(houser) )
        .catch(err => res.status(404).send({ errorMessage: 'Oops, encountered error' }));
        // console.log(err);

    },
    create: (req, res) => {
        const dbSet = req.app.get('db');
        const {property_name, address, city, state, zip} = req.body;
        dbSet.create_property([property_name, address, city, state, zip])
        .then(() => res.sendStatus(200))
        .catch(err => {res.status(500).send({errorMessage: 'Oops, an error occured'})
    // console.log(err);
    })
    },
    delete: ( req, res ) => {
        const dbSet = req.app.get('db');
        const { params } = req;
    
        dbSet.delete_property([ params.id ])
          .then( () => res.sendStatus(200) )
         .catch( err => {
            res.status(500).send({errorMessage: "Oops! Something went wrong. Our engineers have been informed!"});
            // console.log(err)
          } );
      }


}