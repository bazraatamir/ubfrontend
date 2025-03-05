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
    <div className="w-[100%]">
      <FilePond
        className="bg-[#2F323C] object-cover"
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
        imagePreviewHeight={160} // This ensures FilePond shows the preview
        labelIdle='<span class="filepond--label-action">Upload Image</span>'
      />
    </div>
  );
};

export default IUpload;
