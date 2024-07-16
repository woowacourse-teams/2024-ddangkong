export interface Question {
  questionId: number;
  title: string;
  category: string;
  firstOption: {
    content: string;
    optionId: number;
  };
  secondOption: {
    content: string;
    optionId: number;
  };
}
