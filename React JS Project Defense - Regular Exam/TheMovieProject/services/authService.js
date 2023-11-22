const url = `http://localhost:3030/users`;
export const login = async (email, password) => {
  try {
    const response = await fetch(`${url}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    });
    if (!response.ok) {
      throw new Error('Login failed');
    }
    const data = await response.json();
    return data;
  } catch (err) {
    console.log('Login error:', err);
  }
};
export const register = async (username, password, email, imgUrl) => {
  try {
    const response = await fetch(`${url}/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username,
        password,
        email,
        imgUrl,
      }),
    });
    if (!response.ok) {
      throw new Error('Registration failed');
    }
    const data = await response.json();
    return data;
  } catch (err) {
    console.log('Registration error:', err);
  }
};
export const logout = async () => {
  try {
    const result = await fetch(`${url}/logout`);
    return result;
  } catch (err) {
    console.log(err);
  }
};
