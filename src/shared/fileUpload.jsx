import {useState} from "react";
import {FilePond, registerPlugin} from "react-filepond";
import "filepond/dist/filepond.min.css";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";
import FilePondPluginFileValidateType from "filepond-plugin-file-validate-type";
import axiosInstance from "./axios";
import axios from "axios";
registerPlugin(FilePondPluginImagePreview, FilePondPluginFileValidateType);
import "../App.css";

const FileUpload = ({onImageUpload, text, url}) => {
  const [files, setFiles] = useState([]);

  return (
    <div className='w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl mx-auto'>
      <FilePond
        className='custom-filepond w-full'
        files={files}
        onupdatefiles={(fileItems) => {
          setFiles(fileItems);
        }}
        allowMultiple={false}
        maxFiles={1}
        acceptedFileTypes={["image/*", "video/*"]}
        credits={false}
        imagePreviewHeight={160}
        server={{
          process: (
            fieldName,
            file,
            metadata,
            load,
            error,
            progress,
            abort
          ) => {
            const formData = new FormData();
            formData.append("file", file);

            const source = axios.CancelToken.source();

            axiosInstance
              .post(`http://localhost:3000/${url}`, formData, {
                cancelToken: source.token,
                headers: {
                  "Content-Type": "multipart/form-data",
                },
                onUploadProgress: (e) => {
                  progress(true, e.loaded, e.total);
                },
              })
              .then((res) => {
                const {url, id} = res.data;
                if (onImageUpload) onImageUpload(url);
                load(id); // return this id to use later in revert
              })
              .catch((err) => {
                console.error("Upload error:", err);
                error("Upload failed");
              });

            return {
              abort: () => {
                source.cancel("Upload cancelled");
              },
            };
          },

          revert: (uniqueFileId, load, error) => {
            axiosInstance
              .delete(`http://localhost:5000/delete/${uniqueFileId}`)
              .then(() => {
                load(); // success
              })
              .catch((err) => {
                console.error("Delete error:", err);
                error("Delete failed");
              });
          },
        }}
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
            <p class="filepond--label-action" style="margin: 0;">${text} </p>
          </div>
        `}
      />
    </div>
  );
};

export default FileUpload;
