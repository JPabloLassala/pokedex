import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons/faArrowLeft";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function CloseDescriptionButon({ onClose }: { onClose: () => void }) {
  return (
    <div
      className="absolute aspect-square self-start md:self-end hover:cursor-pointer"
      onClick={onClose}
    >
      <FontAwesomeIcon
        icon={faXmark}
        className="hidden md:inline mx-4 mt-2 h-8 text-stone-600 hover:text-stone-950"
      />
      <FontAwesomeIcon
        icon={faArrowLeft}
        className="md:hidden mx-4 mt-2 h-8 text-stone-600 hover:text-stone-950"
      />
    </div>
  );
}
