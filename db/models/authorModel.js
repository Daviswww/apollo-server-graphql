class AuthorModel {
  async selectAll(conn) {
    const sql = `SELECT * FROM User`;
    let [rows, fields] = await conn.query(sql);
    console.log(rows);
    return rows;
  } 

  async selectUser(conn, id) {
    const sql = `SELECT * FROM `;
    let [rows, fields] = await conn.query(sql);
    console.log(rows);
    return rows;
  }

  async deleteUser(conn, id) {
    const sql = `SELECT * FROM `;
    let [rows, fields] = await conn.query(sql);
    console.log(rows);
    return rows;
  }

  async createUser(conn) {
    const sql = `SELECT * FROM `;
    let [rows, fields] = await conn.query(sql);
    console.log(rows);
    return rows;
  }

  async updateUser(conn) {
      const sql = `SELECT * FROM hello`;
      let [rows, fields] = await conn.query(sql);
      console.log(rows);
      return rows;
  }
}

export default new AuthorModel();