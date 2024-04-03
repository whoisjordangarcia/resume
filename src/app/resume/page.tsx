'use client'

import Link from "next/link";
import ReactPDF from '@react-pdf/renderer'

import { PDFViewer } from '@react-pdf/renderer';
import { CreatePost } from "~/app/_components/create-post";
import { api } from "~/trpc/server";
import Pdf from "~/app/_components/pdf"
import {userAsync} from 'react-use'

import { useSearchParams } from 'next/navigation'

const Resume = () => {
  const searchParams = useSearchParams()
  const type = searchParams.get('type')
 return (
        <PDFViewer className='pdfViewer' showToolbar={false}>
            <Pdf variant={type}/> 
        </PDFViewer>
 );
}

export default Resume
