import { Navigate } from 'react-router-dom';
import { useAuth } from '@/context/AuthContext';
import { ReactElement } from 'react';

interface ProtectedRouteProps {
  children: ReactElement;
}

export default function ProtectedRoute({ children }: ProtectedRouteProps) {
  const { currentUser } = useAuth();

  if (!currentUser) {
    // User not logged in, redirect to login page
    return <Navigate to="/login" />;
  }

  return children;
}