import React from 'react';
import ReactDOM from 'react-dom/client';
import { PDFViewer } from '@react-pdf/renderer';
import ReactPDF from '@react-pdf/renderer'

import Pdf from './Pdf/Pdf';
import './index.css'

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

ReactPDF.render(<Pdf />, `${__dirname}/example.pdf`);

root.render(
    <React.StrictMode>
        <PDFViewer className='pdfViewer' showToolbar={false}>
            <Pdf />
        </PDFViewer>
    </React.StrictMode>
);

