import { AnswersHeadlessProvider } from "@yext/answers-headless-react";

type HeadlessProviderProps = Parameters<typeof AnswersHeadlessProvider>[0];

export const answersHeadlessConfig: HeadlessProviderProps = {
  apiKey: "2d586133bf1ad30c089c5869ca2376cf",
  experienceKey: "answers",
  locale: "en",
  sessionTrackingEnabled: true,
  
};
export const answersApiKey = "2d586133bf1ad30c089c5869ca2376cf";
export const answersExperienceKey = "answers";
export const answersSandboxEndpoints = {
  universalSearch:
    "https://liveapi-sandbox.yext.com/v2/accounts/me/answers/query?someparam=blah",
  verticalSearch:
    "https://liveapi-sandbox.yext.com/v2/accounts/me/answers/vertical/query",
  questionSubmission:
    "https://liveapi-sandbox.yext.com/v2/accounts/me/createQuestion",
  status: "https://answersstatus.pagescdn.com",
  universalAutocomplete:
    "https://liveapi-sandbox.yext.com/v2/accounts/me/answers/autocomplete",
  verticalAutocomplete:
    "https://liveapi-sandbox.yext.com/v2/accounts/me/answers/vertical/autocomplete",
  filterSearch:
    "https://liveapi-sandbox.yext.com/v2/accounts/me/answers/filtersearch",
};
