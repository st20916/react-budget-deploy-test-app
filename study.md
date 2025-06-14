study

1. SPA란?
	 1. Single Page Application
	 2. 웹 사이트의 전체 페이지를 하나의 페이지에 담아 동적으로 화면을 바꿔가며 표현
---------------------------
> SPA에서 화면 변경은 어떻게 일어나는지?
> 1. HTML5의 History API를 사용
> > History API란?
> > 1. History.back()
> >		1. 세션 기록의 바로 뒤 페이지로 이동하는 비동기 메서드
> > 2. History.forward()
> >		1. 세션 기록의 바로 앞 페이지로 이동하는 비동기 메서드
> >
---------------------------
2. JSX란?
	 1. JSX를 통해서 화면에서 UI가 보이는 모습 표출
---------------------------
3. React에서 화면을 그리는 방식
	- React.createElement API를 사용해 Element를 생성한 후 (객체가 됨)
	- 이 Element를 in-Memory에 저장. ReactDOM.render를 사용해 그려줌.

- JSX 문법 사용 시, Babel이 변환
- JSX는 컴포넌트에 여러 엘리먼트 요소가 있다면 반드시, 부모 요소로 감싸줘야 함.
---------------------------
4. 예산 계산기 앱 컨테이너
	 - App component 부모 컴포넌트
	 - ExpenseForm, ExpenseList 자녀 컴포넌트
	 - ExpenseList 컴포넌트 내 여러 ExpenseItem 자녀 컴포넌트들
---------------------------
> React 내 inner Style 줄 때
> ```
>	<div style={{ width: 100%, marginTop: 1rem }}>
>	</div>
> ```
> 위와 같은 형식으로 카멜 케이스 기법 사용
---------------------------
5. Snippet
rce :: 클래스 Component 생성
rcc :: React Class Component 생성
rfce :: 함수형 Component 생성

```
	 React 18 이전 버전 :: <React.Fragment></React.Fragment>
	 ===
	 최신 버전 :: <></>
```
---------------------------
6. Props를 통해 컴포넌트 간 데이터 전달
	 - Props는 Properties의 줄임말
	 - 상속하는 부모 컴포넌트로부터 자녀 컴포넌트에 데이터 등을 전달하는 방법
	 - 읽기 전용(immutable)으로 자녀 컴포넌트 입장에선 변하지 않음.
		 (부모 컴포넌트에서 state를 변경시켜줘야만 가능)
---------------------------
7. map() 메소드
	 - 배열 내 모든 요소 각각에 대하여 주어진 함수를 호출한 결과를 모아 새로운 배열 반환
---------------------------
8. JSX Key 속성은 무엇인가?
	 - List 나열 시 Key를 추가해야 함.
	 - Key는 React가 변경, 추가 또는 제거된 항목을 식별하는데 도움
	 - 요소에 안정적인 ID를 부여하려면 배열 내부의 요소에 키 제공
	 - index는 비추천 !
---------------------------
9. 가상 DOM을 이용해 바뀐 부분만 실제 DOM에 적용
---------------------------
10. Filter 메소드
	 - 지우는 함수에서 할 일은 아래 `initialExpenses` 배열에서 지우기로 클릭 된
		 id와 같은 id를 가지고 있는 객체를 배열에서 삭제
	 - `filter()` 메소드는 주어진 함수의 테스트를 통과하는 모든 요소를 모아 새로운 배열로 반환
---------------------------
11. React State
	 - 리액트에서 데이터가 변할 때 화면을 다시 렌더링 해주기 위해서는 `React State` 사용
	 - Component의 렌더링 결과물에 영향을 주는 데이터를 갖고 있는 객체
		 (State가 변경되면 컴포넌트는 리랜더링된다. 또한, State는 Component 내에서 관리)
---------------------------
12. super(props)란 ?
	- constructor ?
		- `constructor`(생성자)를 사용하면 인스턴스화된 객체에서 다른 메서드를 호출하기 전에 수행해야 하는 사용자 지정 초기화 제공
		- 클래스를 new를 붙여서 ex) (new User('John')) 인스턴스 객체로 생성하면 넘겨받은 인수와 함께 constructor가 먼저 실행
		- 이 때, 넘겨받은 인수인 John이 this.name에 할당
