import { useContext } from 'react';
import { CardProfile } from './components/card-profile';
import { ProfileContext } from '../../context/ProfileContext';

export function Home() {
  const { issuesData } = useContext(ProfileContext);
  return (
    <main className="max-w-wrapped mx-auto px-3 lg:px-0">
      <CardProfile />
      <div className="mt-14 flex items-center justify-between">
        <h3 className="text-lg font-bold leading-[1.6] text-base-subtitle">
          Publicações
        </h3>
        <span className="flex items-center leading-[1.6] text-sm text-base-span">
          {issuesData.length} publicações
        </span>
      </div>
    </main>
  );
}
