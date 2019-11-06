
<!DOCTYPE html><html><head><title>gooal.co</title><link id='favicon' rel='shortcut icon' type='image/x-icon' href='com/images/favicon.ico' /><script type="text/javascript" src="js/unpacked/persist-2.0.js?r=60"></script><META HTTP-EQUIV='content-type' CONTENT='text/html; charset=utf-8'><!-- Smartsupp Live Chat script -->
<script type="text/javascript">
var _smartsupp = _smartsupp || {};
_smartsupp.key = '1175a03df1c47e63127842ba3f29faa02e892866';
window.smartsupp||(function(d) {
	var s,c,o=smartsupp=function(){ o._.push(arguments)};o._=[];
	s=d.getElementsByTagName('script')[0];c=d.createElement('script');
	c.type='text/javascript';c.charset='utf-8';c.async=true;
	c.src='//www.smartsuppchat.com/loader.js?';s.parentNode.insertBefore(c,s);
})(document);
</script>
<script type="text/javascript">
function srvtm(){return '1573005863~3600';}
function change_lang(lang){
	store.$.clearMem();
	store.$.flush();
	sessvars_flush = 1;
	document.cookie = 'reload_bar=;  Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
	window.location=window.location+'?lang='+lang;
}
var full_system=0;var betradar_lmt=0;var stream='1';var multibet_enabled=1;var shop_mode=0;var kupon_nr_new=1;var no_casino=0;var book_code=0;var ajax_login=true;var TIMEZONE='Africa/Tunis';var JSLIB_REV=3;var JSAPP_REV=60;var CSSLIB_REV=2;var CSSAPP_REV=40;function _(msg){return msg;
}
store_live_data=["wss://ws1.b123club.com:3703/betplus_feed","wss://ws2.b123club.com:3703/betplus_feed"];block_api_updates=false;store.user_sess='ala12345';last_update=0;last_delta=0;last_delta_live=0;store.currency={'cur22':'TND'};
var bonus_min_koef=1.15;
var bonus_table_s={"5":["a","2"],"6":["a","5"],"7":["a","5"],"8":["a","10"],"9":["a","10"],"10":["a","10"],"11":["a","20"],"12":["a","20"],"13":["a","20"],"14":["a","30"],"15":["a","30"],"16":["a","30"],"17":["a","45"],"18":["a","45"],"19":["a","45"],"20":["a","45"],"21":["a","60"],"22":["a","60"],"23":["a","60"],"24":["a","80"],"25":["a","80"],"26":["a","80"],"27":["a","80"],"28":["a","100"],"29":["a","100"],"30":["a","100"],"31":["a","110"],"32":["a","110"],"33":["a","110"],"34":["a","110"],"35":["a","130"],"36":["a","130"],"37":["a","130"],"38":["a","130"],"39":["a","150"],"40":["a","150"]};
var xhr_async_call=null;var xhr_async_try=0;sessvars_flush = 1;</script>
<link rel="stylesheet" href="frontend/js/lib/jquery-ui.css?r=2" />
<script type='text/javascript' src='frontend/js/lib/jquery-2.1.4.min.js?r=3'></script><script type='text/javascript' src='frontend/js/lib/jquery-ui.min.js?r=3'></script><script type='text/javascript' src='frontend/js/lib/jquery.browser.min.js?r=3'></script><script type="text/javascript" src="js/unpacked/init-luaj-3.0.js?r=60"></script><script type="text/javascript" src="frontend/js/lib/jquery.ui.datepicker-fr.js"></script>
<script type='text/javascript' src='frontend/js/jquery_cookie.js?r=60'></script><script type='text/javascript' src='frontend/js/lib/angular/angular.min.js?r=3'></script><script type='text/javascript' src='frontend/js/lib/bootstrap/bootstrap.min.js?r=3'></script><script type='text/javascript' src='frontend/js/lib/angular/ng-infinite-scroll.min.js?r=3'></script><script type='text/javascript' src='frontend/js/lib/bootstrap-toggle.min.js?r=3'></script><script type='text/javascript' src='frontend/js/ng/ng_function.js?r=60'></script><link href='frontend/css/bootstrap.min.css?r=2' rel='stylesheet'  type='text/css' /><link href='frontend/css/bootstrap-toggle.min.css?r=2' rel='stylesheet' type='text/css' /><link href='frontend/css/backend.css?r=40' rel='stylesheet' type='text/css' /><link href='frontend/category_flags/flags.css?r=40' rel='stylesheet' type='text/css' ><link href='frontend/css/icons_sport.css?r=40' rel='stylesheet' type='text/css' /><link href='frontend/css/live.css?r=40' rel='stylesheet' type='text/css' /><link href='frontend/css/sass/bet.css?r=40' rel='stylesheet' type='text/css' /><!-- Mos vendos <head> dhe as </head>!!! -->
<!-- scripts-->
<meta content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0' name='viewport' />
<script type="text/javascript">
store_sports_sync();refresh_check_sync();store.last_user='ala12345';</script>
</head><body class="" id="body"  ng-app="bet" ng-cloak="" ng-controller="betController as bc" >
<div id='show_load_bar'></div>
<script type="text/javascript">
if(getCookie('reload_bar')!=''){
	var load_string = "<div class='show-window reload_load_bar'  >"+
"<div data-ng-element-ready='show_load_bar()' style=' position:fixed ;left:25%; top: 50%;width: 50% ;'>"+
	"<div class='meter ' ><span  style='width: 100%'></span></div></div></div>"
	$("#show_load_bar").html(load_string);
	$(".meter > span").each(function() {
		$(this).data("origWidth", $(this).width()).width(0).animate({
				width: $(this).data("origWidth")
			}, 7000);
	});
	setTimeout(function(e){	
		$( ".show-window" ).removeClass( 'reload_load_bar' );
		$("#show_load_bar").html('');
	},7000);
}
</script>

