import React, { JSXElementConstructor, ReactElement, ReactNode } from "react";
import { useAccordion } from "../../context/useAccordion";
import AccordionHeader from "./AccordionHeader";

interface Props {
  children: ReactNode;
}

export default function Accordion({ children }: Props): ReactElement {
  const { setIsOpen }: any = useAccordion();

  const accordionContainerRef: React.RefObject<HTMLDivElement> =
    React.createRef();

  const openCloseAccordion = (): void => {
    if (accordionContainerRef.current) {
      accordionContainerRef.current.classList.toggle("max-h-0");
      accordionContainerRef.current.classList.toggle("max-h-52");
      setIsOpen((isOpen: boolean) => !isOpen);
    }
  };

  return (
    <div className="w-full mx-auto px-10">
      <div className="container bg-white dark:bg-gray-800 border border-gray-200 rounded-lg cursor-pointer">
        <AccordionHeader handleClick={openCloseAccordion} />
        <div
          className="transition-[max-height] duration-500 max-h-0 overflow-auto"
          aria-labelledby="headingOne"
          data-bs-parent="#accordionExample"
          ref={accordionContainerRef}
        >
          {children}
        </div>
      </div>
    </div>
  );
}
