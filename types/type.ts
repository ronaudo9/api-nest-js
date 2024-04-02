export type SkillPoint = {
  skillPointId: number;
  userId: number;
  FR: number;
  BK: number;
  DB: number;
  SVL: number;
  AR: number;
  TS: number;
  COM: number;
};
export type Skill = {
  skillId: number;
  userId: number;
  InherentName: string;
  InherentDescription: string;
  updatedAt: Date;
};
export type SpecialAbility = {
  specialAbilityId: number;
  userId: number;
  skillList: string;
  skillSelection: boolean;
  tagColor: number;
};

export type Portfolio = {
  portfolioId: number;
  specId: number;
  heading: string;
  url: string;
};

export type SkillSummary = {
  skillSummaryId: number;
  specId: number;
  environment: string[];
  programmingLanguage: string[];
  framework: string[];
  library: string[];
  cloud: string[];
  tool: string[];
  developmentDomain: string[];
};

export type SellingPoint = {
  sellingPointId: number;
  specId: number;
  title: string;
  content: string;
};

export type Qualification = {
  qualificationId: number;
  specId: number;
  credential: string;
  acquisitionDate: string;
};

export type PreviousWork = {
  previousWorkId: number;
  specId: number;
  industry: string;
  occupation: string;
  JobDuties: string;
};

export type DevelopmentExperience = {
  developmentExperienceId: number;
  specId: number;
  startYear: string;
  startDate: string;
  duration: string;
  assignedTask: string;
  teamSize: string;
  totalProjectHeadcount: string;
  projectName: string;
  jobDuties: string;
  img: string;
  environments: string[];
  programmingLanguages: string[];
  frameworks: string[];
  tools: string[];
};

export type Find = {
  findId: number;
  specId: number;
  findItems: string[];
};

export type Spec = {
  specId: number;
  userId: number;
  github: string;
  offHours: string;
  searches: boolean;
  createdAt: Date;
  portfolios: Portfolio[];
  skillSummaries: SkillSummary[];
  sellingPoints: SellingPoint[];
  qualifications: Qualification[];
  previousWorks: PreviousWork[];
  developmentExperiences: DevelopmentExperience[];
  finds: Find[];
};

export type User = {
  userId: number;
  email: string;
  password: string;
  employeeNumber: number;
  joinDate: string;
  userName: string;
  affiliation: string;
  businessSituation: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date;
  skills?: Skill[];
  skillPoints?: SkillPoint[];
  specialAbilities?: SpecialAbility[];
  specs?: Spec[];
};
