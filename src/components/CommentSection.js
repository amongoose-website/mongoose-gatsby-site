import React from 'react'

import commentBox from 'commentbox.io'

const CONFIG = {
    className: 'commentbox',
    defaultBoxId: 'commentbox',
    sortOrder: 'newest',
    backgroundColor: null,
    textColor: null,
    subtextColor: null,
    singleSignOn: null,
};

class CommentSection extends React.Component {
    componentDidMount() {
        this.removeCommentBox = commentBox('5757482085384192-proj', CONFIG);
    }

    componentWillUnmount() {
        this.removeCommentBox();
    }

    render() {
        return (
            <>
                <div className="commentbox container blog__content"></div>
            </>
        )
    }
}

export default CommentSection