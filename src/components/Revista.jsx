import React from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import '@react-pdf-viewer/core/lib/styles/index.css';
import './style.css';

const Revista = ({ pdfUrl }) => {
  pdfjs.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

  return (
    <div className='paginaPDF'>
      <Document file={pdfUrl}>
        <Page pageNumber={1} />
      </Document>
    </div>
  );
};

export default Revista;
