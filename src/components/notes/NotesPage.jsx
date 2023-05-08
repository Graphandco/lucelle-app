import React, { useRef } from "react";
import { Editor } from "@tinymce/tinymce-react";
import { FaPlus } from "react-icons/fa";
import { NotesItems } from "../../context/NotesContext";
import { collection, doc, addDoc, deleteDoc } from "firebase/firestore";
import { db } from "../../../firebase";

export default function NotesPage() {
    const editorRef = useRef(null);
    const { notes } = NotesItems();

    const addNote = async (e) => {
        if (editorRef.current) {
            console.log(editorRef.current.getContent());
        }

        e.preventDefault(e);
        await addDoc(collection(db, "notes"), {
            content: editorRef.current.getContent(),
            createdAt: new Date(),
        });
        tinyMCE.activeEditor.setContent("");
    };

    const handleDelete = async (id) => {
        if (window.confirm(`Voulez-vous vraiment supprimer cette note ?`)) {
            await deleteDoc(doc(db, "notes", id));
        }
    };

    return (
        <>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 p-2">
                {notes.map((note, index) => (
                    <div className="card bg-gris mt-5 shadow-xl" key={index}>
                        <div className="card-body p-5 pt-2 pr-2">
                            <div className="card-actions justify-end">
                                <button className="btn btn-square btn-sm">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-6 w-6"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        onClick={() => handleDelete(note.id)}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M6 18L18 6M6 6l12 12"
                                        />
                                    </svg>
                                </button>
                            </div>
                            <div
                                dangerouslySetInnerHTML={{
                                    __html: note.content,
                                }}
                            ></div>{" "}
                        </div>
                    </div>
                ))}
            </div>
            <div className="p-2 w-[32rem] mx-auto max-w-[100%]">
                <Editor
                    onInit={(evt, editor) => (editorRef.current = editor)}
                    apiKey="tx6iklbc6lfmfy0ag6z7zhcutvai759jy4d9cf4lx8y75tw2"
                    // initialValue="<p>This is the initial content of the editor.</p>"
                    init={{
                        height: 300,
                        menubar: false,
                        selector: "textarea", // change this value according to your HTML
                        skin: "oxide-dark", // Name of the skin
                        content_css: "dark", // Name of the content skin
                        // plugins: [
                        //     "advlist autolink lists link image charmap print preview anchor",
                        //     "searchreplace visualblocks code fullscreen",
                        //     "insertdatetime media table paste code help wordcount",
                        // ],
                        toolbar:
                            "undo redo | formatselect | " +
                            // "bold italic backcolor | alignleft aligncenter " +
                            "bold italic  | alignleft aligncenter " +
                            "alignright alignjustify | bullist numlist   | ",
                        // "alignright alignjustify | bullist numlist outdent indent | " +
                        // "removeformat | help",
                        // content_style:
                        //     "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
                    }}
                />
                <div className="flex justify-center mt-5">
                    <button
                        onClick={addNote}
                        className="btn btn-secondary flex items-center gap-2"
                    >
                        <FaPlus />

                        <span>Ajouter la note</span>
                    </button>
                </div>
            </div>
        </>
    );
}
