export const getNextQuestionID = (surveyIDs: number[], actualID: number): number => {
  const nextIndex = surveyIDs.indexOf(actualID) + 1;
  return surveyIDs[nextIndex];
};

export const isLastQuestion = (surveyIDs: number[], actualID: number): boolean => surveyIDs[surveyIDs.length - 1] === actualID;