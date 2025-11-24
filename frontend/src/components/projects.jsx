export default function Projects() {
  return (
    <div className="bg-white text-black h-[800px] flex justify-center">
      <div className="container px-20 flex flex-col justify-center items-center gap-20">
        <h1 className="text-[50px] font-extrabold text-gray-700">Projects</h1>
        <div className="flex justify-between w-full">
          <a
            href="https://pronexa.swivt.io/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="relative rounded-md h-[350px] w-[280px] overflow-hidden">
              <div className="hover:scale-105 transition-transform h-full overflow-hidden">
                <img
                  className="object-cover h-full w-full opacity-80 rounded-md "
                  src="./paris.JPG"
                />
                <div className="absolute top-2 left-4 z-10">
                  <p className=" font-extrabold text-green-500 text-[40px] ">
                    ProNexa
                  </p>
                  <span className=" text-white text-xl font-normal">
                    Consultancy
                  </span>
                </div>
              </div>
            </div>
          </a>
          <div className="relative rounded-md h-[350px] w-[280px] overflow-hidden">
            <div className="hover:scale-105 transition-transform h-full overflow-hidden">
              <img
                className="object-cover h-full w-full rounded-md hover:scale-110 transition-transform "
                src="./polaroid.jpg"
              />
              <div className="absolute top-3 left-5 z-10 text-sky-600 text-[20px] ">
                <p className="text-sky-600 text-[20px] font-bold">Joy</p>
                <p className="font-bold">Ride</p>
                <p className="font-bold">Sn@ps</p>
              </div>
            </div>
          </div>
          <div className="relative rounded-md h-[350px] w-[280px] overflow-hidden">
            <div className="hover:scale-105 transition-transform h-full overflow-hidden">
              <img
                className="object-cover h-full w-full rounded-md hover:scale-105 transition-transform "
                src="./son7.jpeg"
              />
              <div className="absolute top-2 left-4 z-10 ">
                <p className="font-extrabold text-red-600 text-[35px] ">NN</p>
              </div>
              <div className="absolute bottom-2 left-4 z-10 ms-2">
                <p className="text-[20px] text-gray-800 ms-20">NewNews</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
