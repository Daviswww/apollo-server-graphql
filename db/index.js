import { db } from '../config/environment';
import mysql from 'mysql2/promise';

let connection_pool = null;

const connectDB = async () => {
    try{
        if(connection_pool != null){
            console.log("is connected");
            return await connection_pool;
        }
        connection_pool = mysql.createPool({
            host: db.host,
            user: db.user,
            password: db.password,
            database: db.name,
            port: db.port
        });
        console.log("Connected to database");
        return await connection_pool.getConnection();
    }
    catch(error){
        throw error;
    }
}

export default connectDB;
