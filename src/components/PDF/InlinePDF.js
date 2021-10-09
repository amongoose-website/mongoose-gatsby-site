import React, { Component } from 'react';
import ViewSDKClient from './ViewSDKClient';

class InlinePDF extends Component {
    constructor(data) {
        super(data)

        this.pdf = data.pdf
        this.metaData = data.metaData
    }

    viewerConfig = {
        /* If true, tools such as sticky note, highlight, and so on appear in the upper toolbar. */
        showAnnotationTools: false,

        /* If true, form filling is enabled and users can edit fields. */
        enableFormFilling: false,

        /* If true, the left-hand pane in file preview displays. The pane allows user to toggle thumbnails on and off. */
        showLeftHandPanel: true,

        /* If true, a download button appears in the overflow menu on the top bar. */
        showDownloadPDF: false,

        /* If true, then a print PDF option appears in the overflow menu on the top bar. */
        showPrintPDF: false,

        /* If true, the page control toolbar displays. */
        showPageControls: true,

        /* 	If true, the page control toolbar is locked to the bottom bar and expands to the page width.
        End users can still dock/undock via the dock button on the page control toolbar. */
        dockPageControls: false,

        /* Allowed possible values are "FIT_PAGE", "FIT_WIDTH" or "".
        FIT_WIDTH expands the page horizontally to the full width of the document pane; with this setting,
        the full page is unlikely to display on a single screen. Scrolling may be required.
        FIT_PAGE displays the entire page in the current view pane so that no scrolling is required.
        Note that end users can toggle the mode via the Fit Width button on the page controls bar (if present). */
        defaultViewMode: "",

        enableLinearization: true,

        embedMode: 'IN_LINE'
    };

    componentDidMount() {
        const viewSDKClient = new ViewSDKClient(this.pdf, this.metaData)
        viewSDKClient.ready().then(() => {
            /* Invoke file preview */
            /* By default the embed mode will be Full Window */
            viewSDKClient.previewFile("pdf-div", this.viewerConfig)
        })
    }

    render() {
        return <div id="pdf-div" className="inline-pdf in-line-div"/>
    }
}

export default InlinePDF