<div ng-if="showMobileNewMenu" id='mobile-new-menu'>
	<div class="top-bar">
		<div ng-if="user_name=='nologin' || user_name==''" ng-click="showLogin()" class="login-register">
			<span class="login">{{_('login')}}</span>
			<span class="register">{{_('register')}}</span>
		</div>
		<div ng-if="user_name != 'nologin' && user_name != ''" class="show_in_mobile mobile_login" ng-click="showLogin()">
			<span class="glyphicon glyphicon-user"></span>
		</div>
		<div class="logo-container"></div>
		<div ng-click="showMobileMenuSettings()" class="settings-toggle">
			<div class="glyphicon glyphicon-cog"></div>
		</div>
	</div>	
	<div class="mobile-menu-center">
		<div ng-click="sport_betting_all_link()" id="sport-all-link">
			<span class="link-title">{{_('sport_all')}}</span>
		</div>
		<div ng-click="sport_betting_link()" id="sport-link">
			<span class="link-title">{{_('sport_prematch')}}</span>
		</div>
		<div ng-click="sport_betting_live_link()" id="sport-live-link">
			<span class="link-title">{{_('sport_live')}}</span>
		</div>
		<div ng-if="configs.casino_new" ng-click="open_casino_new()" id="mobile-casino-new">
			<span class="link-title">Casino New</span>
		</div>
		<a ng-if="store_href && store_href.casino" id="casino-link" ng-href="{{store_href.casino}}">
			<span class="link-title">Casino</span>
		</a>
		<a ng-if="store_href && store_href.casino" id="casino-live-link" ng-href="{{store_href.casino + '&casinolive=1'}}">
			<span class="link-title">Casino Live</span>
		</a>
		<a ng-if="store_href && store_href.virtual" id="virtual-link" ng-href="{{store_href.virtual}}">
			<span class="link-title">Virtual Logic</span>
		</a>
		<a ng-if="store_href && store_href.casino && user_name=='nologin'" id="virtual-kiron-link" ng-href="{{store_href.casino +'&direct_game_id=5997&fun=1&netent=0'}}">
			<span class="link-title">Virtual Kiron</span>
		</a>
		<a ng-if="store_href && store_href.casino && user_name!='nologin'" id="virtual-kiron-link" ng-href="{{store_href.casino +'&direct_game_id=5997&fun=0&netent=0'}}">
			<span class="link-title">Virtual Kiron</span>
		</a>
		<a ng-if="configs.external_link" id="mobile-external-link" ng-href="{{configs.external_link}}">
			<span class="link-title">external_link</span>
		</a>
		<a ng-if="configs.external_link_2" id="mobile-external-link-2" ng-href="{{configs.external_link_2}}">
			<span class="link-title">external_link_2</span>
		</a>
		<a ng-if="configs.external_link_3" id="mobile-external-link-3" ng-href="{{configs.external_link_3}}">
			<span class="link-title">external_link_3</span>
		</a>
		<div ng-if="configs.keno_bingo && user_name!='nologin'" ng-click="open_keno_bingo()" id="mobile-keno-bingo">
			<span class="link-title">Keno Austria</span>
		</div>
		<div ng-if="configs.keno_bkmk && user_name!='nologin'" ng-click="open_keno_bkmk()" id="mobile-keno-bingo">
			<span class="link-title">Keno Austria</span>
		</div>
		<!-- <div id="help-link">
			<span class="link-title">{{_('help')}}</span>
		</div> -->
		<!-- <div id="chat-link">
			<span class="link-title">{{_('chat')}}</span>
		</div> -->
	</div>
</div>
<div class="mobile-new-menu-settings-panel">
	<div class="mobile-new-menu-settings-title">
		<span>{{_('settings')}}</span>
	</div>
	<div class="mobile-new-menu-settings-body">
		<div class="mobile_settings_divider"></div>
		<div class="sport_settings_group">
			<div class="sport_settings_item ">
				<a role="button" ng-click="mobile_language_show()">
					<div class="item_title">
						<span class="item_text">{{_("change_language")}}</span>
						<span class="bileta_panel_icon glyphicon glyphicon-menu-down"></span>
						<div style="position:relative;top:1px;float:right; margin-right:5px;">{{actual_language}}</div> 
						<div ng-style="{position:'relative', top:'2px', display:'inline-block', float:'right', backgroundImage:'url(frontend/bans/flag_'+actual_language+'.png)',backgroundRepeat:'no-repeat','height':'24px','width':'24px'}"></div> 
					</div>
				</a>
				<div class="collapse item_body" id="select_language_mobile_collapse"></div>
			</div>
		</div>
		<div class="mobile_settings_divider"></div>
		<div class="sport_settings_group">
			<div class="sport_settings_item">
				<a role="button" ng-click="mobile_timezone_list()">
					<div class="item_title">
						<span class="item_text">{{time_zone}}</span>
						<span class="bileta_panel_icon glyphicon glyphicon-menu-down"></span>
						<span style="float:right;">
							<div id="the_clock"><div id="time" ></div></div>
						</span>
					</div>
				</a>
				<div class="collapse item_body" id="select_timezone_mobile_collapse"></div>
			</div>
		</div>
	</div>
