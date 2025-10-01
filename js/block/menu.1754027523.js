if(typeof LANG == 'undefined') var LANG = (typeof getLanguage != 'undefined') ? getLanguage() : 'ko';
$(function() {

    var _html = document.querySelector('html'),
        _body = document.querySelector('body'),
        _dsgnbody = document.querySelector('.dsgn-body'),
        _elmenu = document.querySelector('.element.el-menu');

    // ✅ 스크롤 이벤트 핸들러
    function handleScroll() {
        if (window.getComputedStyle(_html).getPropertyValue('overflow-y') != 'hidden') {
			var before = _body.classList.contains('_scrolling') ? true : false,
				after = before;

            if (window.scrollY > 0) {
				_body.classList.add('_scrolling');
				after = true;
			} else {
				_body.classList.remove('_scrolling');
				after = false;
			}

			if(	before !== after
				&& _dsgnbody.classList && _dsgnbody.classList.contains('mode-config')  && _dsgnbody.classList.contains('openELBlockConfig')
				&& document.querySelector('header.cl-nav')
				&& document.getElementById('smodal-nav-detail')
			) {
				bc.clnavConfigPosition();
			}
        }
    }

    // ✅ 스크롤 이벤트 추가 함수 (동적 요소 대응)
    function addScrollListener() {
        _dsgnbody = document.querySelector('.dsgn-body'); // 최신 요소 가져오기
        if (_dsgnbody) {
            window.addEventListener('scroll', handleScroll);
        }
    }

    // ✅ 초기 로드 시 스크롤 이벤트 적용
    addScrollListener();

    // ✅ dsgn-body 요소가 동적으로 추가될 경우 감지
    var observer = new MutationObserver(mutations => {
        mutations.forEach(mutation => {
            mutation.addedNodes.forEach(node => {
                if (node.classList && node.classList.contains('dsgn-body')) {
                    addScrollListener(); // ✅ 동적 생성 시 스크롤 이벤트 추가
                }
            });
        });
    });

    observer.observe(document.body, { childList: true, subtree: true });

    if (_elmenu) {
        var elmenu_observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) _elmenu.classList.remove('_ready');
            });
        }, { threshold: 0 });
        elmenu_observer.observe(_elmenu);


		if(_dsgnbody.classList.contains('modoo') 
			&& $.inArray(_dsgnbody.getAttribute('data-displaytype'), ['B','C']) > -1
		) {
			var _el0 = document.querySelector('.element.modoo[data-pos="0"]');
			
			var el0_observer = new IntersectionObserver(entries => {
				entries.forEach(entry => {
					if(entry.isIntersecting) _dsgnbody.classList.add('_show_el0');
					else _dsgnbody.classList.remove('_show_el0');
				});
			}, {
				threshold: 0
			});
			el0_observer.observe(_el0);
		}
    }

	$.clnav = {
		check: false,
		getLayout: function(el, k) {
			if(typeof k == 'undefined') k = 'val';

			var tmp_clnavattr = bc.getLiveData(el),
				val = getOrDefault(tmp_clnavattr, 'layout', 'topnav1'),
				match = val.match(/^([a-zA-Z]+)(\d+)$/) || [],
				tmp_layout = { val: val, type: match[1] || '',  num: match[2] || '' };

			if(k == 'val') return tmp_layout.val;
			else if(k == 'type') return tmp_layout.type;
			else if(k == 'num') return tmp_layout.num;

			var navStyle = {
				val: getOrDefault(tmp_clnavattr,'navStyle','dropdown'),
				isDropdown: getOrDefault(tmp_clnavattr,'navStyle','dropdown') == 'dropdown' ? true : false,
				isDropdownInline: getOrDefault(tmp_clnavattr,'navStyle','dropdown') == 'dropdown-inline' ? true : false,
				isMega: $.inArray(getOrDefault(tmp_clnavattr,'navStyle','dropdown'),['mega-nowrap','mega-toggle']) > -1 ? true : false,
				isNowrap: getOrDefault(tmp_clnavattr,'navStyle','dropdown') == 'nowrap' ? true : false,
			};

			/* clnav 메뉴 레이아웃 추가 */
			var layout_list = {
					topnav: {
						topnav1: {
							on: true,
							attr: {'data-brand-position':'left', 'data-nav-position':'center', 'data-fixnav-position':'right', 'data-nav-align':'left'},
							description: {brand:'left', nav:'left', fixnav:'right'},
						},
						topnav2: {
							on: true,
							attr: {'data-brand-position':'left', 'data-nav-position':'center', 'data-fixnav-position':'right', 'data-nav-align':'center'},
							description: {brand:'left', nav:'center', fixnav:'right'},
						},
						topnav3: {
							on: true,
							attr: {'data-brand-position':'left', 'data-nav-position':'center', 'data-fixnav-position':'right', 'data-nav-align':'right'},
							description: {brand:'left', nav:'right', fixnav:'right'},
						},
						topnav4: {
							on: true,
							attr: {'data-brand-position':'left', 'data-nav-position':'left', 'data-fixnav-position':'left', 'data-nav-align':'left'},
							description: {brand:'left', nav:'left', fixnav:'left'},
						},
						topnav5: {
							on: false,
							attr: {'data-brand-position':'center', 'data-nav-position':'center', 'data-fixnav-position':'center', 'data-nav-align':'left'},
							description: {brand:'center', nav:'center', fixnav:'center'},
						},
						topnav6: {
							on: false,
							attr: {'data-brand-position':'right', 'data-nav-position':'right', 'data-fixnav-position':'right', 'data-nav-align':'left'},
							description: {brand:'right', nav:'right', fixnav:'right'},
						},
						topnav7: {
							on: true,
							attr: {'data-brand-position':'topleft', 'data-nav-position':'left', 'data-fixnav-position':'left', 'data-nav-align':'left'},
							description: {brand:'topleft', nav:'left', fixnav:'left'},
						},
						topnav8: {
							on: true,
							attr: {'data-brand-position':'topleft', 'data-nav-position':'left', 'data-fixnav-position':'right', 'data-nav-align':'left'},
							description: {brand:'topleft', nav:'left', fixnav:'right'},
						},
						topnav9: {
							on: true,
							attr: {'data-brand-position':'top', 'data-nav-position':'left', 'data-fixnav-position':'right', 'data-nav-align':'left'},
							description: {brand:'center', nav:'left', fixnav:'right'},
						},
						topnav10: {
							on: true,
							attr: {'data-brand-position':'top', 'data-nav-position':'center', 'data-fixnav-position':'center', 'data-nav-align':'left'},
							description: {brand:'center', nav:'center', fixnav:'center'},
						},
						topnav11: {
							on: true,
							attr: {'data-brand-position':'topleft', 'data-nav-position':'left', 'data-fixnav-position':'topright', 'data-nav-align':'left'},
							description: {brand:'topleft', nav:'left', fixnav:'topright'},
						},
						topnav12: {
							on: true,
							attr: {'data-brand-position':'topleft', 'data-nav-position':'left', 'data-fixnav-position':'topright', 'data-nav-align':'center'},
							description: {brand:'topleft', nav:'center', fixnav:'topright'},
						},
						topnav13: {
							on: true,
							attr: {'data-brand-position':'topleft', 'data-nav-position':'left', 'data-fixnav-position':'topright', 'data-nav-align':'right'},
							description: {brand:'topleft', nav:'right', fixnav:'topright'},
						},
						topnav14: {
							on: true,
							attr: {'data-brand-position':'left', 'data-nav-position':'right', 'data-fixnav-position':'topright', 'data-nav-align':'left'},
							description: {brand:'left', nav:'left', fixnav:'topright'},
						},
						topnav15: {
							on: false,
							attr: {'data-brand-position':'left', 'data-nav-position':'right', 'data-fixnav-position':'topright', 'data-nav-align':'center'},
							description: {brand:'left', nav:'center', fixnav:'topright'},
						},
						topnav16: {
							on: true,
							attr: {'data-brand-position':'left', 'data-nav-position':'right', 'data-fixnav-position':'topright', 'data-nav-align':'right'},
							description: {brand:'left', nav:'right', fixnav:'topright'},
						},

					},
					meganav: {
						meganav1: {
							on: true,
							attr: {'data-toggle-position':'none', 'data-brand-position':'topleft', 'data-nav-position':'left', 'data-fixnav-position':'right', 'data-nav-align':'left'},
							description: {brand:'topleft', nav:'left', fixnav:'right'},
						},
						meganav2: {
							on: true,
							attr: {'data-toggle-position':'none', 'data-brand-position':'top', 'data-nav-position':'center', 'data-fixnav-position':'right', 'data-nav-align':'center'},
							description: {brand:'center', nav:'center', fixnav:'right'},
						},
						meganav3: {
							on: true,
							attr: {'data-toggle-position':'left', 'data-brand-position':'center', 'data-nav-position':'none', 'data-fixnav-position':'right', 'data-nav-align':'left'},
							description: {brand:'center', nav:'center', fixnav:'right'},
						},
						meganav4: {
							on: true,
							attr: {'data-toggle-position':'left', 'data-brand-position':'center', 'data-nav-position':'none', 'data-fixnav-position':'right', 'data-nav-align':'left'},
							description: {brand:'center', nav:'left', fixnav:'right'},
						},
					},
					sidenav: {
						sidenav1: {
							on: true,
							attr: {'data-brand-align':'left', 'data-fixnav-align':'left', 'data-nav-align':'left'},
							description: {brand:'left', fixnav:'left', nav:'left'},
						},
						sidenav2: {
							on: false,
							attr: {'data-brand-align':'left', 'data-fixnav-align':'left', 'data-nav-align':'center'},
							description: {brand:'left', fixnav:'left', nav:'center'},
						},
						sidenav3: {
							on: false,
							attr: {'data-brand-align':'left', 'data-fixnav-align':'left', 'data-nav-align':'right'},
							description: {brand:'left', fixnav:'left', nav:'right'},
						},
						sidenav4: {
							on: true,
							attr: {'data-brand-align':'center', 'data-fixnav-align':'center', 'data-nav-align':'center'},
							description: {brand:'center', fixnav:'center', nav:'center'},
						},
						sidenav5: {
							on: false,
							attr: {'data-brand-align':'center', 'data-fixnav-align':'center', 'data-nav-align':'left'},
							description: {brand:'center', fixnav:'center', nav:'left'},
						},
						sidenav6: {
							on: false,
							attr: {'data-brand-align':'center', 'data-fixnav-align':'center', 'data-nav-align':'right'},
							description: {brand:'center', fixnav:'center', nav:'right'},
						},
						sidenav7: {
							on: true,
							attr: {'data-brand-align':'right', 'data-fixnav-align':'right', 'data-nav-align':'right'},
							description: {brand:'right', fixnav:'right', nav:'right'},
						},
						sidenav8: {
							on: false,
							attr: {'data-brand-align':'right', 'data-fixnav-align':'right', 'data-nav-align':'center'},
							description: {brand:'right', fixnav:'right', nav:'center'},
						},
						sidenav9: {
							on: false,
							attr: {'data-brand-align':'right', 'data-fixnav-align':'right', 'data-nav-align':'left'},
							description: {brand:'right', fixnav:'right', nav:'left'},
						},
					}
				},
				layout_init = {...layout_list[tmp_layout.type]};

			var layout_obj = {...layout_init[tmp_layout.val]};
			if(tmp_layout.type == 'topnav') {
				layout_obj.attr = {...layout_obj.attr, 'data-toggle-position':'none'};
			} else if(tmp_layout.type == 'meganav') {
				layout_obj.attr = {...layout_obj.attr};
			} else if(tmp_layout.type == 'sidenav') {
				layout_obj.attr = {...layout_obj.attr, 'data-toggle-position':'none', 'data-brand-position':'auto', 'data-nav-position':'auto', 'data-fixnav-position':'langbottom'};
			}

			switch(k) {
				case 'init':
					return Object.keys(layout_init).filter(
							key =>
								key.startsWith(tmp_layout.type) &&
								/^\d+$/.test(key.replace(tmp_layout.type, '')) &&
								layout_init[key].on === true
					);
					break;

				case 'description':
				case 'attr':
					return (layout_obj.on === true) ? layout_obj[k] : {};
					break;

				default:
					break;
			}
		},
		setBodyOver: function(overlap_onoff) {
			var _s = $.clnav.s,
				_d = $.clnav.d,
				_el = $.clnav.el;
			if(typeof overlap_onoff == 'undefined') overlap_onoff = (_s.checkConfig) ? HEADER : property.HEADER;

			var tmp_h = _el.header.outerHeight(),
				tmp_c = (_s.checkConfig) ? $('.editor-navbar').outerHeight() : 0,
				__elmenu_over = 0,
				__elmenu_top = 0;

			if(_el.header.is(`[data-layout*="sidenav"], [data-layout*="mega"]`)) {
				__elmenu_top = tmp_c;
			} else {
				if(overlap_onoff) {
					$('body').addClass('_clnavOverlapON');
					if(_s.checkModoo) $('.el-menu').addClass('home');
					__elmenu_over = (tmp_h - tmp_c) * -1;
					__elmenu_top = tmp_c - 1;
				} else {
					$('body').removeClass('_clnavOverlapON');
					if(_s.checkModoo) $('.el-menu').removeClass('home');
					__elmenu_over = tmp_c;
					__elmenu_top = tmp_c;
				}
			}

			document.querySelector('html').style.setProperty('--elmenu-over', `${__elmenu_over}px`, null);
			document.querySelector('html').style.setProperty('--elmenu-top', `${__elmenu_top}px`, null);
			document.querySelector('html').style.setProperty('--elmenu-h', `${tmp_h}px`, null);
		},
		setSidenavListPosition: function($dropdownTarget,onoff) {

			var $ddMenu = $dropdownTarget.find('> .dropdown-menu');
			if(!$ddMenu.length) return;
			
			if(onoff) {
				var rect = $dropdownTarget[0].getBoundingClientRect();
				var top = rect.top + rect.height;
				$ddMenu[0].style.setProperty('--sidenav-dropdown-t', `${rect.top}px`);
			} else {
				$ddMenu[0].style.removeProperty('--sidenav-dropdown-t');
			}
		},
		set: function() {
			// console.log('clnav.set()');
			var _s = $.clnav.s,
				_d = $.clnav.d,
				_el = $.clnav.el;

			if(	_s.checkFree
				|| ($.isEmptyObject(_s.slang) && !$.clnav.d.isElViewer)
				|| (!$.isEmptyObject(_s.slang) &&  _s.slang.use_language == 'off')
			) {
				_el.header.find('.cl-fixnav-item.lang').remove();
			}


			if(	_s.checkFree
				|| _s.checkBS
				|| (_s.checkBN && Number(_s.um) < 0)
			) {
				_el.header.find('.cl-fixnav-item.loginout').remove();
			}

			if(	!_s.checkSM) {
				_el.header.find('.cl-fixnav-item.search, .cl-fixnav-item.cart').remove();
			}
            
            // if(_el.header.find('.cl-fixnav-item').length > 0) $.clnav.showHideFixnavItem(_el.header);

			_el.header.find('a').attr('draggable', false);
			_el.sidemobile.find('a').attr('draggable', false);
			if($('.clnav-sidemap').length > 0) $('.clnav-sidemap a').attr('draggable', false);

			switch(_el.header.attr('data-nav-style')) {
				case 'nowrap':
					// modoo used
					_el.header.addClass('clnav-nowrap');
					_el.header.find('.main .cl-nav-list, .sub .cl-subnav-list').addClass('clnav-nowrap-target');

					if(_s.checkModoo) {
						_el.header.find('.cl-fixnav-item.lang, .cl-fixnav-item.search, .cl-fixnav-item.cart').remove();
						if($('.dsgn-body').is('[data-displaytype="B"]')) {
							$('.element.modoo[data-pos="0"]').addClass('clnav-nowrap');
							$('.element.modoo[data-pos="0"] .cl-nav-list').addClass('clnav-nowrap-target');
						}
					}

					$('.clnav-nowrap-target').off('scroll').on('scroll', function(e) {
						$.clnav.setNowrapBtn(`.${$(e.target).attr('class').replace(/ /g,'.')}`);
					});

					if(!_d.isReload) {
						$(document)
							// .clnav
							.on('click','.clnav-nowrap-btn.prev',function(e) {
								if(e.target === null) return;
								var tmp_selector = $(this).next('.clnav-nowrap-target').attr('class').replace(/ /g,'.'),
									tmp_target = document.querySelector(`.${tmp_selector}`);
								if(tmp_target) {
									// 기존 - 좌측 첫번째 메뉴로 스크롤 이동
									// tmp_target.scrollLeft = 0;

									const items = [...tmp_target.querySelectorAll('.cl-nav-item')];
									const scrollLeft = tmp_target.scrollLeft;
									const containerW = tmp_target.clientWidth;

									let firstIndex = items.findIndex(item => 
										item.offsetLeft + item.offsetWidth > scrollLeft
									);

									if (firstIndex < 0) return;

									let sum = 0, targetIndex = firstIndex;
									for (let i = firstIndex - 1; i >= 0; i--) {
										sum += items[i].offsetWidth;
										if (sum >= containerW) break;
										targetIndex = i;
									}

									items[targetIndex]?.scrollIntoView({
										behavior: 'smooth',
										inline: 'start',
										block: 'nearest'
									});

									$.clnav.setNowrapBtn(tmp_selector);
								}
							})
							.on('click','.clnav-nowrap-btn.next',function(e) {
								if(e.target === null) return;

								var tmp_selector = $(this).prev('.clnav-nowrap-target').attr('class').replace(/ /g,'.'),
									tmp_target = document.querySelector(`.${tmp_selector}`);
								if(tmp_target) {
									// 기존 - 우측 마지막 메뉴로 스크롤 이동
									// tmp_target.scrollLeft = tmp_target.scrollWidth - tmp_target.clientWidth;

									const items = [...tmp_target.querySelectorAll('.cl-nav-item')];
									const scrollLeft = tmp_target.scrollLeft;
									const containerW = tmp_target.clientWidth;

									let firstHiddenIndex = items.findIndex(item => 
										item.offsetLeft + item.offsetWidth > scrollLeft + containerW
									);

									if (firstHiddenIndex < 0) return;

									let sum = 0, targetIndex = firstHiddenIndex;
									for (let i = firstHiddenIndex; i < items.length; i++) {
										sum += items[i].offsetWidth;
										if (sum >= containerW) break;
										targetIndex = i;
									}

									const targetItem = items[targetIndex];
									if (targetItem) {
										const offset = targetItem.offsetLeft - (containerW - targetItem.offsetWidth);
										tmp_target.scrollTo({
											left: offset,
											behavior: 'smooth'
										});
									}

									$.clnav.setNowrapBtn(tmp_selector);
								}
							})
							.on('mousedown','.clnav-nowrap-target',function(e) {
								if(e.target === null) return;
								_d.isDrag = false;
								_d.isMouseDown = true;
								_d.eTraget = `.${$(this).attr('class').replace(/ /g,'.')}`;
								_d.startX = e.pageX - document.querySelector(_d.eTraget).offsetLeft; // 마우스 시작 위치
								_d.scrollLeft = document.querySelector(_d.eTraget).scrollLeft; // 현재 스크롤 위치
							})
							.on('mousemove','.clnav-nowrap-target',function(e) {
								if (e.target === null || !_d.isMouseDown || e.buttons !== 1) return;

								var scrollTarget = document.querySelector(_d.eTraget);
								if($(this).is(_d.eTraget) && scrollTarget) {	
									_d.isDrag = true;

									var x = e.pageX - scrollTarget.offsetLeft; // 마우스 위치
									var walk = (x - _d.startX) * 1; // 드래그 이동 거리, 속도 조절 (1배로 이동)
									scrollTarget.scrollLeft = _d.scrollLeft - walk; // 스크롤 이동

									if (scrollTarget.scrollLeft < 0) scrollTarget.scrollLeft = 0; // 메뉴가 왼쪽 끝을 넘어가지 않도록

									// 메뉴가 오른쪽 끝을 넘지 않도록
									if (scrollTarget.scrollLeft > scrollTarget.scrollWidth - scrollTarget.clientWidth) {
										scrollTarget.scrollLeft = scrollTarget.scrollWidth - scrollTarget.clientWidth;
									}
			
									$.clnav.setNowrapBtn(_d.eTraget);
								}
							})
							.on('mouseup',function(e) {
								if(e.target === null) return;

								if(_d.isDrag) {
									e.preventDefault();
									e.stopImmediatePropagation();
								}

								_d.eTraget = '';
								_d.isMouseDown = false;
								_d.isTouch = false;
								_d.startX = 0;
								_d.startY = 0;
								_d.scrollLeft = 0;
								_d.scrollTop = 0;
							})
							.on('click','.clnav-nowrap-target a',function(e) {
								if(e.target === null) return;

								if (_d.isDrag) { 
									e.preventDefault();
									e.stopImmediatePropagation();
								}
							})
							// .clnavSidemap
							.on('click','.cl-fixnav-item.sidemap, .clnav-sidemap-close',function(e) {
								if(e.target === null) return;
								e.preventDefault();

								if($(this).is('.cl-fixnav-item.sidemap') && PAGE_MODE == 'c') alert('전체보기 기능은 편집모드에서 지원하지 않습니다');
								else $('html').toggleClass('clnavSidemapOpen');

								$('.clnav-sidemap .cl-nav-brand').removeAttr('style');
							})
							.on('click','.cl-nav-caret',function(e) {
								if(e.target === null) return;
								e.preventDefault();
								$(e.target).closest(`.cl-nav-item.dropdown`).toggleClass('open');
							})
							// .clnav-sidemobile
							.on('mousedown','.clnav-sidemobile .container',function(e) {
								if(e.target === null) return;
								_d.isDrag = false;
								_d.isMouseDown = true;
								_d.eTraget = '.clnav-sidemobile .container';
								_d.startY = e.pageY - document.querySelector(_d.eTraget).offsetTop; // 마우스 시작 위치
								_d.scrollTop = document.querySelector(_d.eTraget).scrollTop; // 현재 스크롤 위치
							})
							.on('mousemove','.clnav-sidemobile .container',function(e) {
								if (e.target === null || !_d.isMouseDown || e.buttons !== 1) return;

								var scrollTarget = document.querySelector(_d.eTraget);
								if($(this).is(_d.eTraget) && scrollTarget) {	
									_d.isDrag = true;

									var y = e.pageY - scrollTarget.offsetTop; // 마우스 위치
									var walk = (y - _d.startY) * 1; // 드래그 이동 거리, 속도 조절 (1배로 이동)
									scrollTarget.scrollTop = _d.scrollTop - walk; // 스크롤 이동

									if (scrollTarget.scrollTop < 0) scrollTarget.scrollTop = 0; // 메뉴가 왼쪽 끝을 넘어가지 않도록

									// 메뉴가 오른쪽 끝을 넘지 않도록
									if (scrollTarget.scrollTop > scrollTarget.scrollHeight - scrollTarget.clientHeight) {
										scrollTarget.scrollTop = scrollTarget.scrollHeight - scrollTarget.clientHeight;
									}
								}
							})
							.on('click','.clnav-sidemobile .section-area.company .btn',function(e) {
								if(e.target === null) return;
								$('.clnav-sidemobile .section-area.company').toggleClass('open');
							})
							.on('click','.clnav-sidemobile a:not(.cl-nav-depth)',function(e) {
								if(e.target === null
									|| $(e.target).closest('.section-area.btns').length > 0
								) {
									return;
								}

								if (!($(e.target).is('.cl-nav-name') || $(e.target).is('.cl-subnav-name'))
								) { 
									e.preventDefault();
									e.stopImmediatePropagation();
								}
							});

						
						// 종화 - 사용자가 마지막 메뉴를 클릭했을 때, 항목이 가려져 있으면 스크롤로 보이게 처리 하는 함수 추가
						// function ensureMenuItemVisible(container, element) {
						// 	const containerRect = container.getBoundingClientRect();
						// 	const elementRect = element.getBoundingClientRect();
						// 	if (elementRect.right > containerRect.right) {
						// 		container.scrollLeft += (elementRect.right - containerRect.right);
						// 		container.scrollLeft += 26;
						// 	}
						// }
					}

					if(_el.header.find('.main .clnav-nowrap-target > .cl-nav-item:is(.active, .open)').length > 0) {
						_el.header.find('.main .clnav-nowrap-target > .cl-nav-item:is(.active, .open)')[0].scrollIntoView({
							behavior: 'smooth',
							block: 'center',
							inline: 'center',
						});
					}
					if(_el.header.find('.sub .clnav-nowrap-target > .cl-subnav-item.active').length > 0) {
						_el.header.find('.sub .clnav-nowrap-target > .cl-subnav-item.active')[0].scrollIntoView({
							behavior: 'smooth',
							block: 'center',
							inline: 'center',
						});
					}

					setTimeout(function() {
						$.clnav.setNowrapBtn('.clnav-nowrap-target');
					});
					setTimeout(function() {
						if(_el.header.find('.main .clnav-nowrap-target > .cl-nav-item:last-child').is('.active, .open')) {
							_el.header.find('.main .clnav-nowrap-target > .cl-nav-item:is(.active, .open)')[0].scrollIntoView({
								behavior: 'smooth',
								block: 'nearest',
								inline: 'nearest',
							});
						}
					},300);
					break;

				case 'mega-nowrap':
					if(!_d.isReload) {
						$(document)
							.on('mouseover',`.cl-nav-list, .cl-nav-section.mega`,function(e) {
								if(!$('body').hasClass('_clnavMegaOverflow')) $('.meganav').addClass('_clnavMegaOpen');
							})
							.on('mouseleave',`.cl-nav-list, .cl-nav-section.mega`,function(e) {
								if(!$('body').hasClass('_clnavMegaOverflow')) $('.meganav').removeClass('_clnavMegaOpen');
							});

						$(window).on('resize', function(e) {
							if($('body').hasClass('meganav')) {
								$.clnav.setMegaOverflow(_el.header);
							}
						});

						$.clnav.setMegaOverflow(_el.header);
					}
					break;
				
				default:
					break;
			}



			if(!_d.isReload) {
				$(document)
					// .clnav-sidemobile
					.on('click','.clnav-sidemobile-backdrop',function(e) {
						if(e.target === null) return;
						if($('body').is('.meganav._clnavMegaOverflow') && $('body').width() > 767) {
							if($('.meganav')[0].hasClass('_clnavMegaOpen')) $('.meganav').toggleClass('_clnavMegaOpen');
						} else {
							if($('html').hasClass('_clnavSidemobileOpen')) $('html').toggleClass('_clnavSidemobileOpen');
						}
					})
					.on('click','.cl-nav-toggle, .clnav-sidemobile-close',function(e) {
						if(e.target === null) return;
						if($('body').is('.meganav._clnavMegaOverflow') && $('body').width() > 767) {
							$('.meganav').toggleClass('_clnavMegaOpen');
						} else {
							$('html').toggleClass('_clnavSidemobileOpen');
						}
					})
					.on('click','.clnav-sidemobile .cl-nav-depth',function(e) {
						$(this).closest(`.cl-nav-item.dropdown`).toggleClass('open');
					})
					.on('mouseenter','.sidenav [data-nav-style="dropdown"] .cl-nav-item.dropdown',function(e) {
						$.clnav.setSidenavListPosition($(this),true);
					})
					.on('mouseleave','.sidenav [data-nav-style="dropdown"] .cl-nav-item.dropdown',function(e) {
						$.clnav.setSidenavListPosition($(this),false)
					});
			}

			if(_s.checkModoo) {
				_el.option.attr('data-brand-position','left');

				var isSiteHome = _el.header.find('.cl-nav-item').eq(0).hasClass('active');
				if(typeof currentIndex != 'undefined' && currentIndex == 1) isSiteHome = true;
				if(_s.modoo.displaytype == 'E' || _s.checkCLPage || _s.view != '') isSiteHome = false;

				$.clnav.setBodyOver(isSiteHome);
			} else {
				$.clnav.setBodyOver();
			}

			if(!_d.isReload) {
				$(document)
					.on('click','#element-display .cl-nav a, .preview-element .cl-nav a',function(e) {
						e.preventDefault();
						e.stopImmediatePropagation();
					});
			}

			_el.header.closest('._ready').removeClass('_ready');

			if($('body').is('.openELBlockConfig') && $('.smodal-nav-detail').length > 0) bc.clnavConfigPosition();
		},
		init: function() {
			// console.log('init');
			$.clnav.check = true;
			var sample_tag = {
				default: `
					<header class="cl-nav menu-kaa1910 menu-top1" data-layout="topnav3" data-nav-style="dropdown" data-subnav-style="down1" data-fixnav-set-style="4" data-fixnav-lang-style="6" data-mobile-layout="1">
						<input type="hidden" class="cl-nav-option" data-toggle-position="none" data-brand-position="left" data-nav-position="center" data-fixnav-position="right" data-nav-align="right">
						<div class="cl-nav-section main">
							<div class="container">
								<div class="cl-nav-toggle"></div>
								<a class="cl-nav-brand" href="/config" data-recommend="170 X 60">
									<img class="cl-nav-brand-image" src="http://storage.googleapis.com/i.addblock.net/template/menu_normal_1_logo.png" alt="ryan-holloway-273158(0001).jpg">
									<span class="cl-nav-brand-text hide">M A R K R O S S O U</span>
								</a>
								<ul class="cl-fixnav-list">
									<li class="cl-fixnav-item search"><a href="#"><span class="cl-fixnav-icon"></span><span class="cl-fixnav-name">SEARCH</span></a></li>
									<li class="cl-fixnav-item loginout">
										<a href="#" class="login"><span class="cl-fixnav-icon"></span><span class="cl-fixnav-name">LOGIN</span></a>
										<a href="#" class="logout"><span class="cl-fixnav-icon"></span><span class="cl-fixnav-name">LOGOUT</span></a>
										<a href="#" class="mypage dropdown-toggle" style="display: none;"><span class="cl-fixnav-icon"></span><span class="cl-fixnav-name">MY PAGE</span></a>
										<ul class="cl-fixsubnav-list dropdown-menu">
											<li class="cl-fixsubnav-item"><a href="#"><span class="cl-fixsubnav-name">Dashboard</span></a></li>
											<li class="cl-fixsubnav-item"><a href="#"><span class="cl-fixsubnav-name">My Account</span></a></li>
											<li class="cl-fixsubnav-item"><a href="#"><span class="cl-fixsubnav-name">Logout</span></a></li>
										</ul>
									</li>
									<li class="cl-fixnav-item cart">
										<a href="#"><span class="cl-fixnav-icon"></span><span class="cl-fixnav-name">CART</span><span class="cl-fixnav-cart-active" data-cart-active="5"></span></a>
									</li>
									<li class="cl-fixnav-item slang">
										<a href="#"><span class="cl-fixnav-icon">KO</span><span class="cl-fixnav-name"></span><span class="cl-fixnav-arrow"></span></a>
										<ul class="cl-fixsubnav-list dropdown-menu">
											<li class="cl-fixsubnav-item"><a href="#"><span class="cl-fixsubnav-name">Korean</span></a></li>
											<li class="cl-fixsubnav-item"><a href="#"><span class="cl-fixsubnav-name">English</span></a></li>
											<li class="cl-fixsubnav-item"><a href="#"><span class="cl-fixsubnav-name">Japanese</span></a></li>
										</ul>
									</li>
								</ul>
								<ul class="cl-nav-list">
									<li class="cl-nav-item active"><a href="#"><span class="cl-nav-name">HOME</span></a></li>
									<li class="cl-nav-item"><a href="#"><span class="cl-nav-name">PORTFOLIO</span></a></li>
									<li class="cl-nav-item dropdown">
										<a href="#" class="dropdown-toggle" data-toggle="dropdown"><span class="cl-nav-name">ABOUT</span><span class="cl-nav-caret" data-style="caret_down"></span></a>
										<ul class="cl-subnav-list dropdown-menu">
											<li class="cl-subnav-item"><a href="#"><span class="cl-subnav-name">BIOGRAPHY</span></a></li>
											<li class="cl-subnav-item"><a href="#"><span class="cl-subnav-name">CLIENT</span></a></li>
											<li class="cl-subnav-item"><a href="#"><span class="cl-subnav-name">HISTORY</span></a></li>
										</ul>
									</li>
									<li class="cl-nav-item"><a href="#"><span class="cl-nav-name">CONTACT</span></a></li>
								</ul>
							</div>
						</div>
					</header>
				`,
				modooat: `
					<header class="cl-nav menu-kaa1910" data-by="mda" data-layout="topnav2" data-nav-style="nowrap" data-subnav-style="down1" data-fixnav-set-style="3" data-fixnav-lang-style="8">
						<input type="hidden" class="cl-nav-option" data-toggle-position="none" data-brand-position="left" data-nav-position="center" data-fixnav-position="right" data-fixnav-size="large" data-nav-align="left" data-sidemap="true">

						<div class="cl-nav-section main">
							<div class="container">
								<a class="cl-nav-brand" href="#" data-recommend="170 X 60">
									<img class="cl-nav-brand-image hide" src="http://storage.googleapis.com/i.addblock.net/template/menu_normal_1_logo.png" alt="ryan-holloway-273150001.jpg-sdf-sdf-a-sdf-asdfasfe23-234-ryan-holloway-273150001.jpg-sdf-sdf-a-sdf-asdfasfe23-234">
									<span class="cl-nav-brand-text">M A R K R O S S O U</span>
								</a>
								<ul class="cl-fixnav-list">
								</ul>
								<ul class="cl-nav-list">
									<li class="cl-nav-item"><a href="#"><span class="cl-nav-name">Home</span></a></li>
									<li class="cl-nav-item"><a href="#"><span class="cl-nav-name">Portfolio</span></a></li>
									<li class="cl-nav-item dropdown">
										<a href="#" class="dropdown-toggle" data-toggle="dropdown"><span class="cl-nav-name">About</span><span class="cl-nav-child">3</span> <i class="fa fa-caret-down"></i></a>
										<ul class="cl-subnav-list dropdown-menu">
											<li class="cl-subnav-item"><a href="#"><span class="cl-subnav-name">Overview</span></a></li>
											<li class="cl-subnav-item"><a href="#"><span class="cl-subnav-name">Biography</span></a></li>
											<!-- <li class="cl-subnav-item"><a href="#"><span class="cl-subnav-name">Biography Bio gBiographyrwraphy 234</span></a></li> -->
											<li class="cl-subnav-item"><a href="#"><span class="cl-subnav-name">Client</span></a></li>
											<li class="cl-subnav-item"><a href="#"><span class="cl-subnav-name">History</span></a></li>
										</ul>
									</li>
									<li class="cl-nav-item"><a href="#"><span class="cl-nav-name">Contact</span></a></li>
								</ul>
							</div>
						</div>

						<div class="cl-nav-section sub">
						</div>
					</header>
				`
			};

			$.clnav.s = {
				sid: (PAGE_MODE == 'c') ? SID : property.SID,
				service: (PAGE_MODE == 'c') ? SERVICE : property.SERVICE,
				plan_is: (PAGE_MODE == 'c') ? VALIDPLAN : property.VALIDPLAN,
				plan_type: (PAGE_MODE == 'c') ? VALIDTYPE : property.VALIDTYPE,
				slang: (PAGE_MODE == 'c') ? SLANG : property.SLANG,
				um: (PAGE_MODE == 'c') ? SITEUM : property.SITEUM,
				um_lang: (PAGE_MODE == 'c') ? SITEUMLANG : property.SITEUMLANG,
				um_display: (PAGE_MODE == 'c') ? SITEUMDISPLAY : property.SITEUMDISPLAY,
				settings: (PAGE_MODE == 'c') ? SETTINGS : property.SETTINGS,

				mem: (PAGE_MODE == 'c') ? {} : property.UMEMBER,

                view: (PAGE_MODE == 'c') ? VIEW : property.VIEW,
                view_parent: (PAGE_MODE == 'c') ? PARENT : property.PARENT,

				page: (PAGE_MODE == 'c') ? PAGE : property.PAGE,
				menuoption: (PAGE_MODE == 'c') ? MENUOPTION : property.MENUOPTION,
				smenucss: (PAGE_MODE == 'c') ? MCSS : getOrDefault(property.MCSS,'',{}),
				mpage: (PAGE_MODE == 'c') ? MPAGE : property.MPAGE,
				url: {
					page: (PAGE_MODE == 'c') ? '/config/page/' : ((typeof property.PUBLISH != 'undefined' && property.PUBLISH) ? '/' : '/render/page/'),
					home: (PAGE_MODE == 'c') ? '/demo/' : ((typeof property.PUBLISH != 'undefined' && property.PUBLISH) ? '/' : '/render'),
				},

				checkConfig: (PAGE_MODE == 'c') ? true : false,
				checkRender: (PAGE_MODE == 'r') ? true : false,
				checkSite: (PAGE_MODE == 's') ? true : false,
				checkGabia: false,
				checkFree: true,
				checkBS: false,
				checkBN: false,
				checkSM: false,
				checkLogin: false,
				checkAdmin: false,
				checkUadmin: false,
				checkGroot: false,
				// checkModoo: $('.cl-nav').is('[data-by="mda"]') ? true : false,
				checkModoo: (PAGE_MODE == 'c') ? !$.isEmptyObject(SETTINGS.modoo || {}) : !$.isEmptyObject(property.SETTINGS.modoo || {}),
				checkCLPage: false,
			}

			if($.clnav.s.checkConfig) $.clnav.s.url.home += $.clnav.s.sid;
			if($.clnav.s.view) $.clnav.s.mpage = $.clnav.s.view_parent.page;
			if($.clnav.s.service.indexOf('gabia') > -1) $.clnav.s.checkGabia = true;
			if($.clnav.s.plan_is && $.clnav.s.plan_type != 'PK') {
				$.clnav.s.checkFree = false;
				
				if($.clnav.s.plan_type == 'BS') $.clnav.s.checkBS = true;
				if($.clnav.s.plan_type == 'BN') $.clnav.s.checkBN = true;
				if($.clnav.s.plan_type == 'SM') $.clnav.s.checkSM = true;
			}
			if(typeof $.clnav.s.mem != 'undefined' && !$.isEmptyObject($.clnav.s.mem)) {
				$.clnav.s.checkLogin = $.clnav.s.mem.check_login;
				$.clnav.s.checkAdmin = $.clnav.s.mem.check_adm;
				$.clnav.s.checkUadmin = $.clnav.s.mem.check_uadm;
				$.clnav.s.checkGroot = $.clnav.s.mem.check_groot;
			}

			$.clnav.d = {
				isElViewer: false,
				isReload: $('.clnav-sidemobile').length > 0 ? true : false,

				eTraget: '',
				isMouseDown: false,
				isDrag: false,
				isTouch: false,
				startX: 0,
				startY: 0,
				scrollLeft: 0,
				scrollTop: 0,

				name: 'cl-nav',
				wrap: '.el-menu',
				sample: {},
			};

			if(window.parent && window.parent != this && $('.elviewhtml').length > 0) {
				$.clnav.d.isElViewer = true;
				$.clnav.s.name = $('#el-list-image .elgrid.active', window.parent.document).find('.blockname-str').text().trim();
				$.clnav.s.sid = $.clnav.s.name.replace(/^menu\-/,'');
				$.clnav.d.wrap = '.elviewhtml';
			} else {
				$.clnav.d.name = `menu-${$.clnav.s.sid}`;
			}

			$.clnav.el = {};
			$.clnav.el.header = $(`${$.clnav.d.wrap} header.cl-nav`);
			$.clnav.el.option = $.clnav.el.header.find('.cl-nav-option');
			$.clnav.el.brand = $.clnav.el.header.find('.cl-nav-brand');
			$.clnav.el.nav = $.clnav.el.header.find('.cl-nav-list');
			$.clnav.el.fix = $.clnav.el.header.find('.cl-fixnav-list:not(.emptycol)');

			$.clnav.el.header.closest('html').addClass(`clroot clroot-${$.clnav.s.sid}`);

			/* ************************************************************************************************ */

			var _s = $.clnav.s,
				_d = $.clnav.d,
				_el = $.clnav.el;

			_s.checkCLPage = _s.page.startsWith('_');

			if($(`#menu-${_s.sid}`).length == 0) $('.dsgn-body').prepend(`<style id="menu-${_s.sid}">${CSSJSON.toCSS(_s.smenucss)}</style>`);
			else $(`#menu-${_s.sid}`).html(CSSJSON.toCSS(_s.smenucss));

			$('html').addClass('_scroll');
			if(_d.isElViewer) _el.header.closest('html').eq(0).addClass('_elviewer');
			else _el.header.closest('html').removeClass('_elviewer');

			var clnav_layout = ((_el.header.attr('data-layout') || 'topnav1').match(/^([a-zA-Z]+)(\d+)$/)?.[1]) || '';
			$('body').removeClass('topnav sidenav meganav').addClass(clnav_layout);

			if(_el.option.is('[data-overlap="true"]')) {
				$('body').addClass('_clnavOverlapON');
				if(_s.checkModoo) $('.el-menu').addClass('home');
			} else {
				$('body').removeClass('_clnavOverlapON');
				if(_s.checkModoo) $('.el-menu').removeClass('home');
			}

			if(_el.option.is('[data-alwayson="false"]')) $('body').addClass('_clnavAlwaysonOFF');
			else $('body').removeClass('_clnavAlwaysonOFF');

			var clnav_shadow = _el.option.attr('data-shadow');
			if(_el.option.is('[data-shadow="always"],[data-shadow="scroll"]')) $('body').addClass(`_clnavShadow${clnav_shadow.charAt(0).toUpperCase() + clnav_shadow.slice(1)}`);
			else $('body').removeClass('_clnavShadowAlways _clnavShadowScroll');

			if(_s.checkModoo) {
				_s.modoo = (_s.checkConfig) ? getOrDefault(SETTINGS,'modoo',{}) : getOrDefault(property.SETTINGS,'modoo',{});

				// ver00 기본값 세팅
				if(_el.header.is('.cl-nav') && !_el.header.is('[data-layout]')) {
					_el.header.attr({'data-layout':'topnav2','data-nav-style':'nowrap','data-subnav-style':'down1'});
					_el.option.attr({'data-toggle-position':'none','data-brand-position':'left','data-nav-position':'center','data-fixnav-position':'right','data-nav-align':'left','data-fixnav-size':'large','data-nav-align':'left','data-sidemap':'true'}).removeAttr('data-norwrap');
				}

				// modoo.displaytype 위치변경
				// _s.modoo.displaytype = (_s.checkConfig) ? SETTINGS.displaytype : property.SETTINGS.displaytype;
				_s.modoo.sitename = (_s.checkConfig) ? TITLE : property.TITLE;
				$('.dsgn-body').addClass('modoo').attr('data-displaytype',_s.modoo.displaytype);
				_el.brand.find('.hide').removeClass('hide');
				_el.brand.attr('href',_s.url.home);
				_el.brand.find('.cl-nav-brand-image').attr('src',_s.modoo.logo);
				_el.brand.find('.cl-nav-brand-text').text(_s.modoo.sitename);
			}

			// smenu set
			_d.sample.nav = _el.nav.clone();
			_el.nav.empty();

			setSiteMenuOption();
			$.each(_s.menuoption, function(nav_i,nav_o) {
				var tmp_nav = {...nav_o, attr: `${nav_o.target} ${nav_o.isbookmark} ${nav_o.isflink}`, child_tag: ''};

				if(_s.checkModoo) {
					if(typeof nextPage !=='undefined' && typeof nav_o.cid !== 'undefined' && nextPage == nav_o.cid) tmp_nav.active = 'active';
				}

				$.each(nav_o.children, function(subnav_i, subnav_o) {
					var tmp_subnav = {...subnav_o, attr: `${subnav_o.target} ${subnav_o.isbookmark} ${subnav_o.isflink}`};
					tmp_nav.child_tag += `
						<li class="cl-subnav-item ${tmp_subnav.active}"><a href="${tmp_subnav.href}" ${tmp_subnav.attr}><span class="cl-subnav-name">${tmp_subnav.name}</span></a></li>
					`;
				});

				var tmp_cart = '';
				if(tmp_nav.child_tag) {
					var caret_style = _el.header.find('.cl-nav-caret[data-style]').length > 0 ? _el.header.find('.cl-nav-caret').eq(0).attr('data-style') : 'caret_down';
					tmp_cart = `<span class="cl-nav-caret" data-style="${caret_style}"></span>`;
					if(_s.checkModoo) tmp_cart = `<span class="cl-nav-child">${nav_o.children.length}</span>`;
				}

				_el.nav.append(`
					<li class="cl-nav-item ${tmp_nav.active} ${tmp_nav.child_tag ? 'dropdown' : ''}">
						<a href="${tmp_nav.href}" ${tmp_nav.attr.trim()}>
							<span class="cl-nav-name">${tmp_nav.name}</span>
							${tmp_cart}
						</a>
						${tmp_nav.child_tag ? `
						<ul class="cl-subnav-list dropdown-menu">
							${tmp_nav.child_tag}
						</ul>
							`: ``}
					</li>
				`);
			});


			if(_el.nav.is(':empty')) _el.nav.replaceWith(_d.sample.nav);
			if(_el.nav.find('.cl-nav-item:is(.active, .open), .cl-subnav-item.acitve').length == 0 && !_s.checkCLPage) _el.nav.find('.cl-nav-item').eq(0).addClass('active');

			_el.header.find('.cl-nav-caret[data-style]').each(function(e) {
				var caret_style = $(this).attr('data-style');
				$(this).replaceWith(clSVG(caret_style,10,10,true,'cl-nav-caret'));
			});

			switch(_el.header.attr('data-nav-style')) {
				case 'nowrap':
					if(_el.header.find('.cl-nav-section.sub').length > 0) {
						if(	_el.header.find('.cl-nav-item.active').is('.dropdown')
							|| _el.header.find('.cl-subnav-item.active').length > 0
						) {
							var $tmp_sub = _el.header.find(`.cl-nav-item.active .cl-subnav-list`).clone();
							if(_el.header.find('.cl-subnav-item.active').length > 0) $tmp_sub = _el.header.find('.cl-subnav-item.active').closest('.cl-nav-item').find('.cl-subnav-list').clone();
							$tmp_sub.removeClass('dropdown-menu');

							_el.header.find('.cl-nav-section.sub').html($tmp_sub.prop('outerHTML'));
						} else {
							_el.header.find('.cl-nav-section.sub').empty();
						}
					}

					if(!_d.isElViewer) {
						if(_el.header.find('.cl-nav-list-nowrap').length == 0) {
							_el.header.find('.cl-nav-list').wrap(`<div class="cl-nav-list-nowrap"></div>`);
						}

						_el.header.find('.cl-nav-list-nowrap').prepend(`<div class="clnav-nowrap-btn prev" style="display: none;">${clSVG('arrow_right',44,44,true)}</div>`);
						_el.header.find('.cl-nav-list-nowrap').append(`<div class="clnav-nowrap-btn next" style="display: none;">${clSVG('arrow_right',44,44,true)}</div>`);

						if(_s.checkModoo && $('.dsgn-body').is('[data-displaytype="B"], [data-displaytype="C"]')) {
							var $tmp_nav = null;
							if($('.dsgn-body').is('[data-displaytype="B"]')) {
								$tmp_nav = _el.header.find('.cl-nav-list-nowrap').clone();
								$tmp_nav.addClass('clnav-nowrap-el0 modoo-b');
							} else if($('.dsgn-body').is('[data-displaytype="C"]')) {
								$tmp_nav = $(`
									<div class="clnav-nowrap-el0 modoo-c">
										<div class="container">
											<div class="col left">
												<div class="sitename">${_s.modoo.sitename}</div>
												<div class="sitedesc">${_s.modoo.desc}</div>
											</div>
											<div class="col right">
												${_el.header.find('.cl-nav-list').clone().prop('outerHTML')}
											</div>
										</div>
									</div>
								`);
							}

							if($tmp_nav != null) {
								$tmp_nav.find('.cl-nav-item').removeClass('dropdown').find('.cl-nav-child, .cl-subnav-list').remove();
								$('.element.modoo[data-pos="0"] .clnav-nowrap-el0').remove();
								$('.element.modoo[data-pos="0"]').append($tmp_nav);
							}
						}
					}
					break;

				case 'mega-nowrap':
					_el.header.find('.cl-nav-section.mega, .cl-nav-caret').remove();
					if(_el.header.find('.cl-nav-item.dropdown').length  > 0) {
						var mega_col = _el.header.find('.cl-nav-item').length,
							$mega_col = $(`<div class="cl-mega-col"></div>`),
							$mega_row = $(`<div class="cl-mega-row"></div>`),
							$mega_section = $(`
								<div class="cl-nav-section mega">
									<div class="container ${_el.header.find('.container').hasClass('full-width') ? 'full-width' : ''}">
										<div class="cl-mega-nav"></div>
										<ul class="cl-mega-fixnav">${_el.fix.html()}</ul>
									</div>
								</div>
							`);

						_el.header.find('.cl-nav-item').each(function(index, nav) {
							var $nav_item = $(this).clone(),
								$tmp_col = $mega_col.clone(),
								$tmp_row = $mega_row.clone();

							if($nav_item.hasClass('active')) $tmp_row.addClass('active');
							if($nav_item.hasClass('open')) $tmp_row.addClass('open');
							$tmp_row.html($nav_item.find('> a').clone());
							if($nav_item.find('.cl-subnav-item').length > 0) {
								$tmp_row.addClass('has-sub');
								$nav_item.find('.cl-subnav-item').each(function(index, sub) {
									var $tmp_row2 = $mega_row.clone();
									if($(this).hasClass('active')) $tmp_row2.addClass('active');
									$tmp_row2.attr({'data-parent':2}).html($(this).find('> a').clone());
									$tmp_col.append($tmp_row2);
								});
							}
							$tmp_col.prepend($tmp_row);

							$mega_section.find('.cl-mega-nav').append($tmp_col);
								// .append($nav_item.find('.cl-subnav-item'))
								// .prepend($nav_item.find('> *:not(a)').remove());
						});

						$mega_section.find('.cl-mega-row:last').addClass('last-sub');
						_el.header.find('.cl-nav-section.main').after($mega_section);
					}
					break;

				default:
					console.log(`Undefined navStyle :(  ${_el.header.attr('data-nav-style')}`);
					break;
			}
			_el.nav = $.clnav.el.header.find('.cl-nav-list'); //override el


			$.clnav.setFixnavStyle(_el.header);
			if(_s.checkSM) {
				var cart_url = (_s.checkSite) ? '/_cart' : 'javascript:;',
					cart_active = (_s.checkSite) ? getOrDefault(property,'CART',0) : 0;
				if(_d.isElViewer) cart_active = 5;
				_el.fix.find('.cl-fixnav-item.cart > a').attr('href',cart_url);
				_el.fix.find('.cl-fixnav-cart-active').attr('data-cart-active',cart_active);
			} else {
				_el.fix.find('.cl-fixnav-item.cart').remove();
			}

			_el.header.find('.cl-fixnav-list.emptycol, .cl-mega-nav.emptycol').remove();
			if(	_el.header.is('[data-layout*="meganav"]') 
				&& _el.option.is('[data-brand-position*="top"][data-nav-position="center"][data-fixnav-position="right"]')
			) {
				_el.header.find('.cl-nav-list').after(_el.fix.clone().addClass('emptycol'));
				_el.header.find('.cl-mega-nav').before(_el.header.find('.cl-mega-fixnav').clone().addClass('emptycol'));
			}

			if(_el.option.is('[data-sidemap="true"]')) {
				var $tmp_sidemap_brand = _el.brand.clone(),
					$tmp_sidemap_nav = _el.nav.clone();

				$tmp_sidemap_brand.find('.cl-nav-brand-image').remove();
				$tmp_sidemap_nav.find('.clnav-nowrap-btn').remove();
				$tmp_sidemap_nav.find('.dropdown-menu').removeClass('dropdown-menu');
				$tmp_sidemap_nav.find('.dropdown > a > .fa').remove();
				$tmp_sidemap_nav.find('.dropdown > a').append(clSVG('arrow_down',14,14,true,'cl-nav-caret'));

				$('.clnav-sidemap').remove();
				$('.dsgn-body').after(`
					<div class="clnav-sidemap">
						<div class="clnav-sidemap-close">${clSVG('close_l',18,18,true)}</div>
						${$tmp_sidemap_brand.prop('outerHTML')}
						${$tmp_sidemap_nav.prop('outerHTML')}
					</div>
				`);
			}

            /* mobile */
			var toggle_style = _el.header.attr('data-mobile-layout') || 1;
            _el.header.find('.cl-nav-toggle').html(clSVG('toggle',20,20,false));

			var $tmp_brand_sidemobile = _el.brand.clone(),
				$tmp_nav_sidemobile = _el.nav.clone(),
				$tmp_fix_search_sidemobile = _el.fix.find('.cl-fixnav-item.search').clone(),
				tmp_depth_svg = (_s.checkModoo && $('.dsgn-body').is('[data-displaytype="B"],[data-displaytype="C"]')) ? 'toggle_arrow' : 'toggle_plusminus';
			
			$tmp_brand_sidemobile.find('.cl-nav-brand-text').remove();
			$tmp_nav_sidemobile.find('.clnav-nowrap-btn, .cl-nav-child, .cl-nav-caret').remove();
			$tmp_nav_sidemobile.find('.dropdown-menu').removeClass('dropdown-menu');
			$tmp_nav_sidemobile.find('.cl-nav-item.active.dropdown').addClass('open');
			$tmp_nav_sidemobile.find('.cl-nav-item.dropdown > a').append(clSVG(tmp_depth_svg,16,16,true,'cl-nav-depth'));
			$tmp_fix_search_sidemobile.find('.cl-fixnav-name').remove();

			$('.clnav-sidemobile-backdrop, .clnav-sidemobile').remove();
			$('.dsgn-body').after(`
				<div class="clnav-sidemobile-backdrop"></div>
				<div class="clnav-sidemobile">
					<div class="container">
						<div class="clnav-sidemobile-close">${clSVG('close_l',16,16,true)}</div>
						<div class="clnav-section info">
							${_s.checkModoo ? `
							<div class="section-area brand">
								${$tmp_brand_sidemobile.prop('outerHTML')}
							</div>
							` : `
							<div class="section-area user">
								<div class="user-profile">
									<img src="${_s.mem.profile}" alt="profile image" class="img-responsive" />
								</div>
								<div class="user-nick">
									<span>${_s.mem.nick}</span>
								</div>
							</div>
							<div class="section-area fixnav">
								<ul>${$tmp_fix_search_sidemobile.prop('outerHTML')}</ul>
							</div>
							`}
						</div>

						<div class="clnav-section menu">
							${$tmp_nav_sidemobile.prop('outerHTML')}
						</div> 
					</div>
				</div>
			`);
			_el.sidemobile = $('.clnav-sidemobile');

			if(_s.checkModoo) {
				$('.clnav-sidemobile').attr('data-style','mda');

				var checkLogin = getOrDefault(_s.mem,'check_login',false);
				_s.modoo.mobile_btns = `
					<li class="login siteUM" ${checkLogin ? 'style="display:none;"' : ''}><a class="login" href="#"><span class="item-icon">${clSVG('login',26,28,false)}</span><span class="item-label">로그인</span></a></li>
					<li class="logout siteUM" ${!checkLogin ? 'style="display:none;"' : ''}><a class="logout" href="#"><span class="item-icon">${clSVG('login',26,28,false)}</span><span class="item-label">로그아웃</span></a></li>
				`;
				_el.floating = $('.floating_item.modoo').eq(0);
				_el.floating.find('li a').each(function(e) {
					if($(this).data('type') == 'top') return true;
					
					var tmp_a = {
						type: $(this).data('type'),
						name: $(this).data('name'),
						data: $(this).data('data'),
						cid: $(this).data('cid'),
						href: $(this).attr('href'),					
						icon: $(this).find('.icon').attr('class').match(/icon(\d+)/)[1],
					};

					// console.log(tmp_a.data);
					if(tmp_a.type == 'defaultPhone') {
						tmp_a.href = `tel:${(!_s.checkConfig && typeof property != 'undefined'  && typeof property.TEL_LINK != 'undefined') ? property.TEL_LINK : tmp_a.data}`;
					} else if(tmp_a.type == 'phone') {
						tmp_a.href = `tel:${tmp_a.data}`;
					} else if(tmp_a.type == 'page_move') {
						tmp_a.href = (tmp_a.href != tmp_a.data) ? (tmp_a.data == '홈') ? `/` : `${tmp_a.href}` : `${_s.url.page}${tmp_a.data}`; 
					} else if(tmp_a.type == 'email') {
						tmp_a.href = `mailto:${tmp_a.data}`;
					} else if(tmp_a.type == 'link') {
						tmp_a.href = tmp_a.data;
						if(tmp_a.href.includes('pf.kakao')) {
							tmp_a.href = (tmp_a.href.includes('http://pf.kakao') || tmp_a.href.includes('https://pf.kakao')) ? tmp_a.href : tmp_a.href = 'https://' + tmp_a.href;
						}
					} else if (tmp_a.type == "reservation"){
						tmp_a.href = tmp_a.data;
					} else if (tmp_a.type=="talkLink"){
						tmp_a.href = '';
					} else if (tmp_a.type=="sms"){
						tmp_a.href = (tmp_a.data) ? 'tel:'+tmp_a.data : '';
					}else if (tmp_a.type=="defaultPhone2"){
						tmp_a.href = (tmp_a.data) ? 'tel:'+tmp_a.data : '';
					}
	  
					if(tmp_a.href == '#') tmp_a.href = 'javascript:;';

					_s.modoo.mobile_btns += `
						<li class="${tmp_a.type}">
							<a href="${tmp_a.href}" data-type="${tmp_a.type}"><span class="item-icon btn_ic${tmp_a.icon}"><i class="ic"></i></span><span class="item-label">${tmp_a.name}</span></a>
						</li>
					`;
				});

				_s.modoo.mobile_company = `
						<dl>
							<dt class="item_title _businessTitleArea">사업자정보<a href="https://www.ftc.go.kr/bizCommPop.do?wrkr_no=8264900508" taget="_blank" class="link_confirm">사업자정보 확인</a></dt>
							<dd class="item_description _businessArea">
								<span class="text"><span class="sub_title">상호</span><span class="sub_text">잠빌펜션</span></span>
								<span class="text"><span class="sub_title">대표자</span><span class="sub_text">정용준</span></span>
								<span class="text"><span class="sub_title">사업자번호</span><span class="sub_text">826-49-00508</span></span>
								<span class="text"><span class="sub_title">통신판매번호</span><span class="sub_text">제2020-강원춘천-0214호</span></span>
								<span class="text"><span class="sub_title">이메일</span><span class="sub_text">jjyyjj1@nate.com</span></span>
							</dd>
							<dt class="item_title _bankTitleArea">입금계좌</dt>
							<dd class="item_description _bankArea">
								<span class="text text_bank"><span class="sub_title">예금주</span><span class="sub_text">잠빌(정용준)</span></span>
								<span class="text text_bank"><span class="sub_title">농협</span><span class="sub_text">351-1105-0693-23</span></span>
								<span class="text text_notice">사업자정보를 꼭 확인 후 이체하세요 <a href="https://m.search.naver.com/search.naver?sm=tab_sug.top&amp;where=m&amp;ie=utf8&amp;query=%EC%9D%B8%ED%84%B0%EB%84%B7+%EC%82%AC%EA%B8%B0%EC%A1%B0%ED%9A%8C" target="_blank" class="link_confirm">계좌 신고여부</a></span>
							</dd>
						</dl>
						<div class="btn"></div>
				`;
				_s.modoo.mobile_company = '';

				$('.clnav-sidemobile .section-area.brand').after(`
					<div class="section-area title">
						${(getOrDefault(_s.modoo,'category','') != '') ? `<span class="category">${_s.modoo.category}</span>` : ''}
						<span class="hometitle">${_s.modoo.sitename}</span>
						<span class="description">${_s.modoo.desc}</span>
					</div>
					<ul class="section-area btns">
						${_s.modoo.mobile_btns}
					</ul>
					<div class="section-area company">
						${_s.modoo.mobile_company}
					</div>
				`);
			}

			$.clnav.set();
		},
		setNowrapBtn: function(selector) {
			if(typeof selector == 'undefined' || !selector) return;
			var tmpTarget = document.querySelector(selector);
			if(tmpTarget) {
				var maxScrollLeft = tmpTarget.scrollWidth - tmpTarget.clientWidth;

				if($(selector).prev().is('.clnav-nowrap-btn.prev')) {
					$(selector).prev().css('display',tmpTarget.scrollLeft <= 0 ? 'none' : 'block');
				}
				if($(selector).next().is('.clnav-nowrap-btn.next')) {
					$(selector).next().css('display',tmpTarget.scrollLeft >= maxScrollLeft ? 'none' : 'block');
				}
			}
		},
		setMegaOverflow: function(navEL) {
			if(typeof navEL == 'undefined') navEL = $(`.cl-nav`);

			var checkSmodalnavdetailOpen = ($('body').is('.openELBlockConfig') && $('.smodal-nav-detail').length > 0) ? true : false,
				before = $('.meganav').hasClass('_clnavMegaOverflow'),
				after = false;
			$('.meganav').removeClass('_clnavMegaOverflow');

			if(navEL.find('.cl-nav-list')[0].scrollWidth > navEL.find('.cl-nav-list')[0].clientWidth) {
				$('.meganav').addClass('_clnavMegaOverflow');
				after = true;
			}

			if(before !== after) {
				if(after) {
					if(checkSmodalnavdetailOpen) {
                        $(this).showModalFlat($.lang[LANG]['config.information'], $.lang[LANG]['config.msg.meganav.overflow'], true, false, '', 'ok', '', 'cl-cmmodal cl-s-btn w560 cl-p130 cl-p0 cl-okbtn-pbt70');
					}
				}
			}


			setTimeout(function() {
				if(checkSmodalnavdetailOpen) bc.clnavConfigPosition();

				var megaNav = document.querySelector('.cl-nav'),
					megaStyle = window.getComputedStyle(megaNav),
					padding_top = parseFloat(megaStyle.paddingTop),
					padding_bottom = parseFloat(megaStyle.paddingBottom),
					height = $('.cl-nav .cl-nav-section.main').outerHeight(),
					offset = $.clnav.s.checkConfig ? $('.editor-navbar').outerHeight() : 0;

				document.querySelector('.cl-nav').style.setProperty('--fixnav-w', `${$('.cl-nav .cl-nav-section.main .cl-fixnav-list:not(.emptycol)').outerWidth()}px`);
				document.querySelector('.cl-nav .cl-nav-section.mega').style.setProperty('--meganav-offset', `${(offset + height + padding_top + padding_bottom)}px`);
				document.querySelector('.cl-nav .cl-nav-section.mega').style.setProperty('--block-padding-bottom', `${padding_bottom}px`);
			}, 300);
		},
		getFixnavLangList: function(slang) {
			if(slang.lists.length < 2) return '';

			var str = '';
			$.each(slang.lists, function(i,o) {
				str += `<li class="cl-fixsubnav-item ${(o.code == slang.select_code) ? 'active' : ''}"><a href="#" data-code="${o.code}"><span class="cl-fixsubnav-name">${o.name}</span></a></li>`;
			});

			return `
				<ul class="cl-fixsubnav-list dropdown-menu">
					${str}
				</ul>
			`;
		},
		setFixnavUMlist: function(thisFixnavUM) {
			var sample_str = `
				<ul class="cl-fixsubnav-list dropdown-menu">
					<li class="cl-fixsubnav-item"><a class="dashboard" href="#"><span class="cl-fixsubnav-name">${$.lang[LANG]['manager.site-um.dashboard']}</span></a></li>
					<li class="cl-fixsubnav-item"><a class="member" href="#"><span class="cl-fixsubnav-name">${$.lang[LANG]['manager.site-um.manage']}</span></a></li>
					<li class="cl-fixsubnav-item"><a class="logout" href="#"><span class="cl-fixsubnav-name">${$.lang[LANG]['manager.site-um.logout']}</span></a></li>
				</ul>
			`;

			var _s = $.clnav.s,
				check_login = getOrDefault(_s.mem,'check_login',false);

			thisFixnavUM.find('.cl-fixsubnav-list').remove();
			if(!_s.checkSite || !check_login) {
				thisFixnavUM.find('.mypage, .logout').hide();
				return;
			} else {
				thisFixnavUM.find('.login').hide();
				thisFixnavUM.find(`.${_s.checkModoo ? 'logout' : 'mypage'}`).show();

				if(_s.checkModoo) return;
			}

			var check_admin = getOrDefault(_s.mem,'check_adm',false),
				check_uadmin = getOrDefault(_s.mem,'check_uadm',false),
				check_groot = getOrDefault(_s.mem,'check_groot',false),
				check_id_type = getOrDefault(_s.mem,'id_type',''),
				login_id = getOrDefault(_s.mem,'id',''),
				login_nick = getOrDefault(_s.mem,'nick',login_id),
				login_profile = getOrDefault(_s.mem,'profile','//storage.googleapis.com/i.addblock.net/defaultImg.png');

			var tmp_page = (_s.checkConfig) ? PAGE : property.PAGE,
				tmp_hostary = window.location.hostname.split('.'),
				checkDomain = (tmp_hostary[1] != 'creatorlink' && tmp_hostary[1] != 'addblock') ? true : false,
				checkPort = (location.port) ? `:${location.port}` : '',
				host = (!checkDomain) ? `${tmp_hostary[1]}.${tmp_hostary[2]}` : 'creatorlink.net',
				host_url = (_s.checkGabia) ? '//creatorlink-gabia.com' : `//${host+checkPort}`,
				check_settings = {
					myorder: false,
					mywish: false,
					mycoupon: false,
					mypoint: false,
				};

			if(_s.checkSite && _s.checkSM && !check_admin) {
				check_settings.myorder = true;
				if(LANG=='ko' && getOrDefault(_s.settings,'product_wishlist_btn','') == 'Y') check_settings.mywish = true;
				if(LANG=='ko' && getOrDefault(property.POINGSETTINGS,'point_use','') == 'Y') check_settings.mypoint = true;
				if(getOrDefault(property.SMSETTINGS,'coupon_use_yn','') == 'Y') check_settings.mycoupon = true;
			}

			var str = '',
				um_list = {
					dashboard: {
						onoff: (check_admin || check_uadmin) ? true : false,
						label: $.lang[LANG]['manager.site-um.dashboard'],
						url: (check_uadmin) ? '/_admin/dashboard' : ((check_admin && checkDomain) ? 'javascript:;' : host_url + '/dashboard'),
						blank: true,
					},
					manage: {
						onoff: check_admin,
						label: $.lang[LANG]['manager.site-um.manage'],
						url: `${host_url}/manager/member`,
						blank: true,
					},
					mygabia: {
						onoff: (_s.checkGabia && (check_admin || (check_uadmin && check_groot))) ? true : false,
						label: $.lang[LANG]['manager.site-um.mypage.gabia'],
						url: 'https://www.gabia.com/mygabia/service',
						blank: true,
					},
					myorder: {
						active: tmp_page == '_mypage' ? true : false,
						onoff: check_settings.myorder,
						label: $.lang[LANG]['manager.site-um.mypage.orderlist'],
						url: '/_mypage',
					},
					mywish: {
						active: tmp_page == '_wishlist' ? true : false,
						onoff: check_settings.mywish,
						label: $.lang[LANG]['manager.site-um.mypage.wishlistbtn'],
						url: '/_wishlist',
					},
					mycoupon: {
						active: tmp_page == '_coupon' ? true : false,
						onoff: check_settings.mycoupon,
						label: $.lang[LANG]['manager.site-um.mypage.coupon'],
						url: '/_coupon',
					},
					mypoint: {
						active: tmp_page == '_point' ? true : false,
						onoff: check_settings.mypoint,
						label: $.lang[LANG]['manager.site-um.mypage.point'],
						url: '/_point',
					},
					mypost: {
						active: tmp_page == '_mypost' ? true : false,
						onoff: !(check_admin || check_uadmin),
						label: $.lang[LANG]['manager.site-um.mypage.post'],
						url: '/_mypost',
					},
					myinfo: {
						active: tmp_page == '_myinfo' ? true : false,
						onoff: !check_admin,
						label: _s.checkSM && !check_uadmin ? $.lang[LANG]['manager.site-um.mypage.new'] : $.lang[LANG]['manager.site-um.mypage'],
						attr: tmp_page == '_myinfo' ? '' : ` onclick="myinfoChangeBtn(this)" id="myinfo-change-btn" data-sid="${_s.sid}"`,
					},
					logout: {
						onoff: check_login,
						label: $.lang[LANG]['manager.site-um.logout'],
					}
				};

			$.each(um_list, function(k,o) {
				if(o.onoff === false
					|| (login_id == 'naverpaytest' && k.match(/^my/) !== null)
				) return;

				var tmp_attr = getOrDefault(o,'attr','');
				if(getOrDefault(o,'blank',false)) tmp_attr += ' target="_blank"';

				str += `<li class="cl-fixsubnav-item ${getOrDefault(o,'active',false) ? 'active' : ''}">
							<a class="${k}" href="${getOrDefault(o,'url','javascript:;')}" ${tmp_attr}><span class="cl-fixsubnav-name">${o.label || k}</span></a>
						</li>
				`;
			});

			thisFixnavUM.append(`
				<ul class="cl-fixsubnav-list dropdown-menu">
					${str}
				</ul>
			`)
		},
		setFixnavStyle: function(thisHeader) {
			if(thisHeader.length == 0) return;

			var _slang = (PAGE_MODE == 'c') ? SLANG : property.SLANG;

			var checkCtrlNavMode = thisHeader.hasClass('cl-sample'),
				sample_fixnav = {
					sidemap: `
						<li class="cl-fixnav-item sidemap"><a href="#"><span class="cl-fixnav-icon"></span><span class="cl-fixnav-name">ALL</span></a></li>
					`,
					search: `
						<li class="cl-fixnav-item search">
							<a href="#"><span class="cl-fixnav-icon"></span><span class="cl-fixnav-name">SEARCH</span></a>
							<div class="psearch-overlay">
								<span class="psearch-close"><img src="//storage.googleapis.com/i.addblock.net/fa-close-modal-white.png" alt="Close Product Search"></span></span>
								<div class="psearch-body">
									<span class="psearch-wrap">
										<a href="#" class="psearch-icon"><i class="cl-icon cl_icon_magnifier"></i></a>
										<input class="psearch-input" type="text" name="" placeholder="${$.lang[LANG]['fheader.psearch']}">
									</span>
								</div>
							</div>
						</li>
					`,
					loginout: `
						<li class="cl-fixnav-item loginout">
							<a href="#" class="login"><span class="cl-fixnav-icon"></span><span class="cl-fixnav-name">LOGIN</span></a>
							<a href="#" class="logout" style="display: none;"><span class="cl-fixnav-icon"></span><span class="cl-fixnav-name">LOGOUT</span></a>
							<a href="#" class="mypage dropdown-toggle" style="display: none;"><span class="cl-fixnav-icon"></span><span class="cl-fixnav-name">MY PAGE</span></a>
							<ul class="cl-fixsubnav-list dropdown-menu">
								<li class="cl-fixsubnav-item"><a href="#"><span class="cl-fixsubnav-name">${$.lang[LANG]['manager.site-um.dashboard']}</span></a></li>
								<li class="cl-fixsubnav-item"><a href="#"><span class="cl-fixsubnav-name">${$.lang[LANG]['manager.site-um.mypage']}</span></a></li>
								<li class="cl-fixsubnav-item"><a href="#"><span class="cl-fixsubnav-name">${$.lang[LANG]['manager.site-um.logout']}</span></a></li>
							</ul>
						</li>
					`,
					cart: `
						<li class="cl-fixnav-item cart">
							<a href="#"><span class="cl-fixnav-icon"></span><span class="cl-fixnav-name">CART</span><span class="cl-fixnav-cart-active" data-cart-active="5"></span></a>
						</li>
					`,
					lang: `
						<li class="cl-fixnav-item lang dropdown">
							<a href="#"><span class="cl-fixnav-icon">KO</span><span class="cl-fixnav-name"></span><span class="cl-fixnav-arrow"></span></a>
							<ul class="cl-fixsubnav-list dropdown-menu">
								<li class="cl-fixsubnav-item"><a href="#"><span class="cl-fixsubnav-name">Korean</span></a></li>
								<li class="cl-fixsubnav-item"><a href="#"><span class="cl-fixsubnav-name">English</span></a></li>
								<li class="cl-fixsubnav-item"><a href="#"><span class="cl-fixsubnav-name">Japanese</span></a></li>
							</ul>
						</li>
					`,
				};

			var thisOption = thisHeader.find('.cl-nav-option'),
				thisFixnav = thisHeader.find('.cl-fixnav-list:not(.emptycol)'),
				fixnav_set_style = thisHeader.attr('data-fixnav-set-style'),
				fixnav_lang_style = thisHeader.attr('data-fixnav-lang-style');

			var fixobj = {
				sidemap: { name:'전체보기', icon:clSVG('toggle_s',13,11) },
				search:	{ name:'search', icon:'' },
				login:	{ name:'login', icon:'' },
				logout:	{ name:'logout', icon:'' },
				mypage:	{ name:'my page', icon:''},
				cart:	{ name:'cart', icon:'' },
				lang:	{ name:'', icon:'', arrow:'', icon_cls:[] },
			};

			if(!thisOption.is('[data-sidemap="true"]')) delete fixobj.sidemap;

			switch(fixnav_set_style) {
				case '2':
					fixobj.cart.name = 'basket';
					break;

				case '3':
					fixobj.search.name = '검색';
					fixobj.login.name = '로그인';
					fixobj.logout.name = '로그아웃';
					fixobj.mypage.name = '마이페이지';
					fixobj.cart.name = '장바구니';
					break;

				case '4':
				case '5':
				case '6':
				case '7':
				case '8':
					var tmp_size = 28;
					fixobj.search.icon = clSVG('fixbtn_search'+fixnav_set_style,tmp_size,tmp_size);
					fixobj.login.icon = clSVG('fixbtn_um_login'+fixnav_set_style,tmp_size,tmp_size);
					fixobj.logout.icon = clSVG('fixbtn_um_mypage'+fixnav_set_style,tmp_size,tmp_size);
					fixobj.mypage.icon = clSVG('fixbtn_um_mypage'+fixnav_set_style,tmp_size,tmp_size);
					fixobj.cart.icon = clSVG('fixbtn_cart'+fixnav_set_style,tmp_size,tmp_size);

					if($.inArray(fixnav_set_style, ['4','5','6','7']) > -1) { // only icon
						fixobj.search.name = '';
						fixobj.login.name = '';
						fixobj.logout.name = '';
						fixobj.mypage.name = '';
						fixobj.cart.name = '';
					}
					break;
				case '9':
					fixobj.search.name = '검색';
					fixobj.login.name = '로그인';
					fixobj.logout.name = '로그아웃';
					fixobj.cart.name = '';
					fixobj.cart.icon = clSVG('fixbtn_cart9',28,28);
					break;
				case '10':
					fixobj.search.name = '';
					fixobj.search.icon = clSVG('fixbtn_search10',28,28);
					fixobj.cart.name = '';
					fixobj.cart.icon = clSVG('fixbtn_cart9',28,28);
					break;

				default:
					break;
			}

			if(checkCtrlNavMode || $.clnav.d.isElViewer) {
				_slang = {select:'한국어',select_code:'ko', use_language:'on', lists:{code:'ko',name:'한국어'}};
			}

			fixobj.lang.name = _slang.select_code;
			fixobj.lang.arrow = clSVG('fixbtn_arrow',16,16,true);
			if(typeof _slang != 'undefined' && typeof _slang.lists !='undefined' && _slang.lists.length > 1) fixobj.lang.list = $.clnav.getFixnavLangList(_slang);

			switch(fixnav_lang_style) {
				case '2':
					fixobj.lang.name = $.lang[LANG][`editor.languages-${_slang.select_code}`];
					break;
				case '5':
					fixobj.lang.icon = clSVG(`fixbtn_lang5`,16,16,true);
					fixobj.lang.name = '';
					fixobj.lang.arrow = '';
					break;
				case '6':
					fixobj.lang.icon = clSVG(`fixbtn_lang5`,16,16,true);
					fixobj.lang.arrow = '';
					break;
				case '7':
					fixobj.lang.icon = '<div class="cl-fixnav-icon-img"></div>';
					fixobj.lang.icon_cls.push('circle');
					fixobj.lang.name = $.lang[LANG][`editor.languages-${_slang.select_code}`];
					break;
				case '8':
					fixobj.lang.icon = '<div class="cl-fixnav-icon-img"></div>';
					fixobj.lang.name = $.lang[LANG][`editor.languages-${_slang.select_code}`];
					break;
				case '9':
					fixobj.lang.icon = '<div class="cl-fixnav-icon-img"></div>';
					fixobj.lang.icon_cls.push('circle');
					fixobj.lang.name = '';
					fixobj.lang.arrow = '';
					break;
				case '10':
					fixobj.lang.arrow = '';
					break;
				case '11':
					fixobj.lang.icon = '<div class="cl-fixnav-icon-img"></div>';
					fixobj.lang.name = '';
					fixobj.lang.arrow = '';
					break;
				default:
					break;
			}

			var checkEmpty = thisFixnav.children().length == 0 ? true : false;
			$.each(fixobj, function(fixnav_k, fixnav_o) {
				if(	(checkCtrlNavMode && thisHeader.closest(`[data-sample="fixnav-${(fixnav_k == 'lang') ? 'lang' : 'set'}"]`).length == 0)
				) {
					return;
				}

				var tmp_sample_k = ($.inArray(fixnav_k, ['login','logout','mypage']) > -1) ? `loginout` : fixnav_k;
				if(thisFixnav.find(`.cl-fixnav-item.${tmp_sample_k}`).length == 0) {
					if(checkEmpty) thisFixnav.append(sample_fixnav[tmp_sample_k]);
					else return;
				}

				var tmp_k = ($.inArray(fixnav_k, ['login','logout','mypage']) > -1) ? `.loginout .${fixnav_k} ` : `.${fixnav_k}`;
				thisFixnav.find(`.cl-fixnav-item${tmp_k} .cl-fixnav-icon`).html(fixnav_o.icon);
				if(typeof fixnav_o.icon_cls != 'undefined' && fixnav_o.icon_cls.length > 0) thisFixnav.find(`.cl-fixnav-item${tmp_k} .cl-fixnav-icon`).addClass(fixnav_o.icon_cls.join(' '));
				thisFixnav.find(`.cl-fixnav-item${tmp_k} .cl-fixnav-name`).html(fixnav_o.name);				
				if(fixnav_k == 'lang') thisFixnav.find(`.cl-fixnav-item${tmp_k} .cl-fixnav-arrow`).html(fixnav_o.arrow);

				if(typeof fixnav_o.list != 'undefined' && fixnav_o.list) {
					thisFixnav.find(`.cl-fixnav-item.${tmp_sample_k} .${$(fixnav_o.list).attr('class').replace(/ /g,'.')}`).remove();
					thisFixnav.find(`.cl-fixnav-item.${tmp_sample_k}`).append(fixnav_o.list);
				}
			});

			if(thisOption.is('[data-fixnav-position="langbottom"]')) {
				thisHeader.find('.cl-nav-section.main > .container').append(thisFixnav.clone().addClass('bottom'));
				thisHeader.find('.cl-fixnav-list:not(.bottom):not(.emptycol)').find('.cl-fixnav-item.lang').remove();
				thisHeader.find('.cl-fixnav-list.bottom').find('.cl-fixnav-item:not(.lang)').remove();
			}

			$.clnav.setFixnavUMlist(thisFixnav.find('.cl-fixnav-item.loginout'));
			$.clnav.showHideFixnavItem(thisHeader);
		},
		showHideFixnavItem: function(thisHeader) {
			if(thisHeader.length == 0 || thisHeader.find('.cl-fixnav-item').length == 0) return;

			var fix_off = thisHeader.find('.cl-nav-option[data-fixnav-off]').length > 0 ? thisHeader.find('.cl-nav-option').attr('data-fixnav-off').split(',') : [];
			thisHeader.find('.cl-fixnav-item').removeClass('hide');

			$.each(fix_off, function(i,k) {
                var tmp_k = (k == 'um') ? 'loginout' : k;
                thisHeader.find(`.cl-fixnav-item.${tmp_k}`).addClass('hide');
			});
		}
	}


});