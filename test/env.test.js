import { port, env, secret, db, version } from '../config/environment'

describe('[Environment]', () => {
  test('Apollo Server', () => {
    expect(version).not.toEqual('')
    expect(env).not.toEqual('')
    expect(port).not.toEqual('')
    expect(secret).not.toEqual('')
  })

  test('Database', () => {
    expect(db.host).not.toEqual('')
    expect(db.port).not.toEqual('')
    expect(db.name).not.toEqual('')
    expect(db.user).not.toEqual('')
    expect(db.password).not.toEqual('')
  })
})
