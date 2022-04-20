// 리덕스 모듈 (= ducks 패턴)

/* 액션 타입 만들기 */
// Ducks 패턴을 따를땐 액션의 이름에 접두사를 넣어주세요.
// 이렇게 하면 다른 모듈과 액션 이름이 중복되는 것을 방지 할 수 있습니다.
// 액션 타입명은 대문자로 작성
const SET_DIFF = "counter/SET_DIFF";
const INCREASE = "counter/INCREASE";
const DECREASE = "counter/DECREASE";

/* 액션 생성함수 만들기 */
// 액션 생성함수를 만들고 export 키워드를 사용해서 내보내주세요.
// 액션 생성함수는 보통 화살표 함수로 만들고 소문자+카멜케이스로 작성
export const setDiff = (diff) => ({ type: SET_DIFF, diff });
export const increase = () => ({ type: INCREASE });
export const decrease = () => ({ type: DECREASE });

/* 초기 상태 선언 */
const initialState = {
  number: 0,
  diff: 1,
};

/* 리듀서 선언 */
// 리듀서는 export default 로 내보내주세요.
// 리듀서는 반드시 state(이전상태), action을 파라미터로 받는다.
// state는 initialState로 넣어줘야 함. 처음에 reducer를 한번 호출하기 때문에
// initialState 없으면 default의 state가 undefined 되어 초기상태가 제대로 만들어지지 않음.
export default function counter(state = initialState, action) {
  switch (action.type) {
    case SET_DIFF:
      return {
        ...state,
        diff: action.diff, // 아래에서 올라온 action.diff 값을 diff에 넣어줌.
      };
    case INCREASE:
      return {
        ...state,
        number: state.number + state.diff,
      };
    case DECREASE:
      return {
        ...state,
        number: state.number - state.diff,
      };
    default:
      return state;
  }
}
