import workingImg from "../assets/working-laptop.png"; // Replace with your real image
import ShinyText from "../assets/styles/ShinyText";
export default function ContactSection() {
  return (
    <section
      id="contact"
      className="w-full min-h-screen px-6 md:px-20 py-20 bg-black text-white flex items-center"
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12 items-center justify-between w-full">
        
        {/* Left: Contact Form */}
        <div className="w-full md:w-1/2">
          <h2 className="text-4xl font-bold mb-8">Let's Connect</h2>

          <form
            action="https://formspree.io/f/xvoewjlg"
            method="POST"
            className="bg-[#111] p-8 rounded-2xl shadow-xl flex flex-col gap-6"
          >
            <div>
              <label htmlFor="name" className="block text-sm mb-1">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full px-4 py-2 rounded-md bg-gray-900 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500"
                placeholder="Your Name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm mb-1">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-4 py-2 rounded-md bg-gray-900 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm mb-1">Message</label>
              <textarea
                id="message"
                name="message"
                rows="4"
                required
                className="w-full px-4 py-2 rounded-md bg-gray-900 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500"
                placeholder="Write your message here..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="mt-4 px-6 py-2 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full font-semibold text-white hover:scale-105 transition-transform duration-300"
            >
                     <ShinyText text="Send Message" disabled={false} speed={3} className='custom-class' />

            </button>
          </form>
        </div>

        {/* Right: Laptop Image */}
        <div className="hidden  w-full md:w-1/2 md:flex justify-center">
          <img
            src={workingImg}
            alt="Working on Laptop"
            className="w-72 md:w-[400px] object-contain rounded-2xl shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}