</div>
<div id='top' class=" navbar-fixed-top navbar-inverse" role="navigation">
	<div class="row-fluid "  ng-if="panelView != '' ">
		<div class="col-xs-12 col-sm-12 col-md-12  col-lg-12 no-padding-lg_0 no-padding-sm_0 no-padding-ex_0 no-padding_0 top_body ">	
	 		<topmenu></topmenu>
    </div> 
	</div>	 
</div>
<modals></modals>  
<div ng-if="panelView == 'panelPrematch' " >
	<div id='viewport'  class="">
		<div id="viewportLCR" class='row-fluid' >
			<mobilelogin ng-if="window_mode == 'mobile'"></mobilelogin>  
			<div id='tournaments' class="col-xs-2 col-sm-0 col-md-2 col-lg-2 tournaments_panel_prematch"  ng-class="{col_sports_minimized:panelView != 'panelPrematch'}">			 	
				<span id="left_top_widget_container" ng-if="show_left_top_widget == true"><lefttopwidget></lefttopwidget></span>
			 	<div class='tournament_close'><span  class="glyphicon glyphicon-remove tournament_close_button" onclick="hideRight()"></span></div>
			 	<div class='tounaments_class'>
			 		<tournaments></tournaments>		
			 	</div>			 	 
				<span id="left_bottom_widget_container" ng-if="show_left_bottom_widget == true"><leftbottomwidget></leftbottomwidget></span>				 	 	           
      </div>
      <span ng-if="show_center_widget == true"><centerwidget></centerwidget></span>		      
      <div id="matches_ct" ng-if="show_center_widget != true" class="col-xs-7 col-sm-12 col-md-7  col-lg-7 matches_ct_panel_prematch " ng-class="{col_matches_maximised:panelView != 'panelPrematch'} ">
				<div ng-if="window_mode != 'mobile'" id="panel-date-container" class=" panel-heading  panel-heading-day-filter sport_panel icon-panel-sport-{{test}} hide_in_mobile" ng-class="{'comercial_center': show_banner_iframe == true}">
					<span id="banner_iframe_container" ng-if="show_banner_iframe == true"><banneriframe></banneriframe></span>
					<div ng-if="!isEmptyObject(banner_match)" class="banner_match_container">
						<div class="row-fluid">
							<h3 class="banner_tournament">
		        		<span class="category_img">
		    	  			<img ng-src="frontend/category_flags/clear.gif" class="flag flag-{{banner_match.tour.cc}}"></img>
		    				</span>	
		        		{{banner_match.tour.category_name}} / {{banner_match.tour.tournament_name}} {{banner_match.match.date}} {{banner_match.match.time}}
		        	</h3>
						</div>
						<div class="row-fluid">
							<div ng-repeat="bet in banner_match.match.markets.bets" >  			   				            					
								<div class='market_base    col-{{banner_match.match.markets.markets_nr}}-{{bet.name}}  market_base_{{bet.name}} no-padding-lg no-padding-sm no-padding-ex no-padding' ng-click="betSlipInsert(banner_match.match.id,banner_match.match.markets.id,'no_sbv',bet.id,'prematch_store',$event)">
									<span class="market_base_name " >{{bet.new_name}}</span>
							 		<span class="market_base_odd">{{odd_format(bet.odd)}}</span>
								</div>
							</div>							
						</div>
					</div>
					<div class="panel-title">
						<span class="bet_select_btn hide_in_mobile" ng-class="{ btn_selected : panelView == 'panelPrematch'}" ng-click="changeView('panelPrematch')" title="{{_('bet')}}">{{_('bet')}}</span>
						<span class="bet_select_btn  hide_in_mobile" ng-class="{ btn_selected : panelView == 'panelFavorites'}" ng-click="changeView('panelFavorites')" title="{{_('bet')}} 2">{{_("bet")}} 2</span>
						<span class="bet_select_btn  hide_in_mobile bast_multi" ng-class="{ btn_selected : panelView == 'panelMulti'}" ng-click="changeView('panelMulti')" title="{{_('bet')}} Multi">{{_("bet")}} Multi</span>
						<span ng-if="user_name!='nologin' && user_name!=''" class="bet_select_btn  hide_in_mobile bast_multi" ng-class="{ btn_selected : panelView == 'panelAsian'}" ng-click="changeView('panelAsian')" title="Asian View">Asian View</span>
						<span ng-if="user_name!='nologin' && user_name!='' && shop_mode">
							<span class="bet_select_btn  hide_in_mobile" ng-class="{ btn_selected : panelView == 'fastBet'}" ng-click="changeView('fastBet')" title="{{_('quick_bet')}}">{{_("quick_bet")}}</span>
						</span>
						<span  class="row-fluid panel-heading-sport-name " >{{store_tournaments[test].name}} <span ng-if="filter_date_status != obj_to_array(filters_date_object.date)[0].date && filter_date_status != obj_to_array(filters_date_object.date)[1].date && filter_date_status != 'all '"> {{filters_date_object.date[filter_date_status].day}} {{filters_date_object.date[filter_date_status].view}}</span></span> 						
						<!-- Search All Matches -->
						<input type="text" id="search_all_matches" ng-keyup="search_all_matches($event)" required placeholder="{{_('search_match')}}">
						<span class="glyphicon glyphicon-remove clear_all_search" ng-click="clear_all_search($event)"></span>
						<div id = "all_ma_search_res" ng-show='search_all_matches_open'>										
					    <div ng-repeat="(matchIndex,match) in live_norm | search_all_match_filter: search_match_string">                     	                          
				      	<div class="row-fluid">
					      	<div class="col-xs-12 col-sm-12 col-lg-12 my-row" >  
							      <div class="row-fluid" ng-click="showExtraBetFromSearch(matchIndex,$event,'live',match[4],'',match) ;clear_all_search()">        
											<span class="search_all_match_result " >(LIVE) {{match[0]}} | {{match[1]}}</span>									
							      </div>    
							    </div>
							  </div>
					    </div>  
					    <div ng-repeat="(matchIndex,match) in prematch_norm | search_all_match_filter: search_match_string">                     	                          
				      	<div class="row-fluid">
					      	<div class="col-xs-12 col-sm-12 col-lg-12 my-row" >  
							      <div class="row-fluid" ng-click="showExtraBetFromSearch(matchIndex,$event,'prematch',match[4],'',match) ;clear_all_search()">        
											<span class="search_all_match_result " >{{match[0]}} | {{match[1]}}</span>									
							      </div>    
							    </div>
							  </div>
					    </div>          														
						</div>
						<!-- /Search All Matches -->
						<span class="order_select_btn hide_in_mobile" ng-click="order_by_check($event)" title='{{_("order_by_tournament_time")}}'>{{ _('time')}}<span style="font-size:16px;">&darr;</span><input id="order_by_check" type="checkbox" value=""></span>						
			   	</div>
				</div>
      	<div id='center' class="col-xs-12 col-sm-12 col-md-12 col-lg-12 no-padding no-padding-lg no-padding-sm no-padding-ex" ng-class="{'comercial_center': show_banner_iframe == true}" onscroll="min_max_comercial(this)"> 
					<div ng-if="window_mode == 'mobile'" class="sub-header-mobile show_in_mobile">
						<span ng-click="showLeft()" class=" btn-sport navbar-toggle collapsed btn-sport-navbar show_in_mobile" >
							<span class="sr-only">Toggle navigation</span>
								<span class="icon-bar"></span>
								<span class="icon-bar"></span>
							<span class="icon-bar"></span>
						</span>
						<!-- Search All Matches -->
						<input type="text" id="search_all_matches" ng-keyup="search_all_matches($event)" required placeholder="{{_('search_match')}}">
						<span class="glyphicon glyphicon-remove clear_all_search" ng-click="clear_all_search($event)"></span>
						<div id = "all_ma_search_res" ng-show='search_all_matches_open'>										
					    <div ng-repeat="(matchIndex,match) in live_norm | search_all_match_filter: search_match_string">                     	                          
				      	<div class="row-fluid">
					      	<div class="col-xs-12 col-sm-12 col-lg-12 my-row" >  
							      <div class="row-fluid" ng-click="showExtraBetFromSearch(matchIndex,$event,'live',match[4],'',match) ;clear_all_search()">        
											<span class="search_all_match_result " >(LIVE) {{match[0]}} | {{match[1]}}</span>									
							      </div>    
							    </div>
							  </div>
					    </div>  
					    <div ng-repeat="(matchIndex,match) in prematch_norm | search_all_match_filter: search_match_string">                     	                          
				      	<div class="row-fluid">
					      	<div class="col-xs-12 col-sm-12 col-lg-12 my-row" >  
							      <div class="row-fluid" ng-click="showExtraBetFromSearch(matchIndex,$event,'prematch',match[4],'',match) ;clear_all_search()">        
											<span class="search_all_match_result " >{{match[0]}} | {{match[1]}}</span>									
							      </div>    
							    </div>
							  </div>
					    </div>          														
						</div>
						<!-- /Search All Matches -->
						<div class="order-tours-mobile">
							<span class="item_text">{{_('order_by')}}</span>
							<span class=" toggle-my-btn">
								<label title='order by'>
								<input id="toggle-event_mobile" data-style="slow android"  type="checkbox" data-onstyle="success" data-offstyle="info"  data-size="mini" data-height="22"  data-ng-element-ready="active_toggle_mobile()" >
								</label>
							</span> 
						</div>
						<!-- <div clss="select-dates-mobile">
							<span class="item_text">{{_('select_dates')}}</span>
							<span class="glyphicon glyphicon-calendar btn-all-date-new {{sIndex}}"  ng-click="show_all_date_new(sIndex)" data-template="<div class='popover popover-date' role='tooltip'><div class='arrow'></div><h6 class='popover-title'></h6><div class='popover-content' id='popover-content-date-new'></div></div>"></span>
						</div> -->
						<!-- <div class="select-date-mobile ">
							<a role="button" data-toggle="collapse" href="#select_date3" aria-expanded="false" aria-controls="select_date2">
								<div class="item_title">
									<span class="glyphicon glyphicon-calendar"></span>
									<span class="item_text">{{_('select_dates')}}</span>
									<span class="bileta_panel_icon glyphicon glyphicon-menu-down"></span>
								</div>
							</a>
							<div class="collapse item_body" id="select_date3">				   
								<div class="mobile_select_date" title='Select all days' ng-click="filter_match_by_date('all')" ng-class="{button_filter_date_selected:filter_date_status == 'all'}">
											<span>{{_('all_dates')}}</span>
										</div>					   
										<div class="mobile_select_date" ng-repeat="(matches_date_index,matches_date_value) in filters_date_object.date " ng-click="filter_match_by_date(matches_date_value.date)" ng-class="{button_filter_date_selected:filter_date_status == matches_date_value.date}">
											<div >⋅<span  ng-bind="matches_date_value.day "></span><span> </span>
											<span ng-bind="matches_date_value.view"> </span>
											</div>
										</div>
							</div>
						</div> -->
					</div>
					<div class="matches_class" id='' data-ng-element-ready="organize_bast()">
	        	<matches></matches>
	        </div> 
	        <div ng-if="panelView == 'fastBet'" class="panel-heading  panel-heading-live panel-shadow sport_panel icon-panel-sport-{{test}} " >
					 	<h1 class="panel-title">{{store_tournaments[test].name}} </h1>
					</div>
	        <div id='backend_div'></div>   	         
        </div>
        <div class="matches_ct_extra" ng-if="match_id_selected !='' && match_type_selected=='prematches'">
        	<extraviewmodal></extraviewmodal>
        </div>
        <div class="matches_ct_extra" ng-if="match_id_selected !='' &&  match_type_selected=='lives'">
        	<extraviewmodallive></extraviewmodallive>
        </div>     
      </div>         
      <div id='bet_slip' class="col-xs-3  col-sm-0 col-md-3 col-lg-3 bet_slip_panel_prematch">
      	<div class="glyphicon glyphicon-remove betslip_close" onclick="hideRight()"></div>
      	<div class='betslip_class'>
      		<betslipel></betslipel>
      		<div class="comercial_betslip" ></div>      		
      	</div>	            
      </div>         
		</div>	
	</div>
