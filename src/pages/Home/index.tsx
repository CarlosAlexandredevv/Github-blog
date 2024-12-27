import { useContext } from 'react';
import { CardProfile } from './components/card-profile';
import { ProfileContext } from '../../context/ProfileContext';

export function Home() {
  return (
    <main className="max-w-wrapped mx-auto px-3 lg:px-0">
      <CardProfile />
    </main>
  );
}
