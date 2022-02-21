import bcrypt from 'bcryptjs'

const users = [
  {
    name: 'Admin User',
    emial: 'admin@example.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true
  },
  {
    name: 'John Doe',
    emial: 'john@example.com',
    password: bcrypt.hashSync('123456', 10)
  },
  {
    name: 'Jane Doe',
    emial: 'jane@example.com',
    password: bcrypt.hashSync('123456', 10)
  }
]

export default users