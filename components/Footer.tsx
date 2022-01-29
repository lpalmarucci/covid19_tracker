import React, { ReactElement } from "react";

interface Props {}

export default function Footer({}: Props): ReactElement {
  return (
    <div className="w-full bg-white border-t-2  border-t-gray-200 dark:border-gray-500 p-6 text-center flex flex-col gap-y-1 items-center justify-center dark:bg-gray-800">
      <h1 className="text-2xl text-gray-500 dark:text-white">
        © Copiright 2022 Il Principato{" "}
      </h1>
      <span className="text-md text-gray-500 dark:text-gray-300">
        Fonte:{" "}
        <a
          className="underline hover:text-gray-400"
          href="https://apify.com/covid-19"
        >
          Apify
        </a>
      </span>
    </div>
  );
}
