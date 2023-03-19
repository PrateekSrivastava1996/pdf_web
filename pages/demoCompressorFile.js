import { blobToURL, urlToBlob, fromBlob, fromURL } from "image-resize-compress";
import { useState } from "react";

const DemoFile = () => {
  const getSize = (size) => (size / 1024).toFixed(3);

  const [files, setFiles] = useState("");
  const [oldFile, setOldFile] = useState("");
  const [exist, setExist] = useState(false);
  const [newFile, setNewFile] = useState("");
  const [newFileUrl, setNewFileUrl] = useState("");

  const [beforeFile, setBeforeFile] = useState({
    fileName: "",
    fileSize: 0,
    fileType: "",
  });
  const [newFileVal, setNewFileVal] = useState({
    wdth: 0,
    hght: 0,
    type: null,
  });
  const [reduced, setReduced] = useState(null);
  const [forms, setForms] = useState({
    qty: 0,
    wdth: 0,
    hght: 0,
    type: null,
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForms({
      ...forms,
      [name]: value,
    });
  };

  const fileChangedHandler = (e) => {
    e.preventDefault();
    const file = e.target.files[0];
    blobToURL(file).then((url) => setNewFile(url));
    setOldFile(file);
    setBeforeFile({
      fileName: file?.name,
      fileSize: file?.size,
      fileType: file?.type,
    });
  };

  const options = ["jpeg", "png", "webp", "bmp"];

  const downloadFile = (e, url) => {
    e.preventDefault();
    let a = document.createElement("a");
    a.download = oldFile.name ?? "image.png";
    a.href = url;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { qty, wdth, hght, type } = forms;
    fromBlob(oldFile, 80, wdth, hght, type).then((file) => {
      setNewFileVal({
        size: file?.size,
        type: file?.type,
      });
      blobToURL(file).then((url) => setNewFileUrl(url));
      setExist(true);
      setReduced(getSize(oldFile.size - file.size));
    });
  };
  const path = "https://localhost:3000/home/webxpert/Downloads/";
  return (
    <>
      <div className="image_pixel ">
        <h3 className="imgcompressor_file">Image Resizer, Compressor and Converter</h3>
        {/* <br /> */}
        <div className="imgcompressor_file">
          <form onSubmit={handleSubmit}>
            {/* <label>
            Quality:
            <input
              type="number"
              name="qty"
              value={forms.qty}
              onChange={handleChange}
            />
          </label> */}
          <div>
            <label>
              Width (px.):
              <input
                name="wdth"
                type="text"
                value={forms.wdth}
                onChange={handleChange}
              />
            </label>
            </div>
          <div>
            <label>
              Height (px.):
              <input
                name="hght"
                type="text"
                value={forms.hght}
                onChange={handleChange}
              />
            </label>
            </div>
          <div>
            <label>
              Format:
              <select name="type" value={forms.type} onChange={handleChange}>
                <option value="">Please choose one option</option>
                {options.map((option, index) => {
                  return (
                    <option key={index} value={option}>
                      {option}
                    </option>
                  );
                })}
              </select>
            </label>
            </div>
            <div>
              <input
                type="file"
                onChange={fileChangedHandler}
                //   value={files}
                style={{ marginTop: "30px" }}
              />
            </div>
            <button type="submit" disabled={!newFile}>
              Upload
            </button>
          </form>
        </div>
        <div className="preview imgcompressor_file">
          <div className="image">
            <br />
            <h2>Before:</h2>
            <div className="details">
              <p>Name: {beforeFile?.fileName}</p>
              <p>Size: {`${getSize(beforeFile?.fileSize)} kb` || 0}</p>
              <p>Format: {beforeFile?.fileType}</p>
            </div>
          </div>
          {exist && (
            <div className="image">
              <br />
              <h2>After:</h2>
              <img
                src={newFileUrl}
                name="newFileUrl"
                alt="Image not found"
                height={forms?.hght}
                width={forms?.wdth}
              />
              <p className="reduced">
                Reduced:{" "}
                {reduced >= 0 ? (
                  `${reduced} kb`
                ) : (
                  <p className="increased">
                    Increased: {`${reduced * -1} kb`}
                    <br />
                    Try changing image format or quality
                  </p>
                )}
              </p>
              <div className="details">
                <p>Size: {`${getSize(newFileVal?.size)} kb` || 0}</p>
                <p>Format: {newFileVal?.type}</p>
              </div>
              <button
                style={{ margin: "1rem 0px" }}
                onClick={(e) => downloadFile(e, newFileUrl)}
              >
                <i className="fa fa-download" />
                Download
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default DemoFile;
