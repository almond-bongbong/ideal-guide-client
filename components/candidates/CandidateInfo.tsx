import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

interface Props {
  id: string;
  photoUrl: string;
  name: string;
}

const Thumbnail = styled.img`
  display: block;
  width: 80px;
`;

function CandidateInfo({ id, name, photoUrl }: Props) {
  const [image, setImage] = useState<string>('');

  useEffect(() => {
    const image = new Image();
    image.src = photoUrl;
    image.onload = () => {
      setImage(photoUrl);
    };
    image.onerror = e => {
      if (typeof e !== 'string') {
        const img: EventTarget | null = e.currentTarget;
        const extension = (img as HTMLImageElement).src
          .split('.')
          .slice(-1)
          .join('');

        if (extension === 'JPEG') {
          setImage('/images/candidate-default-photo.png');
          return;
        }
      }
      const newImage = `${photoUrl
        .split('.')
        .slice(0, -1)
        .join('.')}.JPEG`;

      setImage(newImage);
    };
  }, []);

  return (
    <div key={id}>
      {image && <Thumbnail src={image} alt="후보자 사진" />}
      <span>{name}</span>
    </div>
  );
}

export default CandidateInfo;
