import { useState } from "react";
import { FilePond, registerPlugin } from "react-filepond";
import "filepond/dist/filepond.min.css"; // FilePond styles
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";
import FilePondPluginFileValidateType from "filepond-plugin-file-validate-type";
registerPlugin(FilePondPluginImagePreview, FilePondPluginFileValidateType);
import "../App.css";
const IUpload = () => {
  const [files, setFiles] = useState([]);
  const [uploadedImageUrl, setUploadedImageUrl] = useState(null);

  // Optional: Handle the file upload completion

  return (
    <FilePond
      className="custom-filepond"
      files={files}
      stylePanelLayout="compact"
      stylePanelAspectRatio="1:1"
      styleButtonRemoveItemPosition="right"
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
      labelIdle={`
          <div style="
            display: flex; 
            align-items: center;
            justify:center;
            gap: 5px; 
            font-size: 14px;
            color: #8CBC01;
            font-weight: bold;
          ">
            
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              width="16" height="16" <!-- Making it smaller -->
              style="color: #8CBC01;"
            >
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
              <circle cx="8.5" cy="8.5" r="1.5"></circle>
              <polyline points="21 15 16 10 5 21"></polyline>
            </svg>
            <p class="filepond--label-action" style="margin: 0;">Лого</p>
          </div>
        `}
    />
  );
};

export default IUpload;
