import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import {
  faArrowUpRightFromSquare,
  faBuilding,
} from '@fortawesome/free-solid-svg-icons';
import { faUserGroup } from '@fortawesome/free-solid-svg-icons';
import { Links } from '../../../../components/ui/Link';

export function CardProfile() {
  return (
    <div className="shadow-custom bg-base-profile p-8 rounded-[10px] -mt-20 flex flex-col sm:flex-row gap-8">
      <img
        className="size-[148px] rounded-lg self-center sm:self-auto"
        src="https://avatars.githubusercontent.com/u/143346006?v=4"
        alt=""
      />
      <div className="flex flex-col mt-2">
        <div className="flex sm:justify-between flex-col sm:flex-row gap-2">
          <h2 className="text-base-title font-bold text-2xl leading-[1.3]">
            Carlos Alexandre
          </h2>
          <Links
            url="#"
            label="GITHUB"
            icon={<FontAwesomeIcon icon={faArrowUpRightFromSquare} />}
          />
        </div>

        <p className="mt-2 leading-[1.6] text-base-text">
          Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
          viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat
          pulvinar vel mass.
        </p>

        <div className="md:mt-auto flex flex-col md:flex-row items-start mt-2 gap-3 sm:gap-6 md:items-center">
          <div className="flex gap-2 items-center">
            <FontAwesomeIcon
              icon={faGithub}
              className="text-base-label size-[18px] mb-[3px]"
            />
            <span className="leading-[1.6] text-base-subtitle">
              CarlosAlexandreDevv
            </span>
          </div>

          <div className="flex gap-2 items-center">
            <FontAwesomeIcon
              icon={faBuilding}
              className="text-base-label size-[18px] mb-[3px]"
            />
            <span className="leading-[1.6] text-base-subtitle">FbUni</span>
          </div>

          <div className="flex gap-2 items-center">
            <FontAwesomeIcon
              className="text-base-label size-[18px] mb-[3px]"
              icon={faUserGroup}
            />
            <span className="leading-[1.6] text-base-subtitle">
              10 seguidores
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
