const User = require('../models/userModel');

class UserDataAccessLayer {
    constructor(User) {
        this.User = User;
    }

    async getAllUsers() {
        const users = await this.User.find();
        return users;
    }

    async getUserById(id) {
        const user = await this.User.findById(id);
        return user;
    }

    async createUser(user) {
        const newUser = await this.User.create(user);
        return newUser;
    }

    async updateUser(id, user) {
        const updatedUser = await this.User.findByIdAndUpdate(id, user, { new: true });
        return updatedUser;
    }

    async deleteUser(id) {
        const deletedUser = await this.User.findByIdAndDelete(id);
        return deletedUser;
    }

    async saveUser(user) {
        const savedUser = await user.insertMany();
        return savedUser;
    }
    
}  

module.exports = new UserDataAccessLayer(User);