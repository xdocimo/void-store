const product = require("../models/").products
const getAll = (req, res) => {

    return product.findAll().then(product => res.status(200).send(product))
        .catch(error => res.status(404).send(error))
}


const getOne = (req, res) => {
    const { id } = req.params;
    return product.findOne({ where: { id: id } }).then(product => res.status(200).send(product))
        .catch(error => res.status(404).send(error))
}

const create = (req, res) => {
    console.log(req.body)
    const { name, price, description, photo, provider, stock } = req.body;
    return product.create({ name: name, price: price, description: description, photo: photo, provider: provider, stock: stock }).then(product => res.status(200).send(product))
        .catch(error => res.status(404).send(error))
}

const update = (req, res) => {
    const { id } = req.params;
    const { name, price, description, photo, provider, stock } = req.body;
    product.update(
        {
            name:  name,
            price: price,
            description: description,
            photo: photo,
            provider: provider,
            stock: stock
        },
        { 
            where: 
            {
                id: id
            }
        }
    ).then(count => {
        console.log('Cosas cambiadas ' + count);
    });
}

function deleteOne(req, res) {
    const id = req.params['id']
    product.destroy({ where: { id: id } }).then(product => res.status(200).destroy(product))
        .catch(error => res.status(404).send(error))
}

module.exports = {
    getAll,
    getOne,
    update,
    create,
    deleteOne,
}