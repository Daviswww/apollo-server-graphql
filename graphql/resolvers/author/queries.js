import connectDB from '../../../db';
import AuthorModel from '../../../db/models/authorModel';

const authorQueries = {
    authors: async (_, args) => {
        const conn = await connectDB();
        const rows = await AuthorModel.selectAll(conn);
        return rows;
    },
    author: async (_, args) => {},
};

export default authorQueries;