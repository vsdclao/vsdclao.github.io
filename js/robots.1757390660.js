let robots_css = `
  :root {
    --robots-white: #ffffff;
    --robots-blue: #4789e7;
    --robots-black: #222428;
    --robots-disabled: #aeaeae;
    --robots-border: #e6e8ea;
    --robots-background: #eeeff3;
    --robots-header__title-explain: #4e5964;
    --robots-header__btn--close: #f5f5f5;
    --robots-toggle_OFF: #949fab;
    --robots-form__confirmBtn: #b1b3b7;
    --robots-disable__background: #f9f9f9;
    --robots-disable__text: #9d9d9d;
    --robots-preview__background: #fdfdfd;
    --robots-sortable__background: #f0f0f0;
    --robots-sortable__dragBtn: #949fab;
  }
  .robots-button {
    all: unset;
    display: inline-block;
    background: none;
    border: none;
    padding: 0;
    margin: 0;
    font: inherit;
    color: inherit;
    cursor: pointer;
    text-align: center;
    text-decoration: none;
    line-height: normal;
    -webkit-appearance: none;
    -moz-appearance: none;
  }
  .robots-svg {
    width: 15px;
    height: 15px;
  }
  .robots-divider{
    width: 100%;
    height: 1px;
    background-color: var(--robots-border);
  }
  .robots-modal > :nth-child(1 of .robots-divider) {
    position: sticky;
    top: 130px;
    z-index: 10000;
  }
  .robots-modal > :nth-child(2 of .robots-divider) {
    position: sticky;
    top: 181px;
    z-index: 10000;
  }
  .robots-modal > :nth-child(3 of .robots-divider) {
    position: sticky;
    top: 182px;
    height: 30px;
    background: var(--robots-white);
    z-index: 10000;
  }
  .robots-background{
    box-sizing: border-box;
    display: none;
    position: fixed;
    top: 50%; left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    height: 100%;
    opacity: 0.9;
    background-color: var(--robots-background);
    z-index: 9998;
  }
  .robots-modal {
    box-sizing: border-box;
    display: none;
    position: fixed;
    top: 50%; left: 50%;
    transform: translate(-50%, -50%);
    width: 900px;
    height: 100%;
    background-color: var(--robots-white);
    z-index: 9999;
    overflow-y: auto;
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
  @media (max-width:900px) {
    .robots-modal {
      width: 100%;
    }
  }
  .robots-header{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 24px 40px 24px;
    position: sticky;
    top: 1px;
    z-index: 10000;
    background: var(--robots-white);
    height: 130px;
    border-bottom: 1px solid var(--robots-border);
  }
  .robots-header__title {
    width: 18%;
    height: 35px;
    font-family: NotoSansKR;
    font-size: 24px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.46;
    letter-spacing: normal;
    text-align: left;
    color: var(--robots-black);
  }
  .robots-header__title-explain{
    letter-spacing: -1px;
    line-height: 1.46;
    font-size: 12px;
    color: var(--robots-header__title-explain);
    background: var(--robots-white);
  }
  .robots-header__btns{
    width: 27%;
    display: flex;
    justify-content: space-between;
  }
  .robots-header__btn {
    width: 48%;
    height: 40px;
    border-radius: 3px;
    border: none;
  }
  .robots-header__btn:hover {
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  }
  .robots-header__btn--close {
    background-color: var(--robots-header__btn--close);
  }
  .robots-header__btn--save {
    background-color: var(--robots-blue);
    color: var(--robots-white);
  }
  .robots-toggle {
    display: flex;
    align-items: center;
    width: 100%;
    height: 50px;
    padding: 0 40px;
    position: sticky;
    top: 131px;
    z-index: 10000;
    background: white;
    border-bottom: 1px solid var(--robots-border);
  }
  .robots-toggle__switch {
    position: relative;
    display: inline-block;
    width: 30px;
    height: 15px;
  }
  .robots-toggle__switch input { 
    display: none; 
  }
  .robots-toggle__slider {
    position: absolute;
    cursor: pointer;
    background-color: var(--robots-toggle_OFF);
    border-radius: 50px;
    width: 30px;
    height: 15px;
    transition: 0.4s;
  }
  .robots-toggle__slider::before {
    position: absolute;
    content: "";
    height: 12px;
    width: 12px;
    background-color: var(--robots-white);
    border-radius: 50px;
    transition: 0.4s;
    left: 1px;
    bottom: 2px;
  }
  .robots-toggle__switch input:checked + .robots-toggle__slider {
    background-color: var(--robots-blue);
  }
  .robots-toggle__switch input:checked + .robots-toggle__slider::before {
    transform: translateX(16px);
  }
  .robots-toggle div {
    display: flex;
    align-items: center;
    width: 164px;
  }
  .robots-toggle div > span {
    font-family: NotoSansKR;
    font-size: 13px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.46;
    letter-spacing: -0.33px;
    text-align: left;
    margin-right: 10px;
  }
  .robots-form {
    display: flex;
    flex-direction: column;
    padding: 0 40px;
    margin-top: 2px;
  }
  .robots-form table {
    width: 100%;
    border-radius: 3px;
    border: solid 1px var(--robots-border);
    border-collapse: collapse;
  }
  .robots-form table tr {
    box-sizing: border-box;
    width: 100%;
    border-bottom: solid 1px var(--robots-border);
  }
  .robots-form table th {
    padding: 10px 0 11px 0;
    height: 19px;
    font-family: NotoSansKR;
    font-size: 13px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.46;
    letter-spacing: -0.13px;
  }
  .robots-form table th:first-child,
  .robots-form table td:first-child {
    width: 7%;
    text-align: center;
    position: relative;
  }
  .robots-form table th:nth-child(2),
  .robots-form table td:nth-child(2) {
    width: 30%;
  }
  .robots-form table th:nth-child(3),
  .robots-form table td:nth-child(3) {
    width: 15%;
  }
  .robots-form table th:last-child,
  .robots-form table td:last-child {
    width: 48%;
  }
  .robots-form table td {
    height: 40px;
    padding: 0;
  }
  .robots-form__dragHandle {
    opacity: 0;
    transition: opacity 0.5s;
    cursor: move;
    position: absolute;
    top:30%;
    left: 5%;
  }
  .robots-form table tr:hover .robots-form__dragHandle {
    opacity: 1;
  }
  .robots-form table tbody tr:hover{
    outline: 1px solid var(--robots-blue);
  }
  .robots-form table td:nth-child(2) input {
    width: 90%;
    height: 30px;
    border-radius: 3px;
    border: solid 1px var(--robots-border);
    padding: 5px;
  }
  .robots-form table td:last-child{
    position: relative;
  }
  .robots-form table td:last-child input {
    height: 30px;
    border-radius: 3px;
    border: solid 1px var(--robots-border);
    padding: 5px;
  }
  @media (min-width:699px) {
    .robots-form table td:last-child input {
      width: 85%;
    }
    .robots-form table tbody td:last-child .robots-modify__input{
      padding-right: 15%;
    }
  }
  @media (min-width:525px) and (max-width:698px) {
    .robots-form table td:last-child input {
      width: 80%;
    }
    .robots-form table tbody td:last-child .robots-modify__input{
      padding-right: 20%;
    }
  }
  @media (max-width:524px) {
    .robots-form table td:last-child input {
      width: 75%;
    }
    .robots-form table tbody td:last-child .robots-modify__input{
      padding-right: 25%;
    }
  }
  .robots-form table tbody td:last-child .robots-modify__input{
    width: 98%;
  }
  .robots-form table td:last-child button {
    position: absolute;
    width: 30px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 5px;
  }
  .robots-form table td:last-child .robots-form__cancelBtn {
    right: 8.6%;
  }
  .robots-form table td:last-child .robots-form__confirmBtn {
    right: 2%;
    background-color: var(--robots-form__confirmBtn);
    fill: var(--robots-white);
    transition: background-color 0.2s ease;
  }
  .robots-form table td:last-child .robots-form__confirmBtn:hover {
    background-color: var(--robots-blue);
  }
  .robots-form table input:focus{
    border-color: var(--robots-blue);
  }
  .robots-form table input[readonly] {
    pointer-events: none;
    background-color: var(--robots-disable__background);
    color: var(--robots-disable__text);
  }
  .robots-form table select {
    width: 85%;
    height: 30px;
    border-radius: 3px;
    border: solid 1px var(--robots-border);
    background-color: var(--robots-white);
  }
  .robots-form table select:focus {
    border-color: var(--robots-blue);
  }
  .robots-form__itemModify,
  .robots-form__itemConfirm,
  .robots-form__itemDelete{
    cursor: pointer;
    position: relative;
    top: 6%;
    left: 2%;
    margin-right: 1.2%;
  }
  .robots-form__itemCancel:hover,
  .robots-form__itemModify:hover,
  .robots-form__itemDelete:hover{
    fill: var(--robots-blue) !important;
  }
  .robots-form-btns {
    display: flex;
    margin-top: 15.5px;
    margin-bottom: 25px;
    justify-content: space-between;
  }
  .robots-form-btns > div {
    display: flex;
  }
  .robots-form-btns__btn {
    width: 90px;
    height: 30px;
    border-radius: 3px;
    border: solid 1px var(--robots-border);
    background-color: var(--robots-preview__background);
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .robots-form-btns__btn:hover {
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
    transform: translateY(-0.7px);
  }
  .robots-form-btns > div > .robots-form-btns__addItem {
    margin-right: 10px;
  }
  .robots-form-btns__btn span {
    width: 70%;
    height: 19px;
    font-family: NotoSansKR;
    font-size: 13px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.46;
    letter-spacing: -0.65px;
    text-align: center;
  }
  .robots-tooltip + .tooltip > .tooltip-inner {
    width: 200px;
    white-space: normal;
  }
  .robots-preview {
    display: flex;
    flex-direction: column;
    padding: 0 40px 30px 40px;
  }
  .robots-preview__title {
    width: 100%;
    height: 20px;
    font-family: NotoSansKR;
    color: var(--robots-black);
    margin: 25px 0 15px 0;
  }
  .robots-preview__content{
    width: 100%;
    height: 460px;
    border: solid 1px var(--robots-border);
    background-color: var(--robots-preview__background);
    resize: none;
    padding: 15px 20px;
  }
  .sortable-placeholder {
    background-color: var(--robots-sortable__background);
    height: 40px;
  }
`;

