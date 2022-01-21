import { useRef, useState} from "react";
import './App.css';
import DiaryEdit from "./DiaryEdit";
import DiaryEditor from './DiaryFv';
import DiaryEditVer2 from './DiaryEditVer2';
import DiaryEditVer3 from './DiaryEditVer3';
import DiaryList  from './DiaryList';

// const dummyList = [
//   {
//     id:1,
//     author:"이준희",
//     content:"안녕하세요",
//     emotion: 3,
//     created_date: new Date().getTime()
//   },
//   {
//     id:6,
//     author:"이준희",
//     content:"안녕하세요",
//     emotion: 1,
//     created_date: new Date().getTime()
//   },
//   {
//     id:2,
//     author:"이준화",
//     content:"반갑습니다",
//     emotion: 4,
//     created_date: new Date().getTime()
//   },
//   {
//     id:3,
//     author:"이준기",
//     content:"저는",
//     emotion: 5,
//     created_date: new Date().getTime()
//   },
//   {
//     id:4,
//     author:"이준호",
//     content:"공부합니다",
//     emotion: 3,
//     created_date: new Date().getTime()
//   },
//   {
//     id:5,
//     author:"이준배",
//     content:"리엑트를요",
//     emotion:2,
//     created_date: new Date().getTime()
//   },
// ]
function App() {
  const [data, setData] = useState([]);
  const dataId = useRef(0);
  const onCreate = (author, content, emotion) => {
    const created_date = new Date().getTime();
    const newItem = {
      author,
      content,
      emotion,
      created_date,
      id: dataId.current,
    };
    dataId.current +=1;
    setData([newItem, ...data]);
  };
  return (
    <div className="App">
      <h2>일기장</h2>
      <DiaryEdit/>
      <DiaryEditor/>
      <DiaryEditVer2/>
      <DiaryEditVer3 onCreate={onCreate}/>
      <DiaryList diaryList={data}/>
    </div>
  );
}
DiaryList.defaultProps ={
  diaryList: [],
};
// 63~65 Line , Prop이 의도치 않게 다르게 지칭할 때를 대비한 명령어
export default App;