</div>
<div ng-if=" panelView == 'panelFavorites' " >
	<div id='viewport' class='panelview_panel_favorites_{{show_favorites_panel_tour}} '>
		<favoritestour></favoritestour>	
	</div>
</div>
<div ng-if="panelView == 'panelAsian'">
	<div id='viewport' class='panelview_panel_asian'>
		<asianview></asianview>	
	</div>
</div>
<div ng-if="  panelView == 'panelMulti' " >
	<div id='viewport' class=''>
		<div id="viewportLCR" class='row-fluid' >
			<div id='tournaments' class="col-xs-2 col-sm-2col-md-2 col-lg-2 tournaments_panel_live"  ng-class="{col_sports_minimized:panelView != 'panelPrematch'}">
			 	<div class='tounaments_class'>
			 		<tournaments></tournaments>		
			 	</div>	 			 	 	           
      </div> 			      
      <div id="matches_ct" class="col-xs-7 col-sm-7 col-md-7  col-lg-7 matches_ct_panel_live" ng-class="{col_matches_maximised:panelView != 'panelPrematch'}">
	 			<div ng-if="match_id_selected ==''" id="panel-date-container" class=" panel-heading  panel-heading-day-filter sport_panel icon-panel-sport-{{test}} hide_in_mobile" >
			   	<div class="panel-title">
				   	<span class="bet_select_btn hide_in_mobile" ng-class="{ btn_selected : panelView == 'panelPrematch'}" ng-click="changeView('panelPrematch')" title="{{_('bet')}}">{{_('bet')}}</span>
						<span class="bet_select_btn  hide_in_mobile" ng-class="{ btn_selected : panelView == 'panelFavorites'}" ng-click="changeView('panelFavorites')" title="{{_('bet')}} 2">{{_("bet")}} 2</span>
						<span class="bet_select_btn  hide_in_mobile bast_multi" ng-class="{ btn_selected : panelView == 'panelMulti'}" ng-click="changeView('panelMulti')" title="{{_('bet')}} Multi">{{_("bet")}} Multi</span>
						<span class="bet_select_btn  hide_in_mobile bast_multi" ng-class="{ btn_selected : panelView == 'panelAsian'}" ng-click="changeView('panelAsian')" title="Asian View">Asian View</span>
						<span ng-if="user_name!='nologin' && user_name!=''">
							<span class="bet_select_btn  hide_in_mobile" ng-class="{ btn_selected : panelView == 'fastBet'}" ng-click="changeView('fastBet')" title="{{_('quick_bet')}}">{{_("quick_bet")}}</span>
						</span>
				   	<span  class="row-fluid panel-heading-sport-name "  >{{store_tournaments[test].name}} <span ng-if="filter_date_status != obj_to_array(filters_date_object.date)[0].date && filter_date_status != obj_to_array(filters_date_object.date)[1].date && filter_date_status != 'all '"> {{filters_date_object.date[filter_date_status].day}} {{filters_date_object.date[filter_date_status].view}}</span></span>				   					   	
				   	<span class="order_select_btn hide_in_mobile" ng-click="order_by_check($event)" title='{{_("order_by_tournament_time")}}'>{{ _('time')}}<span style="font-size:16px;">&darr;</span><input id="order_by_check" type="checkbox" value=""></span>
			   	</div>
				</div>        	
      	<div id='center' class="col-xs-12 col-sm-12 col-md-12 col-lg-12 no-padding no-padding-lg no-padding-sm no-padding-ex">       	     	
        	<div class="matches_class" id='' data-ng-element-ready="organize_live_view()">
        		<matches></matches>
        	</div> 				       		      	         
        </div>
        <div class="matches_ct_extra" ng-if="match_id_selected !='' && match_type_selected=='prematches'">
        	<extraviewmodal></extraviewmodal>
        </div>
         <div class="matches_ct_extra" ng-if="match_id_selected !='' &&  match_type_selected=='lives'">
        	<extraviewmodallive></extraviewmodallive>
        </div>     
      </div>          
      <div id='bet_slip' class="col-xs-3  col-sm-3  col-md-3 col-lg-3 bet_slip_panel_live">
        <div class="glyphicon glyphicon-remove betslip_close" onclick="hideRight()"></div>
      	<div class='betslip_class'>
      		<betslipel></betslipel>
        </div>
      </div>         
		</div>	
	</div>