---------------------------
13. 자바스크립트에서 super
	- super 키워드는 자식 클래스 내에서 부모 클래스의 생성자 호출 시 사용
	- super 키워드는 자식 클래스 내에서 부모 메서드를 호출 시, 사용
	- 문법
		- super([arguments]); // 부모 생성자 호출
		- super.functionOnParent([arguments]);
	- super 이후 this 키워드
		- 생성자에서는 super 키워드 하나만 사용되거나 `this` 키워드 사용 전 호출되어야 함.
		- 이유 : 부모 클래스의 생성자를 호출 전 this.name을 사용하려고 하면 문제
		- React에서 this.state을 생성자에 정의할 때 super가 먼저 나와야 하는 이유가 이와 같음.
---------------------------
14. React에서 super에 props를 인자로 전달하는 이유
	- React.Component 객체가 생성될 때 props 속성을 초기화하기 위해 부모 컴포넌트에게 props 전달
	- 생성자 내부에서도 this.props를 정상적으로 사용할 수 있도록 보장하기 위해
	- super()에 props를 넣어주지 않아도 React 내에서 이미 props를 할당해버림.
	- 넣어줘야만 constructor 에서 사용 가능
---------------------------
15. State와 Props
	- Props
		- Properties의 줄임말.
		- 상속하는 부모 컴포넌트로부터 자녀 컴포넌트에 데이터 등을 전달하는 방법
        - 읽기 전용(immutable)으로 자녀 컴포넌트 입장에선 변하지 않는다. (변하게 하고자 하면 부모 컴포넌트에서 state를 변경)
	- State
		- 부모 컴포넌트에서 자녀 컴포넌트로 데이터를 보내는 게 아닌 해당 컴포넌트 내부에서 데이터를 전달하려면? => `State`
		- 변경 가능(mutable)
		- State 변하면 Re-Render가 된다.
		- 어떤 입력 값을 `기억`해줄 때
---------------------------
16. React Hooks?
	- class 없이 state를 사용할 수 있는 기능
	- 필요한 이유 ?
      - Class Component로 사용되어 온 불편함이나 문제점들 보완
	- Functional Component 사용
	- 이점 : `useEffect()` 내에서 처리 가능
	- 문제 : 너무 많은 Wrapper 컴포넌트가 생길 수 있음.
		- `Custom React Hooks` 로 대체
---------------------------
17. Class Component (클래스)
	- 더 많은 기능 제공
	- 더 긴 코드 양
	- 더 복잡한 코드
	- 더딘 성능
---------------------------
18. Functional Component (함수형)
	- 더 적은 기능 제공
	- 짧은 코드 양
	- 더 심플한 코드
	- 더 빠른 성능
	- 생명주기를 사용할 수 있기에 데이터를 가져오고, 컴포넌트 시작하자마자 API도 호출하고 많은 부분이 가능
---------------------------
19. HOC 컴포넌트
	- Higher Order Component의 약자
	- 컴포넌트를 인자로 받아서 새로운 React Component를 리턴하는 함수
	- Custom React Hooks로 대체해 많은 Wrapper 컴포넌트를 줄임.
	- 화면에서 재사용 가능한 로직만을 분리해 Component로 만들고, 재사용 불가능한 UI와 같은 다른 부분들은 Parameter로 받아 처리하는 방법
---------------------------
20. Hooks에서 state 업데이트 방법
	- state 정의 시, const [ name, setName ] = useState('');
	- 위와 같은 식으로 해주면, setName을 이용해 state 업데이트 가능
---------------------------
21. 구조 분해 할당 (Destructuring)
	- 배열이나 객체의 속성을 해체하여 그 값을 개별 변수에 담을 수 있게 하는 Javascript 표현식
	- 객체 구조 분해 할당
	- 배열 구조 분해 할당
