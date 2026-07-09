# Living Aegis Origin Simulation Findings

문서 상태: working notes / simulator 검토 결과
원본 위치: `living-aegis-origin`
사용 목적: simulator에서 확인한 구조 판단을 다음 prototype 기준으로 넘기기 위한 기록

---

## 2026-07-09 - P0 Missile-type Threat 접근 모델

Lunar Threat Side Profile Simulator와 Earth-Moon Scale Time Simulator 검토 결과, P0 Missile-type Threat의 핵심 진행 단계는 다음으로 정리한다.

```text
source → boost → main trajectory → Impact Warning Corridor → Lunar Defense Zone / Impact
```

Front Projection Preview에서는 기존 prototype에서 보였던 낙하감이 줄고, 접근감이 더 강하게 읽힌다. 이 판단은 최종 확정이 아니라 다음 정면 prototype으로 넘길 검증 기준이다.

다음 prototype의 목표는 Surface Occluded / Predicted Contact 없이, Off-screen / Visual Contact / Lock Ready만으로 Missile-type Threat의 정면 접근감과 Impact Warning Corridor를 구현할 수 있는지 확인하는 것이다.

Surface Occluded는 crater rim, lunar structure, low-angle approach 등 실제 line of sight가 막히는 조건에서만 P1/P2 후보로 재검토한다.

Three.js spike는 즉시 진행하지 않는다. Lunar Threat Side Profile Simulator의 Front Projection Preview에서 확인한 접근감을 Canvas 2D 정면 prototype으로 먼저 재현해본 뒤, 여전히 낙하감이 강하거나 거리감이 부족하면 Three.js spike를 재검토한다.