</div>
<div ng-if="panelView == 'fastBet' " >
	<div id='viewport' class=''>
		<div id="viewportLCR" class='row-fluid' >
			<div id='tournaments' class="col-xs-2 col-sm-2col-md-2 col-lg-2 tournaments_panel_live"  ng-class="{col_sports_minimized:panelView != 'panelPrematch'}">
			 	<div class='tounaments_class'>
			 		<tournaments></tournaments>		
			 	</div>	 			 	 	           
      </div> 			      
      <div id="matches_ct" class="col-xs-7 col-sm-7 col-md-7  col-lg-7 matches_ct_panel_live" ng-class="{col_matches_maximised:panelView != 'panelPrematch'}">
      	<div id='matches' class="col-xs-12 col-sm-12 col-md-12 col-lg-12 no-padding no-padding-lg no-padding-sm no-padding-ex">       	     				        
	 				<div  id="panel-date-container" class=" panel-heading  panel-heading-day-filter sport_panel icon-panel-sport-{{test}} hide_in_mobile" >
				   	<div class="panel-title">
					   	<span class="bet_select_btn hide_in_mobile" ng-class="{ btn_selected : panelView == 'panelPrematch'}" ng-click="changeView('panelPrematch')" title="{{_('bet')}}">{{_('bet')}}</span>
							<span class="bet_select_btn  hide_in_mobile" ng-class="{ btn_selected : panelView == 'panelFavorites'}" ng-click="changeView('panelFavorites')" title="{{_('bet')}} 2">{{_("bet")}} 2</span>
							<span ng-if="user_name!='nologin' && user_name!=''">
								<span class="bet_select_btn  hide_in_mobile" ng-class="{ btn_selected : panelView == 'fastBet'}" ng-click="changeView('fastBet')" title="{{_('quick_bet')}}">{{_("quick_bet")}}</span>
							</span>
					   	<span  class="row-fluid panel-heading-sport-name " >{{store_tournaments[test].name}} <span ng-if="filter_date_status != obj_to_array(filters_date_object.date)[0].date && filter_date_status != obj_to_array(filters_date_object.date)[1].date && filter_date_status != 'all '"> {{filters_date_object.date[filter_date_status].day}} {{filters_date_object.date[filter_date_status].view}}</span></span>
				   	</div>
					</div> 
					<fastbet></fastbet> 
        	<div id='backend_div_old'></div>      		      	         
        </div>  
      </div>          
      <div id='bet_slip' class="col-xs-3  col-sm-3  col-md-3 col-lg-3 bet_slip_panel_live">
        <div class="glyphicon glyphicon-remove betslip_close" onclick="hideRight()"></div>
      	<div class='betslip_class'>
      		<betslipel></betslipel>
        </div>
      </div>         
		</div>	
	</div>
