import axios from "axios";

import FileItem from "../FileItem/FileItem";

interface FileListProps {
    files: Array<any>
    removeFile: CallableFunction
}

const FileList: React.FC<FileListProps> = ({ files, removeFile }) => {

    const deleteFileHandler = (_name: any) => {
        try {
            axios.delete(`http://localhost:4000/upload?name=${_name}`)
            .then((res) => removeFile(_name))
            .catch((err) => console.error(err));

        } catch (error) {
            console.error(error);
        }
    }

    return (
        <ul className="file-list">
            {
                files && 
                files.map(file => <FileItem 
                    key={file.name} 
                    file={file} 
                    deleteFile={deleteFileHandler} 
                />)
            }
        </ul>
    );
}

export default FileList