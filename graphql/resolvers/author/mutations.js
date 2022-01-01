import AuthorModel from '../../../models/authorModel';

const authorMutations = {
    createAuthor: async (_, args) => {
        const user_id = await AuthorModel.createUser(args.author);
        const user = await AuthorModel.selectUser(user_id);

        return user;
    },
    updateAuthor: async (_, args) => {
        const user_id = await AuthorModel.updateUser(args, args.author);
        const user = await AuthorModel.selectUser(user_id);

        return user;  
    },
    deleteAuthor: async (_, args) => {
        const req = await AuthorModel.deleteUser(args.id);

        return req;
    },
};

export default authorMutations;