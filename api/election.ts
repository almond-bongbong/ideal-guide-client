import axios from 'axios';

const GOV_API_KEY = process.env.GOV_API_KEY;

export const getSubCandidates = () => {
  console.log(GOV_API_KEY);

  return axios.get(
    'http://apis.data.go.kr/9760000/PofelcddInfoInqireService/getPoelpcddRegistSttusInfoInqire',
    {
      params: {
        ServiceKey: GOV_API_KEY,
        pageNo: 1,
        numOfRows: 10,
        sgId: '20200415',
        sgTypecode: 2,
      },
    },
  );
};
