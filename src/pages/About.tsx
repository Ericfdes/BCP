const About = () => {
    return (
      <div className="contact-container py-10">
        <h1 className="text-3xl text-center font-bold mb-6">Contact Us</h1>
        <form className="max-w-lg mx-auto p-4 border rounded-lg shadow">
          <div className="mb-4">
            <label className="block text-gray-700">Name</label>
            <input type="text" className="w-full border rounded p-2" placeholder="Your Name" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input type="email" className="w-full border rounded p-2" placeholder="Your Email" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Message</label>
            <textarea className="w-full border rounded p-2" placeholder="Your Message"></textarea>
          </div>
          <button type="submit" className="bg-blue-500 text-white p-2 rounded">Send</button>
        </form>
      </div>
    );
  };
  
  export default About;
  