---------------------------
22. React 불변성
	- [사전적 의미] 값이나 상태를 변경할 수 없는 것
	- [원시 타입] 불변성을 가지고 있다.
		- Boolean, String, Number, null, undefined, Symbol
		- 고정된 크기로 `Call Stack` 메모리 저장, 실제 데이터가 변수에 할당
	- [참조 타입] 불변성을 가지고 있지 않다.
		- Object, Array
		- 데이터 크기가 정해져 있지 않고, `Call Stack` 메모리에 저장.
		- 데이터의 값이 `heap`에 저장되며, 변수에 `heap` 메모리의 주소 값이 할당
    - 불변성을 지켜야 하는 이유 ?
      - 참조 타입에서 객체나 배열의 값이 변할 때 원본 데이터가 변경되기에 이 원본 데이터를 참조하고 있는 다른 객체에서
        예상치 못한 오류가 발생할 수 있어 프로그래밍의 복잡도가 상승
      - 리액트에서 화면을 업데이트 할 때 불변성을 지켜서 값을 이전 값과 비교해서 변경된 사항을 확인한 후
        업데이트하기 때문에 불변성을 지켜줘야 함.
    - 불변성을 지키는 방법은 ?
      - `참조 타입` 에서는 값을 변경했을 때 `Call Stack` 주소 값은 동일하나 `Heap` 메모리 값만 바꿔주기에 불변성 유지 불가이므로
        아예 새로운 배열을 반환하는 메소드 사용
      - spread operator, map, filter, slice, reduce
      - 원본 데이터를 변경하는 메소드 -> splice, push
---------------------------
23. 전개 연산자 (Spread Operator)
    - ES6에서 새롭게 추가
    - 특정 객체 또는 배열의 값을 다른 객체, 배열로 복제 또는 옮길 때 사용
    - 연산자의 모양 : `...`
    - 배열 / 객체 조합
---------------------------		
24. reduce 메소드
	- 배열의 각 요소에 대해 주어진 리듀서(reducer) 함수를 실행하고, 하나의 결과 값 반환
	- arr.reduce(reducer 함수, [initialValue]);
	- reducer 함수는 4개의 인자를 가짐.
		1. 누산기 (acc)
		2. 현재 값 (cur)
		3. 현재 인덱스 (idx)
		4. 원본 배열 (src)
```
	[0, 1, 2, 3, 4].reduce(accumulator, currentValue, curentIndex, array) {
		return accumulator + currentValue;
	}, 10);
	1번째 호출 : 10, 0, 0, [0, 1, 2, 3, 4], 10
	2번째 호출 : 10, 1, 1, [0, 1, 2, 3, 4], 11
	3번째 호출 : 11, 2, 2, [0, 1, 2, 3, 4], 13
	4번째 호출 : 13, 3, 3, [0, 1, 2, 3, 4], 16
	5번째 호출 : 16, 4, 4, [0, 1, 2, 3, 4], 20
```
---------------------------
25. React Profilers
	- React의 Profiler API를 사용하여 React 어플리케이션의 성능 병목 현상 식별하기 위해
	- Rendering 되는 각 구성 요소에 대한 타이밍 정보를 수집
---------------------------
26. useEffect
	- Component가 Rendering 될 때 특정 작업을 실행할 수 있도록 하는 Hook
---------------------------
27. fetch() 메소드
	- 원격 API에 요청을 보내기 위해 사용할 수 있는 메소드
	- 전역 fetch() 메소드는 네트워크에서 리소스를 가져오는 프로세스를 시작하여
	-	`Response`(응답)을 사용할 수 있게 되면 이행된 `Promise`(약속)을 `Return`(반환).
---------------------------
28. React.memo()
	- React의 경우, 먼저 Component를 Rendering 후, 이전 Rendering 결과와 비교하여 DOM 업데이트 결정
	- 만약, Rendering 결과가 이전과 다르다면, React는 DOM 업데이트
	- 만약, Component가 React.memo()로 감싸져 있을 경우, React는 Component를 Rendering 후 결과를 Memoizing
	- 그리고, 다음 Rendering 일어날 때 Rendering 하는 Component의 props가 같다면
	- React는 Memoizing된 내용 재사용
		- 메모이제이션(Memoization)
			* 주어진 입력 값에 대한 결과를 저장함으로써 같은 입력 값에 대해 함수가 한 번만 실행되는 것을 보장
---------------------------
29. React Memo가 props를 비교하는 방법은?
	- props 혹은 props의 객체를 비교할 때, `얕은 비교`를 함.
---------------------------
30. React Memo Props 비교 방식 수정
	- 비교 방식을 원하는대로 수정하고 싶을 경우, React.memo()의 두 번째 매개변수로 비교 함수를 넣어주면 된다.
