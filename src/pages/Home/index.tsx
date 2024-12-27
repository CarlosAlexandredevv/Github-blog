import { useContext } from "react";
import { CardProfile } from "./components/card-profile";
import { ProfileContext } from "../../context/ProfileContext";
import { Input } from "../../components/ui/Input";
import { CardIssues } from "../../components/ui/CardIssues";
import { formatDistanceToNowStrict } from "date-fns";
import { ptBR } from "date-fns/locale/pt-BR";
import ReactMarkdown from "react-markdown";

export function Home() {
  const { issuesData } = useContext(ProfileContext);
  return (
    <main className="mx-auto max-w-wrapped px-3 pb-6 lg:px-0">
      <CardProfile />

      <div className="mt-14 flex items-center justify-between">
        <h3 className="text-lg font-bold leading-[1.6] text-base-subtitle">
          Publicações
        </h3>
        <span className="flex items-center text-sm leading-[1.6] text-base-span">
          {issuesData.length} publicações
        </span>
      </div>

      <form className="mt-4">
        <Input />
      </form>

      <div className="mt-6 grid gap-3 md:grid-cols-2">
        {issuesData.map((issue) => (
          <CardIssues
            key={issue.id}
            title={issue.title}
            created_at={formatDistanceToNowStrict(new Date(issue.created_at), {
              addSuffix: true,
              locale: ptBR,
            })}
            body={
              <ReactMarkdown>
                {issue.body.substring(0, 200) + "..."}
              </ReactMarkdown>
            }
          />
        ))}
      </div>
    </main>
  );
}
