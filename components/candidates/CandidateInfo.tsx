import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

interface Props {
  id: string;
  photoUrl: string;
  name: string;
  className?: string;
}

const Container = styled.div``;

const Thumbnail = styled.img`
  display: block;
  width: 100%;
`;

function CandidateInfo({ id, name, photoUrl, className }: Props) {
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

  const openDetailPopup = () => {
    const url = `http://info.nec.go.kr/electioninfo/precandidate_detail_info.xhtml?electionId=0020200415&huboId=${id}`;
    window.open(
      url,
      'PREHBM',
      'toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=yes, width=1020, height=760, left=0, top=0',
    );
  };

  return (
    <Container className={className}>
      {image && <Thumbnail src={image} alt="후보자 사진" />}
      <button type="button" onClick={openDetailPopup}>
        {name}
      </button>
    </Container>
  );
}

export default CandidateInfo;
