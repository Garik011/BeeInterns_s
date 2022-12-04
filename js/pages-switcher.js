	$(document).ready(function() {




		if($(window).width() > 750) {
			$('body').each(function(){
				var link=$(`
					<style>
						html {
						   height: 100%;
						}
						body {
						   margin: 0;
						   min-height: 100%;
						   height: auto;
						}
							.pages {
								direction: ltr;
								font-family: 'Arila', sans-serif;
								font-size: 16px;
								line-height: 1;
							}
							.pages-switcher-btn {
								top: 81px;
                position: fixed;
                background: #202020;
                border-bottom-right-radius: 10px;
                border-top-right-radius: 10px;
                margin-left: 280px;
                width: 48px;
                height: 48px;
                cursor: pointer;
							}
							.pages-switcher-heading {
								padding: 17px 112px 21px 30px;
								background-color: #323443;
                border-bottom: 1px solid #3d3f4b;
							}
							.pages-swticher-list {
								padding-top: 20px;
							}
							.pages-swticher-list li a {
								padding: 12px 30px;
								display: block;
								line-height: 1;
							}
							.pages-swticher-list li a {
								color: #fff;
								-webkit-transition: .3s;
								-o-transition: .3s;
								transition: .3s;
							}
							.pages-swticher-list li a:hover {
								color: #ffff;
								background-color: #383a49;
							}
              .svg-decorative:hover {
                color: #706eff;
              }
							#pages-menu  {
								margin-top: 11px;
    						margin-left: 6px;
								width: 40px;
								height: 40px;
								position: relative;
							}
							.cross #pages-menu span {
								background-color: transparent;
							}
							.cross #pages-menu span:before {
								transform: rotate(45deg);
								top: 0;
							}
							.cross #pages-menu span:after {
								transform: rotate(-45deg);
								bottom: 0;
							}
							#pages-menu span {
								display: inline-block;
								width: 30px;
								margin-left: 4px;
								top: 1px;
								height: 3px;
								background-color: #fff;
								border-radius: 1px;
								position: relative;
							}
							#pages-menu span:before {
								content: '';
								position: absolute;
								left: 0;
								right: 0;
								height: 3px;
								background-color: #fff;
								border-radius: 1px;
								top: -8px;
								transition: .6s;
							}
							#pages-menu span:after {
								content: '';
								position: absolute;
								left: 0;
								right: 0;
								height: 3px;
								background-color: #fff;
								border-radius: 1px;
								bottom: -8px;
								transition: .6s;
							}
							.pages-switcher {
								left: 0;
								top: 0;
								color: #fff;
								width: 280px;
								display: block;
								z-index: 555555;
								position: fixed;
								background: #333544;
								border-radius: 0;
								height: 100%;
								transform: translateX(-100%);
								-webkit-transition: all .3s ease;
								transition: all .6s ease;
							}
							.pages-visible {
								-webkit-transform: translateX(0);
								transform: translateX(0)
							}
					</style>
					`);
				$('body').prepend(link);
			});





			var panel = $('.pages-switcher');
			$('.pages-switcher-btn').on('click', function() {
				'use strict';
				$(this).toggleClass('cross');
				$('.pages-switcher').toggleClass('pages-visible');
			});

		}

});
