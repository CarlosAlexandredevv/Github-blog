import { createContext, useEffect, useState } from 'react';
import { api } from '../lib/axios';

interface ProfileData {
  avatar_url?: string;
  name: string;
  username: string;
  bio: string;
  company: string;
  followers: number;
  url: string;
}

interface ProfileContextType {
  profileData: ProfileData;
}

export const ProfileContext = createContext({} as ProfileContextType);

interface ProfileContextProviderProps {
  children: React.ReactNode;
}

export function ProfileContextProvider({
  children,
}: ProfileContextProviderProps) {
  const [profileData, SetProfileData] = useState<ProfileData>({
    avatar_url: '',
    name: '',
    username: '',
    bio: '',
    company: '',
    followers: 0,
    url: '',
  });

  console.log(profileData);

  useEffect(() => {
    const fetchData = async () => {
      const response = await api.get('/users/carlosalexandredevv');
      SetProfileData({
        avatar_url: response.data.avatar_url,
        name: response.data.name,
        username: response.data.login,
        bio: response.data.bio || 'No bio',
        company: response.data.company || 'No company',
        followers: response.data.followers,
        url: response.data.html_url,
      });
    };

    fetchData();
  }, []);

  return (
    <ProfileContext.Provider value={{ profileData }}>
      {children}
    </ProfileContext.Provider>
  );
}
