export function requestLogin(username, password) {
  // a real login request would go here but in the meantime, we'll fake it
  return new Promise((resolve, reject) => {
    if (username && password) {
      resolve({ data: { auth_token: 'faketoken12345678' } })
    }
    reject(new Error('Authentication failed!'))
  })
}
