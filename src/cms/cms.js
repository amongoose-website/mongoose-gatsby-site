import CMS from 'netlify-cms-app'

import PDFPagePreview from './preview-templates/PDFPagePreview'
import PostPagePreview from './preview-templates/PostPagePreview'

CMS.registerPreviewTemplate('pdf-page', PDFPagePreview)
CMS.registerPreviewTemplate('post-pages', PostPagePreview)
