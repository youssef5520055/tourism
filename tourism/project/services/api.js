const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:5000/api';

// Helper function to get auth headers
const getAuthHeaders = () => {
  const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null;
  return {
    'Content-Type': 'application/json',
    ...(token && { Authorization: `Bearer ${token}` }),
  };
};

// Helper function for API calls
const apiCall = async (endpoint, options = {}) => {
  try {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      headers: getAuthHeaders(),
      ...options,
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error(`API call failed for ${endpoint}:`, error);
    throw error;
  }
};

// Auth API
export const register = (userData) => {
  return apiCall('/auth/register', {
    method: 'POST',
    body: JSON.stringify(userData),
  });
};

export const login = (credentials) => {
  return apiCall('/auth/login', {
    method: 'POST',
    body: JSON.stringify(credentials),
  });
};

export const adminLogin = (credentials) => {
  return apiCall('/auth/admin-login', {
    method: 'POST',
    body: JSON.stringify(credentials),
  });
};

export const getUserProfile = () => {
  return apiCall('/auth/profile');
};

// Trips API
export const getTrips = (params = {}) => {
  const queryString = new URLSearchParams(params).toString();
  return apiCall(`/trips${queryString ? `?${queryString}` : ''}`);
};

export const getTripById = (id) => {
  return apiCall(`/trips/${id}`);
};

export const searchTrips = (filters) => {
  return apiCall('/trips/search', {
    method: 'POST',
    body: JSON.stringify(filters),
  });
};

export const createTrip = (tripData) => {
  return apiCall('/trips', {
    method: 'POST',
    body: JSON.stringify(tripData),
  });
};

export const updateTrip = (id, tripData) => {
  return apiCall(`/trips/${id}`, {
    method: 'PUT',
    body: JSON.stringify(tripData),
  });
};

export const deleteTrip = (id) => {
  return apiCall(`/trips/${id}`, {
    method: 'DELETE',
  });
};

// Bookings API
export const createBooking = (bookingData) => {
  return apiCall('/bookings', {
    method: 'POST',
    body: JSON.stringify(bookingData),
  });
};

export const getUserBookings = () => {
  return apiCall('/bookings/user');
};

export const getAllBookings = () => {
  return apiCall('/bookings');
};

// Payments API
export const processPayment = (paymentData) => {
  return apiCall('/payments', {
    method: 'POST',
    body: JSON.stringify(paymentData),
  });
};

// AI API
export const aiQuery = (query) => {
  return apiCall('/ai/query', {
    method: 'POST',
    body: JSON.stringify({ query }),
  });
};

export const getAIRecommendations = (userPreferences) => {
  return apiCall('/ai/recommendations', {
    method: 'POST',
    body: JSON.stringify(userPreferences),
  });
};

// Contact API
export const sendContactInquiry = (inquiryData) => {
  return apiCall('/contact', {
    method: 'POST',
    body: JSON.stringify(inquiryData),
  });
};