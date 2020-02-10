const { Todos } = require("../../models");

// Database Mongo
module.exports = {
    getAll: async (req, res) => {
        try {
            const result = await Todos.find({}).populate(
                "user",
                "userName email"
            );

            res.status(200).send({ message: "Show data todos", data: result });
        } catch (error) {
            console.log(error);
        }
    },
    addData: async (req, res) => {
        try {
            const result = await Todos.create(req.body);

            res.status(200).send({ message: "Add new Todo", data: result });
        } catch (error) {
            console.log(error);
        }
    },
    deleteById: async (req, res) => {
        try {
            const deleted = await Todos.findByIdAndDelete(req.params.id);

            if (!deleted) res.status(404).send("No item found");
            res.status(200).send({message: "Deleted"});
        } catch (error) {
            console.log(error);
        }
    },
    updateById: async (req, res) => {
        try {
            let update = await Todos.findByIdAndUpdate(req.params.id, req.body)
            const result= await update.save()
            
            res.status(200).send({ message: "Show data todos", data: result });
        } catch (error) {
            console.log(error);
        }
    },
    getByUsername: async (req, res) => {
        try {
            const result = await Todos.findOne({ todo: req.params.todo }, function (err, todos) {})
             

            res.status(200).send({ message: "Show one todo", data: result });
        } catch (error) {
            console.log(error);
        }
    },
    

};
