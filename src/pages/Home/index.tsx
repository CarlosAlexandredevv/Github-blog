import { useContext, useEffect, useState } from "react";
import { CardProfile } from "./components/card-profile";
import { ProfileContext } from "../../context/ProfileContext";
import { Input } from "../../components/ui/Input";
import { CardIssues } from "../../components/ui/CardIssues";
import { formatDistanceToNowStrict } from "date-fns";
import { ptBR } from "date-fns/locale/pt-BR";
import ReactMarkdown from "react-markdown";
import { api } from "../../lib/axios";
import { Link } from "react-router-dom";
import { SkeletonHome } from "./components/skeleton-home";

export function Home() {
  const { issuesData, setIssuesData } = useContext(ProfileContext);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async (query: string) => {
      const response = await api.get(
        `/search/issues?q=${query}+repo:CarlosAlexandredevv/Github-blog`,
      );
      setIssuesData(response.data.items);
      setIsLoading(false);
    };

    const timer = setTimeout(() => {
      fetchData(input);
    }, 500);

    return () => clearTimeout(timer);
  }, [input, setIssuesData]);

  return (
    <main className="mx-auto max-w-wrapped px-3 pb-6 lg:px-0">
      {isLoading ? (
        <>
          <SkeletonHome />
        </>
      ) : (
        <>
          <CardProfile />

          <div className="mt-14 flex items-center justify-between">
            <h3 className="text-lg font-bold leading-[1.6] text-base-subtitle">
              Publicações
            </h3>
            <span className="flex items-center text-sm leading-[1.6] text-base-span">
              {issuesData.length} publicações
            </span>
          </div>

          <div className="mt-4">
            <Input
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setInput(e.target.value)
              }
            />
          </div>

          <div className="mt-6 grid gap-3 md:grid-cols-2">
            {issuesData.map((issue) => (
              <Link to={`/post/${issue.number}`} key={issue.number}>
                <CardIssues
                  title={issue.title}
                  created_at={formatDistanceToNowStrict(
                    new Date(issue.created_at),
                    {
                      addSuffix: true,
                      locale: ptBR,
                    },
                  )}
                  body={
                    <ReactMarkdown>
                      {issue.body.substring(0, 200) + "..."}
                    </ReactMarkdown>
                  }
                />
              </Link>
            ))}
          </div>
        </>
      )}
    </main>
  );
}
