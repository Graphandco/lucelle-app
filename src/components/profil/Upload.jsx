import { useState } from "react";
import { storage } from "../../../firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { FaUpload } from "react-icons/fa";

function Upload({ setAvatarURL }) {
    // State to store uploaded file
    const [file, setFile] = useState(""); // progress

    const [percent, setPercent] = useState(0); // Handle file upload event and update state
    function handleChange(event) {
        setFile(event.target.files[0]);
    }
    const handleUpload = () => {
        if (!file) {
            alert("Please upload an image first!");
        }
        const storageRef = ref(storage, `/files/${file.name}`); // progress can be paused and resumed. It also exposes progress updates. // Receives the storage reference and the file to upload.
        const uploadTask = uploadBytesResumable(storageRef, file);
        uploadTask.on(
            "state_changed",
            (snapshot) => {
                const percent = Math.round(
                    (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                ); // update progress
                setPercent(percent);
            },
            (err) => console.log(err),
            () => {
                // download url
                getDownloadURL(uploadTask.snapshot.ref).then((url) => {
                    setAvatarURL(url);
                    setShowPreview(true);
                });
            }
        );
    };
    return (
        <div>
            <input
                type="file"
                className="file-input file-input-bordered file-input-sm w-full max-w-xs"
                onChange={handleChange}
                accept="/image/*"
            />
            <button
                className="btn btn-primary btn-sm my-2 mr-2"
                onClick={handleUpload}
            >
                <FaUpload />
            </button>
            <progress
                className="progress progress-primary w-56"
                value={percent}
                max="100"
            ></progress>
            <div className="text-primary mb-2 font-semibold">{percent}%</div>
        </div>
    );
}
export default Upload;
