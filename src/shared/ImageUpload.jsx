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
    <div className="w-[100%] ">
      <FilePond
        className="custom-filepond"
        files={files}
        stylePanelLayout="compact"
        stylePanelAspectRatio="1:1"
        styleButtonRemoveItemPosition="right"
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
        imagePreviewHeight={160}
        labelIdle='<span class="filepond--label-action">Upload Image</span>
        <svg
        class="filepond--label-svg"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="text-[#8CBC01] w-3 h-3"  <!-- 12px x 12px -->
>
    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
    <circle cx="8.5" cy="8.5" r="1.5"></circle>
    <polyline points="21 15 16 10 5 21"></polyline>
</svg>



'
      />
    </div>
  );
};

export default IUpload;
