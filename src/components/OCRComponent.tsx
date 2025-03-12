"use client";
import React, { useState } from "react";
import Tesseract from "tesseract.js";
import UploadImage from "./UploadImage";
import TextArea from "./TextArea";
import { Button } from "./ui/Button";
import { ImageListType } from "react-images-uploading";

type Props = {
  language: string;
  title: string;
};


export default function OCRComponent({ language, title }: Props) {
  const [extractedText, setExtractedText] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [images, setImages] = useState<ImageListType>([]);


  const handleOCR = async () => {
    if (images.length === 0) return;

    setLoading(true);
    try {
      const extractedTexts = await Promise.all(
        images.map(async (image, index) => {
          const { data: { text } } = await Tesseract.recognize(image["data_url"], language, {
            logger: (m) => console.log(m),
            langPath: "/tessdata",
          });

          const label = index === 0 ? "First" :
            index === 1 ? "Second" :
              index === 2 ? "Third" :
                index === 3 ? "Fourth" :
                  index === 4 ? "Fifth" : "";

          const extractedText = text.trim() === "" ? "No text found in this image." : text;

          return `${label} file:\n${extractedText}`;
        })
      );

      setExtractedText(extractedTexts.join("\n\n"));
    } catch (error) {
      console.error("OCR Error:", error);
      setExtractedText("Error extracting text.");
    }
    setLoading(false);
  };

  return (
    <div className="container mx-auto p-6 text-center flex flex-col items-center mt-5 pb-10 animate-none">

      <h2 className="text-3xl font-semibold mb-10">{title}</h2>

      <div className="flex w-full justify-center gap-10 mt-12">
        {/* Image Upload on the left */}
        <div className="flex flex-col items-center md:w-1/3 space-y-6">
          <UploadImage images={images} setImages={setImages} />
          {images.length > 0 &&
            <Button
              onClick={handleOCR}
              disabled={loading}
              className={`mt-8 px-6 py-3 text-white rounded-lg transition duration-200 flex items-center gap-2 ${loading ? "bg-blue-500 cursor-not-allowed animate-pulse" : "bg-blue-700 hover:bg-blue-800"
                }`}
              variant="alternativ"
            >
              {loading ? (
                <>
                  <svg
                    className="w-5 h-5 animate-spin"
                    fill="none"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8v8H4z"
                    ></path>
                  </svg>
                  Processing...
                </>
              ) : (
                <>
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M16 12l-4 4m0 0l-4-4m4 4V4"
                    ></path>
                  </svg>
                  Extract Text
                </>
              )}
            </Button>
          }
        </div>

        {/* TextArea on the right */}
        <div className="flex-1 ml-auto">
          <TextArea text={extractedText} showDownloadIcon={true} />
        </div>
      </div>

    </div>
  );
}
