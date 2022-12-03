import Header from "../components/Header";
import Link from "next/link";

export default function Custom404() {
  return (
    <>
      <Header />
      <div className="w-full bg-white dark:bg-gray-800 dark:text-white">
        <div className="container flex justify-center flex-col items-center min-h-screen mx-auto">
          <h1 className="text-3xl font-bold mt-10">
            The resource you&apos;re trying to retrieve doesn&apos;t exists
          </h1>
          <h3 className="text-lg text-center m-10">
            Return to&nbsp;
            <Link href="/" passHref>
              <a className="transition-all hover:underline hover:font-bold">
                Home
              </a>
            </Link>
          </h3>
        </div>
      </div>
    </>
  );
}
