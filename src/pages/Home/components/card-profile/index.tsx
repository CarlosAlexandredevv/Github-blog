import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import {
  faArrowUpRightFromSquare,
  faBuilding,
} from "@fortawesome/free-solid-svg-icons";
import { faUserGroup } from "@fortawesome/free-solid-svg-icons";
import { Links } from "../../../../components/ui/Links";
import { useContext } from "react";
import { ProfileContext } from "../../../../context/ProfileContext";

export function CardProfile() {
  const { profileData } = useContext(ProfileContext);

  return (
    <div className="-mt-20 flex flex-col gap-8 rounded-[10px] bg-base-profile p-8 shadow-custom sm:flex-row">
      <img
        className="size-[148px] self-center rounded-lg sm:self-auto"
        src={profileData.avatar_url}
        alt=""
      />
      <div className="mt-2 flex w-full flex-col">
        <div className="flex flex-col gap-2 sm:flex-row sm:justify-between">
          <h2 className="text-2xl font-bold leading-[1.3] text-base-title">
            {profileData.name}
          </h2>
          <Links
            url={profileData.url}
            label="GITHUB"
            icon={<FontAwesomeIcon icon={faArrowUpRightFromSquare} />}
          />
        </div>

        <p className="mt-2 leading-[1.6] text-base-text">{profileData.bio}</p>

        <div className="mt-2 flex flex-wrap items-start gap-3 sm:gap-6 md:mt-auto md:flex-row md:items-center">
          <div className="flex items-center gap-2">
            <FontAwesomeIcon
              icon={faGithub}
              className="mb-[3px] size-[18px] text-base-label"
            />
            <span className="leading-[1.6] text-base-subtitle">
              {profileData.username}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <FontAwesomeIcon
              icon={faBuilding}
              className="mb-[3px] size-[18px] text-base-label"
            />
            <span className="leading-[1.6] text-base-subtitle">
              {profileData.company}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <FontAwesomeIcon
              className="mb-[3px] size-[18px] text-base-label"
              icon={faUserGroup}
            />
            <span className="leading-[1.6] text-base-subtitle">
              {profileData.followers} seguidores
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
