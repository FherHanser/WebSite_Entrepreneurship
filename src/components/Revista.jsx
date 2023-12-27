// Revista.js
import React, { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import '@react-pdf-viewer/core/lib/styles/index.css';
import './style.css';

const Revista = ({ pdfUrl, title }) => {
  pdfjs.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  const handlePageChange = (newPage) => {
    setPageNumber(newPage);
  };

  const handleDownload = () => {
    // Implementa lógica de descarga aquí, si es necesario
    // Puedes redirigir a la URL del PDF o utilizar alguna biblioteca de descarga
  };

  return (
    <div className='paginaPDF'>
      <div className='cardContainer'>
        <div className="pdfHeader">
          <h2>{title}</h2>
          <button onClick={handleDownload}>Descargar</button>
        </div>
        <Document file={pdfUrl} onLoadSuccess={onDocumentLoadSuccess}>
          <Page
            pageNumber={pageNumber}
            onLoadSuccess={({ numPages }) => setNumPages(numPages)}
            onRenderSuccess={() => window.scrollTo(0, 0)}
          />
          {pageNumber < numPages && <Page pageNumber={pageNumber + 1} />}
        </Document>
      </div>
      <p>
        Página {pageNumber} de {numPages}
      </p>
      <button onClick={() => handlePageChange(pageNumber - 2)} disabled={pageNumber <= 2}>
        Anterior
      </button>
      <button onClick={() => handlePageChange(pageNumber + 2)} disabled={pageNumber >= numPages - 1}>
        Siguiente
      </button>
    </div>
  );
};

export default Revista;
