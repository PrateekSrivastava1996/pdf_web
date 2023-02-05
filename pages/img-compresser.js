import React, { useState } from "react";
import Inpfile from "../components/components/Inpfile";
import Resizer from "react-image-file-resizer";
import prettyBytes from "pretty-bytes";

export default function Imgcompresser() {
  const [file, setFile] = useState();
  const [newImage, setNewImage] = useState(null);
  const [fileName, setFileName] = useState("");

  const hadleFileCompresser = async (file) => {
    let imgType = "";
    setFileName(file.name.split(".")[0]);
    if (file.name.split(".")[1] == "png") {
      imgType = "PNG";
    } else {
      imgType = "JPEG";
    }
    Resizer.imageFileResizer(
      file,
      1500,
      1500,
      "JPEG",
      50,
      0,
      (blob) => {
        handleImage({
          url: URL.createObjectURL(blob),
          size: blob.size,
          type: blob.type,
        });
      },
      "blob"
    );
  };
  const handleImage = (image) => {
    setNewImage(image);
  };

  const hadleImgeDownload = () => {
    var link = document.createElement("a");
    link.download = fileName;
    link.href = newImage.url;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <>
      <div className="imgcompresmaindiv_main">
        <h2 className="main_Heading_compress"> Compress Image</h2>
      </div>
      <Inpfile hadleFileCompresser={hadleFileCompresser} />

      <div className="div_img_compress_main">
        {newImage && (
          <span className="compresser_inner_span">
            <span className="span_new_img_heading"> New Image Size -</span>
            <figure>{`${prettyBytes(newImage.size)} ${newImage.type}`}</figure>
          </span>
        )}
      </div>

      <div className="imgcompresmaindiv_main">
        {newImage && (
          <span className="button_compress_css_span_main">
            <button
              className="buttoncompress_main"
              onClick={() => hadleImgeDownload()}
            >
              Downlode Image{" "}
            </button>
          </span>
        )}
      </div>
    </>
  );
}
