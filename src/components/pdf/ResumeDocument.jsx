import { jsPDF } from "jspdf";
// import { Button } from "@/components/ui/button";

const ResumeDownload = () => {
  const handleDownload = () => {
    const doc = new jsPDF();

    // PDF sarlavhasi
    doc.setFontSize(22);
    doc.text("John Doe", 20, 20);
    doc.setFontSize(16);
    doc.text("Frontend Developer", 20, 30);

    // Kontakt ma'lumotlari
    doc.setFontSize(12);
    doc.text("Email: johndoe@gmail.com", 20, 45);
    doc.text("Telefon: +998 90 123 45 67", 20, 53);
    doc.text("Manzil: Toshkent, O'zbekiston", 20, 61);

    // Tajriba
    doc.setFontSize(16);
    doc.text("Tajriba:", 20, 80);
    doc.setFontSize(12);
    doc.text("- React Developer, XYZ Company (2023 - Hozirgi)", 20, 90);
    doc.text("- Web Developer, ABC Studio (2022 - 2023)", 20, 98);

    // Ta'lim
    doc.setFontSize(16);
    doc.text("Ta'lim:", 20, 120);
    doc.setFontSize(12);
    doc.text("- Toshkent Axborot Texnologiyalari Universiteti (2021 - 2025)", 20, 130);

    // Skillar
    doc.setFontSize(16);
    doc.text("Skillar:", 20, 150);
    doc.setFontSize(12);
    doc.text("- HTML, CSS, JavaScript, React, TailwindCSS", 20, 160);
    doc.text("- Git, GitHub, REST API, Firebase", 20, 168);

    // PDF-ni saqlash
    doc.save("John_Doe_Resume.pdf");
  };

  return (
    <div className="flex justify-center mt-10">
      {/* <Button onClick={handleDownload} className="bg-orange-500 text-white px-6 py-3 rounded-2xl shadow-lg hover:bg-orange-600 transition-all duration-300">
        Download Resume
      </Button> */}
    </div>
  );
};

export default ResumeDownload;
