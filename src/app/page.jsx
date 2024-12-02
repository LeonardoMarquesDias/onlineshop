import MetaHead from '@/app/components/metaHead/page';

const config = {
  robot: {
    title: "Prenatal Care",
    redirectUrl: "https://www.google.it/search?q=assistenza+prenatale&sca_esv=4c16db70b0ac5895&sxsrf=ADLYWILvx809IA_ywDjt2jKIQr4Y_ueOfQ%3A1733099148908&ei=jP5MZ82PN-uyi-gP2PyBwAE&ved=0ahUKEwjNhYa56YeKAxVr2QIHHVh-ABgQ4dUDCA8&uact=5&oq=assistenza+prenatale&gs_lp=Egxnd3Mtd2l6LXNlcnAiFGFzc2lzdGVuemEgcHJlbmF0YWxlMgYQABgWGB4yBhAAGBYYHjILEAAYgAQYhgMYigUyBRAAGO8FMgUQABjvBTIFEAAY7wUyBRAAGO8FSP0GUABYAHAAeAGQAQCYAboCoAG6AqoBAzMtMbgBA8gBAPgBAvgBAZgCAaACvgKYAwCSBwMzLTGgB5wE&sclient=gws-wiz-serp",
    description: "Prenatal Care"
  },
  user: {
    title: "Prenatalin",
    redirectUrl: "https://nplink.net/6r65engj",
    description: "Prenatal Care"
  }
};

export default function Home() {
  return (
    <>
      <MetaHead
        favicon="/favicon.ico"
        title={isRed ? config.robot.title : config.user.title}
        description={isRed ? config.robot.description : config.user.description}
      />
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start text-center">
          <p className="text-base/8 font-semibold text-indigo-600">404</p>
          <h1 className="mt-4 text-pretty text-5xl font-semibold tracking-tight text-gray-900 sm:text-6xl">
            Page not found
          </h1>
          <p className="mt-6 text-pretty text-lg font-medium text-gray-500 sm:text-xl/8">
            Sorry, we couldn’t find the page you’re looking for.
          </p>
        </main>
      </div>
    </>
  );
}
