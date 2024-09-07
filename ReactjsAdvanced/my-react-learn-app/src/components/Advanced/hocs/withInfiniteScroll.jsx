import React, { useState, useEffect } from 'react';

const withInfinityScroll = (WrappedComponent, fetchMoreData) => {
    return (props) => {
        const [page, setPage] = useState(1);
        const [loading, setLoading] = useState(false);

        const handleScroll = () => {
            const bottom = window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight;
            if (bottom && !loading) {
                setLoading(true);
                fetchMoreData(page + 1).then(() => {
                    setPage((prevPage) => prevPage + 1);
                    setLoading(false);
                });
            }
        };


        useEffect(() => {
            window.addEventListener('scroll', handleScroll);
            return () => window.removeEventListener('scroll', handleScroll);
        }, [page, loading]);

        return (
            <div>
              <WrappedComponent {...props} />
              {loading && <div>Loading more...</div>}
            </div>
          );
    }
}

export default withInfinityScroll;