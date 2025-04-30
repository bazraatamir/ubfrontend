// IUpload.js
import { useState } from "react";
import { FilePond, registerPlugin } from "react-filepond";
import "filepond/dist/filepond.min.css";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";
import FilePondPluginFileValidateType from "filepond-plugin-file-validate-type";
import "../App.css";

registerPlugin(FilePondPluginImagePreview, FilePondPluginFileValidateType);

const IUpload = ({ onImageUpload, getfile, text }) => {
  const [files, setFiles] = useState([]);

  return (
    <div className='w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl mx-auto'>
      <FilePond
        className='custom-filepond w-full'
        files={files}
        stylePanelLayout='compact'
        stylePanelAspectRatio={window.innerWidth < 640 ? '1:1' : '16:9'}
        styleButtonRemoveItemPosition='right'
        imagePreviewHeight={160}
        imagePreviewAlt="File preview"
        onupdatefiles={(fileItems) => {
          setFiles(fileItems);
          getfile(fileItems);

          if (fileItems.length > 0) {
            const file = fileItems[0].file;
            const reader = new FileReader();
            reader.onload = (e) => {
              onImageUpload?.(e.target.result);
            };
            reader.readAsDataURL(file);
          }
        }}
        onremovefile={() => {
          setFiles([]);
          getfile([]);
          onImageUpload?.(null);
        }}
        allowMultiple={false}
        maxFiles={1}
        acceptedFileTypes={[
          "image/jpeg",
          "image/png",
          "image/gif",
          "video/mp4",
          "video/quicktime"
        ]}
        credits={false}
        labelIdle={`
          <div style="
            display: flex; 
            align-items: center;
            justify-content: center;
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
              width="16" height="16"
              style="color: #8CBC01;"
            >
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
              <circle cx="8.5" cy="8.5" r="1.5"></circle>
              <polyline points="21 15 16 10 5 21"></polyline>
            </svg>
            <p class="filepond--label-action" style="margin: 0;">${text}</p>
          </div>
        `}
      />
    </div>
  );
};

export default IUpload;
