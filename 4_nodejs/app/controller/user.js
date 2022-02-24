import UserService from "../service/user.js";

const UserController = {
    getList: async (req, res, next) => {
        const results = await UserService.getList();
        return res.status(200).json({ status: true, message: 'successfully get users', data: results });
    }
}

export default UserController