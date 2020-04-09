import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  margin-top: 30px;
`;

const PartyStatusTable = styled.table`
  table-layout: fixed;
  width: 100%;
  border-top: 2px solid #666;
  border-bottom: 1px solid #ddd;

  th,
  td {
    padding: 10px;
  }

  td {
    border-top: 1px solid #eee;
    text-align: center;
  }
`;

function ElectionPartyInfoTable() {
  return (
    <Container>
      <PartyStatusTable>
        <colgroup>
          <col width="20%" />
          <col width="50%" />
          <col width="20%" />
        </colgroup>
        <thead>
          <tr>
            <th>구분</th>
            <th>정당</th>
            <th>출마 선거구 수</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td rowSpan={7}>원내정당</td>
            <td>더불어민주당</td>
            <td>253</td>
          </tr>
          <tr>
            <td>미래통합당</td>
            <td>237</td>
          </tr>
          <tr>
            <td>민생당</td>
            <td>58</td>
          </tr>
          <tr>
            <td>정의당</td>
            <td>76</td>
          </tr>
          <tr>
            <td>우리공화당</td>
            <td>42</td>
          </tr>
          <tr>
            <td>민중당</td>
            <td>59</td>
          </tr>
          <tr>
            <td>친박신당</td>
            <td>4</td>
          </tr>
          <tr>
            <td rowSpan={14}>원외정당</td>
            <td>가자!평화인권당</td>
            <td>1</td>
          </tr>
          <tr>
            <td>공화당</td>
            <td>1</td>
          </tr>
          <tr>
            <td>국가혁명배당금당</td>
            <td>235</td>
          </tr>
          <tr>
            <td>국민새정당</td>
            <td>1</td>
          </tr>
          <tr>
            <td>기독자유통일당</td>
            <td>10</td>
          </tr>
          <tr>
            <td>기본소득당</td>
            <td>2</td>
          </tr>
          <tr>
            <td>노동당</td>
            <td>3</td>
          </tr>
          <tr>
            <td>미래당</td>
            <td>1</td>
          </tr>
          <tr>
            <td>민중민주당</td>
            <td>1</td>
          </tr>
          <tr>
            <td>새누리당</td>
            <td>1</td>
          </tr>
          <tr>
            <td>충청의미래당</td>
            <td>1</td>
          </tr>
          <tr>
            <td>통일민주당</td>
            <td>1</td>
          </tr>
          <tr>
            <td>한국복지당</td>
            <td>1</td>
          </tr>
          <tr>
            <td>한나라당</td>
            <td>3</td>
          </tr>
          <tr>
            <td colSpan={2}>무소속</td>
            <td>119</td>
          </tr>
        </tbody>
      </PartyStatusTable>
    </Container>
  );
}

export default ElectionPartyInfoTable;
