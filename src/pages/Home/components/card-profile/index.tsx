import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import {
  faArrowUpRightFromSquare,
  faBuilding,
} from '@fortawesome/free-solid-svg-icons';
import { faUserGroup } from '@fortawesome/free-solid-svg-icons';
import { Links } from '../../../../components/ui/Link';
import { useContext } from 'react';
import { ProfileContext } from '../../../../context/ProfileContext';

export function CardProfile() {
  const { profileData } = useContext(ProfileContext);

  return (
    <div className="shadow-custom bg-base-profile p-8 rounded-[10px] -mt-20 flex flex-col sm:flex-row gap-8">
      <img
        className="size-[148px] rounded-lg self-center sm:self-auto"
        src={profileData.avatar_url}
        alt=""
      />
      <div className="flex flex-col mt-2 w-full">
        <div className="flex sm:justify-between flex-col sm:flex-row gap-2">
          <h2 className="text-base-title font-bold text-2xl leading-[1.3]">
            {profileData.name}
          </h2>
          <Links
            url={profileData.url}
            label="GITHUB"
            icon={<FontAwesomeIcon icon={faArrowUpRightFromSquare} />}
          />
        </div>

        <p className="mt-2 leading-[1.6] text-base-text">{profileData.bio}</p>

        <div className="md:mt-auto flex flex-col md:flex-row items-start mt-2 gap-3 sm:gap-6 md:items-center">
          <div className="flex gap-2 items-center">
            <FontAwesomeIcon
              icon={faGithub}
              className="text-base-label size-[18px] mb-[3px]"
            />
            <span className="leading-[1.6] text-base-subtitle">
              {profileData.username}
            </span>
          </div>

          <div className="flex gap-2 items-center">
            <FontAwesomeIcon
              icon={faBuilding}
              className="text-base-label size-[18px] mb-[3px]"
            />
            <span className="leading-[1.6] text-base-subtitle">
              {profileData.company}
            </span>
          </div>

          <div className="flex gap-2 items-center">
            <FontAwesomeIcon
              className="text-base-label size-[18px] mb-[3px]"
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
