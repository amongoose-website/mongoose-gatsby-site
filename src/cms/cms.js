import CMS from 'netlify-cms-app'
import uploadcare from 'netlify-cms-media-library-uploadcare'
import cloudinary from 'netlify-cms-media-library-cloudinary'

import PDFPagePreview from './preview-templates/PDFPagePreview'
import PostPagePreview from './preview-templates/PostPagePreview'

CMS.registerMediaLibrary(uploadcare)
CMS.registerMediaLibrary(cloudinary)

CMS.registerPreviewTemplate('pdf-page', PDFPagePreview)
CMS.registerPreviewTemplate('post-page', PostPagePreview)
