import {
  faArrowUpRightFromSquare,
  faCalendarDay,
  faChevronLeft,
  faComment,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useParams } from "react-router-dom";
import { Links } from "../../../../components/ui/Links";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { useEffect, useState } from "react";
import { api } from "../../../../lib/axios";
import { formatDistanceToNowStrict } from "date-fns";
import { ptBR } from "date-fns/locale/pt-BR";
import Markdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/cjs/styles/prism";

import { SkeletonPost } from "../skeleton-post";

interface PostIssueCard {
  title: string;
  body: string;
  created_at: string;
  comments: number;
  user: {
    login: string;
  };
  html_url: string;
}

export function PostCard() {
  const { id } = useParams();
  const [postData, setPostData] = useState<PostIssueCard>({
    title: "",
    body: "",
    created_at: "",
    comments: 0,
    user: {
      login: "",
    },
    html_url: "",
  });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getPost = async () => {
      try {
        const response = await api.get(
          `/repos/CarlosAlexandredevv/Github-blog/issues/${id}`,
        );
        setPostData(response.data);
      } catch (error) {
        console.error("Erro ao buscar o post:", error);
      } finally {
        setIsLoading(false);
      }
    };
    window.scrollTo(0, 0);
    getPost();
  }, [id]);

  return (
    <>
      <main className="mx-auto max-w-wrapped px-3 pb-6 lg:px-0">
        {isLoading ? (
          <>
            <SkeletonPost />
          </>
        ) : (
          <>
            <div className="-mt-20 flex flex-col rounded-[10px] bg-base-profile p-8 shadow-custom">
              <div className="flex w-full items-center justify-between">
                <Link
                  to="/"
                  className="flex items-center gap-2 text-xs font-bold leading-[1.6] text-blue duration-300 hover:underline hover:underline-offset-4"
                >
                  <FontAwesomeIcon icon={faChevronLeft} />
                  VOLTAR
                </Link>

                <Links
                  url={postData.html_url}
                  label="VER NO GITHUB"
                  icon={<FontAwesomeIcon icon={faArrowUpRightFromSquare} />}
                />
              </div>
              <h2 className="mt-5 text-2xl font-bold leading-[1.3] text-base-title">
                {postData.title}
              </h2>

              <div className="mt-3.5 flex flex-wrap gap-8">
                <div className="flex items-center gap-2">
                  <FontAwesomeIcon
                    icon={faGithub}
                    className="mb-[3px] size-[18px] text-base-label"
                  />
                  <span className="leading-[1.6] text-base-span">
                    {postData.user.login}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <FontAwesomeIcon
                    icon={faCalendarDay}
                    className="mb-[3px] size-[18px] text-base-label"
                  />
                  <span className="leading-[1.6] text-base-span">
                    {postData.created_at
                      ? formatDistanceToNowStrict(
                          new Date(postData.created_at),
                          {
                            addSuffix: true,
                            locale: ptBR,
                          },
                        )
                      : "Data indisponível"}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <FontAwesomeIcon
                    icon={faComment}
                    className="mb-[3px] size-[18px] text-base-label"
                  />
                  <span className="leading-[1.6] text-base-span">
                    {postData.comments} comentários
                  </span>
                </div>
              </div>
            </div>

            <div>
              <Markdown
                className="post space-y-4"
                components={{
                  code: ({ className, children, ...props }) => {
                    const match = /language-(\w+)/.exec(className || "");
                    return match ? (
                      <SyntaxHighlighter language={match[1]} style={dracula}>
                        {String(children).replace(/\n$/, "")}
                      </SyntaxHighlighter>
                    ) : (
                      <code className={className} {...props}>
                        {children}
                      </code>
                    );
                  },
                }}
              >
                {postData.body}
              </Markdown>
            </div>
          </>
        )}
      </main>
    </>
  );
}
