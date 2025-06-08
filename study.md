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