import data from "./data";
import { questionType } from "./questionType";

function fetchQuestions(setQuestion: React.Dispatch<React.SetStateAction<questionType | undefined>>) {
    setQuestion(data);
}
export default fetchQuestions
