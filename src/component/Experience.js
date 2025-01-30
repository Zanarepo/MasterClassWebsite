import { FaUniversity, FaMoneyBillWave, FaTruck, FaTv, FaShoppingCart, FaCertificate } from "react-icons/fa";

export default function AboutMe() {
  return (
    <section className="bg-white p-8 rounded-lg shadow-md mt-12">
      <h2 className="text-3xl font-semibold text-center text-blue-600 mb-8">About Me</h2>
      
      <div className="space-y-6">
        {/* Experience Overview */}
        <div className="bg-gray-50 p-6 rounded-lg shadow-md">
          <p className="text-lg text-gray-800">
            With over three years of experience as a Product Manager, I have had the opportunity to work in diverse sectors, including <strong>Fintech</strong>, <strong>Logistics</strong>, <strong>Media</strong>, <strong>E-commerce</strong>, and <strong>RealTech</strong>. My journey has allowed me to collaborate with talented teams, deliver impactful products, and grow my expertise in product lifecycle management.
          </p>
        </div>

        {/* Mentorship */}
        <div className="bg-gray-50 p-6 rounded-lg shadow-md flex items-center">
          <FaUniversity className="text-blue-600 text-3xl mr-4" />
          <p className="text-lg text-gray-800">
            I have mentored budding product managers as part of the <strong>HNG Internship</strong> and am currently leading the coaching and development of interns at <strong>InternPulse</strong>. I'm passionate about guiding and shaping the next generation of product managers.
          </p>
        </div>

        {/* Certification */}
        <div className="bg-gray-50 p-6 rounded-lg shadow-md flex items-center">
          <FaCertificate className="text-blue-600 text-3xl mr-4" />
          <p className="text-lg text-gray-800">
            As a certified <strong>Scrum Product Owner</strong>, I thrive on challenges and enjoy helping teams deliver high-quality, valuable products. I truly love what I do and am committed to continuous learning and growth in the ever-evolving world of product management.
          </p>
        </div>

        {/* Sector Representation */}
        <div className="bg-gray-50 p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Industries I've Worked In</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            <div className="flex items-center space-x-2">
              <FaMoneyBillWave className="text-blue-600 text-2xl" />
              <span className="text-lg">Fintech</span>
            </div>
            <div className="flex items-center space-x-2">
              <FaTruck className="text-blue-600 text-2xl" />
              <span className="text-lg">Logistics</span>
            </div>
            <div className="flex items-center space-x-2">
              <FaTv className="text-blue-600 text-2xl" />
              <span className="text-lg">Media</span>
            </div>
            <div className="flex items-center space-x-2">
              <FaShoppingCart className="text-blue-600 text-2xl" />
              <span className="text-lg">E-commerce</span>
            </div>
            <div className="flex items-center space-x-2">
              <FaUniversity className="text-blue-600 text-2xl" />
              <span className="text-lg">RealTech</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
