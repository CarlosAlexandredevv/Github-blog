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

interface PostIssueCard {
  title: string;
  body: string;
  created_at: string;
  comments: number;
  user: {
    login: string;
  };
  htmlUrl: string;
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
    htmlUrl: "",
  });

  useEffect(() => {
    const getPost = async () => {
      const response = await api.get(
        `/repos/CarlosAlexandredevv/Github-blog/issues/${id}`,
      );
      setPostData(response.data);
    };
    getPost();
  }, [id, setPostData]);

  return (
    <div className="-mt-20 flex flex-col rounded-[10px] bg-base-profile p-8 shadow-custom">
      <div className="flex w-full items-center justify-between">
        <Link
          to={"/"}
          className="flex items-center gap-2 text-xs font-bold leading-[1.6] text-blue duration-300 hover:underline hover:underline-offset-4"
        >
          <FontAwesomeIcon icon={faChevronLeft} />
          VOLTAR
        </Link>

        <Links
          url={postData.htmlUrl}
          label="VER NO GITHUB"
          icon={<FontAwesomeIcon icon={faArrowUpRightFromSquare} />}
        />
      </div>
      <h2 className="mt-5 text-2xl font-bold leading-[1.3] text-base-title">
        {postData.title}
      </h2>

      <div className="mt-3.5 flex gap-8">
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
              ? formatDistanceToNowStrict(new Date(postData.created_at), {
                  addSuffix: true,
                  locale: ptBR,
                })
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
  );
}