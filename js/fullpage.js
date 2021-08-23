$(function() {
  new fullpage("#fullpage", {
      // (기본값 none) 각 구역별 CSS background-color 속성을 정의
      sectionsColor: ['yellowgreen','#eee','rgb(239,219,178,0.2)','#eee','rgb(239,219,178,0.2)'],

      // (기본값 true) 구역 내 컨텐츠가 수직으로 중심에 위치하도록 합니다. true로 설정되면 컨텐츠가 라이브러리로 포장됩니다.
      verticalCentered: false,

      // (기본값 false) 웹사이트에 스크롤 막대기를 쓸지 말지를 결정합니다.
      scrollBar: true,

      // (기본값 []) 각 구역별 URL에 보여질 앵커 링크(#예시)를 정의합니다. 앵커값이 고유해야 합니다
      anchors: ['anchor1', 'anchor2', 'anchor3', 'anchor4', 'anchor5', 'anchor6'],

      // (기본값 false) 선택자를 써서 구역에 링크할 메뉴를 구체적으로 정할 수 있습니다.
      menu: '#menu',

      // (기본값 700) 스크롤 이동 속도를 0.001초 단위로 설정합니다.
      // 300으로 설정했다가 맥북에서는 한 번에 2섹션씩 넘어가서 다시 기본값으로 설정
      scrollingSpeed: 700,
  });
})