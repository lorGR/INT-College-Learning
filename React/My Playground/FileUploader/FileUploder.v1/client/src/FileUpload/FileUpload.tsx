import axios from "axios";

interface FileUploaderProps {
    files: Array<object>,
    setFiles: CallableFunction,
    removeFile: CallableFunction
}

const FileUpload: React.FC<FileUploaderProps> = ({ files, setFiles, removeFile }) => {
    const uploadHandler = (event: any) => {
        try {
            const file = event.target.files[0];
            file.isUploading = true;
            setFiles([...files, file]);

            // upload file
            const formData = new FormData();
            formData.append(
                file.name,
                file,
                file.name
            );

            axios.post('http://localhost:4000/upload', formData)
                .then((res) => {
                    file.isUploading = false;
                    setFiles([...files, file]);
                })
                .catch((err) => {
                    //inform the user
                    console.error(err);
                    removeFile(file.name);
                })

        } catch (error) {
            console.error(error);
        }
    }
    return (
        <div className="file-upload">
            <div className="file-card">
                <div className="file-inputs">
                    <input type="file" onChange={uploadHandler}/>
                    <button>+ Upload</button>
                </div>
                <p className="main">Support files</p>
                <p className="info">PDF, JPG, PNG</p>
            </div>
        </div>
    );
}

export default FileUpload;