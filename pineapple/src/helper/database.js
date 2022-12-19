import { dbService } from "../service/firebase";
import { ref, push, onValue } from "firebase/database";

//채팅 내용을 firebase로 보내기
export const sendChat = ({roomId, ...data}) => {
    console.log(roomId)
    return push(ref(dbService, `chat/${roomId}`), {
        message: data.message,
        timestamp: data.timestamp,
        uid: data.uid
    })
}

//userName 설정, 최종 제출 시 삭제
export const setUser = ({email, name, uid}) => {
    console.log("uid : " + uid)
    return push(ref(dbService, `user/`), {
        email: email,
        name: name,
        uid: uid
    })
}

//userName정보 불러오기
export const getName = () => {
    let names = []
    onValue(ref(dbService, `user/`), (snapshot) => {
        snapshot.forEach((row) => {
            names.push(row.val())
        })
    })
    return names
}