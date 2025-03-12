"use client";
import { FaDownload } from "react-icons/fa";

type Props = {
  text: string;
  showDownloadIcon?: boolean; // Optional prop to show download icon
}


export default function TextArea({ text, showDownloadIcon }: Props) {

  const handleDownload = () => {
    const element = document.createElement("a");
    const file = new Blob([text], { type: "text/plain" });
    element.href = URL.createObjectURL(file);
    element.download = "extracted_text.txt"; // You can change the file name
    document.body.appendChild(element);
    element.click();
  };

  return (
    <div className="p-6 bg-white dark:bg-gray-800 shadow-lg rounded-xl border border-gray-200 dark:border-gray-700">
      {/* Title */}
      <h2 className="text-2xl font-semibold text-center mb-4 text-gray-500 dark:text-gray-300">
        Extracted Text
      </h2>

      <div className="relative">
        {/* Download Button */}
        {showDownloadIcon && (
          <button
            onClick={handleDownload}
            className="absolute top-4 right-4 p-3 text-xl text-blue-600 bg-blue-100 dark:bg-gray-700 rounded-full shadow-md hover:bg-blue-200 dark:hover:bg-gray-600 transition-all duration-200"
            aria-label="Download Text"
            title="Download Text"
          >
            <FaDownload className="animate-pulse" />
          </button>
        )}

        {/* TextArea */}
        <textarea
          id="message"
          rows={15}
          className="block w-full p-5 text-lg font-medium text-gray-900 bg-gray-50 dark:bg-gray-700 rounded-lg border border-gray-300 dark:border-gray-600 dark:text-white focus:ring-blue-500 focus:border-blue-500 dark:focus:ring-blue-400 dark:focus:border-blue-400 resize-y shadow-inner transition-all duration-300"
          placeholder="Extracted text will appear here..."
          value={text}
          readOnly
        />
      </div>
    </div>
  );
}
