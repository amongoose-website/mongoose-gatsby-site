import React from 'react'

import Icon from './Icon'

const ATTACHMENT_THEMES = {
    pdf: {bg: '#BB0005', icon: 'insert_drive_file'},
    jpg: {bg: '#849324', icon: 'image'},
    png: {bg: '#849324', icon: 'image'},
    mp4: {bg: '#FFB30F', icon: 'movie'},
    txt: {bg: '#437F97', icon: 'insert_drive_file'},
    default: {bg: '#01295F', icon: 'insert_drive_file'}
}

const Attachment = ({ attachment }) => {
    const { fileName, file } = attachment;
    if (!file) return null
    const theme = ATTACHMENT_THEMES[file.extension] || ATTACHMENT_THEMES.default;
    return (
        <div className="attachment__container" tabIndex={0} role="button" onKeyDown={
            function (event) {
                if (event.key === 'Enter') {
                    window.open(file.publicURL);
                }
            }
        } onClick={
            function (event) {
                window.open(file.publicURL)
                event.preventDefault();
            }
        }>
            <div className="attachment-icon__container" style={{
                backgroundColor: theme.bg
            }}>
                <Icon className="attachment-icon" name={theme.icon}></Icon>
            </div>
            <span>
                { fileName }
            </span>
        </div>
    )
}

export default Attachment