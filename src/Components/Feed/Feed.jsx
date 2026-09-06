import React from 'react';
import FeedModal from './FeedModal';
import FeedPhotos from './FeedPhotos';

const Feed = () => {
  const [modalphoto, setModalPhoto] = React.useState(null);
  return (
    <div>
      {modalphoto && <FeedModal photo={modalphoto} />}
      <FeedPhotos setModalPhoto={setModalPhoto} />
    </div>
  );
};

export default Feed;
