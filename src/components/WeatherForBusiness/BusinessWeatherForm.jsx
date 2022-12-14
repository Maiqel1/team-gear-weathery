export default function BusinessWeatherForm() {
  return (
    <div className="WeatherForm mt-14 md:mt-24 mb-24  md:px-14">
      <div className="flex flex-col md:flex-row justify-between">
        <div className="container mx-auto text-center md:text-left pt-0 md:pt-24 pr-0 md:pr-8 md:mr-0">
          <p className="text-2xl text-[#EF6820]">Partner</p>
          <p className="text-4xl font-bold mt-5">Get Started</p>
          <p className="text-base text-center md:text-left text-[#565560] px-8 md:px-0 lg:px-0">
            Contact us to find the right plan and price for your business
          </p>
        </div>
        <form action="" className="px-4">
          <div className=" flex flex-col md:flex-row mt-10 md:mt-0 ml-4 md:ml-0">
            <div>
              <label htmlFor="name">Full Name</label>
              <br />
              <input className="w-96 md:w-80" type="text" placeholder="Doe Mavis" />
            </div>
            <div className="ml-0 md:ml-8 mt-4 md:mt-0">
              <label htmlFor="name">I Work in...</label>
              <br />
              <input className="w-96 md:w-80" type="text" placeholder="Industry Type" />
            </div>
          </div>
          <div className=" flex flex-col md:flex-row mt-4 md:mt-12 ml-4 md:ml-0">
            <div>
              <label htmlFor="name">Company Name</label>
              <br />
              <input className="w-96 md:w-80" type="text" placeholder="e.g : facebook" />
            </div>
            <div className="mt-4 md:mt-0 ml-0 md:ml-8">
              <label htmlFor="name">Company Size</label>
              <br />
              <input className="w-96 md:w-80" type="text" placeholder="e.g : 10 - 500" />
            </div>
          </div>
          <div className=" flex flex-col md:flex-row  mt-4 md:mt-12 ml-4 md:ml-0">
            <div>
              <label htmlFor="name">Company Email</label>
              <br />
              <input className="w-96 md:w-80" type="text" placeholder="yourname@company.com" />
            </div>
            <div className="mt-4 md:mt-0 ml-0 md:ml-8">
              <label htmlFor="name">Location</label>
              <br />
              <input className="w-96 md:w-80" type="text" placeholder="e.g : London" />
            </div>
          </div>
          <p className="text-base text-[#565560] text-left mt-4 ml-4 md:ml-1 mb-10 md:mb-16">
            As part of our commitment to upholding your privacy, Weathery will
            only use the personal data we collect about you to carry out the
            orders you place with us and to administer your account.
          </p>
          <button className="ml-4 md:ml-0 lg:ml-0" type="button">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
