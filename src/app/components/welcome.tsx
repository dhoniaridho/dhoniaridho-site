export function Welcome() {
  return (
    <>
      <div className="flex gap-1 flex-col p-10">
        <div className="py-20">
          <p className="text-5xl md:text-9xl font-bold">HELLO I&apos;AM</p>
          <span className="text-sm flex">
            <p className="text-5xl md:text-9xl font-bold text-sky-500">
              {" "}
              DHONIARIDHO{" "}
            </p>
            <a
              href="https://github.com/dhoniaridho"
              target="_blank"
              rel="noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                aria-hidden="true"
                role="img"
                className="icon h-16 text-sm md:text-6xl"
                style={{}}
                width="20px"
                height="20px"
                viewBox="0 0 24 24"
                data-v-3ab4a2a6
              >
                <path
                  fill="currentColor"
                  d="M12 2.247a10 10 0 0 0-3.162 19.487c.5.088.687-.212.687-.475c0-.237-.012-1.025-.012-1.862c-2.513.462-3.163-.613-3.363-1.175a3.636 3.636 0 0 0-1.025-1.413c-.35-.187-.85-.65-.013-.662a2.001 2.001 0 0 1 1.538 1.025a2.137 2.137 0 0 0 2.912.825a2.104 2.104 0 0 1 .638-1.338c-2.225-.25-4.55-1.112-4.55-4.937a3.892 3.892 0 0 1 1.025-2.688a3.594 3.594 0 0 1 .1-2.65s.837-.262 2.75 1.025a9.427 9.427 0 0 1 5 0c1.912-1.3 2.75-1.025 2.75-1.025a3.593 3.593 0 0 1 .1 2.65a3.869 3.869 0 0 1 1.025 2.688c0 3.837-2.338 4.687-4.563 4.937a2.368 2.368 0 0 1 .675 1.85c0 1.338-.012 2.413-.012 2.75c0 .263.187.575.687.475A10.005 10.005 0 0 0 12 2.247Z"
                />
              </svg>
            </a>
          </span>
        </div>
        <p className="md:text-7xl font-semibold uppercase w-fit h-fit">
          {" "}
          Building Dynamic and User-Friendly Websites with Cutting-Edge
          Technology{" "}
        </p>
        <p className="font-light mt-3">
          {" "}
          Experienced full-stack developer with a focus on Node.js, TypeScript,
          and MySQL. Skilled in both front-end and back-end development,
          utilizing Vue.js and React.js to create dynamic, user-friendly web
          applications. Committed to writing clean, maintainable code and
          delivering high-quality solutions.{" "}
        </p>
      </div>
    </>
  );
}