</div>
<div ng-if="panelView == 'panelVirtual' " >
	<virtualview></virtualview>
</div>
<div class="show-window " onclick="hideRight()">
	<span onclick="hideRight()" class="glyphicon glyphicon-remove mobile_betslip_close show_in_mobile"></span>
</div>   
<div id='kupon_print_div'></div>
<div id='submit_progress'></div>
<div id="wait_loading_container" class='hide'>
	<img src="frontend/css/img/load.gif">
</div>
<div id="reload_modal_container" class='hide'>
	<div id="reload_modal">
		<span class="reload_modal_text">RELOAD</span>
		<span class="glyphicon glyphicon-refresh"></span>
	</div>
</div>
<span ng-if="show_footer_widget == true"><footerwidget></footerwidget></span>
<script type="text/javascript">
var socket;
var match_live_sub = {};
var sport_selected = (isset(store.sport_present))?(store.sport_present):(1);
if(isset(store.sport_selected)) sport_selected=store.sport_selected;
var live_view_markets={1:[1242,1198,1228,1197,1190,1211,1233,1617]};
var prematch_view_markets={1:[1001,1005,1014,1007,1009,1019,1064]};
var panel_selected="panelPrematch";
if(isset(store.panel_selected)) panel_selected=store.panel_selected;
if(typeof sport_panel_selected !== "undefined"){
	if(sport_panel_selected == 2){		
		if($(window).innerWidth()>=1024){
			panel_selected="panelFavorites";
		}else if($(window).innerWidth() >= 768 && $(window).innerWidth() < 1024){
			panel_selected="panelFavorites";
		}else if($(window).innerWidth() >= 20 && $(window).innerWidth() < 768){
			panel_selected="panelPrematch";  		
		}else{
			panel_selected="panelPrematch";  
		}
	}		
}
var tournament_sel={};
if(isset(store.tournament_sel) ) tournament_sel=store.tournament_sel;
var order = 0;
if(isset(store.order) ) order=store.order;
var live_sel={};
if(isset(store.live_sel)) live_sel=store.live_sel;
//--not implemented yet--
var prematch_more_sel={};
//if(isset(store.prematch_more_sel)) prematch_more_sel=store.prematch_more_sel;
var live_more_sel={};
//if(isset(store.live_more_sel )) live_more_sel=store.live_more_sel;
//--glabal variables
var store_tournaments = {};
var store_tournaments_core = {};
var store_tournaments_live = {};
var store_tournaments_core_live = {};
var store_prematches ={};
var store_lives ={};
var match_with_clone = {};
var general_filters_param = "all";
var match_in_view_live = [];
var match_in_view_prematch = [];
var match_in_view_index_live = {};
var match_in_view_index_prematch = {};
var store_virtual_season_day = {};
var store_stream_list = {};
var virtual_league_selected='';
//------------
var store_extra = {};
var store_extra_live = {};
var store_live_view = {};
var betslipStore = {};
var clean_up = {timeout:0,change:false,timestamp:0};
var betslip_total = {
		showAccept:false,disableAccept:false,disableBast:true,
		newProductOfOdd:1,newProductOfOdd_m:1,system:0,betslip_show_multibet:false,active_bet:true,
		betslip_fitim:'',betslip_fitim_m:0,betslip_bonus:0,bet_selection:0,bonus_fushat:0,fitimi_num:0};
