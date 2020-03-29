import React from 'react';
import { useRouter } from 'next/router';

function PartyName() {
  const router = useRouter();
  const { partyName } = router.query;
  return <div>당별 정책 : {partyName}</div>;
}

// export const getStaticProps: GetStaticProps = async () => {
//   try {
//     await getPartyPolicy();
//   } catch (e) {
//     return { props: {} };
//   }
// };

export default PartyName;
