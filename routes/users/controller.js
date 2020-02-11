const { Users } = require("../../models");
const {hashPassword}= require("../../helpers")

module.exports = {
    
    postData: async (req, res) => {
        try {
            const data = req.body;
            const file = req.file;
            const hash= await hashPassword(req.body.password)


            const result = await Users.create({
                ...data,
                avatar: file === undefined ? null : file.path,
                password: hash
            });

            res.status(200).send({
                message: "New data user is successfully added",
                data: result
            });
        } catch (error) {
            console.log(error);
        }
    },
    getByUsername: async (req, res) => {
        try {
            const result = await Users.findOne({ userName: req.params.username })
             

            res.status(200).send({ message: "Show by username", data: result });
        } catch (error) {
            console.log(error);
        }
    },
    getAll: async (req, res) => {
        try {
            const result = await Users.find({});

            res.status(200).send({ message: "Show datas users", data: result });
        } catch (error) {
            console.log(error);
        }
    },
};
