import { CKEditor } from "@ckeditor/ckeditor5-react";
import DecoupledEditor from "@ckeditor/ckeditor5-build-decoupled-document";
import { useEffect, useRef, useState } from "react";

function TextEditor({
  text,
  setArticleData,
  titleWidth,
  peerHeight,
  reduceHeight = 0,
}) {
  const [textData, setTextData] = useState("");
  const toolbarContainerRef = useRef(null);

  function uploadAdapter(loader) {
    return {
      upload: () => {
        return new Promise((resolve) => {
          loader.file.then((file) => {
            const imageLink = URL.createObjectURL(file);
            resolve({ default: imageLink });
          });
        });
      },
    };
  }

  function uploadPlugin(editor) {
    editor.plugins.get("FileRepository").createUploadAdapter = (loader) =>
      uploadAdapter(loader);
  }

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setTextData(text || "");
      return () => clearTimeout(timeoutId);
    }, 500);
  }, [text]);

  return (
    <div className="mt-6">
      <div ref={toolbarContainerRef} />
      <CKEditor
        editor={DecoupledEditor}
        config={{
          extraPlugins: [uploadPlugin],
          removePlugins: ["MediaEmbed"],
        }}
        data={textData}
        onReady={(editor) => {
          if (toolbarContainerRef.current) {
            toolbarContainerRef.current.appendChild(editor.ui.view.toolbar.element);
          }

          editor.editing.view.change((writer) => {
            writer.setStyle(
              "height",
              `${peerHeight.current?.clientHeight - reduceHeight - 150}px`,
              editor.editing.view.document.getRoot()
            );
            writer.setStyle(
              "width",
              `${titleWidth.current?.clientWidth}px`,
              editor.editing.view.document.getRoot()
            );
            writer.setStyle(
              "padding-left",
              `24px`,
              editor.editing.view.document.getRoot()
            );
          });
        }}
        onChange={(_, editor) => {
          const data = editor.getData();
          setArticleData((prev) => ({ ...prev, description: data }));
        }}
      />
    </div>
  );
}

export default TextEditor;
