const Services = () => {
    return (
      <div className="services-container py-10">
        <h1 className="text-3xl text-center font-bold mb-6">Our Services</h1>
        <div className="service-list grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="service-item p-4 border rounded-lg shadow">
            <h2 className="text-xl font-semibold">LPG Pipeline Installation</h2>
            <p>We install pipelines for commercial kitchens, ensuring safety and efficiency.</p>
          </div>
          {/* Add more services */}
        </div>
      </div>
    );
  };
  
  export default Services;
      