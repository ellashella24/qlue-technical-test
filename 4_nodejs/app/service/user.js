import GlobalHelper from "../helper/global-helper.js";

const UserService = {
    getList: async () => {
        const users = GlobalHelper.generateDummyData();
        const encoded = GlobalHelper.resEncoder(users);
        const decoded = GlobalHelper.resDecoder(encoded);
        return { encoded, decoded };
    }
}

export default UserService