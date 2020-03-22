import axios from 'axios';
import { parseXmlResponse } from '../../utils/xmlParser';

const GOV_API_KEY = process.env.GOV_API_KEY;
const electionId = '20200415';
const electionTypeCode = 2;

export const getSubCandidates = (city = '', district = '') =>
  parseXmlResponse(
    axios.get(
      'http://apis.data.go.kr/9760000/PofelcddInfoInqireService/getPoelpcddRegistSttusInfoInqire',
      {
        params: {
          ServiceKey: GOV_API_KEY,
          pageNo: 1,
          numOfRows: 999,
          sgId: electionId,
          sgTypecode: electionTypeCode,
          sggName: district,
          sdName: city,
        },
      },
    ),
  );

export const getElectionDistricts = () =>
  parseXmlResponse(
    axios.get(
      'http://apis.data.go.kr/9760000/CommonCodeService/getCommonSggCodeList',
      {
        params: {
          ServiceKey: GOV_API_KEY,
          pageNo: 1,
          numOfRows: 999,
          sgId: electionId,
          sgTypecode: electionTypeCode,
        },
      },
    ),
  );
