import React, { ReactElement } from "react";
import { CovidData } from "../interfaces/CovidData";
import CardContainer from "./CardContainer";

interface Props {
  data: CovidData;
  countryName: string;
}

export default function Dataset({ data, countryName }: Props): ReactElement {
  const notFormattedDate: string | any = data?.lastUpdatedAtSource || data?.lastUpdatedAtApify;
  const date = new Date(notFormattedDate);
  const formattedDate = date.toLocaleDateString() + " " + date.toLocaleTimeString();

  return (
    <div className="w-full h-full min-h-[1000px]">
      <div className="container py-20 mx-auto h-full">
        <h1 className="text-5xl font-bold text-center pt-5 dark:text-white">
          {countryName}
        </h1>
        <h3 className="italic text-center mt-4 text-gray-500">
          Ultimo aggiornamento: {formattedDate}
        </h3>
        <CardContainer data={data} />
      </div>
    </div>
  );
}
