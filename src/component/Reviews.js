import React, { useState, useEffect } from 'react';
import { FaStar } from 'react-icons/fa';

const reviews = [
  {
    name: 'Chidinma',
    rating: 5,
    comment: 'The Product MasterClass was exceptional! It gave me a deeper understanding of product management, and the technical insights were invaluable.',
  },
  {
    name: 'Justina Olayemi',
    rating: 4,
    comment: 'A great class with practical insights. The material was clear and relevant, and the instructor was engaging.',
  },
  {
    name: 'Adedoyin',
    rating: 5,
    comment: 'I loved the hands-on approach in this class! The sessions on API and databases were exactly what I needed.',
  },
  {
    name: 'Adetoun',
    rating: 4,
    comment: 'Fantastic class. It helped me understand the technical side of product management. Would definitely recommend!',
  },
  {
    name: 'Splendor Balogun',
    rating: 5,
    comment: 'One of the best training experiences I’ve had. The course covered everything from Agile to System Architecture in a practical way.',
  },
];

export default function ReviewPage() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length); // Loop through reviews
    }, 4000); // Slide every 4 seconds

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  return (
    <section className="bg-white w-full rounded-lg shadow-md mt-12">
      <h2 className="text-3xl font-semibold text-blue-800 mb-6 text-center">What My Mentees Are Saying</h2>

      {/* Review Slider */}
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-1000 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {reviews.map((review, index) => (
            <div key={index} className="min-w-full p-4">
              <div className="bg-gray-100 p-6 rounded-lg shadow-md">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="text-lg font-semibold text-blue-600">{review.name}</div>
                  <div className="flex text-yellow-500">
                    {[...Array(5)].map((_, starIndex) => (
                      <FaStar
                        key={starIndex}
                        className={`text-lg ${starIndex < review.rating ? 'text-yellow-500' : 'text-gray-300'}`}
                      />
                    ))}
                  </div>
                </div>
                <p className="text-gray-700">{review.comment}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
