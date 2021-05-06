import React, { useState } from 'react'

import { Document, Page, pdfjs } from 'react-pdf'

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const PDFDocument = (pdf) => {
    const [numPages, setNumPages] = useState(null)
  	const [pageNumber, setPageNumber] = useState(1)

  	function onDocumentLoadSuccess({ numPages }) {
    	setNumPages(numPages)
	}

	function nextPage() {
		setPageNumber(pageNumber + 1);
	}

	function setPage(e) {
		let page = e.target.value
		if (page < 1 || page > numPages) {
			page = 1;
		}
		setPageNumber(Number(page))
	}
    
    return (
        <>
            <button
				onClick={nextPage}>
					Next Page
				</button>
			<input type="text" value={pageNumber} onChange={setPage}/>
			<Document
            	file={bookPDF.relativePath}
				onLoadSuccess={onDocumentLoadSuccess}>
            	<Page pageNumber={pageNumber}/>
				<Page pageNumber={pageNumber + 1}/>
			</Document>
			<p>Page {pageNumber} of {numPages}</p>
        </>
    )
}

export default PDFDocument