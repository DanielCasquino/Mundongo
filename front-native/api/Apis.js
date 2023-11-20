// api/Apis.js
const API_URL = 'http://192.168.1.66:8080';

// Autenticación
export const signUp = async (email, password, displayName, isAdmin = false) => {
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
        isAdmin,
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


// Cuentas
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
  try {
    const response = await fetch(`${API_URL}/api/account/${id}`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    });
    if (!response.ok) throw new Error('Error al obtener cuenta');
    return response.json();
  } catch (error) {
    console.error('Error en getAccountById:', error);
    throw error;
  }
};

export const createAccount = async (accountData, token) => {
  try {
    const response = await fetch(`${API_URL}/api/account`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify(accountData),
    });
    if (!response.ok) throw new Error('Error al crear cuenta');
    return response.json();
  } catch (error) {
    console.error('Error en createAccount:', error);
    throw error;
  }
};

export const updateAccount = async (id, accountData, token) => {
  try {
    const response = await fetch(`${API_URL}/api/account/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify(accountData),
    });
    if (!response.ok) throw new Error('Error al actualizar cuenta');
    return response.json();
  } catch (error) {
    console.error('Error en updateAccount:', error);
    throw error;
  }
};

export const addCommentToAccount = async (id, commentData, token) => {
  try {
    const response = await fetch(`${API_URL}/api/account/${id}/addComment`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify(commentData),
    });
    if (!response.ok) throw new Error('Error al agregar comentario a cuenta');
    return response.json();
  } catch (error) {
    console.error('Error en addCommentToAccount:', error);
    throw error;
  }
};

export const deleteAccount = async (id, token) => {
  try {
    const response = await fetch(`${API_URL}/api/account/${id}`, {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    });
    if (!response.ok) throw new Error('Error al eliminar cuenta');
    return response.json();
  } catch (error) {
    console.error('Error en deleteAccount:', error);
    throw error;
  }
};

// Eventos
export const getAllEvents = async (token) => {
  try {
    const response = await fetch(`${API_URL}/api/events`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    });
    if (!response.ok) throw new Error('Error al obtener eventos');
    return response.json();
  } catch (error) {
    console.error('Error en getAllEvents:', error);
    throw error;
  }
};

export const getEventById = async (id, token) => {
  try {
    const response = await fetch(`${API_URL}/api/events/${id}`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    });
    if (!response.ok) throw new Error('Error al obtener evento');
    return response.json();
  } catch (error) {
    console.error('Error en getEventById:', error);
    throw error;
  }
};

export const createEvent = async (eventData, token) => {
  try {
    const response = await fetch(`${API_URL}/api/events`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify(eventData),
    });
    if (!response.ok) throw new Error('Error al crear evento');
    return response.json();
  } catch (error) {
    console.error('Error en createEvent:', error);
    throw error;
  }
};

export const updateEvent = async (id, eventData, token) => {
  try {
    const response = await fetch(`${API_URL}/api/events/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify(eventData),
    });
    if (!response.ok) throw new Error('Error al actualizar evento');
    return response.json();
  } catch (error) {
    console.error('Error en updateEvent:', error);
    throw error;
  }
};

export const deleteEvent = async (id, token) => {
  try {
    const response = await fetch(`${API_URL}/api/events/${id}`, {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    });
    if (!response.ok) throw new Error('Error al eliminar evento');
    return response.json();
  } catch (error) {
    console.error('Error en deleteEvent:', error);
    throw error;
  }
};

// Tags
export const getAllTags = async (token) => {
  try {
    const response = await fetch(`${API_URL}/api/tags`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    });
    if (!response.ok) throw new Error('Error al obtener etiquetas');
    return response.json();
  } catch (error) {
    console.error('Error en getAllTags:', error);
    throw error;
  }
};
