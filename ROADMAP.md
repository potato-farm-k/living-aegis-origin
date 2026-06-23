# 로드맵

이 문서는 Living Aegis Origin 메인 게임의 이후 개발 방향을 기록한다. 각 항목은 가능한 한 작고 분리된 단계로 구현한다.

## 초기 기반

- [x] 정적 프로젝트 구조 생성
- [x] GitHub Pages와 호환되는 `index.html` 추가
- [x] 기본 Canvas 2D 초기화 추가
- [x] 프로젝트 추적용 문서 추가

## 이후 단계

- [ ] GitHub Pages 배포 확인
- [ ] scaffold 검토 후 Canvas 2D 기본 화면 확장
- [ ] 최소 HUD 추가
- [ ] aiming 동작 추가
- [ ] firing 동작 추가
- [ ] missile 동작 추가
- [ ] visual effects를 별도 단계로 추가
- [ ] sound effects와 audio handling 추가

gameplay systems, combat, input handling, animation systems, scoring, 복잡한 HUD 작업은 초기 scaffold 범위에 포함하지 않는다.

prototype 실험은 `living-aegis-prototype`에서 관리하고, simulator는 `living-aegis-simulator`에서 관리한다.
