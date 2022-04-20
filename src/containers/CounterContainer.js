import React from "react";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import Counter from "../components/Counter";
import { increase, decrease, setDiff } from "../modules/counter";

// 컨테이너 컴포넌트 : 상태관리, action을 dispatch 는 여기서 한다.
function CounterContainer() {
  // useSelector는 리덕스 스토어의 상태를 조회하는 Hook입니다.
  // state의 값은 store.getState() 함수를 호출했을 때 나타나는 결과물과 동일합니다.
  // useSelector는 파라미터로 함수를 가지고, 그 함수의 파라미터로 state를 가져온다. state = 리덕스의 현재상태
  const { number, diff } = useSelector(
    (state) => ({
      number: state.counter.number,
      diff: state.counter.diff,
    }),
    shallowEqual // shallowEqual은 react-redux에 내장되어있는 함수로서, 객체 안의 가장 겉에 있는 값들을 모두 비교해줍니다(얕은 비교). 이게 없으면 state를 가져와서 매번 새로운 객체를 만들게 됨.
    // 이거는 아래와 같다.
    // (left, right) => { return left.diff === right.diff && left.number === right.number }
  );
  // shallowEqual 말고 다른 방법
  //const number = useSelector(state => state.counter.number);
  //const diff = useSelector(state => state.counter.diff);

  // useDispatch 는 리덕스 스토어의 dispatch 를 함수에서 사용 할 수 있게 해주는 Hook 입니다.
  const dispatch = useDispatch();
  // 각 액션들을 디스패치하는 함수들을 만드세요. 액션 생성함수를 불러와서 사용해줍니다.
  const onIncrease = () => dispatch(increase());
  const onDecrease = () => dispatch(decrease());
  const onSetDiff = (diff) => dispatch(setDiff(diff));

  return (
    <Counter
      // 상태와
      number={number}
      diff={diff}
      // 액션을 디스패치 하는 함수들을 props로 넣어줍니다.
      onIncrease={onIncrease}
      onDecrease={onDecrease}
      onSetDiff={onSetDiff}
    />
  );
}

export default CounterContainer;
