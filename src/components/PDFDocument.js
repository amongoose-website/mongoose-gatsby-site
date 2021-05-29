import React, { useState } from 'react'

import { Document, Page, pdfjs } from 'react-pdf'

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const PDFDocument = ({pdf}) => {
    const [numPages, setNumPages] = useState(null)
  	const [pageNumber, setPageNumber] = useState(1)

  	function onDocumentLoadSuccess({ numPages }) {
    	setNumPages(numPages)
	}

	function nextPage() {
		setPage(pageNumber + 1);
	}
	
	function previousPage() {
		setPage(pageNumber - 1);
	}

	function inputSetPage(e) {
		let page = e.target.value;
		setPage(page);
	}

	function setPage(page) {
		if (page < 1 || page > numPages) {
			page = 1;
		}
		setPageNumber(Number(page))
	}
    return (
        <div className="pdf-document">
            <div className="pdf-document__controls">
				<button
					onClick={previousPage}>
						Previous Page
					</button>
				<input type="text" value={pageNumber} onChange={inputSetPage}/>
				<button
					onClick={nextPage}>
					Next Page
				</button>
			
			</div>
			<Document 
				className="pdf-document__pages"
            	file={pdf}
				onLoadSuccess={onDocumentLoadSuccess}>
            	<Page className="pdf-document__page" pageNumber={pageNumber}/>
				{ numPages && (pageNumber < numPages) && 
				<Page 
					className="pdf-document__page" 
					pageNumber={pageNumber + 1}/> }
			</Document>
			<p>Page {pageNumber} of {numPages}</p>
        </div>
    )
}

export default PDFDocument