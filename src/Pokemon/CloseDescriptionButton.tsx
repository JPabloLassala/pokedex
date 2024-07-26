import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function CloseDescriptionButon({ onClose }: { onClose: () => void }) {
  return (
    <div className="absolute  aspect-square self-end hover:cursor-pointer" onClick={onClose}>
      <FontAwesomeIcon
        icon={faXmark}
        className="mx-4 mt-2 h-8 text-stone-600 hover:text-stone-950"
      />
    </div>
  );
}
