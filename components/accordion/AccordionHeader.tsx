import React, { Dispatch, ReactElement } from "react";
import { useAccordion } from "../../context/accordion.context";

interface Props {
  handleClick: () => void;
}

interface AccordionInterface {
  isOpen: boolean;
  setIsOpen: Dispatch<React.SetStateAction<boolean>>;
}

export default function AccordionHeader({ handleClick }: Props): ReactElement {
  const { isOpen, setIsOpen }: any = useAccordion();

  return (
    <>
      <h2
        className="mb-0 flex items-center justify-between"
        onClick={handleClick}
      >
        <button
          className="text-lg relative flex items-center w-full py-4 px-5  text-left  border-0 rounded-none transition focus:outline-none dark:text-white"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseOne"
          aria-expanded="true"
          aria-controls="collapseOne"
        >
          Dati per regione
        </button>
        <div
          className={`w-5 h-5 border-t-2 border-l-2 border-gray-300 transition-all delay-100 duration-300 m-6 mt-9
                    ${isOpen ? "-rotate-135 mt-1" : "rotate-45 "}`}
        ></div>
      </h2>
    </>
  );
}
