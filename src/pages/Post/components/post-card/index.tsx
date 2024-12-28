import {
  faArrowUpRightFromSquare,
  faCalendarDay,
  faChevronLeft,
  faComment,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { Links } from "../../../../components/ui/Links";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export function PostCard() {
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
          url="teste"
          label="VER NO GITHUB"
          icon={<FontAwesomeIcon icon={faArrowUpRightFromSquare} />}
        />
      </div>
      <h2 className="mt-5 text-2xl font-bold leading-[1.3] text-base-title">
        JavaScript data types and data structures
      </h2>

      <div className="mt-3.5 flex gap-8">
        <div className="flex items-center gap-2">
          <FontAwesomeIcon
            icon={faGithub}
            className="mb-[3px] size-[18px] text-base-label"
          />
          <span className="leading-[1.6] text-base-span">teste</span>
        </div>

        <div className="flex items-center gap-2">
          <FontAwesomeIcon
            icon={faCalendarDay}
            className="mb-[3px] size-[18px] text-base-label"
          />
          <span className="leading-[1.6] text-base-span">Há 1 dia</span>
        </div>

        <div className="flex items-center gap-2">
          <FontAwesomeIcon
            icon={faComment}
            className="mb-[3px] size-[18px] text-base-label"
          />
          <span className="leading-[1.6] text-base-span">5 comentarios</span>
        </div>
      </div>
    </div>
  );
}
