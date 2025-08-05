import React from "react";
import { X } from "lucide-react";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const ApplicationModal: React.FC<Props> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-lg p-6 relative">
        {/* Close button */}
        <button onClick={onClose} className="absolute top-3 right-3 text-gray-500 hover:text-red-500">
          <X size={20} />
        </button>

        <h2 className="text-xl font-bold mb-4">Apply for this Job</h2>
        <form className="space-y-3">
          <input
            type="text"
            placeholder="Full Name"
            required
            className="w-full border px-3 py-2 rounded"
          />
          <input
            type="email"
            placeholder="Email Address"
            required
            className="w-full border px-3 py-2 rounded"
          />
          <input
            type="tel"
            placeholder="Phone Number"
            required
            className="w-full border px-3 py-2 rounded"
          />
          <textarea
            placeholder="Cover Letter (Optional)"
            className="w-full border px-3 py-2 rounded"
            rows={3}
          />
          <input
            type="file"
            accept=".pdf,.doc,.docx"
            required
            className="w-full border px-3 py-2 rounded bg-gray-50 text-sm"
          />
          <button
            type="submit"
            className="w-full bg-teal-600 text-white py-2 rounded hover:bg-teal-700"
          >
            Submit Application
          </button>
        </form>
      </div>
    </div>
  );
};

export default ApplicationModal;
