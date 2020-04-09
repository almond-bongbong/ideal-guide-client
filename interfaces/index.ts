export interface Candidate {
  num: string;
  sgId: string;
  sgTypecode: string;
  huboid: string;
  sggName: string;
  sdName: string;
  wiwName: string;
  giho: string;
  gihoSangse: string;
  jdName: string;
  name: string;
  hanjaName: string;
  gender: string;
  birthday: string;
  age: string;
  addr: string;
  jobId: string;
  job: string;
  eduId: string;
  edu: string;
  career1: string;
  career2: string;
  status: string;
}

export interface District {
  num: string;
  sgId: string;
  sgTypecode: string;
  sggName: string;
  sdName: string;
  wiwName: string;
  sggJungsu: string;
  sOrder: string;
}

export interface DistrictsByCity {
  [key: string]: District[];
}

export interface CityWithDistricts {
  city: string;
  districts: District[];
}

export interface Party {
  num: string;
  sgId: string;
  jdName: string;
  pOrder: string;
}

export interface Policy {
  num: string;
  sgId: string;
  partyName: string;
  prmsCnt: string;
  prmsOrd1: string;
  prmsRealmName1: string;
  prmsTitle1: string;
  prmmCont1: string;
  prmsOrd2: string;
  prmsRealmName2: string;
  prmsTitle2: string;
  prmmCont2: string;
  prmsOrd3: string;
  prmsRealmName3: string;
  prmsTitle3: string;
  prmmCont3: string;
  prmsOrd4: string;
  prmsRealmName4: string;
  prmsTitle4: string;
  prmmCont4: string;
  prmsOrd5: string;
  prmsRealmName5: string;
  prmsTitle5: string;
  prmmCont5: string;
  prmsOrd6: string;
  prmsRealmName6: string;
  prmsTitle6: string;
  prmmCont6: string;
  prmsOrd7: string;
  prmsRealmName7: string;
  prmsTitle7: string;
  prmmCont7: string;
  prmsOrd8: string;
  prmsRealmName8: string;
  prmsTitle8: string;
  prmmCont8: string;
  prmsOrd9: string;
  prmsRealmName9: string;
  prmsTitle9: string;
  prmmCont9: string;
  prmsOrd10: string;
  prmsRealmName10: string;
  prmsTitle10: string;
  prmmCont10: string;
}