var dn_left_test = false;
//------------
var ndeshjet_select="";
var ndeshjet_select_live_matches="";
var tournament_id_selected='';
var category_id_selected='';
var match_id_selected='';
var match_type_selected='';
//------------
//var match_live_clone_i={}
var filters_date_object={only_one:false,date:{}};
var filter_date_status='all';
var category_more_less={show_button:false,show_all_category:false};
var total_height=window.innerHeight-60;
var bast_total_height=window.innerHeight-100;
var bast_live_height=0;
//------------
var multi_sport = false;
var debug = 0;
if(isset(store.debug)) debug=store.debug;

var match_search_live={};
var match_search_permatch={};
var bet_search=[];
var fast_bet_number_input_default = {};
var fast_bet_number_input = {};
if(isset(store.max_sel) ){
	for(var ind=1; ind<=store.max_sel;ind++){
		fast_bet_number_input_default['in_'+ind] = ind;
		fast_bet_number_input['in_'+ind] = ind;
	}
}else{
	fast_bet_number_input_default = {'in_1':1,'in_2':2,'in_3':3,'in_4':4,'in_5':5,'in_6':6,'in_7':7,'in_8':8,'in_9':9,'in_10':10};
	fast_bet_number_input = {'in_1':1,'in_2':2,'in_3':3,'in_4':4,'in_5':5,'in_6':6,'in_7':7,'in_8':8,'in_9':9,'in_10':10};
}
var fast_bet_market = '';
if(getCookie("user_type")!=""){
	var user_type=getCookie("user_type");
}else{
	var user_type=0;
}
var full_denormalise_is_done=0;
//------------//------------//------------//------------
var betslipHasLive = 0 ;
//------------//------------//------------//------------
var tools_string='';
var favorite_market = {};
var favorite_market_live = {};
var favorites_display='';
var favorite_all_market = {};
var favorite_all_market_live = {};
var window_mode = '';
if($(window).innerWidth()>=1024){
	window_mode='desktop';
}else if($(window).innerWidth()>=768 && $(window).innerWidth()<1024){
	window_mode='tablet';
}else if($(window).innerWidth()>=20 && $(window).innerWidth()<768){
	window_mode='mobile';
}else{
	window_mode='';
}

function interface_init(){
	dn_left('onload');
	start_denormalise_live() ;
	//start_denormalise() ;			
	init_load();	
	start_ora();
	setInterval("start_ora();",1000);	
}

</script>
<script type="text/javascript">
var zgjedhje_test=0;
var store_refresh_id=null;
var store_timeout_id2=null;
var store_refresh_sports_id=null;
var store_refresh_interval=1;
var store_refresh_time=30000;
var store_refresh_sports_time=120000;
var store_refresh_nr=20;
var hold_kupons='';
window.onload = function(){
	store_refresh_id=setInterval(refresh_check1,store_refresh_time);
	store_refresh_sports_id=setInterval(store_sports,store_refresh_sports_time);
	interface_init();
}
//$(window).bind('beforeunload', function(){
//	alert("kot");
//	return "test";
//});


