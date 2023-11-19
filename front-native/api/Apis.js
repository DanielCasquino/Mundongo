// api/Apis.js
const API_URL = 'http://192.168.1.5:3000';

// Autenticación
export const signUp = async (email, password, displayName) => {
  try {
    const response = await fetch(`${API_URL}/api/auth/signup`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        password,
        displayName,
      }),
    });
    if (!response.ok) throw new Error('Error en el registro');
    return response.json();
  } catch (error) {
    console.error('Error en signUp:', error);
    throw error;
  }
};

export const login = async (email, password) => {
  try {
    const response = await fetch(`${API_URL}/api/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });
    if (!response.ok) throw new Error('Error al iniciar sesión');
    return response.json();
  } catch (error) {
    console.error('Error en login:', error);
    throw error;
  }
};

export const getAllAccounts = async (token) => {
  try {
    const response = await fetch(`${API_URL}/api/account`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    });
    if (!response.ok) throw new Error('Error al obtener cuentas');
    return response.json();
  } catch (error) {
    console.error('Error en getAllAccounts:', error);
    throw error;
  }
};

export const getAccountById = async (id, token) => {
  const response = await fetch(`${API_URL}/api/account/${id}`, {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${token}`,
    },
  });
  return response.json();
};

export const createAccount = async (accountData, token) => {
  const response = await fetch(`${API_URL}/api/account`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    },
    body: JSON.stringify(accountData),
  });
  return response.json();
};

export const updateAccount = async (id, accountData, token) => {
  const response = await fetch(`${API_URL}/api/account/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    },
    body: JSON.stringify(accountData),
  });
  return response.json();
};

export const addCommentToAccount = async (id, commentData, token) => {
  const response = await fetch(`${API_URL}/api/account/${id}/addComment`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    },
    body: JSON.stringify(commentData),
  });
  return response.json();
};

export const deleteAccount = async (id, token) => {
  const response = await fetch(`${API_URL}/api/account/${id}`, {
    method: 'DELETE',
    headers: {
      'Authorization': `Bearer ${token}`,
    },
  });
  return response.json();
};

// Eventos
export const getAllEvents = async (token) => {
  const response = await fetch(`${API_URL}/api/events`, {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${token}`,
    },
  });
  return response.json();
};

export const getEventById = async (id, token) => {
  const response = await fetch(`${API_URL}/api/events/${id}`, {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${token}`,
    },
  });
  return response.json();
};

export const getEventByIdNoComments = async (id, token) => {
  const response = await fetch(`${API_URL}/api/events/nocomments/${id}`, {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${token}`,
    },
  });
  return response.json();
};

export const createEvent = async (name, city, country, token) => {
  try {
    const response = await fetch(`${API_URL}/api/events`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify({
        name,
        city,
        country,
      }),
    });
    if (!response.ok) throw new Error('Error al crear evento');
    return response.json();
  } catch (error) {
    console.error('Error en createEvent:', error);
    throw error;
  }
};

export const updateEvent = async (id, eventData, token) => {
  const response = await fetch(`${API_URL}/api/events/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    },
    body: JSON.stringify(eventData),
  });
  return response.json();
};

export const deleteEvent = async (id, token) => {
  const response = await fetch(`${API_URL}/api/events/${id}`, {
    method: 'DELETE',
    headers: {
      'Authorization': `Bearer ${token}`,
    },
  });
  return response.json();
};
