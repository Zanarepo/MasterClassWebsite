import React, { useState } from "react";
import { supabase } from "../../supabaseClient";

export default function RegistrationForm() {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    full_name: "",
    whatsapp_number: "",
    email: "",
    session: "",
    preferred_days: [],
    one_on_one: false,
    willing_to_pay_extra: null,
  });
  const [message, setMessage] = useState(""); // Success or error message

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setFormData({ ...formData, [name]: checked });
  };

  const handlePreferredDaysChange = (e) => {
    const { value, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      preferred_days: checked
        ? [...prev.preferred_days, value]
        : prev.preferred_days.filter((day) => day !== value),
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage(""); // Clear previous messages

    if (!formData.full_name || !formData.whatsapp_number || !formData.email || !formData.session || formData.preferred_days.length === 0) {
      setMessage("⚠️ Please fill all required fields.");
      return;
    }

    const {  error } = await supabase.from("registrations").insert([formData]);

    if (error) {
      setMessage(`❌ Registration failed: ${error.message}`);
    } else {
      setMessage("✅ Registration successful!");
      setTimeout(() => {
        setIsOpen(false); // Close form after success
        setFormData({
          full_name: "",
          whatsapp_number: "",
          email: "",
          session: "",
          preferred_days: [],
          one_on_one: false,
          willing_to_pay_extra: null,
        });
        setMessage(""); // Clear success message after closing
      }, 2000);
    }
  };

  return (
    <div className="p-8">
      <button onClick={() => setIsOpen(true)} className="bg-blue-600 text-white px-4 py-2 rounded">
        Register
      </button>

      {isOpen && (
       <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
       <div className="bg-white p-6 rounded-lg shadow-lg w-[60%] max-w-4xl max-h-[90vh] overflow-y-auto">
         <h2 className="text-xl font-bold mb-4 text-center">Register</h2>
         
            {message && <p className="text-center mb-4 font-semibold">{message}</p>} {/* Success/Error message */}

            <form onSubmit={handleSubmit} className="space-y-4">
              <input type="text" name="full_name" value={formData.full_name} onChange={handleChange} placeholder="Full Name" className="w-full p-2 border rounded" required />
              <input type="text" name="whatsapp_number" value={formData.whatsapp_number} onChange={handleChange} placeholder="WhatsApp Number" className="w-full p-2 border rounded" required />
              <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" className="w-full p-2 border rounded" required />

              <label className="block font-semibold">Session</label>
              <select name="session" value={formData.session} onChange={handleChange} className="w-full p-2 border rounded" required>
                <option value="">Select Session</option>
                <option value="Afternoon">Afternoon (12:30 PM)</option>
                <option value="Evening">Evening (7:00 PM)</option>
              </select>

              <label className="block font-semibold">Preferred Days</label>
              <div className="space-y-1">
                {["Tuesdays", "Thursdays", "Fridays"].map((day) => (
                  <label key={day} className="flex items-center space-x-2">
                    <input type="checkbox" value={day} checked={formData.preferred_days.includes(day)} onChange={handlePreferredDaysChange} />
                    <span>{day}</span>
                  </label>
                ))}
              </div>

              <label className="block font-semibold">Do you want a special one-on-one session?</label>
              <label className="flex items-center space-x-2">
                <input type="checkbox" name="one_on_one" checked={formData.one_on_one} onChange={handleCheckboxChange} />
                <span>Yes</span>
              </label>

              {formData.one_on_one && (
                <>
                 {/* Willing to Pay Extra */}
      <div>
        <label className="block text-gray-700 font-medium">Willing to Pay Extra</label>
        <select className="w-full border border-gray-300 p-2 rounded-lg focus:ring focus:ring-blue-300">
          <option>Yes</option>
          <option>No</option>
        </select>
      </div>
                </>
              )}

              <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded w-full">
                Submit
              </button>
              <button onClick={() => setIsOpen(false)} type="button" className="bg-gray-500 text-white px-4 py-2 rounded w-full mt-2">
                Close
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