```
React.memo(Component, [compareFunction(prevProps, nextProps)]);
```
---------------------------
31. React Memo 사용을 지양해야 하는 상황
	- Rendering 될 때, props가 다른 경우가 대부분인 Component를 생각해보면, Memoization 기법의 이점을 얻기 힘듦.
	- props가 자주 변하는 Component를 React.memo()로 래핑할지라도 React는 두 가지 작업을 Re-Rendering 할 때마다 수행
		1. 이전 props와 다음 props의 동등 비교를 위해 비교 함수 수행
		2. 비교 함수는 거의 항상 false를 반환할 것이기 때문에, React는 이전 Rendering 내용과 다음 Rendering 내용 비교
	- 비교 함수의 결과는 대부분 `false`를 반환하기 때문에 `props 비교 불필요`
---------------------------
32. React.memo()는 Re-Rendering을 막기 위한 도구보다 성능 개선의 도구
	- React에서는 성능 개선을 위한 하나의 도구로 Memoization 사용
	- 대부분의 상황에서 React는 Memoizing 된 Component 의 Re-Rendering을 피할 수 있으나, Rendering을 막기 위해
	- Memoization에 너무 의존하면 안 된다. (버그 유발 가능성 존재)
---------------------------
33. 얕은 비교 (Shallow Compare)
	- 숫자, 문자열 등 원시 자료형은 값을 비교
	- 배열, 객체 등 `참조 자료형`은 값 혹은 속성을 비교하지 않고, `참조되는 위치`를 `비교`
		1. React.memo() 에서 props를 비교할 때
		2. React Component가 Re-Rendering 하기 전
			-	state 변경이 있을 때
			- 부모 Component 가 Rendering 될 때
---------------------------
34. 깊은 비교
	- 얕은 비교와 달리 객체의 경우에도 값으로 비교.
		- Object Depth가 깊지 않은 경우 : JSON.stringify() 사용
		- Object Depth가 깊은 경우 : lodash 라이브러리의 isEqual() 사용
---------------------------
35. React 가 Re-Rendering 되는 경우
	- state 변경이 있을 때
	- 부모 Component 가 Rendering 될 때
	- 새로운 props 들어올 때
	- shouldComponentUpdate에서 true가 반환될 때
	- forceUpdate가 실행될 때
---------------------------
36. useCallback을 이용한 함수 최적화
	- Component가 Rendering이 될 때 그 안에 있는 함수도 다시 생성
	- 하지만, 똑같은 함수를 Component가 Re-Rendering 된다고 해서 계속 만드는 것은 좋은 현상이 아님.
	- useCallback 은 Memoization 된 함수를 반환하는 함수
	- 적용 : useCallback 안에 Callback 함수와 의존성 배열을 순서대로 넣는다.
	- 함수 내 `참조하는 state, props`가 있으면 `의존성 배열에 추가`
	- useCallback으로 인해 의존성 배열에 추가해 준 state 또는 props가 변하지 않는다면 함수 새로 생성 X
		- 새로 생성되지 않기 때문에 메모리에 새로 할당되지 않고, 동일 참조 값 사용
	- 의존성 배열에 아무것도 없을 경우, Component가 최초 Rendering 시에만 함수가 생성되고, 그 이후에는
	- 동일한 참조 값을 사용하는 함수가 된다.
```
ex..
const testFunction = useCallback(() => {}, []);
```
---------------------------
37. 메모이제이션 (Memoization)
	- 비용이 많이 드는 함수 호출의 결과를 저장하고, 동일한 입력이 다시 발생할 때 캐시된 결과를 반환하여
	- 컴퓨터 프로그램의 속도를 높이는데 주로 사용되는 최적화 기술
```
ex..
	function Component({ a, b }) {
		const result = compute(a, b);
		return (
			<div>{result}</div>
		);
	}
```
---------------------------
38. useMemo을 이용한 결과 값 최적화
	- useMemo로 감싸준 후 첫번째 인수에 의존성 배열에 compute 함수에서 사용하는 값을 넣어줌.
```
ex..
	function Component({ a, b }) {
		const result = useMemo(() => compute(a, b), [a, b]);
		return (
			<div>{result}</div>
		);
	}
```
---------------------------