(function ($) {
  $.robots = {
    isOpen: false,
    robotsText: '',
    robotsRules: {},
    siteMaps: new Set(),
    domain: '',
    itemIndex: 1,
    searchBots: [
      "AhrefsBot", "Applebot", "archive.org_bot", "Baiduspider", "Bingbot",
      "CCBot", "DaumBot", "Daumoa", "DotBot", "Exabot", "facebot",
      "Gigablast", "Googlebot", "ia_archiver", "LinkedInBot", "Magpie-crawler",
      "MegaIndex", "MJ12bot", "MojeekBot", "NaverBot", "Pinterestbot",
      "Qwantify", "SerpstatBot", "Slurp", "Twitterbot", "UpdownerBot",
      "VelenPublicWebCrawler", "Yeti", "ZumBot"
    ],
    aiBots: [
      "AIbot", "Amazonbot", "Bytespider", "ChatGPT-User", "ClaudeBot",
      "Claude-Web", "Cohere-ai", "DeepSeekBot", "Diffbot", "FacebookBot",
      "GroqBot", "GPTBot", "Huggingfacebot", "MetaBot", "MistralAI-User/1.0",
      "OpenAI-User", "OpenRetriever", "Omigili", "OmigiliBot", "PalmBot",
      "PerplexityBot", "Quora-Quivr", "YouBot"
    ],
    daumWebmaster: '',
    open: function (options = {}) {
      const {
        searchBot = false,
        aiBot = false,
        isToggle = false,
      } = options;
      this.getDaumWebmaster();
      // 중복오픈 체크
      if($.robots.isOpen) return;
      $.robots.isOpen = true;

      $.processON('robots 파일을 가져오는중...');
      $.ajax({
        url: '/template/open_robots',
        type: 'POST',
        data: {
          'user_dir': RPATH,
          'sid': SID,
          'host': HOST,

        },
        success: function (response) {
          $.processOFF();
          $.robots.display(searchBot, aiBot, isToggle);
          $.robots.renderInitialRobotsRules(response.content);  // robots.txt 초기 렌더링
          $.robots.domain = response.domain;
          if (response.source === "default") {
            $.robots.siteMaps.add(response.sitemap); // Storage에 robots.txt 없다면 sitemap 추가
          } else if (response.source === "file") {  // 2025.09.09: 외부 도메인 연결 + robots.txt 수정한 고객의 Sitemap이 기본 도메인이기 때문에 이를 외부 도메인으로 변경하기 위해 추가함
            let lines = response.content.split('\n');
            const targetSitemap = ($.robots.domain || "").replace(/\/$/, '') + '/user-sitemap';
            for (let line of lines) {
              line = line.trim();

              if (!line.toLowerCase().startsWith('sitemap:') || !line.includes('creatorlink.net')) continue;

              const url = line.replace(/^sitemap:\s*/i, '').trim(); // "Sitemap: " 제거해서 순수 URL을 얻음

              if (url === targetSitemap) break; // 외부 도메인 연결 안했기 때문에 도메인이 기본 도메인이라면

              const arr = [...$.robots.siteMaps];
              const idx = arr.findIndex(v => v.replace(/\/$/, '') === url.replace(/\/$/, ''));  // Set을 배열로 바꿔 위치(인덱스)를 찾아 같은 자리에 교체

              if (idx !== -1) {
                arr[idx] = targetSitemap;
                $.robots.siteMaps = new Set(arr);
              }
            }
          }
          $.robots.event();
        },
        error: function (xhr, status, error) {
          alert('기존 데이터가 존재하지 않습니다', error);
          $.processOFF();
        }
      });
    },
    event: function () {
      // 닫기
      $(document)
        .off('click', '.robots-header__btn--close')
        .on('click', '.robots-header__btn--close', function (e) {
          $.robots.close();
        });
      // 저장
      $(document)
        .off('click', '.robots-header__btn--save')
        .on('click', '.robots-header__btn--save', function () {
          $.robots.save();
        });
      // 검색봇 스위치 클릭 바인딩
      $(`.robots-toggle div:first-child input[type='checkbox']`).off('change').on('change', (e) => this.blockSearchBot(e.target.checked));
      // AI봇 스위치 클릭 바인딩
      $(`.robots-toggle div:nth-child(2) input[type='checkbox']`).off('change').on('change', (e) => this.blockAIBot(e.target.checked));
      // Confirm(체크) 버튼 클릭 바인딩
      $(document)
        .off('click', '.robots-form__itemConfirm')
        .on('click', '.robots-form__itemConfirm', () => this.previewText());
      // 취소버튼
      $(document)
        .off('click', '.robots-form__itemCancel')
        .on('click', '.robots-form__itemCancel', (e) => {
          $.robots.cancelItem(e);
        });
      // 확인버튼
      $(document)
        .off('click', '.robots-form__confirmBtn')
        .on('click', '.robots-form__confirmBtn', (e) => {
          $.robots.confirmItem(e);
        });
      // 수정버튼
      $(document)
        .off('click', '.robots-form__itemModify')
        .on('click', '.robots-form__itemModify', (e) => {
          $.robots.modifyItem(e);
        });
      // 삭제버튼
      $(document)
        .off('click', '.robots-form__itemDelete')
        .on('click', '.robots-form__itemDelete', (e) => {
          $.robots.deleteItem(e);
        });
      // 항목추가 버튼
      $('.robots-form-btns__addItem')
        .off('click', '.robots-form-btns__addItem')
        .on('click', () => {
          $.robots.addItem();
        });
      // 가져오기 버튼
      $('.robots-form-btns__loadFileBtn').on('click', function () {
        const $fileInput = $(`.robots-form-btns input[type="file"]`);
        $fileInput.click();  // 클릭 시 숨겨진 input[type=file] 클릭 유도
        // 파일 선택 후 처리
        $fileInput.off('change').on('change', function (e) {
          $.robots.loadFile(e);
        });
      });
      // 초기화 버튼
      $('.robots-form-btns__resetItem').on('click', function () {
        if ($("#reset-confirm-dialog").length) return; // 이미 있으면 중복 생성 방지
        const robotsResetConfirmDialog = `
          <div id="reset-confirm-dialog" title="` + $.lang[LANG]['editor.robots.reset.confirmation'] + `">
            <p>` + $.lang[LANG]['editor.robots.reset.message'] + `</p>
          </div>
        `;
        $('body').append(robotsResetConfirmDialog);
        $('#reset-confirm-dialog').dialog({
          modal: true,
          buttons: {
            [$.lang[LANG]['editor.robots.ok']]: function () {
              $.robots.resetItem();  // 확인 시 실행
              $(this).dialog('close').remove();
            },
            [$.lang[LANG]['editor.robots.cancel']]: function () {
              $(this).dialog('close').remove(); // 취소 시 그냥 닫기
            }
          },
          open: function () {
            // z-index 조정
            $('.ui-dialog').css('z-index', 9999);

            // 다이얼로그 타이틀바 스타일
            $('.ui-dialog-titlebar').css({
              background: 'var(--robots-sortable__dragBtn)',
              color: 'var(--robots-white)'
            });

            // 버튼 스타일
            $('.ui-dialog-buttonpane button').css({
              background: 'var(--robots-header__btn--close)',
              color: 'var(--robots-black)',
              border: '0.5px solid var(--robots-border)',
            });

            // 버튼 스타일: 호버
            $('.ui-dialog-buttonpane button').hover(
              function () {
                // 마우스 올라갈 때
                $(this).css({
                  background: 'var(--robots-blue)',
                  color: 'var(--robots-white)',
                  border: '0.5px solid var(--robots-border)',
                });
              },
              function () {
                // 마우스 나갈 때
                $(this).css({
                  background: 'var(--robots-header__btn--close)',
                  color: 'var(--robots-black)',
                  border: '0.5px solid var(--robots-border)',
                });
              }
            );

            // 닫기 버튼 스타일
            $('.ui-dialog-titlebar-close').css({
              background: 'none',
              border: 'none',
            });

            // 줄 없애기
            $('.ui-dialog-buttonpane.ui-widget-content').css({
              border: 'none',
            })

            // 본문 상단 여백
            $('.ui-dialog .ui-dialog-content').css({
              'margin-top': '10px',
            })
          },
          close: function () {
            $(this).remove(); // 다이얼로그 DOM 제거
          }
        });
      })
    },
    display: function (searchBot, aiBot, isToggle) {
      $('head').append(`<style data-robots-style>${robots_css}</style>`);
      // $('head').append(`<script data-robots-script src="https://code.jquery.com/ui/1.13.0/jquery-ui.min.js"></script>`);
      $('head').append(`<link data-robots-css rel="stylesheet" href="https://code.jquery.com/ui/1.13.0/themes/base/jquery-ui.css" />`);
      $('body').append(`
        <div class="robots-background"></div>
        <div class="robots-modal">
          <div class="robots-header">
            <div>
              <span class="robots-header__title">Robots.txt</span>
              <div>
                <span class="robots-header__title-explain">` + $.lang[LANG]['editor.robots.explain'] + `</span>
              </div>
            </div>
            <div class="robots-header__btns">
              <button class="robots-header__btn robots-header__btn--close">` + $.lang[LANG]['editor.robots.close'] + `</button>
              <button class="robots-header__btn robots-header__btn--save">` + $.lang[LANG]['editor.robots.save'] + `</button>
            </div>
          </div>
          <div class="robots-toggle">
            <div>
              <span>` + $.lang[LANG]['editor.robots.block.webcrawler'] + `</span>
              <label class="robots-toggle__switch" style="margin-bottom: 0;">
                <input type="checkbox" name="searchBot" ${searchBot ? 'checked' : ''}>
                <span class="robots-toggle__slider"></span>
              </label>
            </div>
            <div>
              <span>` + $.lang[LANG]['editor.robots.block.aibot'] + `</span>
              <label class="robots-toggle__switch" style="margin-bottom: 0;">
                <input type="checkbox" name="aiBot" ${aiBot ? 'checked' : ''}>
                <span class="robots-toggle__slider"></span>
              </label>
            </div>
          </div>
          <div style="height:30px; background-color: white; position:sticky; top: 182px; z-index: 10000"></div>
          <div class="robots-form">
              <table>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>User Agent</th>
                    <th>Directive</th>
                    <th>Value</th>
                  </tr>
                </thead>
                <tbody>
                </tbody>
              </table>
              <div class="robots-form-btns">
                <div>
                  <button class="robots-form-btns__btn robots-form-btns__addItem">
                    <svg class="robots-svg" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M4 12H20M12 4V20" stroke="var(--robots-black)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                    <span>` + $.lang[LANG]['editor.robots.additem'] + `</span>
                  </button>
                  <button data-html="true" data-placement="bottom" data-toggle="tooltip" data-original-title="` + $.lang[LANG]['editor.robots.tooltip'] + `" class="robots-form-btns__btn robots-form-btns__loadFileBtn robots-tooltip">
                    <svg class="robots-svg" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" transform="rotate(0)matrix(-1, 0, 0, 1, 0, 0)"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M6 18.5V9.62132C6 9.2235 6.15803 8.84197 6.43934 8.56066L10.5607 4.43934C10.842 4.15804 11.2235 4 11.6213 4H16.5C17.3284 4 18 4.67157 18 5.5V18.5C18 19.3284 17.3284 20 16.5 20H7.5C6.67157 20 6 19.3284 6 18.5Z" stroke="var(--robots-black)" stroke-width="2"></path> <path d="M6 10H10.5C11.3284 10 12 9.32843 12 8.5V4" stroke="var(--robots-black)" stroke-width="1.5"></path> </g></svg>
                    <span>` + $.lang[LANG]['editor.robots.import'] + `</span>
                  </button>
                  <input type="file" accept=".txt" style="display:none" />
                </div>
                <div>
                  <button class="robots-form-btns__btn robots-form-btns__resetItem">
                      <svg class="robots-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 15" width="15" height="15"><path d="M8.5 2C5.98 2 3.87 3.69 3.21 6L2.15 4.59l-.8.6 2.11 2.8.8-.6 2-1.5-.6-.8-1.41 1.06c.58-1.82 2.26-3.14 4.26-3.14 2.48 0 4.5 2.02 4.5 4.5s-2.02 4.5-4.5 4.5c-1.42 0-2.68-.68-3.5-1.71l-.75.7c1.01 1.22 2.54 2 4.25 2 3.04 0 5.5-2.46 5.5-5.5S11.55 2 8.51 2Z"/></svg>
                    <span>` + $.lang[LANG]['editor.robots.reset'] + `</span>
                  </button>
                </div>
              </div>
          </div>
          <div class="robots-preview">
            <div class="robots-divider"></div>
            <span class="robots-preview__title">` + $.lang[LANG]['editor.robots.preview'] + `</span>
            <textarea class="robots-preview__content" readonly></textarea>
          </div>
        </div>
      `);
      requestAnimationFrame(() => {
        setTimeout(() => {
          $('[data-toggle="tooltip"]').tooltip();
        }, 0);
      });
      setTimeout(function (e) {
        if (!isToggle) {
          $('.robots-background').show();
          $('.robots-modal').show();
          $('body').css('overflow', 'hidden');
        }
        // $.robots.updateToggleStatus();
        $.robots.previewText();
        $.robots.dragAndDrop();
      }, 50);
    },
    renderInitialRobotsRules: function (content) {
      const lines = content.split('\n');
      let currentAgent = null;

      lines.forEach(line => {
        line = line.trim();
        if (!line || line.startsWith('#')) return;

        if (line.toLowerCase().startsWith('user-agent')) {
          const idx = line.indexOf(':');
          currentAgent = $.robots.escapeHtml(line.slice(idx + 1).trim());
          if (!$.robots.robotsRules[currentAgent]) {
            $.robots.robotsRules[currentAgent] = [];
          }
          return;
        }
        if (line.toLowerCase().startsWith('disallow:') || line.toLowerCase().startsWith('allow:')) {
          if (!currentAgent) return;
          const idx = line.indexOf(':');
          let directive = line.slice(0, idx).trim();
          let value = $.robots.escapeHtml(line.slice(idx + 1).trim());
          $.robots.robotsRules[currentAgent].push({
            directive: directive.trim(),
            value: value.trim()
          });
          return;
        }
        if (line.toLowerCase().startsWith('sitemap:')) {
          const sitemapUrl = line.substring(line.indexOf(':') + 1).trim();
          $.robots.siteMaps.add(sitemapUrl);
        }
      });

      for (const userAgent in $.robots.robotsRules) {
        const rules = $.robots.robotsRules[userAgent];
        rules.forEach(rule => {
          const [directive, value] = [rule.directive.toLowerCase(), rule.value];
          $.robots.addItemRow(userAgent, directive, value);
        });
      }
    },
    close: function () {
      $.robots.isOpen = false;
      // 추가된 head 요소 제거
      $('head style[data-robots-style]').remove();
      // $('head script[data-robots-script]').remove();
      $('head link[data-robots-css]').remove();

      $('.robots-modal').remove();
      $('.robots-background').remove();
      $('body').css('overflow', '');  // body 스크롤바 표시
      $.robots.robotsText = '';
      $.robots.robotsRules = {};
      $.robots.itemIndex = 1;
      $.robots.siteMaps = new Set();
    },
    save: function () {
      $.processON('robots.txt 파일을 저장중입니다...');
      $.ajax({
        url: '/template/save_robots',
        type: 'POST',
        data: {
          'robots_text': $.robots.robotsText,
          'user_dir': RPATH,
          'sid': SID,
          'host': HOST,
        },
        success: function (r) {
          $.processOFF();
          const isSearchBotToggleChecked = $(".robots-toggle input[name='searchBot']").prop('checked');
          const isAIBotToggleChecked = $(".robots-toggle input[name='aiBot']").prop('checked');
          $('#site-searchBot-click').prop('checked', isSearchBotToggleChecked);
          $('#site-aiBot-click').prop('checked', isAIBotToggleChecked);

          const searchBotChecked = $('#site-searchBot-click').prop('checked');
          const aiBotchecked = $('#site-aiBot-click').prop('checked');
          var settings = {
            searchBotClick: searchBotChecked,
            aiBotClick: aiBotchecked,
          };

          $.post('/template/settings', { sid: SID, settings: JSON.stringify(settings), el: 'site_settings' }, function (data) {
            checkError(data);
          }, 'json');
          $.robots.close();
        },
        error: function (xhr, status, error) {
          alert(error);
        }
      });
    },
    blockSearchBot: function (on) {
      if (on) {
        this.searchBots.forEach(bot => {
          if (!this.robotsRules[bot] || this.robotsRules[bot].length === 0) {
            this.robotsRules[bot] = [{ directive: "Disallow", value: "/" }];
            $.robots.addItemRow(bot, 'disallow', '/');
          }
        });
        // $('input[name="searchBot"]').prop('checked', true);
        
      } else {
        this.searchBots.forEach(bot => {
          delete this.robotsRules[bot];
        });
        $.robots.deleteItemRow(this.searchBots);
        // $('input[name="searchBot"]').prop('checked', false);
      }
      this.previewText();
    },
    blockAIBot: function (on) {
      if (on) {
        this.aiBots.forEach(bot => {
          if (!this.robotsRules[bot] || this.robotsRules[bot].length === 0) {
            this.robotsRules[bot] = [{ directive: "Disallow", value: "/" }];
            $.robots.addItemRow(bot, 'disallow', '/');
          }
        });
        // $('input[name="aiBot"]').prop('checked', true);
      } else {
        this.aiBots.forEach(bot => {
          delete this.robotsRules[bot];
        });
        $.robots.deleteItemRow(this.aiBots);
        // $('input[name="aiBot"]').prop('checked', false);
      }
      this.previewText();
    },
    cancelItem: function (e) {
      const $row = $(e.currentTarget).closest('tr');
      const $isNew = $row.is('[data-type="new"]');

      // 새로운 항목을 취소하는것이면 -> 그대로 삭제하고 종료(return)
      if ($isNew) {
        $.robots.deleteItem(e, true);
        return;
      }

      // 기존 항목을 취소하는것이면 -> 편집 취소(현재 입력값을 무시하고 Confirm UI로 복귀)
      const $userAgent = $row.find('input[name="user-agent"]');
      const $directive = $row.find('select[name="directive"]');
      const $value = $row.find('input[name="value"]');

      // 이전 값 복구 (edit 들어갈 때 data-prev-* 저장해놨다고 가정)
      if ($userAgent.data('prev') !== undefined) $userAgent.val($userAgent.data('prev'));
      if ($directive.data('prev') !== undefined) $directive.val($directive.data('prev'));
      if ($value.data('prev') !== undefined) $value.val($value.data('prev'));

      // 규칙 재추가 없이 UI만 Confirm 상태로
      $.robots.confirmItem(null, $row, $userAgent, $directive, $value, { skipRuleAdd: true });
    },
    confirmItem: function (e, $row, $userAgent, $directive, $value, opts) {
      opts = opts || {};
      const skipRuleAdd = !!opts.skipRuleAdd;

      // e로 호출된 경우 DOM 다시 찾기
      if (!$row) {
        $row = $(e.currentTarget).closest('tr');
        $userAgent = $row.find('input[name="user-agent"]');
        $directive = $row.find('select[name="directive"]');
        $value = $row.find('input[name="value"]');
      }

      // 모두 다 안 채워졌으면 유효성 검사 후 return
      if (!$userAgent.val() || !$directive.val() || !$value.val()) {
        if (!$userAgent.val()) {
          $userAgent[0].reportValidity();
          return;
        }
        if (!$directive.val()) {
          $directive[0].reportValidity();
          return;
        }
        if (!$value.val()) {
          $value[0].reportValidity();
          return;
        }
      }

      // 주석(#)이 있다면 제거
      let userAgentVal = $userAgent.val();
      let valueVal = $value.val();
      userAgentVal = userAgentVal.indexOf('#') === -1 ? userAgentVal : userAgentVal.slice(0, userAgentVal.indexOf('#')).trim();
      valueVal = valueVal.indexOf('#') === -1 ? valueVal : valueVal.slice(0, valueVal.indexOf('#')).trim();
      $userAgent.val(userAgentVal);
      $value.val(valueVal);

      // robotsRules에 아직 없는 규칙인 경우 빈 배열 생성
      if (!$.robots.robotsRules[$userAgent.val()]) {
        $.robots.robotsRules[$userAgent.val()] = [];
      };

      // 이미 규칙이 있다면 알림 띄우고 return
      // 규칙 없다면 robotsRules에 규칙 추가
      if (!skipRuleAdd) {
        const exists = $.robots.robotsRules[$userAgent.val().trim()].some(rule =>
          rule.directive === $directive.val().charAt(0).toUpperCase() + $directive.val().slice(1) && rule.value === $value.val().trim()
        );
        if (exists) {
          alert("해당 규칙이 이미 등록되어 있습니다.");
          return;
        } else {
          $.robots.robotsRules[$userAgent.val()].push({
            directive: `${$directive.val().charAt(0).toUpperCase() + $directive.val().slice(1)}`,
            value: $value.val()
          });
        }
      }

      // 필드 잠그기
      $userAgent.prop('readonly', true);
      $directive.prop('disabled', true);
      $value.prop('readonly', true);

      // 버튼 영역 아이콘 변경
      const $btnCell = $row.find('td').eq(3);
      $btnCell.find('.robots-form__cancelBtn, .robots-form__confirmBtn').hide();
      $btnCell.find('.robots-form__itemModify, .robots-form__itemDelete')
        .show()
        .css({ 'fill': 'var(--robots-black)', 'pointer-events': 'all' });

      // 미리보기 다시 그리기
      $.robots.previewText();

      // data-type="new" 제거
      $row.removeAttr('data-type').removeData('type'); // jQuery 캐시도 제거

      // value input 넓이 98%인거 없애기
      $row.find('td').eq(3).find('input').removeClass('robots-modify__input');
    },
    modifyItem: function (e) {
      const $targetRow = $(e.currentTarget).closest('tr');
      const $userAgent = $targetRow.find('td').eq(1).find('input');
      const $directive = $targetRow.find('td').eq(2).find('select');
      const $value = $targetRow.find('td').eq(3).find('input');

      // CancelItem 메소드 때문에 data-prev에 저장
      $userAgent.data('prev', $userAgent.val());
      $directive.data('prev', $directive.val());
      $value.data('prev', $value.val());

      // 수정, 삭제 버튼 제거
      $(e.currentTarget).hide();
      $(e.currentTarget).closest('td').find('.robots-form__itemDelete').hide();

      // 취소, 확인 버튼 표시
      $(e.currentTarget).closest('td').find('input').addClass('robots-modify__input');
      $(e.currentTarget).closest('td').find('.robots-form__cancelBtn').show();
      $(e.currentTarget).closest('td').find('.robots-form__confirmBtn').show();

      // 미리보기 다시 그리기(previewText에서는 Confirmed 된것만 그리기 때문에 수정버튼 누른건 먼저 숨기기)
      $.robots.previewText();

      // 수정안하고 그대로 저장하면 중복값으로 인식하기 때문에
      // 수정버튼 누르는 순간 해당 값을 규칙에서 제외
      const rules = $.robots.robotsRules[$userAgent.val()] || [];
      $.robots.robotsRules[$userAgent.val()] = rules.filter(rule =>
        !(rule.directive === $directive.val().charAt(0).toUpperCase() + $directive.val().slice(1) && rule.value === $value.val())
      );

      // 필드 잠그기
      $userAgent.prop('readonly', false);
      $directive.prop('disabled', false);
      $value.prop('readonly', false);
    },
    resetItem: function () {
      $.robots.deleteItemRow();
      this.robotsRules = {
        '*': [
          { directive: "Disallow", value: "/_forgot/id" },
          { directive: "Disallow", value: "/_register" },
          { directive: "Disallow", value: "/_login" },
          { directive: "Disallow", value: "/member/login" },
          { directive: "Disallow", value: "/member/join" },
          { directive: "Disallow", value: "/terms" },
          { directive: "Disallow", value: "/notice" },
          { directive: "Disallow", value: "/support" },
          { directive: "Disallow", value: "/lang" },
          { directive: "Disallow", value: "/contact" },
          { directive: "Disallow", value: "/privacy" },
          { directive: "Disallow", value: "/abuse" },
        ]
      }

      const rules = this.robotsRules;
      for (const agent in rules) {
        rules[agent].forEach(rule => $.robots.addItemRow(agent, rule.directive, rule.value));
      }

      this.siteMaps = new Set();
      this.siteMaps.add(`${this.domain}/user-sitemap`);
      this.previewText();
      this.updateToggleStatus();
    },
    /**
     * 1. 삭제 클릭하면
     * 2. 클릭한 svg에서 가장 가까운 tr 삭제
     * 3. itemIndex 하나 감소하고
     * 4. 클릭한 itemIndex + 1 부터 끝까지 숫자 하나 감소해서 다시 그리기
     */
    deleteItem: function (e, skipConfirm = false) {
      let isDelete = true;
      // 삭제 여부 확인
      if (!skipConfirm) {
        isDelete = confirm('삭제하시겠습니까?');
      }
      if (!isDelete) return;

      const $targetRow = $(e.currentTarget).closest('tr');
      const removedIndex = parseInt($targetRow.find('td').first().find('span').text(), 10);
      $targetRow.remove();
      this.itemIndex--;
      $('.robots-form table tbody tr').each(function () {
        const $firstTd = $(this).find('td').first().find('span');
        const currentIndex = parseInt($firstTd.text(), 10);
        if (currentIndex > removedIndex) {
          $firstTd.text(currentIndex - 1);
        }
      })
      this.previewText();
      // this.updateToggleStatus();
    },
    updateToggleStatus: function () {
      const rules = this.robotsRules || {};

      // searchBots 모두 robotsRules에 존재해야 true
      const searchBotOn = this.searchBots.every(bot => rules[bot] && rules[bot].length > 0);

      // aiBots 모두 robotsRules에 존재해야 true
      const aiBotOn = this.aiBots.every(bot => rules[bot] && rules[bot].length > 0);

      $(".robots-toggle input[name='searchBot']").prop('checked', searchBotOn);
      $(".robots-toggle input[name='aiBot']").prop('checked', aiBotOn);
    },
    addItem: function () {
      $('.robots-form table tbody').append(`
          <tr data-type="new">
            <td>
              <svg class="robots-form__dragHandle robots-svg" fill="var(--robots-sortable__dragBtn)" viewBox="0 0 1920 1920" xmlns="http://www.w3.org/2000/svg" stroke="#bf7878"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M686.211 137.143v-.137l68.572.137H686.21Zm0 1508.571c75.566 0 137.143 61.577 137.143 137.143S761.777 1920 686.211 1920c-75.702 0-137.142-61.577-137.142-137.143s61.44-137.143 137.142-137.143Zm548.572 0c75.566 0 137.143 61.577 137.143 137.143S1310.349 1920 1234.783 1920c-75.703 0-137.143-61.577-137.143-137.143s61.44-137.143 137.143-137.143ZM686.21 1097.143c75.566 0 137.143 61.577 137.143 137.143 0 75.565-61.577 137.143-137.143 137.143-75.702 0-137.142-61.578-137.142-137.143 0-75.566 61.44-137.143 137.142-137.143Zm548.572 0c75.566 0 137.143 61.577 137.143 137.143 0 75.565-61.577 137.143-137.143 137.143-75.703 0-137.143-61.578-137.143-137.143 0-75.566 61.44-137.143 137.143-137.143ZM686.21 548.57c75.566 0 137.143 61.578 137.143 137.143 0 75.566-61.577 137.143-137.143 137.143-75.702 0-137.142-61.577-137.142-137.143 0-75.565 61.44-137.143 137.142-137.143Zm548.572 0c75.566 0 137.143 61.578 137.143 137.143 0 75.566-61.577 137.143-137.143 137.143-75.703 0-137.143-61.577-137.143-137.143 0-75.565 61.44-137.143 137.143-137.143ZM686.21 0c75.566 0 137.143 61.577 137.143 137.143S761.776 274.286 686.21 274.286c-75.702 0-137.142-61.577-137.142-137.143S610.509 0 686.21 0Zm548.503 0c75.566 0 137.143 61.577 137.143 137.143s-61.577 137.143-137.143 137.143c-75.565 0-137.143-61.577-137.143-137.143S1159.15 0 1234.714 0Z" fill-rule="evenodd"></path> </g></svg>
              <span>${this.itemIndex++}</span>
            </td>
            <td><input required type="text" name="user-agent"></td>
            <td>
              <select required name="directive">
                <option value="">` + $.lang[LANG]['editor.robots.select'] + `</option>
                <option value="allow">allow</option>
                <option value="disallow">disallow</option>
              </select>
            </td>
            <td>
              <input class="robots-modify__input" required type="text" name="value" >
              <button class="robots-form__cancelBtn robots-button">
                <svg class="robots-form__itemCancel robots-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16"><path d="M12.23 3 8 7.23 3.77 3 3 3.77 7.23 8 3 12.23l.77.77L8 8.77 12.23 13l.77-.77L8.77 8 13 3.77 12.23 3Z"/></svg>
              </button>
              <button class="robots-form__confirmBtn robots-button">
                <svg style="top:-0.3px" class="robots-form__itemConfirm robots-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16"><path d="M12.69 3.66 6.61 9.74 3.29 6.43l-1.3 1.31 4.62 4.61 7.38-7.38-1.31-1.3Z"/></svg>
              </button>
              <svg class="robots-form__itemModify robots-svg" style="display: none;" fill="var(--robots-black)" width="169px" height="169px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M30.133 1.552c-1.090-1.044-2.291-1.573-3.574-1.573-2.006 0-3.47 1.296-3.87 1.693-0.564 0.558-19.786 19.788-19.786 19.788-0.126 0.126-0.217 0.284-0.264 0.456-0.433 1.602-2.605 8.71-2.627 8.782-0.112 0.364-0.012 0.761 0.256 1.029 0.193 0.192 0.45 0.295 0.713 0.295 0.104 0 0.208-0.016 0.31-0.049 0.073-0.024 7.41-2.395 8.618-2.756 0.159-0.048 0.305-0.134 0.423-0.251 0.763-0.754 18.691-18.483 19.881-19.712 1.231-1.268 1.843-2.59 1.819-3.925-0.025-1.319-0.664-2.589-1.901-3.776zM22.37 4.87c0.509 0.123 1.711 0.527 2.938 1.765 1.24 1.251 1.575 2.681 1.638 3.007-3.932 3.912-12.983 12.867-16.551 16.396-0.329-0.767-0.862-1.692-1.719-2.555-1.046-1.054-2.111-1.649-2.932-1.984 3.531-3.532 12.753-12.757 16.625-16.628zM4.387 23.186c0.55 0.146 1.691 0.57 2.854 1.742 0.896 0.904 1.319 1.9 1.509 2.508-1.39 0.447-4.434 1.497-6.367 2.121 0.573-1.886 1.541-4.822 2.004-6.371zM28.763 7.824c-0.041 0.042-0.109 0.11-0.19 0.192-0.316-0.814-0.87-1.86-1.831-2.828-0.981-0.989-1.976-1.572-2.773-1.917 0.068-0.067 0.12-0.12 0.141-0.14 0.114-0.113 1.153-1.106 2.447-1.106 0.745 0 1.477 0.34 2.175 1.010 0.828 0.795 1.256 1.579 1.27 2.331 0.014 0.768-0.404 1.595-1.24 2.458z"></path> </g></svg>
              <svg class="robots-form__itemDelete robots-svg" style="display: none;" fill="var(--robots-black)" viewBox="0 0 56 56" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M 44.5235 48.6602 L 46.1407 14.3945 L 48.4844 14.3945 C 49.4454 14.3945 50.2187 13.5976 50.2187 12.6367 C 50.2187 11.6758 49.4454 10.8555 48.4844 10.8555 L 38.2422 10.8555 L 38.2422 7.3398 C 38.2422 3.9883 35.9688 1.8086 32.3595 1.8086 L 23.5938 1.8086 C 19.9844 1.8086 17.7344 3.9883 17.7344 7.3398 L 17.7344 10.8555 L 7.5391 10.8555 C 6.6016 10.8555 5.7813 11.6758 5.7813 12.6367 C 5.7813 13.5976 6.6016 14.3945 7.5391 14.3945 L 9.8829 14.3945 L 11.5000 48.6836 C 11.6641 52.0586 13.8907 54.1914 17.2657 54.1914 L 38.7579 54.1914 C 42.1095 54.1914 44.3595 52.0351 44.5235 48.6602 Z M 21.4844 7.5742 C 21.4844 6.2383 22.4688 5.3008 23.8751 5.3008 L 32.1016 5.3008 C 33.5313 5.3008 34.5157 6.2383 34.5157 7.5742 L 34.5157 10.8555 L 21.4844 10.8555 Z M 17.6173 50.6758 C 16.2579 50.6758 15.2500 49.6445 15.1797 48.2852 L 13.5391 14.3945 L 42.3907 14.3945 L 40.8438 48.2852 C 40.7735 49.6680 39.7891 50.6758 38.4063 50.6758 Z M 34.9610 46.5508 C 35.7344 46.5508 36.3204 45.9180 36.3438 45.0273 L 37.0469 20.2773 C 37.0704 19.3867 36.4610 18.7305 35.6641 18.7305 C 34.9376 18.7305 34.3282 19.4102 34.3048 20.2539 L 33.6016 45.0273 C 33.5782 45.8711 34.1641 46.5508 34.9610 46.5508 Z M 21.0626 46.5508 C 21.8595 46.5508 22.4454 45.8711 22.4219 45.0273 L 21.7188 20.2539 C 21.6954 19.4102 21.0626 18.7305 20.3360 18.7305 C 19.5391 18.7305 18.9532 19.3867 18.9766 20.2773 L 19.7032 45.0273 C 19.7266 45.9180 20.2891 46.5508 21.0626 46.5508 Z M 29.4298 45.0273 L 29.4298 20.2539 C 29.4298 19.4102 28.7969 18.7305 28.0235 18.7305 C 27.2500 18.7305 26.5938 19.4102 26.5938 20.2539 L 26.5938 45.0273 C 26.5938 45.8711 27.2500 46.5508 28.0235 46.5508 C 28.7735 46.5508 29.4298 45.8711 29.4298 45.0273 Z"></path></g></svg>
            </td>
          </tr>
          `);
    },
    addItemRow: function (userAgent, directive, value) {
      $('.robots-form table tbody').append(`
        <tr>
          <td>
            <svg class="robots-form__dragHandle robots-svg" fill="var(--robots-sortable__dragBtn)" viewBox="0 0 1920 1920" xmlns="http://www.w3.org/2000/svg" stroke="#bf7878"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M686.211 137.143v-.137l68.572.137H686.21Zm0 1508.571c75.566 0 137.143 61.577 137.143 137.143S761.777 1920 686.211 1920c-75.702 0-137.142-61.577-137.142-137.143s61.44-137.143 137.142-137.143Zm548.572 0c75.566 0 137.143 61.577 137.143 137.143S1310.349 1920 1234.783 1920c-75.703 0-137.143-61.577-137.143-137.143s61.44-137.143 137.143-137.143ZM686.21 1097.143c75.566 0 137.143 61.577 137.143 137.143 0 75.565-61.577 137.143-137.143 137.143-75.702 0-137.142-61.578-137.142-137.143 0-75.566 61.44-137.143 137.142-137.143Zm548.572 0c75.566 0 137.143 61.577 137.143 137.143 0 75.565-61.577 137.143-137.143 137.143-75.703 0-137.143-61.578-137.143-137.143 0-75.566 61.44-137.143 137.143-137.143ZM686.21 548.57c75.566 0 137.143 61.578 137.143 137.143 0 75.566-61.577 137.143-137.143 137.143-75.702 0-137.142-61.577-137.142-137.143 0-75.565 61.44-137.143 137.142-137.143Zm548.572 0c75.566 0 137.143 61.578 137.143 137.143 0 75.566-61.577 137.143-137.143 137.143-75.703 0-137.143-61.577-137.143-137.143 0-75.565 61.44-137.143 137.143-137.143ZM686.21 0c75.566 0 137.143 61.577 137.143 137.143S761.776 274.286 686.21 274.286c-75.702 0-137.142-61.577-137.142-137.143S610.509 0 686.21 0Zm548.503 0c75.566 0 137.143 61.577 137.143 137.143s-61.577 137.143-137.143 137.143c-75.565 0-137.143-61.577-137.143-137.143S1159.15 0 1234.714 0Z" fill-rule="evenodd"></path> </g></svg>
            <span>${$.robots.itemIndex++}</span>
          </td>
          <td><input required readonly type="text" name="user-agent" value="${userAgent}"></td>
          <td>
            <select required disabled name="directive">
              <option value="">선택하세요</option>
              <option value="allow" ${directive.toLowerCase() === 'allow' ? 'selected' : ''}>allow</option>
              <option value="disallow" ${directive.toLowerCase() === 'disallow' ? 'selected' : ''}>disallow</option>
            </select>
          </td>
          <td>
            <input required readonly type="text" name="value" value="${value}">
            <button class="robots-form__cancelBtn robots-button" style="display: none;">
                <svg class="robots-form__itemCancel robots-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16"><path d="M12.23 3 8 7.23 3.77 3 3 3.77 7.23 8 3 12.23l.77.77L8 8.77 12.23 13l.77-.77L8.77 8 13 3.77 12.23 3Z"/></svg>
            </button>
            <button class="robots-form__confirmBtn robots-button" style="display: none;">
              <svg style="top:-0.3px" class="robots-form__itemConfirm robots-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16"><path d="M12.69 3.66 6.61 9.74 3.29 6.43l-1.3 1.31 4.62 4.61 7.38-7.38-1.31-1.3Z"/></svg>
            </button>
            <svg class="robots-form__itemModify robots-svg" fill="var(--robots-black)" width="169px" height="169px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M30.133 1.552c-1.090-1.044-2.291-1.573-3.574-1.573-2.006 0-3.47 1.296-3.87 1.693-0.564 0.558-19.786 19.788-19.786 19.788-0.126 0.126-0.217 0.284-0.264 0.456-0.433 1.602-2.605 8.71-2.627 8.782-0.112 0.364-0.012 0.761 0.256 1.029 0.193 0.192 0.45 0.295 0.713 0.295 0.104 0 0.208-0.016 0.31-0.049 0.073-0.024 7.41-2.395 8.618-2.756 0.159-0.048 0.305-0.134 0.423-0.251 0.763-0.754 18.691-18.483 19.881-19.712 1.231-1.268 1.843-2.59 1.819-3.925-0.025-1.319-0.664-2.589-1.901-3.776zM22.37 4.87c0.509 0.123 1.711 0.527 2.938 1.765 1.24 1.251 1.575 2.681 1.638 3.007-3.932 3.912-12.983 12.867-16.551 16.396-0.329-0.767-0.862-1.692-1.719-2.555-1.046-1.054-2.111-1.649-2.932-1.984 3.531-3.532 12.753-12.757 16.625-16.628zM4.387 23.186c0.55 0.146 1.691 0.57 2.854 1.742 0.896 0.904 1.319 1.9 1.509 2.508-1.39 0.447-4.434 1.497-6.367 2.121 0.573-1.886 1.541-4.822 2.004-6.371zM28.763 7.824c-0.041 0.042-0.109 0.11-0.19 0.192-0.316-0.814-0.87-1.86-1.831-2.828-0.981-0.989-1.976-1.572-2.773-1.917 0.068-0.067 0.12-0.12 0.141-0.14 0.114-0.113 1.153-1.106 2.447-1.106 0.745 0 1.477 0.34 2.175 1.010 0.828 0.795 1.256 1.579 1.27 2.331 0.014 0.768-0.404 1.595-1.24 2.458z"></path> </g></svg>
            <svg class="robots-form__itemDelete robots-svg" fill="var(--robots-black)" viewBox="0 0 56 56" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M 44.5235 48.6602 L 46.1407 14.3945 L 48.4844 14.3945 C 49.4454 14.3945 50.2187 13.5976 50.2187 12.6367 C 50.2187 11.6758 49.4454 10.8555 48.4844 10.8555 L 38.2422 10.8555 L 38.2422 7.3398 C 38.2422 3.9883 35.9688 1.8086 32.3595 1.8086 L 23.5938 1.8086 C 19.9844 1.8086 17.7344 3.9883 17.7344 7.3398 L 17.7344 10.8555 L 7.5391 10.8555 C 6.6016 10.8555 5.7813 11.6758 5.7813 12.6367 C 5.7813 13.5976 6.6016 14.3945 7.5391 14.3945 L 9.8829 14.3945 L 11.5000 48.6836 C 11.6641 52.0586 13.8907 54.1914 17.2657 54.1914 L 38.7579 54.1914 C 42.1095 54.1914 44.3595 52.0351 44.5235 48.6602 Z M 21.4844 7.5742 C 21.4844 6.2383 22.4688 5.3008 23.8751 5.3008 L 32.1016 5.3008 C 33.5313 5.3008 34.5157 6.2383 34.5157 7.5742 L 34.5157 10.8555 L 21.4844 10.8555 Z M 17.6173 50.6758 C 16.2579 50.6758 15.2500 49.6445 15.1797 48.2852 L 13.5391 14.3945 L 42.3907 14.3945 L 40.8438 48.2852 C 40.7735 49.6680 39.7891 50.6758 38.4063 50.6758 Z M 34.9610 46.5508 C 35.7344 46.5508 36.3204 45.9180 36.3438 45.0273 L 37.0469 20.2773 C 37.0704 19.3867 36.4610 18.7305 35.6641 18.7305 C 34.9376 18.7305 34.3282 19.4102 34.3048 20.2539 L 33.6016 45.0273 C 33.5782 45.8711 34.1641 46.5508 34.9610 46.5508 Z M 21.0626 46.5508 C 21.8595 46.5508 22.4454 45.8711 22.4219 45.0273 L 21.7188 20.2539 C 21.6954 19.4102 21.0626 18.7305 20.3360 18.7305 C 19.5391 18.7305 18.9532 19.3867 18.9766 20.2773 L 19.7032 45.0273 C 19.7266 45.9180 20.2891 46.5508 21.0626 46.5508 Z M 29.4298 45.0273 L 29.4298 20.2539 C 29.4298 19.4102 28.7969 18.7305 28.0235 18.7305 C 27.2500 18.7305 26.5938 19.4102 26.5938 20.2539 L 26.5938 45.0273 C 26.5938 45.8711 27.2500 46.5508 28.0235 46.5508 C 28.7735 46.5508 29.4298 45.8711 29.4298 45.0273 Z"></path></g></svg>
          </td>
        </tr>
      `);
    },
    deleteItemRow: function (bots) {
      const self = this;

      if (!bots || bots.length === 0) {
        $('.robots-form table tbody tr').remove();
      } else {
        bots.forEach(bot => {
          $('.robots-form table tbody tr').each(function () {
            const userAgent = $(this).find('input[name="user-agent"]').val()?.trim();
            if (userAgent === bot) {
              $(this).remove();
            }
          });
        });
      }

      // 인덱스 다시 매기기
      self.itemIndex = 1;
      $('.robots-form table tbody tr').each(function () {
        $(this).find('td').first().find('span').text(self.itemIndex++);
      });
      this.previewText();
    },
    loadFile: function (e) {
      // 파일 선택 후 처리
      const file = e.target.files[0];
      if (!file) return;
      if (file.type !== 'text/plain') {
        $('#robots-loadFile-error').remove();
        const robotsLoadFileDialog = `
          <div id="robots-loadFile-error" title="` + $.lang[LANG]['editor.robots.load.error'] + `">
            <p>` + $.lang[LANG]['editor.robots.load.message'] + `</p>
          </div>`;
        $('body').append(robotsLoadFileDialog);

        // 다이얼로그 실행
        $('#robots-loadFile-error').dialog({
          modal: true,
          buttons: {
            [$.lang[LANG]['editor.robots.ok']]: function () {
              $(this).dialog("close").remove();
            }
          },
          open: function () {
            // z-index 조정
            $('.ui-dialog').css('z-index', 9999);

            // 다이얼로그 타이틀바 스타일
            $('.ui-dialog-titlebar').css({
              background: 'var(--robots-sortable__dragBtn)',
              color: 'var(--robots-white)'
            });

            // 버튼 스타일
            $('.ui-dialog-buttonpane button').css({
              background: 'var(--robots-header__btn--close)',
              color: 'var(--robots-black)',
              border: '0.5px solid var(--robots-border)',
            });

            // 버튼 스타일: 호버
            $('.ui-dialog-buttonpane button').hover(
              function () {
                // 마우스 올라갈 때
                $(this).css({
                  background: 'var(--robots-blue)',
                  color: 'var(--robots-white)',
                  border: '0.5px solid var(--robots-border)',
                });
              },
              function () {
                // 마우스 나갈 때
                $(this).css({
                  background: 'var(--robots-header__btn--close)',
                  color: 'var(--robots-black)',
                  border: '0.5px solid var(--robots-border)',
                });
              }
            );

            // 닫기 버튼 스타일
            $('.ui-dialog-titlebar-close').css({
              background: 'none',
              border: 'none',
            });

            // 줄 없애기
            $('.ui-dialog-buttonpane.ui-widget-content').css({
              border: 'none',
            })

            // 본문 상단 여백
            $('.ui-dialog .ui-dialog-content').css({
              'margin-top': '10px',
            })
          },
          close: function () {
            $(this).remove();
          }
        });

        e.target.value = '';
        return;
      }

      const reader = new FileReader();
      reader.onload = (event) => {
        const text = event.target.result;
        const lines = text.split('\n');

        let rawUserAgent = null;
        let currentUserAgent = null;
        let directive = null;
        let rawValue = null;
        let value = null;

        lines.forEach(line => {
          line = line.trim();
          if (!line || line.startsWith('#')) return;
          
          const idx = line.indexOf(':');
          if (line.toLowerCase().startsWith('user-agent:')) {
            rawUserAgent = line.slice(idx + 1).trim();
            rawUserAgent = rawUserAgent.indexOf('#') === -1 ? rawUserAgent : rawUserAgent.slice(0, rawUserAgent.indexOf('#')).trim(); // User-agent 주석(#) 이후 값 제거
            currentUserAgent = $.robots.escapeHtml(rawUserAgent);
          } else if (currentUserAgent && (line.toLowerCase().startsWith('allow:') || line.toLowerCase().startsWith('disallow:'))) {
            directive = line.slice(0, idx).trim();
            rawValue = line.slice(idx + 1).trim();
            rawValue = rawValue.indexOf('#') === -1 ? rawValue : rawValue.slice(0, rawValue.indexOf('#')).trim();  // value에 주석(#) 이후 값 제거
            value = $.robots.escapeHtml(rawValue);

            // robotsRules에도 저장
            if (!$.robots.robotsRules[rawUserAgent]) {
              $.robots.robotsRules[rawUserAgent] = [];
            }

            // tr 추가(하지만 로드할때 중복값 추가 전에 return)
            const isDuplicate = $.robots.robotsRules[rawUserAgent].some(rule =>
              rule.directive.toLowerCase() ===  directive.toLowerCase() && rule.value ===  rawValue
            );
            if (isDuplicate) return;
            
            $.robots.addItemRow(currentUserAgent, directive, value);
            
            $.robots.robotsRules[rawUserAgent].push({
              directive: directive.charAt(0).toUpperCase() + directive.slice(1),
              value: rawValue
            });
          } else if (line.toLowerCase().startsWith('sitemap:')) {
            const sitemapUrl = line.slice(line.indexOf(':') + 1).trim();
            $.robots.siteMaps.add(sitemapUrl);
          }
        })
        $.robots.previewText();
        e.target.value = '';
      };
      reader.readAsText(file);
    },
    escapeHtml: function (text) {
      return text
      .replace(/&/g, "&amp;")      // &
      .replace(/</g, "&lt;")       // <
      .replace(/>/g, "&gt;")       // >
      .replace(/"/g, "&quot;")     // "
      .replace(/'/g, "&#039;")     // '
      .replace(/\//g, "&#x2F;")    // /
      .replace(/`/g, "&#x60;")     // `
      .replace(/=/g, "&#x3D;");    // =
    },
    unescapeHtml: function (text) {
      return text
        .replace(/&amp;/g, "&")       // &
        .replace(/&lt;/g, "<")        // <
        .replace(/&gt;/g, ">")        // >
        .replace(/&quot;/g, "\"")     // "
        .replace(/&#039;/g, "'")      // '
        .replace(/&#x2F;/g, "/")      // /
        .replace(/&#x60;/g, "`")      // `
        .replace(/&#x3D;/g, "=");     // =
    },
    dragAndDrop: function () {
      // 이미 sortable 적용돼 있으면 먼저 제거
      if ($('.robots-form tbody').data('ui-sortable')) {
        console.log('이미 sortable이라 destroy 실행');
        $('.robots-form tbody').sortable('destroy');
      }

      $('.robots-form tbody').sortable({
        start: function (event, ui) {
          const $draggingRow = ui.item;
          const $select = $draggingRow.find('select');
          $select.prop('disabled', false);
          const $isConfirmBtnVisible = $draggingRow.find('.robots-form__confirmBtn').is(':visible');
          $isConfirmBtnVisible ? $select.css('color', '') : $select.css('color', 'var(--robots-disabled)');
        },
        stop: function (event, ui) {
          const $draggingRow = ui.item;
          const $select = $draggingRow.find('select');
          const $isConfirmBtnVisible = $draggingRow.find('.robots-form__confirmBtn').is(':visible');
          if($isConfirmBtnVisible) {
            $select.css('color', '');
          } else {
            $select.css('color', '');
            $select.prop('disabled', true);
          }
        },
        handle: '.robots-form__dragHandle',
        axis: 'y',
        helper: 'original',
        forceHelperSize: true,
        forcePlaceholderSize: true,
        cursor: 'move',
        revert: 100,
        placeholder: 'sortable-placeholder',
        update: function (event, ui) {
          $.robots.previewText();
          $.robots.updateItemIndex();
        }
      });
    },
    updateItemIndex: function () {
      let index = 1;
      $('.robots-form table tbody tr').each(function () {
        $(this).find('td').eq(0).find('span').text(index++);
      });
    },
    getDaumWebmaster: function () {
      const self = this;
      $.ajax({
        url: '/template/get_daum_webmaster',
        type: 'POST',
        data: {
          'sid': SID,
        },
        success: function (r) {
          const settings = JSON.parse(r['settings']);
          if(settings['daum_webmaster']) {
            const daumWebmaster = settings['daum_webmaster']
            self.daumWebmaster = daumWebmaster;
          };
        },
        error: function (xhr, status, error) {
          alert(error);
        }
      });
    },
    previewText: function () {
      let content = '';
      this.robotsRules = {};
      // 각 항목을 순회해서 robotsRules 객체에 넣기
      $('.robots-form table tbody tr').each(function () {
        // Confirm된 것만(즉, 화면에 확인버튼 없는것들만) robotRules에 삽입
        const isConfirmed = $(this).find('td').eq(3).find('.robots-form__confirmBtn').css('display') === 'none';
        if (!isConfirmed) return;
        const userAgent = $(this).find('input[name="user-agent"]').val()?.trim();
        const directive = $(this).find('select[name="directive"]').val();
        const value = $(this).find('input[name="value"]').val()?.trim();

        // 모두 다 안 채워졌으면 유효성 검사 후 return
        if (!userAgent || !directive || !value) {
          if (!userAgent) {
            $(this).find('input[name="user-agent"]')[0].reportValidity();
          }
          if (!directive) {
            $(this).find('select[name="directive"]')[0].reportValidity();
          }
          if (!value) {
            $(this).find('input[name="value"]')[0].reportValidity();
          }
          return;
        }

        // user-agent 키값이 객체에 없다면 새로 생성
        if (!$.robots.robotsRules[userAgent]) {
          $.robots.robotsRules[userAgent] = [];
        }

        // 이미 존재하는지 확인
        const exists = $.robots.robotsRules[userAgent].some(rule =>
          rule.directive === directive.charAt(0).toUpperCase() + directive.slice(1) && rule.value === value
        );

        if (!exists) {
          $.robots.robotsRules[userAgent].push({
            directive: `${directive.charAt(0).toUpperCase() + directive.slice(1)}`,
            value: value
          });
        }
      })

      // 완성된 robotsRules의 값들을 꺼내서 content에 넣기
      for (const userAgent in this.robotsRules) {
        content += `User-agent: ${userAgent}\n`;
        const rules = this.robotsRules[userAgent];
        rules.forEach(rule => {
          content += `${rule.directive}: ${rule.value}\n`;
        });
        content += '\n';
      }

      // 마지막으로 Sitemap 넣기
      this.siteMaps.forEach(siteMap => content += `Sitemap: ${siteMap}\n`);

      // 추가: 다음 웹마스터도구
      if($.robots.daumWebmaster !== ''){
        content += $.robots.daumWebmaster;
      }

      // textarea 태그에 값 넣기
      $('.robots-preview__content').val(content);

      // robotsText 변수에 content 넣기
      $.robots.robotsText = content;
    },
  }
})(jQuery);