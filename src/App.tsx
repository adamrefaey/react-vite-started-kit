import React from 'react';
import { Routes, Route, Navigate, Outlet } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ThemeProvider } from './common/providers/ThemeProvider';
import { useTheme } from './common/hooks/useTheme';

// Example protected route
const ProtectedRoute = ({ isAuth }: { isAuth: boolean }) =>
  isAuth ? <Outlet /> : <Navigate to="/auth" replace />;

const Landing = () => {
  const { t } = useTranslation();
  return <h1 className="text-2xl font-bold">{t('welcome')}</h1>;
};
const Auth = () => <h1>Auth Page</h1>;
const Components = () => <h1>Components Page</h1>;
const Settings = () => <h1>Settings Page</h1>;
const Tasks = () => <h1>Tasks Page</h1>;
const ErrorPage = () => <h1>404 Not Found</h1>;

function App() {
  const [isAuth] = React.useState(false); // Replace with real auth logic
  const { toggleTheme } = useTheme();

  return (
    <>
      <button onClick={toggleTheme} className="fixed top-2 right-2 px-2 py-1 border rounded">
        Switch Theme
      </button>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/auth" element={<Auth />} />
        <Route element={<ProtectedRoute isAuth={isAuth} />}>
          <Route path="/components" element={<Components />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/tasks" element={<Tasks />} />
        </Route>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
}

export default function AppWithProviders() {
  return (
    <ThemeProvider>
      <App />
    </ThemeProvider>
  );
}
