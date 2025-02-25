import React from "react";
import "./ResumeModal.css"

const ResumeDownload = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "./portfolio2.pdf"; // public papkadagi PDF fayl
    link.download = "/portfolio2.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="text-center mt-10">
       {/* <button
        onClick={handleDownload}
        // className="text-white bg-orange-500 hover:bg-orange-600 rounded-2xl px-6 py-3 text-lg shadow-lg"
        className="btn"
      >
        Resume
      </button> */}
    </div>
  );
};

export default ResumeDownload;