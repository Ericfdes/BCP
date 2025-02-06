import kitchen1 from "../assets/commerical-kitchen.jpg";

export default function Main() {
  return (
    <div className="grotesk max-w-8xl mx-auto ">
      <section className="w-full text-black bg-theme-1">
        <div className="max-w-8xl mx-auto inline-block items-center p-3 pt-0 lg:flex lg:flex-wrap lg:pt-4">
          <div className="lg:w-3/6">
            <h2 className="max-w-xl lg:text-[4.2em] text-3xl font-bold leading-none text-black inline-block">
              Precision in Fabrication, Excellence in Performance
            </h2>

            <p className="mt-6 max-w-2xl text-xl font-semibold text-[#404040]">
              We specialize in manufacturing high-quality commercial kitchen
              equipment, gas stoves, hot plates, and commercial gas pipeline
              systems. With a commitment to durability and safety, our solutions
              are designed to meet the needs of restaurants, hotels, and
              industrial kitchens.
            </p>
          </div>
          <div className="mb-20 mt-44 hidden w-full flex-col lg:mt-12 lg:inline-block lg:w-3/6">
            <img src={kitchen1} alt="Commercial Kitchen Equipment" />
          </div>
          <div className="my-20 inline-block w-full flex-col lg:mt-0 lg:hidden lg:w-2/5">
            <img
              src="/images/commercial-kitchen-fabrication.jpg"
              alt="Commercial Kitchen Setup"
            />
          </div>
        </div>
        <div className="mt-0 lg:mt-40">
          <div className="mx-auto">
            <div className="mx-auto px-5 py-24 lg:px-24">
              <div className="my-10 flex w-full flex-col text-center">
                <h2 className="mb-5 text-2xl font-bold text-black lg:text-3xl">
                  Trusted by Leading Businesses for Quality Fabrication
                </h2>
              </div>
              <div
                className="
        grid grid-cols-2
        gap-16
        text-center
        lg:grid-cols-6"
              >
                <div className="hidden items-center justify-center lg:inline-block">
                  <img
                    src="/images/restaurant.png"
                    alt="Restaurant Kitchen Setup"
                    className="block h-24 object-contain"
                  />
                </div>
                <div className="hidden items-center justify-center lg:inline-block">
                  <img
                    src="/images/hotel.png"
                    alt="Hotel Kitchen Equipment"
                    className="block h-24 object-contain"
                  />
                </div>
                <div className="flex items-center justify-center">
                  <img
                    src="/images/catering.png"
                    alt="Catering Equipment"
                    className="block h-24 object-contain"
                  />
                </div>
                <div className="flex items-center justify-center">
                  <img
                    src="/images/industrial-kitchen.png"
                    alt="Industrial Kitchen"
                    className="block h-24 object-contain"
                  />
                </div>
                <div className="hidden items-center justify-center lg:inline-block">
                  <img
                    src="/images/gas-pipelines.png"
                    alt="Gas Pipeline Installation"
                    className="block h-24 object-contain"
                  />
                </div>
                <div className="hidden items-center justify-center lg:inline-block">
                  <img
                    src="/images/pressure-testing.png"
                    alt="Pressure Testing Services"
                    className="block h-24 object-contain"
                  />
                </div>
              </div>
              <div className="my-12 flex w-full flex-col pl-8 text-center">
                <a
                  href="/"
                  className="underline-blue mb-8 mt-6 text-xl font-bold text-black"
                >
                  Learn More About Our Services
                </a>
              </div>
            </div>
          </div>
          <div className="text-black">
            <div className="max-w-9xl mx-auto flex flex-col items-center justify-center px-5">
              <div className="mr-0 mb-6 w-full py-4 text-center lg:w-2/3">
                <h2 className="mb-4 text-4xl font-bold sm:text-5xl">
                  Engineered for Performance and Reliability
                </h2>
                <p className="mb-4 text-lg leading-relaxed">
                  Our expertise in commercial kitchen equipment, gas pipeline
                  installations, and pressure testing ensures that every product
                  meets the highest safety and quality standards. Whether you're
                  setting up a restaurant, hotel, or industrial kitchen, we
                  provide tailored solutions to match your needs.
                </p>
                <a href="/" className="underline-blue font-semibold">
                  Explore Our Products
                </a>
              </div>
              <img
                className="
        lg:w-5/7
        mb-40
        hidden
        w-5/6
        rounded object-cover
        object-center
        lg:inline-block 
        lg:w-4/6
      "
                src="/images/fabrication-process.jpg"
                alt="Fabrication Process"
              />

              <img
                className="
      mb-24
      inline-block
      w-5/6
      rounded
      object-cover object-center
      lg:hidden
      lg:w-4/6 
    "
                src="/images/fabrication-process.jpg"
                alt="Fabrication Work"
              />
            </div>
          </div>
        </div>

        <div className="mx-auto px-5 pt-32 pb-24 lg:px-24">
          <div className="my-3 flex w-full flex-col text-left lg:text-center">
            <h2 className="bold mb-8 text-4xl font-bold leading-tight text-black lg:text-6xl">
              Elevate Your Kitchen Efficiency,
              <br className="hidden lg:inline-block" />
              with Precision & Innovation.
            </h2>
          </div>
          <div className="flex w-full flex-col text-left lg:text-center">
            <h3 className="text-2xl text-black">
              Discover top-tier commercial kitchen solutions designed for
              durability,
              <br className="hidden lg:inline-block" />
              efficiency, and seamless performance. Engineered for excellence,
              built to last.
            </h3>
          </div>
          <div className="flex w-full flex-row justify-center pt-24 text-center">
            <a
              href="/services"
              className="underline-blue px-8 text-xl font-semibold text-black"
            >
              Explore Our Services
            </a>
            <a
              href="/contact"
              className="underline-gray px-6 text-xl font-semibold text-gray-700"
            >
              Get in Touch
            </a>
          </div>
        </div>
        {/* redundant image here idk what */}
        {/* <div className="invisible mx-auto flex max-w-6xl p-3 pb-32 lg:visible lg:px-2">
            <img src="/images/placeholder.png" alt="img" />
          </div> */}

        <div className="bg-white text-black">
          <div className="mx-auto flex flex-col items-center px-5 pt-56 lg:flex-row">
            <div className="mb-16 flex flex-col text-left lg:mb-0 lg:w-1/2 lg:flex-grow lg:items-start lg:pr-16 lg:pr-6">
              <h2 className="mb-4 text-4xl font-bold leading-none sm:text-5xl">
                Precision Engineering for Reliable Kitchen Solutions.
              </h2>
              <p className="font-3xl mb-8 font-semibold leading-relaxed">
                We specialize in high-quality commercial kitchen fabrication,
                gas pipelines, and pressure testing services. Our solutions are
                designed for efficiency, durability, and compliance with
                industry standards. Elevate your kitchen operations with expert
                craftsmanship and innovation.
              </p>
            </div>
            <div className="lg:w-full lg:max-w-2xl">
              <img
                src="/images/kitchen-fabrication.jpg"
                alt="Commercial Kitchen Equipment"
              />
            </div>
          </div>

          {/* <div className="mt-32">
            <div className="mx-auto flex flex-col px-5 py-24 text-left lg:flex-row">
              <div className="hidden lg:inline-block lg:w-full lg:max-w-xl">
                <img src="/images/placeholder.png" alt="img" />
              </div>
              <div className="flex flex-col pt-0 text-left lg:w-1/2 lg:flex-grow lg:items-start lg:pl-16 lg:pl-24 lg:pt-24">
                <h2 className="mb-4 text-4xl font-bold leading-none sm:text-5xl">
                  Eu diam in magna blandit sit magna dolor proin velit.
                </h2>
                <p className="mb-8 font-semibold leading-relaxed text-black">
                  Lorem ipsum ac neque, consectetur adipiscing elit. Nibh neque,
                  ut purus donec sed donec semper ac vestibulum. Mi urna,
                  facilisis arcu, auctor elit. Ut nunc non aenean netus ut.
                </p>
              </div>
              <div className="inline-block lg:hidden lg:w-full lg:max-w-xl">
                <img src="/images/placeholder.png" alt="img" />
              </div>
            </div>
          </div> */}
          <div className="my-24 p-4 text-black">
            <div className="max-w-9xl mx-auto flex flex-col items-center bg-gradient-to-r from-blue-200 to-blue-100 px-5 py-24 lg:flex-row">
              <div className="flex flex-col items-center pb-16 pl-0 text-center lg:mb-0 lg:w-1/2 lg:flex-grow lg:items-start lg:pl-12 lg:pr-24 lg:text-left">
                <h2 className="pb-4 text-2xl font-bold leading-tight lg:text-4xl">
                  High-Quality Commercial Kitchen Equipment & Gas Pipeline
                  Solutions
                </h2>
                <p className="text-md mb-8 lg:text-xl">
                  We specialize in manufacturing premium commercial kitchen
                  equipment, including gas stoves, hot plates, deep fryers,
                  tandoors, and more. Our expertise extends to commercial gas
                  pipeline installations and pressure testing, ensuring safety
                  and efficiency for your business.
                </p>
                <a
                  href="/contact"
                  className="mt-4 rounded-lg bg-blue-600 px-6 py-3 text-lg font-semibold text-white shadow-lg hover:bg-blue-700"
                >
                  Get a Free Consultation
                </a>
              </div>
              <div className="w-4/7 pr-12 lg:w-2/5">
                <img
                  src="/images/commercial-kitchen.jpg"
                  className="hidden object-cover object-center lg:inline-block"
                  alt="Commercial Kitchen Equipment"
                />
                <img
                  src="/images/commercial-kitchen.jpg"
                  className="inline-block object-cover object-center lg:hidden"
                  alt="Commercial Kitchen Equipment"
                />
              </div>
            </div>
          </div>

          {/* <div className="mx-auto">
              <div className="max-w-8xl mx-auto px-5 py-24 lg:px-24">
                <div className="my-6 flex w-full flex-col text-left lg:text-center">
                  <h3 className="mb-8 text-5xl font-bold text-black">
                    Dui tellus quis magna id ultricies eu sed.
                  </h3>
                  <h3 className="mb-12 px-0 text-lg font-semibold text-gray-900 lg:px-52">
                    Lorem ipsum accumsan arcu, consectetur adipiscing elit.
                    Aliquet vestibulum molestie amet, maecenas id amet. Ipsum
                    accumsan arcu, aenean viverra penatibus quis. Laoreet.
                  </h3>
                </div>
                <img src="/images/placeholder.png" alt="img" />
              </div>
            </div>
            <div className="text-black">
              <div className="max-w-8xl mx-auto flex flex-col px-5 py-48 text-black lg:flex-row">
                <div className="lg:mb-0 lg:w-full lg:max-w-xl">
                  <img
                    className="rounded object-cover object-center"
                    alt="image"
                    src="/images/placeholder1.png"
                  />
                </div>
                <div className="items-left flex flex-col pt-16 text-left lg:w-1/2 lg:flex-grow lg:items-start lg:pl-32 lg:pl-48 lg:text-left">
                  <h2 className="mb-2 text-lg leading-tight text-gray-700 sm:text-lg">
                    Viverra enim diam gravida risus nisl.
                  </h2>
                  <h2 className="mb-6 text-lg font-bold sm:text-lg">
                    Lectus eu.
                  </h2>
                  <h2 className="mb-4 text-3xl font-bold sm:text-3xl">
                    Lorem ipsum accumsan arcu, consectetur adipiscing elit. Sed
                    eget enim vel.
                  </h2>
                  <a
                    href="/"
                    className="underline-blue mt-12 text-lg font-bold leading-relaxed"
                  >
                    Ut convallis massa.
                  </a>
                </div>
              </div>
            </div> */}
        </div>
      </section>
    </div>
  );
}
