import CMS from 'netlify-cms-app'
import uploadcare from 'netlify-cms-media-library-uploadcare'
import cloudinary from 'netlify-cms-media-library-cloudinary'
import PDFPagePreview from './preview-templates/PDFPagePreview'

CMS.registerPreviewTemplate('pdf-page', PDFPagePreview)

CMS.registerMediaLibrary(uploadcare)
CMS.registerMediaLibrary(cloudinary)
