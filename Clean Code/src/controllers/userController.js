const userService = require("../services/userService");

const userController = {
    create: async (req, res) => {
        try {
            const user = await userService.create(req.body);
            return res.status(201).json({
                msg: 'Usuário criado com sucesso',
                user
            })
        } catch (error) {
            return res.status(500).json({
                msg: 'Erro ao tentar criar Usuário'
            })
        }
    }, 
    update: async (req, res) => {
        try {
            const user = await userService.update(req.params.id, req.body);
            if (!user) {
                return res.status(400).json({
                    msg: 'Usuário não encontrado'
                });
            }
            return res.status(200).json({
                msg: 'Usuário atualizado com sucesso',
                user
            });
        } catch (error) {
            return res.status(500).json({
                msg: 'Erro ao atualizar Usuário'
            });
        }
    },
    getAll: async (req, res) => {
        try {
            const users = await userService.getAll();
            return res.status(200).json({
                msg: 'Todos os Usuários',
                users
            })
        } catch(error) {
            return res.status(500).json({
                msg: 'Ocorreu um erro no servidor'
            });       
        }
    },
    getOne: async (req, res) => {
        try {
            const user = await userService.getById(req.params.id);
            if(!user) {
                return res.status(400).json({
                    msg: 'Usuário não encontrado'
                });
            }
            return res.status(200).json({
                msg: 'Usuário encontrado',
                user
            });
        } catch(error) {
            return res.status(500).json({
                msg: 'Ocorreu um erro no Servidor'
            });
        }
    },
    delete: async (req, res) => {
        try {
            const user = await userService.delete(req.params.id);
            if (!user) {
                return res.status(400).json({
                    msg: 'Usuário não encontrado'
                });
            }
            return res.status(200).json({
                msg: 'Usuário deletado com sucesso'
            });
        } catch (error) {
            return res.status(500).json({
                msg:'Ocorreu um erro no Servidor'
            });
        }
    }
}

module.exports = userController;