var kupons_rt = {
	kupons_id : [],
	timer   : 5, // second
	interval: null,
	init: function() {
			if(!kupons_rt.interval) {
				kupons_rt.kupons_id=hold_kupons.split(',');
				kupons_rt.kupons_update();
				kupons_rt.startScroll();
			}
		},
	kupons_update: function(){
		var i,j,url_kp='',kupons_rm=[];
		var kupons_id=kupons_rt.kupons_id;
		for(i=1;i<kupons_id.length;i++)
			url_kp+="&kid[]="+kupons_id[i];
		$.ajax({
			timeout: 4000,
			url: "obs_display.go?action=khb"+url_kp,
			success: function(html){
				if(html != 'hld'){
				out_a=html.split('~')[0].split('_');
				out_an=html.split('~')[1].split('_');
				out_no=html.split('~')[2].split('_');
				out_o=html.split('~')[3].split('_');

				if(out_no.length>1 || out_o.length>1){
					for(i=1;i<out_no.length;i++){
						kupons_rm[kupons_rm.length]=out_no[i].split('^')[1];
						kupon_nr_new++;
						update_kupon_nr_new();
						if(panel_selected=="fastBet")
						document.betslip.elements["kupon_nr"].value=document.betslip.elements["kupon_nr"].value*1+1;
						//alert(document.betslip.elements["kupon_nr"].value);
					}
					for(i=1;i<out_o.length;i++){
						kupons_rm[kupons_rm.length]=out_o[i];
					}
					for(i=0;i<kupons_rm.length;i++)
					for(j=1;j<kupons_id.length;j++)
					if(kupons_rm[i]==kupons_id[j])
					kupons_id.remove(j);
					kupons_rt.kupons_id=kupons_id;   
					if(kupons_rt.kupons_id.length==1) kupons_rt.stopScroll();
						
					show_hold_kupons();
				}else{
					for(i=1;i<out_a.length;i++){
						$("#print_"+out_a[i]).show();
						$("#print_"+out_a[i]+" input").removeAttr('disabled');
						$("#blink_"+out_a[i]).remove();
						$("#kupon_"+out_a[i]).css('background','red');
						kupons_rm[kupons_rm.length]=out_a[i];
					}
					for(i=1;i<out_an.length;i++){
						if(isset(out_an[i].split('^')[1]))
							$("#kupon_"+out_an[i].split('^')[0]).html("<p style='color: #ffffff; background-color: #000000'>Refusé</p><p style='color: green; background-color: #ffff42'>"+out_an[i].split('^')[1]+"</p>");
						else
							$("#kupon_"+out_an[i].split('^')[0]).html("<p style='color: #ffffff; background-color: #000000'>Refusé</p>");
						$("#kupon_"+out_an[i].split('^')[0]).css('background','black');
						kupons_rm[kupons_rm.length]=out_an[i].split('^')[0];
					}
					for(i=0;i<kupons_rm.length;i++)
					for(j=1;j<kupons_id.length;j++)
					if(kupons_rm[i]==kupons_id[j])
					kupons_id.remove(j);
					kupons_rt.kupons_id=kupons_id;   
					if(kupons_rt.kupons_id.length==1) kupons_rt.stopScroll();
				}

				}
    		}
		});
		},
	startScroll: function() {
			if(!kupons_rt.interval) {
				kupons_rt.interval = setInterval("kupons_rt.kupons_update()", kupons_rt.timer * 1000);
			}
		},
	stopScroll: function() {
			if(kupons_rt.interval) {
				clearInterval(kupons_rt.interval);
				kupons_rt.interval = false;
			}
		}
};
</script>

<script type='text/javascript' src='frontend/js/ng/ng_init.js?r=60'></script>
<script type='text/javascript' src='frontend/js/ng/ng_viewport.js?r=60'></script>
<script type='text/javascript' src='frontend/js/ng/ng_match.js?r=60'></script>
<script type='text/javascript' src='frontend/js/ng/ng_tournament.js?r=60'></script>
<script type='text/javascript' src='frontend/js/ng/ng_betslip.js?r=60'></script>
<script type='text/javascript' src='frontend/js/ng/ng_match_live.js?r=60'></script>
<script type='text/javascript' src='frontend/js/ng/ng_head.js?r=60'></script>
<script type="text/javascript" src="frontend/js/lib/autocomplete/autocomplete.js?r=60"></script>
<script type='text/javascript' src='frontend/js/ng/ng_betslip_store.js?r=60'></script>

<script type='text/javascript' src='frontend/js/ng/ng_sport_view.js?r=60'></script>
<script type='text/javascript' src='frontend/js/ng/ng_sport_view_live.js?r=60'></script>
<script type='text/javascript' src='frontend/js/ng/ng_center.js?r=60'></script>
<script type='text/javascript' src='frontend/js/ng/ng_center_live.js?r=60'></script>
<script type='text/javascript' src='frontend/js/ng/ng_center_multi.js?r=60'></script>
<script type='text/javascript' src='frontend/js/ng/ng_center_multi_live.js?r=60'></script>
<script type='text/javascript' src='frontend/js/ng/ng_center_asian.js?r=60'></script>
<script type='text/javascript' src='frontend/js/ng/ng_center_asian_live.js?r=60'></script>
<script type='text/javascript' src='frontend/js/ng/ng_favorites_tour.js?r=60'></script>
<script type='text/javascript' src='frontend/js/lang/lang_fr.js?r=60'></script>

<script type='text/javascript' src='frontend/js/ng/ng_favorites_tour.js?r=60'></script>
<script type='text/javascript' src='frontend/js/ng/ng_favorites_match_live.js?r=60'></script>


<!-- Mos vendos </body> !!! --><script>
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-91283528-1', 'auto');
  ga('send', 'pageview');

</script>
</body></html>
