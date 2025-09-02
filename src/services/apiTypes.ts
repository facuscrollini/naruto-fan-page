//Teams, Kekkei Genkai, Village and Clan Type

export type SimpleGroupType = {
  id: number;
  name: string;
  characters: number[];
  message?:string;
};

//Teams, Kekkei Genkai, Village and Clan Type End -------------------------------------------------------------

//-----------------------------E N D  S I M P L E  T Y P E S -----------------------------------------------------

//-----------------------------S T A R T  C O M P L E X  T Y P E S -----------------------------------------------

//Akatsuki Type and SubTypes_______________________________________________________

export type AkatsukiType = {
  id: number;
  name: string;
  images: string[];
  debut?: DebutType;
  family?: AkatsukiFamilyType;
  jutsu?: string[];
  natureType?: string[];
  personal?: AkatsukiPersonalType;
  rank?: RankType;
  tools?: string[];
  uniqueTraits?: string[];
  voiceActors?: VoiceActorsType;
};

export type RankType = {
    ninjaRank?: AgeHeightWeightType;
}


export type AkatsukiFamilyType = {
    mother?: string;
}

export type AkatsukiPersonalType = {
    birthdate?: string;
    sex?:string;
    age?: AgeHeightWeightType;
    status?:string;
    height: AgeHeightWeightType;
    weight: AgeHeightWeightType;
    bloodType?:string;
    classification?:string | string [];
    occupation?:string;
    affiliation?: string | string[];
    partner?: string | string [];
    team? : string | string[];
    clan?: string;
    kekkeiGenkai?:string;

}

export type AgeHeightWeightType = {
    [key:string]: string
}
//Akatsuki Type End __________________________________________________________________

//TailedBeasts Type and SubTypes________________________________________________________

export type TailedBeastType = {
  id: number;
  name: string;
  images: string[];
  debut: DebutType;
  family: FamilyType;
  jutsu: string[];
  natureType: string[] | null;
  personal: PersonalType;
  uniqueTraits?: string[];
  tools?: string[];
  voiceActors?: VoiceActorsType;
};


export type FamilyType = {
  "incarnation with the god tree"?: string;
  "depowered form"?: string;
  creator?: string;
  sibling?: string;
};

export type PersonalType = {
  status?: string;
  kekkeiGenkai?: string;
  classification: string | string[];
  jinchūriki: string[];
  titles?: string[];
  affiliation?: string;
  species?: string;
};


//TailedBeast Type End __________________________________________________________________

//Chatacter Type and SubTypes________________________________________________________

export type CharacterType = {
  id: number;
  name: string;
  images: string[];
  debut?: DebutType;
  jutsu?:string[];
  natureType?:string[];
  personal?: PersonalType | AkatsukiFamilyType;
  family?: AkatsukiFamilyType;
  rank?:RankType;
  tools?:string[];
  uniqueTraits?:string[];
  voiceActors?:VoiceActorsType;
  
};

//Character Type End __________________________________________________________________

//Shared Types__________________________________________________________________________

export type DebutType = {
  manga?: string;
  anime?: string;
  novel?: string;
  movie?: string;
  game?: string;
  ove?: string;
  appearsIn?: string;
};

export type VoiceActorsType = {
  japanese?: string | string [];
  english?: string | string[];
};

//Shared Types End ________________________________________________________________________