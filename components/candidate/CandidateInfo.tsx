import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { fadeIn } from '../../style/animations';
import colorByParty from '../../constants/colorByParty';
import moment from 'moment';

interface Props {
  id: string;
  number: string;
  photoUrl: string;
  name: string;
  party: string;
  birth: string;
  age: string;
  job: string;
  career1: string;
  career2: string;
  className?: string;
}

const Container = styled.div`
  overflow: hidden;
  position: relative;
  border-radius: 10px;
  box-shadow: 0 2px 5px rgba(100, 100, 100, 0.2);
  cursor: pointer;
`;

const Number = styled.em`
  position: absolute;
  top: 15px;
  right: 20px;
  padding: 2px 6px;
  border: 1px solid #eee;
  border-radius: 5px;
  color: #555;
  font-size: 12px;
`;

const ProfileWrap = styled.div`
  overflow: hidden;
  position: relative;
  height: 161px;
`;

const Photo = styled.div`
  overflow: hidden;
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  background-color: #fafafa;

  img {
    display: block;
    height: calc(100% + 4px);
    margin: -2px;
    animation: ${fadeIn} 0.3s;
  }
`;

const Profile = styled.div`
  padding: 20px 20px 20px 170px;
`;

const Title = styled.div`
  margin-bottom: 10px;
`;

const Name = styled.em`
  color: #000;
  font-weight: 700;
  font-size: 18px;
  vertical-align: middle;
`;

const Party = styled.span<{ color: string }>`
  margin-left: 15px;
  color: ${({ color }) => color || '#333'};
  font-weight: 700;
  font-size: 16px;
  vertical-align: middle;
`;

const Info = styled.ul`
  color: #444;
  font-size: 14px;
  
  & > li {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`;

const loadImage = (url: string): Promise<string> =>
  new Promise((resolve, reject) => {
    const image = new Image();
    image.src = url;
    image.onload = e => {
      resolve((e.currentTarget as HTMLImageElement).src);
    };
    image.onerror = e => {
      reject(e);
    };
  });

const changeExtension = (url: string, extension: string): string =>
  `${url
    .split('.')
    .slice(0, -1)
    .join('.')}.${extension}`;

function CandidateInfo({
  id,
  number,
  name,
  photoUrl,
  party,
  birth,
  age,
  job,
  career1,
  career2,
  className,
}: Props) {
  const [image, setImage] = useState<string>('');

  useEffect(() => {
    loadImage(photoUrl)
      .then(setImage)
      .catch(() => loadImage(changeExtension(photoUrl, 'JPEG')))
      .then(result => result && setImage(result))
      .catch(() => loadImage(changeExtension(photoUrl, 'GIF')))
      .then(result => result && setImage(result));
  }, []);

  const openDetailPopup = () => {
    window.open(
      `http://info.nec.go.kr/electioninfo/candidate_detail_info.xhtml?electionId=0020200415&huboId=${id}`,
      'PREHBM',
      'toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=yes, width=1020, height=760, left=0, top=0',
    );
  };

  return (
    <Container className={className} onClick={openDetailPopup}>
      <Number>기호 {number}번</Number>
      <ProfileWrap>
        <Photo>{image && <img src={image} alt="후보자 사진" />}</Photo>
        <Profile>
          <Title>
            <Name>{name}</Name>
            <Party color={colorByParty.get(party)}>{party}</Party>
          </Title>
          <Info>
            <li>{moment(birth).format('YYYY. MM. DD')} ({age}세)</li>
            <li>{job}</li>
            <li>{career1}</li>
            <li>{career2}</li>
          </Info>
        </Profile>
      </ProfileWrap>
    </Container>
  );
}

export default CandidateInfo;
