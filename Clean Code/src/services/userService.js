const User = require("../models/user");

// app.js -> router.js 
// userService.js -> model -> DATABASE
const userService = {
    create: async (user) => {
        try {
            return await User.create(user);
        } catch (error) {
            throw new Error('Ocorreu um erro ao Criar User');
        }
    },
    update: async (id, userToUpdate) => {
        try {
            const user = await User.findByPk(id);
            if(!user) { //user for vazia
                return null;
            }
            await user.update(userToUpdate);
            await user.save();
            return user;
        } catch (error) {
            throw new Error('Ocorreu um erro ao Atualizar User');
        }
    },
    getById: async (id) => {
        try {
            const user = await User.findByPk(id);
            if (!user) {
                return null;
            }
            return user;
        } catch (error) {
            throw new Error('Ocorreu um erro ao buscar único User');
        }
    },
    getAll: async () => {
        try {
            return await User.findAll();
        } catch (error) {
            throw new Error('Ocorreu um erro ao buscar todos User');
        }
    },
    delete: async (id) => {
        try {
            const user = await User.findByPk(id);
            if (!user) {
                return null;
            }
            await user.destroy();
            return user;
        } catch (error) {
            throw new Error('Ocorreu um erro ao deletar o User');
        }
    }
}

module.exports = userService