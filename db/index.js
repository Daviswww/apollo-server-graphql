import { db } from '../config/environment';
import mysql from 'mysql2/promise';
let connection_pool;

const connectDB = async () => {
    try{
        connection_pool = mysql.createPool({
            host: db.host,
            user: db.user,
            password: db.password,
            database: db.name,
            port: db.port
        });
        console.log(`1. ${connection_pool}`);
        return await connection_pool.getConnection();
    }
    catch(error){
        throw error;
    }
}

export default connectDB;
