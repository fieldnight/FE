import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ReviewPostAuthorUI from './ReviewPostAuthor.presenter';

function ReviewPostAuthor({ nickName }) {
  const [internal, setInternal] = useState(true);

  const navigate = useNavigate();

  const handleSub = () => {
    setInternal(false);
  };

  return <ReviewPostAuthorUI nickName={nickName} internal={internal} navigate={navigate} handleSub={handleSub} />;
}

export default ReviewPostAuthor;
