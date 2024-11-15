import {useState} from 'react';

export default function UserInfo () {

    const handleTitle = () => {
        setTitle(_title[userStateNum]);

        setTitleExplain(_titleExplain[userStateNum]);
    }

    const _title = ["재빠른 퓨마", "부지런한 새", "느릿한 거북이", "게으른 고양이", "도전하는 다람쥐"];
    const _titleExplain = ["정말 멋져요!", "잘하고 있어요!", "조금 더 힘내요!", "어서 해볼까요?","시작이 반이에요!"];

    const [title, setTitle] = useState(_title[4]);
    const [titleExplain, setTitleExplain] = useState(_titleExplain[4]);
    const userId = "@studentzzang"; //나중에 파베랑 연결

    let userStateNum = 1;

    return (
        <div>
            {<Profile title={title} titleExplain={titleExplain} userId={userId}/>}
        </div>
    )
}

