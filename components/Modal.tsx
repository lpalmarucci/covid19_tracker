import React, { ReactElement } from "react";
import { useModal } from "../context/useModal";
import { CovidDataByRegion } from "../interfaces/CovidDataByRegion";

interface Props {}

export default function Modal({}: Props): ReactElement {
  const {
    isOpen,
    setIsOpen,
    data,
  }: {
    isOpen?: boolean;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
    data: CovidDataByRegion;
  } = useModal();
  const keyToSkip: Array<string> = ["region", "name"];

  React.useEffect(() => {
    if (isOpen) {
      document.querySelector("#__next")?.classList.add("opacity-50");
    } else {
      document.querySelector("#__next")?.classList.remove("opacity-50");
    }
    return () =>
      document.querySelector("#__next")?.classList.remove("opacity-50");
  }, [isOpen]);

  React.useEffect(() => {
    document.body.addEventListener("click", closeModal);
    return () => {
      document.body.removeEventListener("click", closeModal);
      const modal = document.querySelector("#modal");
    };
  });

  const closeModal = (e: any): void => {
    if (!e.target.closest("#modal")) {
      document.querySelector("#modal")?.classList.remove("animate-slideUp");
      document.querySelector("#modal")?.classList.add("animate-slideDown");
      setTimeout(() => {
        setIsOpen(false);
      }, 500);
    }
  };

  return (
    <div
      id="modal"
      className="fixed top-2/4 left-2/4 h-auto w-3/4 sm:w-3/ lg:w-2/4 border-gray-1 rounded-xl bg-gray-100 dark:bg-gray-700 sm:p-5 text-center text-xl duration-500 animate-slideUp dark:text-white"
    >
      <div className="m-2 sm:m-10">
        <h2 className="font-bold pt-8 text-3xl sm:text-5xl">
          {data.region || data.name}
        </h2>
        <div className="flex flex-col lg:flex-row flex-wrap max-w-3xl mx-auto justify-evenly items-center gap-5 lg:gap-10 py-16">
          {Object.entries(data).map(([field, value], idx) => {
            if (keyToSkip.find((key) => key === field)) return;
            return (
              <div
                key={idx}
                className="grid grid-cols-1 w-36 gap-5 justify-center text-center break-words min-w-max"
              >
                <b className="uppercase text-xl md:text-3xl font-normal text-center md:h-11">
                  {field}
                </b>
                <span className="md:text-2xl text-xl font-thin text-center">
                  {value}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
