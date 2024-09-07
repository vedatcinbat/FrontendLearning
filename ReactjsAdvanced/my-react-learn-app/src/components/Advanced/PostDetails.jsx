import React from 'react';
import withAnalytics from './hocs/withAnalytics';

const PostDetails = ({ data  }) => {
    return (
        <div>
            <h1>{data.title}</h1>
            <img src={data.imageUrl} alt={data.caption} />
            <p>{data.caption}</p>
        </div>
    );
}

const postDetailsData = {
    title: 'Post Title',
    imageUrl: 'https://example.com/image.jpg',
    caption: 'Post Caption',
};

export default withAnalytics(() => <PostDetails data={postDetailsData} />, 'Post Details');