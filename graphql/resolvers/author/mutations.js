import connectDB from '../../../db';
import AuthorModel from '../../../db/models/authorModel';

const authorMutations = {
    createAuthor: async (_, args) => {
        const conn = await connectDB();
        const [rows, fields] = await AuthorModel.createUser(conn);
    },
    updateAuthor: async (_, args) => {},
};

export default authorMutations;