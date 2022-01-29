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
      document.querySelector("#__next")?.classList.add("opacity-20");
    } else {
      document.querySelector("#__next")?.classList.remove("opacity-20");
    }
    return () =>
      document.querySelector("#__next")?.classList.remove("opacity-20");
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
      className="fixed top-2/4 left-2/4 h-auto w-3/4 sm:w-3/4 lg:max-w-fit  border-gray-1 rounded-xl bg-gray-100 sm:p-5 text-center text-xl duration-500 animate-slideUp"
    >
      <div className="m-2 sm:m-10">
        <h2 className="font-bold pt-8 text-3xl sm:text-5xl">
          {" "}
          {data.region || data.name}
        </h2>
        <div className="flex flex-row flex-wrap max-w-3xl justify-center items-center gap-5 sm:gap-10 py-16">
          {Object.entries(data).map(([field, value], idx) => {
            if (keyToSkip.find((key) => key === field)) return;
            return (
              <div
                key={idx}
                className="flex flex-col w-36 gap-2 justify-center text-center"
              >
                <b className="uppercase text-xl md:text-3xl">{field}</b>
                <span className="md:text-2xl text-xl">{value}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
