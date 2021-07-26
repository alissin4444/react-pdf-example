// "https://arxiv.org/pdf/quant-ph/0410100.pdf"

import { useState } from "react";

import { Document, Page, pdfjs } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

function App() {
  const [numPages, setNumPages] = useState(null);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <div>
      <h1>PDF VIEWER</h1>
      <div
        style={{
          width: 300,
          height: 400,
          padding: 20,
          overflow: "auto",
          background: "#a29bfe",
        }}
      >
        <Document
          file="https://brainag-qas.s3.amazonaws.com/car/MT-5102702-B65EB9EB1797423F8356684539329F62/demo.pdf?AWSAccessKeyId=AKIAXFSAE6BGUPHFUVI4&Expires=1627906759&Signature=9DAiwn7CDyufLurgEpBoLqzm%2BvM%3D"
          onLoadSuccess={onDocumentLoadSuccess}
        >
          {Array.from(new Array(numPages), (el, index) => (
            <Page
              key={`page_${index + 1}`}
              pageNumber={index + 1}
              height={400}
              scale={1}
            />
          ))}
        </Document>
      </div>
    </div>
  );
}

export default App;
