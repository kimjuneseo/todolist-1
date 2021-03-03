# 투두리스트를 만들어보자

## 🚀미션
### 🎯 (1) 투두 추가하기
- 인풋에서 엔터를 누르면 투두가 생성된다.
- 공백일 경우 적당한 내용의 알림창을 띄운다.

### 🎯 (2) 투두 완료하기
- 인풋 옆의 체크버튼을 클릭할 경우 전체 선택이 된다.
- 투두 옆의 버튼을 클릭할 경우 완료 상태가 된다.

## 추가정보
- 기본 상태
```html
<li class="list">
	<div class="check"></div>
	<p class="text"></p>
	<p class="close">X</p>
</li>
```

- 완료한 상태
```html
<li class="list li_ac">
	<div class="check"></div>
	<p class="text"></p>
	<p class="close">X</p>
</li>
```

- 마우스 호버시
```html
<li class="list hov">
	<div class="check"></div>
	<p class="text"></p>
	<p class="close">X</p>
</li>
```