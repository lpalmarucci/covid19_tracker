import React, { ReactElement } from "react";
import { useModal } from "../context/useModal";
import { CovidDataByRegion } from "../interfaces/CovidDataByRegion";
import Modal from "./Modal";

interface Props {
  data: CovidDataByRegion;
}

export default function InfectedByRegion({ data }: Props): ReactElement {
  const { setIsOpen: setModalOpen, setData: setDataModel } = useModal();

  const showModal = (): void => {
    setModalOpen(true);
    setDataModel(data);
  };

  return (
    <div className="accordion-body py-4 px-5 border-b border-gray-300 mb-2 last:border-b-0 flex justify-between items-center">
      <h2 className="dark:text-white">{data.region || data.name}</h2>
      <span className="text-gray-400 hover:underline" onClick={showModal}>
        View Data
      </span>
    </div>
  );
}
