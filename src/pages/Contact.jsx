// Contact Component
export const Contact = () => {
  const handleFormSubmit = (formData) => {
    const formInputData = Object.fromEntries(formData.entries());
    console.log(formInputData);
  };

  return (
    <section className="my-24">
      <h2 className="text-center mb-10 text-4xl text-white font-semibold">Contact Us</h2>

      <div className="max-w-7xl mx-auto flex justify-center">
        <form action={handleFormSubmit} className="flex flex-col gap-8 w-full max-w-2xl">
          <input
            type="text"
            className="font-urbanist bg-black text-base text-white rounded p-4 border border-white/40 outline-none placeholder:text-gray-500"
            placeholder="enter your name"
            name="username"
            required
            autoComplete="off"
          />

          <input
            type="email"
            className="font-urbanist bg-black text-base text-white rounded p-4 border border-white/40 outline-none placeholder:text-gray-500"
            placeholder="Enter you email"
            name="email"
            required
            autoComplete="off"
          />

          <textarea
            className="font-urbanist bg-black text-base text-white rounded p-4 border border-white/40 outline-none placeholder:text-gray-500"
            rows="10"
            placeholder="Enter your message"
            name="message"
            required
            autoComplete="off"
          />

          <button 
            type="submit" 
            className="bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors duration-300"
          >
            Send
          </button>
        </form>
      </div>
    </section>
  );
};


export default Contact;