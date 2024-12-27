import { createContext, useEffect, useState } from "react";
import { api } from "../lib/axios";

interface ProfileData {
  avatar_url?: string;
  name: string;
  username: string;
  bio: string;
  company: string;
  followers: number;
  url: string;
}

interface IssuesData {
  id: number;
  title: string;
  created_at: string;
  body: string;
  comments: number;
}

interface ApiIssueData {
  id: number;
  title: string;
  created_at: string;
  body: string;
  comments: number;
}

interface ProfileContextType {
  profileData: ProfileData;
  issuesData: IssuesData[];
}

export const ProfileContext = createContext({} as ProfileContextType);

interface ProfileContextProviderProps {
  children: React.ReactNode;
}

export function ProfileContextProvider({
  children,
}: ProfileContextProviderProps) {
  const [profileData, SetProfileData] = useState<ProfileData>({
    avatar_url: "",
    name: "",
    username: "",
    bio: "",
    company: "",
    followers: 0,
    url: "",
  });

  const [issuesData, setIssuesData] = useState<IssuesData[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await api.get("/users/carlosalexandredevv");
      SetProfileData({
        avatar_url: response.data.avatar_url,
        name: response.data.name,
        username: response.data.login,
        bio: response.data.bio || "Sem bio",
        company: response.data.company || "Sem empresa",
        followers: response.data.followers,
        url: response.data.html_url,
      });
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchIssues = async () => {
      const response = await api.get(
        "/repos/CarlosAlexandredevv/Github-blog/issues",
      );
      setIssuesData(
        response.data.map((issue: ApiIssueData) => ({
          id: issue.id,
          title: issue.title,
          created_at: issue.created_at,
          body: issue.body,
          comments: issue.comments,
        })),
      );
    };

    fetchIssues();
  }, []);

  return (
    <ProfileContext.Provider value={{ profileData, issuesData }}>
      {children}
    </ProfileContext.Provider>
  );
}
