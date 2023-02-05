import React, { useState } from "react";
import Image from "next/image";
export default function Inpfile({ hadleFileCompresser }) {
  const [file, setFile] = useState();
  const [imgLink, setImgLink] = useState("");
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setFile(file);
      setImgLink(URL.createObjectURL(file));
    }
  };

  const handleCompressFile = async () => {
    hadleFileCompresser(file);
  };
  return (
    <>
      <div className="imgcompresmaindiv">
        <span className="spancompress">
          <input
            type="file"
            className="inpfilecompresss"
            onChange={handleFileChange}
            accept="image/*"
          />
        </span>
      </div>

      <div className="imgcompresmaindiv">
        <span className="imgSpancompreser">
          {imgLink !== "" && (
            <Image
              src={imgLink}
              alt="Picture of the author"
              width={300}
              height={300}
            />
          )}
        </span>
      </div>

      <div className="imgcompresmaindiv">
        {file && (
          <span className="button_compress_css_span">
            <button
              className="buttoncompress"
              onClick={() => handleCompressFile()}
            >
              Compress Image{" "}
            </button>
          </span>
        )}
      </div>
    </>
  );
}
