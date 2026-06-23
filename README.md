# Living Aegis Origin

이 저장소는 Living Aegis Origin의 메인 게임 프로젝트이다.

현재 저장소는 GitHub Pages와 호환되는 작은 정적 웹 프로젝트 scaffold에서 시작한다. `index.html`을 브라우저에서 직접 열어 Canvas 2D 화면이 준비되었는지 확인할 수 있도록, 초기 단계에 필요한 기본 파일만 유지한다.

## 목적

- 메인 게임의 출발점을 제공한다.
- HTML, CSS, JavaScript, Canvas 2D 기반의 정적 웹 프로젝트로 유지한다.
- 이후 작은 단위의 반복 작업을 위한 깨끗한 구조를 마련한다.
- prototype 실험이나 simulator 실험을 메인 게임 저장소와 섞지 않는다.

## 실행 방법

브라우저에서 `index.html`을 직접 연다.

빌드 단계, package manager, 서버, 외부 라이브러리는 필요하지 않다.

## 기술 스택

- HTML
- CSS
- JavaScript
- Canvas 2D
- GitHub Pages 호환 정적 파일

## 저장소 역할

- `living-aegis-origin`: 메인 게임 프로젝트
- `living-aegis-prototype`: 기능 실험용 prototype 저장소
- `living-aegis-simulator`: 제작 보조용 simulator 저장소

프로토타입 실험은 `living-aegis-prototype`에서 관리한다.

시뮬레이터는 `living-aegis-simulator`에서 관리한다.

## 문서 언어 원칙

내부 설명 문서는 한국어 중심으로 작성한다. 파일명, 폴더명, 코드 식별자, 주요 기술 용어는 영어를 유지한다.

## Codex 작업 지침

Codex 작업 시 반복 작업 지침은 루트의 `AGENTS.md`를 따른다.
