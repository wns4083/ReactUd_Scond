//React에서 리스트 렌더링( 배열을 이용하여 개별적인 컴포턴트 생성)


import { useRef, useState } from "react";


const DiaryEditVer3 = ({onCreate}) => {
    const authorInput = useRef();
    const textareaInput = useRef();
    const [state, setState] = useState({
        author: "",
        content: "",
        emotion: 5
    });
    const handleChangeState = (e) => {
    setState({
        ...state,
        [e.target.name]: e.target.value
    });
    };
    const handleSubmit = () => {
        if(state.author.length < 1){
            
            authorInput.current.focus(); //포커스 가게 만드는 명령어
            return;
        }
        if(state.content.length<5){
            textareaInput.current.focus(); //포커스 (유스레프로 커런트)
            return;
        }
        onCreate(state.author, state.content, state.emotion);
        
        alert("저장 성공");
        setState({
            author: "",
            content: "",
            emotion:1
        });
    };
    //객체 펼치기 spead 용법으로 일일이 다 쓰지 않아도 된다 content: state.content를
    // ...state, author: e.target.value로 스프레드를 맨 위로
    //둬야 순서상으로 맞음 (위에서 아래로 읽는 속성 때문)
    return <div className="DiaryEdit">
        <h2>Name</h2>
        <div>
            <input 
            value={state.author}
            ref={authorInput} 
            onChange={handleChangeState} placeholder="Name" name="author"/>
        </div>
        <div>
            <textarea name="content" 
            ref={textareaInput} 
            value={state.content} 
            onChange={handleChangeState} />
        </div>
        <div>
            <select name="emotion" value={state.emotion} onChange={handleChangeState}>
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
                <option value={5}>5</option>
            </select>
        </div>
        <div>
            <button onClick={handleSubmit}>저장하기</button>
        </div>
    </div>;
};
export default DiaryEditVer3;