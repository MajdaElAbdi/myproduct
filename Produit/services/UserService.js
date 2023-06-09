const mongoose = require("mongoose");
const user = require('../models/users').User;

const saveUser = async (user1) => {
    try {
        const user2 = new user(user1);
        await user2.save();

        console.log("user saved successfully!");
        return user2;
    } catch (error) {
        console.error(error);
    }
};


const getUser = async (id) => {

    try {
        console.log('getUser');
        var c = 'hi';
        const users = await user.findById(id);
        c = 'hoo';
        console.log('getUser');
        return users;
    } catch (error) {
        throw new Error(`Error retrieving product with id ${id}: ${error}`);
    }
};



const getByEmail = async (mail) => {

    try {
        console.log('service');
        console.log(mail);

        const users = await user.find({email:mail} );

        return users;
    } catch (error) {
        throw new Error(`Error retrieving product with id ${id}: ${error}`);
    }
};


const getAllUsers = async () => {
    try {
        const users = await user.find({});
        return users;
    } catch (error) {
        throw new Error(`Error retrieving all user: ${error}`);
    }
};

const deleteUser = async (id) => {
    try {
        const users = await user.findByIdAndRemove(id);
        return users;
    } catch (error) {
        throw new Error(`Error deleting user with id ${id}: ${error}`);
    }
};

const updateUser = async (id, user1) => {
    try {

        const update = await user.findByIdAndUpdate(id, user1, { new: true });
        console.log(update);
        return update;
    } catch (error) {
        throw new Error(`Error updating user with id ${id}: ${error}`);
    }
};



module.exports = {
    saveUser,
    getUser,
    getAllUsers,
    deleteUser,
    updateUser,
    getByEmail

};