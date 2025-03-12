"use client";
import ImageUploading, { ImageListType } from "react-images-uploading";
import { Button } from "./ui/Button";

type Props = {
  images: ImageListType;
  setImages: (images: ImageListType) => void;
}

export default function UploadImage({ images, setImages }: Props) {
  const maxNumber = 5;

  const onChange = (imageList: ImageListType) => {
    const updatedImages = imageList.map((image, index) => ({
      ...image,
      fileName: image.file?.name || `File ${index + 1}`,
      size: image.file?.size || 0, // in bytes
    }));
    setImages(updatedImages);

  };

  return (
    <div className="container mx-auto p-6 max-w-2xl">
      <h2 className="text-2xl font-semibold text-center mb-4 text-gray-400">
        Upload Your Images
      </h2>

      <ImageUploading
        multiple
        value={images}
        onChange={onChange}
        maxNumber={maxNumber}
        dataURLKey="data_url"
      >
        {({
          onImageUpload,
          onImageRemoveAll,
          onImageRemove,
          dragProps,
          errors,
        }) => (
          <div className="upload__image-wrapper">
            {/* Error handling */}
            {errors && (
              <div className="text-red-500 text-sm mb-2">
                {errors.maxNumber && <span>Number of selected images exceeds the limit (5).</span>}
                {errors.acceptType && <span>Your selected file type is not allowed.</span>}
                {errors.maxFileSize && <span>Selected file size exceeds the limit.</span>}
                {errors.resolution && <span>Selected file resolution is too low.</span>}
              </div>
            )}

            {/* Drag & Drop Area */}
            <div className="flex items-center justify-center w-full">
              <label
                className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 transition dark:bg-gray-700 dark:hover:bg-gray-800"
                onClick={onImageUpload}
                {...dragProps}
              >
                <div className="flex flex-col items-center justify-center pt-5 pb-6 animate-pulse">
                  <svg
                    className="w-10 h-10 mb-3 text-gray-500 dark:text-gray-400"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 16"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                    />
                  </svg>
                  <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                    <span className="font-semibold">Click to upload</span> or drag and drop
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    PNG, JPG  (MAX. 800x400px)
                  </p>
                </div>
              </label>
            </div>

            {/* Remove All Button */}
            {images.length > 0 && (
              <div>
                <Button
                  onClick={onImageRemoveAll}
                  variant={"alternativ"}
                  className="mt-4 bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-600 transition duration-200"
                >
                  Remove All
                </Button>
              </div>
            )}

            {/* Thumbnails Section */}
            {images.length > 0 && (
              <div className="mt-6 flex flex-col gap-4 p-4 border-t border-gray-300 pt-4">
                {images.map((image, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between bg-blue-100 p-4 rounded-lg border border-gray-300 shadow-md transition-all hover:shadow-lg"
                  >
                    {/* File Icon + Name */}
                    <div className="flex items-center gap-3">
                      <svg
                        className="w-6 h-6 text-blue-600"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6z"
                        ></path>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M14 2v6h6"></path>
                      </svg>
                      <span className="text-base font-medium text-gray-900">
                        {image.fileName || `File ${index + 1}`}
                      </span>
                    </div>

                    {/* File Size */}
                    <span className="text-sm font-medium text-gray-700">
                      {((image.size || 0) / 1024).toFixed(2)} KB
                    </span>

                    {/* Remove Button */}
                    <Button
                      onClick={() => onImageRemove(index)}
                      className="bg-gray-500 text-white text-sm px-3 py-2 rounded-lg shadow-md hover:bg-red-600 transition-all flex items-center gap-2"
                      aria-label="Remove image"
                    >
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M6 18L18 6M6 6l12 12"
                        ></path>
                      </svg>
                      Remove
                    </Button>
                  </div>
                ))}
              </div>
            )}

          </div>
        )
        }
      </ImageUploading >
    </div >
  );
}

