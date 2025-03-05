import { useState } from "react";
import { FilePond, registerPlugin } from "react-filepond";
import "filepond/dist/filepond.min.css"; // FilePond styles
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";
import FilePondPluginFileValidateType from "filepond-plugin-file-validate-type";

registerPlugin(FilePondPluginImagePreview, FilePondPluginFileValidateType);

const IUpload = () => {
  const [files, setFiles] = useState([]);
  const [uploadedImageUrl, setUploadedImageUrl] = useState(null);

  // Optional: Handle the file upload completion
  const handleFilePondInit = () => {
    console.log("FilePond has initialized");
  };
  return (
    <div className="max-w-36 md:w-48 aspect-[3/4] bg-[#2F323C] rounded-[10px] flex items-center justify-center object-cover">
      <FilePond
        files={files}
        oninit={handleFilePondInit}
        onupdatefiles={(fileItems) => {
          setFiles(fileItems);
          if (fileItems.length > 0) {
            const file = fileItems[0].file;
            const reader = new FileReader();
            reader.onload = (e) => setUploadedImageUrl(e.target.result);
            reader.readAsDataURL(file);
          } else {
            setUploadedImageUrl(null);
          }
        }}
        allowMultiple={false}
        maxFiles={1}
        acceptedFileTypes={["image/*"]}
        credits={false}
        imagePreviewHeight={160} // Enables preview
        labelIdle=' <span class="filepond--label-action">Upload Image</span>'
      />
      {uploadedImageUrl && (
        <img
          src={uploadedImageUrl}
          alt="Uploaded"
          className="w-36 md:w-48 object-cover rounded-lg border border-gray-500"
        />
      )}
    </div>
  );
};

export default IUpload;
