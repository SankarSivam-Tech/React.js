import React from "react";
import { jsPDF } from "jspdf";

const PdfGenerator = () => {
  const generatePdf = () => {
    const doc = new jsPDF();

    // Add title
    doc.setFontSize(18);
    doc.text("Sample PDF Document", 10, 10,);

    // Add content
    doc.setFontSize(12);
    doc.text("This is an example of a PDF generated using jsPDF in a React application.", 10, 20);

    // Add another line of text
    doc.text("You can customize this PDF as per your requirements.", 10, 30);

    // Add an image (optional)
    // Example: Base64 or URL of an image
    // const imgData = "data:image/png;base64,...";
    // doc.addImage(imgData, "PNG", 10, 40, 50, 50);

    // Save the PDF
    doc.save("sample.pdf");
  };

  return (
    <div>
      <button onClick={generatePdf}>Download PDF</button>
    </div>
  );
};

export default PdfGenerator;
