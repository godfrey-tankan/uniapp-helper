
import React, { useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';

interface ProtectedRouteProps {
  children: React.ReactNode;
  requiresStudent?: boolean;
  requiresLecturer?: boolean;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
  children,
  requiresStudent = false,
  requiresLecturer = false,
}) => {
  const { isAuthenticated, isLoading, user } = useAuth();

  if (isLoading) {
    return <div className="flex items-center justify-center min-h-screen">Loading...</div>;
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  if (requiresStudent && !user?.is_student) {
    return <Navigate to="/lecturer-dashboard" replace />;
  }

  if (requiresLecturer && user?.is_student) {
    return <Navigate to="/student-dashboard" replace />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
