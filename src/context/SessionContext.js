import { createContext, useState, useEffect, useContext } from 'react';
import api from '../api/api';

export const SessionContext = createContext();

export const SessionProvider = ({ children }) => {
  const [sessions, setSessions] = useState([]);

  const fetchSessions = async () => {
    const { data } = await api.get('sessions');
    setSessions(data.reverse());
  };

  const createSession = async (duration, feedback) => {
    await api.post('/sessions', { duration, feedback });
  };

  const editSession = async (duration, feedback) => {};

  const deleteSession = async (id) => {
    await api.delete(`/sessions/${id}`);
    setSessions(sessions.filter((session) => session._id !== id));
  };

  useEffect(() => {
    fetchSessions();
  }, []);

  return (
    <SessionContext.Provider
      value={{
        sessions,
        fetchSessions,
        deleteSession,
        createSession,
      }}
    >
      {children}
    </SessionContext.Provider>
  );
};

export const useSessions = () => {
  const context = useContext(SessionContext);
  if (context === undefined) {
    throw new Error('Context must be used within a Provider');
  }
  return context;
};
