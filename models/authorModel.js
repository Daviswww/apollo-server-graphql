import connectDB from '../db';

class AuthorModel {
  async selectAll() {
    try {
      const conn = await connectDB();
      const sql = `SELECT * FROM User`;
      let [rows, fields] = await conn.execute(sql);

      return rows;
    } catch(err){
      console.log(err);
    }    
  } 

  async selectUser(id) {
    let user_id = id;

    try{
      const conn = await connectDB();
      const sql = `SELECT * FROM User WHERE user_id=${user_id};`;
      let [rows, fields] = await conn.execute(sql);
  
      return rows[0];
    }catch(err){
      console.log(err);
    }
  }

  async createUser(args) {
    let user_name = "";
    if ("user_name" in args) user_name = args.user_name;

    try{
      const conn = await connectDB();
      const sql = `INSERT INTO User (user_name) VALUES ('${user_name}')`;
      let [rows, fields] = await conn.execute(sql);
  
      return rows.insertId;
    } catch(err){
      console.log(err);
    }
  }

  async updateUser(args, author) {
    let user_id = args.id;
    let user_name = author.user_name;

    try{
      const conn = await connectDB();
      const sql = `UPDATE User SET user_name = '${user_name}' WHERE user_id = ${user_id};`;
      let [rows, fields] = await conn.execute(sql);

      return rows;
    } catch(err) {
      console.log(err);
    }
  }

  async deleteUser(id) {
    let user_id = id;

    try{
      const conn = await connectDB();
      const sql = `DELETE from User WHERE user_id = ${user_id};`;
      let [rows, fields] = await conn.query(sql);

      return `Delete user ${id} successful!`;
    } catch(err) {
      console.log(err);
    }


    return rows;
  }
}

export default new AuthorModel();