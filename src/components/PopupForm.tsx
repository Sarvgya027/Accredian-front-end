import React, { useCallback, useState } from "react";
import { toast } from "react-toastify";

interface PopupFormProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PopupForm: React.FC<PopupFormProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    referrer: "",
    referrerEmail: "",
    referee: "",
    refereeEmail: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    },
    []
  );

  const handleSubmit = useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      console.log(formData);
      setIsLoading(true);
      try {
        const response = await fetch('http://localhost:3000/api/referral', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });
        if (!response.ok) {
          throw new Error('Failed to submit');
        }
        toast.success(response.statusText);

        setFormData({
          referrer: "",
          referrerEmail: "",
          referee: "",
          refereeEmail: "",
        });
        onClose();
      } catch (error) {
        toast.error(error instanceof Error ? error.message : 'An error occurred');
      } finally {
        setIsLoading(false);
      }
    },
    [formData, onClose]
  );

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md relative">
        <button onClick={onClose} className="absolute top-2 right-2 text-gray-500 hover:text-gray-700">
          ✕
        </button>
        <h2 className="text-xl font-bold mb-4">Refer a Friend</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="referrer" className="block text-gray-700 font-bold mb-2">Referrer Name:</label>
            <input
              type="text"
              id="referrer"
              name="referrer"
              value={formData.referrer}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="referrerEmail" className="block text-gray-700 font-bold mb-2">Referrer Email:</label>
            <input
              type="email"
              id="referrerEmail"
              name="referrerEmail"
              value={formData.referrerEmail}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="referee" className="block text-gray-700 font-bold mb-2">Referee Name:</label>
            <input
              type="text"
              id="referee"
              name="referee"
              value={formData.referee}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="refereeEmail" className="block text-gray-700 font-bold mb-2">Referee Email:</label>
            <input
              type="email"
              id="refereeEmail"
              name="refereeEmail"
              value={formData.refereeEmail}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button 
            type="submit" 
            className="w-full py-2 bg-blue-500 text-white font-bold rounded hover:bg-blue-700 disabled:bg-blue-300"
            disabled={isLoading}
          >
            {isLoading ? (
              <span className="flex items-center justify-center">
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Submitting...
              </span>
            ) : (
              'Submit'
            )}
          </button>
        </form>
      </div>
    </div>
  );
};