import { BrowserRouter } from 'react-router-dom';
import { Router } from './Router';
import { ProfileContextProvider } from './context/ProfileContext';

export function App() {
  return (
    <BrowserRouter>
      <ProfileContextProvider>
        <Router />
      </ProfileContextProvider>
    </BrowserRouter>
  );
}
