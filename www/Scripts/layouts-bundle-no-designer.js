!function(t,e){"function"==typeof define&&define.amd?define(function(t,o,n){n.exports=e(t("framework/html/presets").layoutSets,t("framework/html/layout_controller").DefaultLayoutController)}):e(DevExpress.framework.html.layoutSets,DevExpress.framework.html.DefaultLayoutController)}(this,function(t,e){var o={};return t.desktop=t.desktop||[],t.desktop.push({platform:"generic",controller:new e({name:"desktop"})}),o}),function(t,e){"function"==typeof define&&define.amd?define(function(t,o,n){n.exports=e(t("jquery"),t("framework/html/presets").layoutSets,t("framework/html/layout_controller").DefaultLayoutController)}):(t.DevExpress.layouts=t.DevExpress.layouts||{},t.DevExpress.layouts.EmptyLayout=e(jQuery,DevExpress.framework.html.layoutSets,DevExpress.framework.html.DefaultLayoutController),t.DevExpress.framework.html.EmptyLayoutController=t.DevExpress.layouts.EmptyLayout.EmptyLayoutController)}(this,function(t,e,o){var n={},i=o.inherit({ctor:function(t){t=t||{},t.name=t.name||"empty",this.callBase(t)}});return e.empty=e.empty||[],e.empty.push({controller:new i}),n.EmptyLayoutController=i,n}),function(t,e){"function"==typeof define&&define.amd?define(function(t,o,n){n.exports=e(t("framework/html/presets").layoutSets,t("framework/html/layout_controller").DefaultLayoutController,t("ui/toolbar"))}):(t.DevExpress.layouts=t.DevExpress.layouts||{},t.DevExpress.layouts.NavbarLayout=e(DevExpress.framework.html.layoutSets,DevExpress.framework.html.DefaultLayoutController),t.DevExpress.framework.html.NavBarController=t.DevExpress.layouts.NavbarLayout.NavBarController)}(this,function(t,e){var o={},n="has-navbar",i="has-toolbar",r=".layout-footer",a=".dx-active-view .dx-toolbar",s=e.inherit({ctor:function(t){t=t||{},t.name=t.name||"navbar",this.callBase(t)},_createNavigationWidget:function(t){return this.callBase(t),this.$navbar=this._$mainLayout.find(".navbar-container"),this.$navbar},_renderNavigationImpl:function(t){this.callBase(t),t.length&&this._$mainLayout.addClass(n)},_showViewImpl:function(t){var e=this;return e.callBase.apply(e,arguments).done(function(){var t=e._$mainLayout.find(r).find(a),o=!t.length||!t.dxToolbar("instance").option("visible");e._$mainLayout.toggleClass(i,!o)})}});return t.navbar=t.navbar||[],t.navbar.push({platform:"ios",controller:new s}),t.navbar.push({platform:"android",controller:new s}),t.navbar.push({platform:"generic",controller:new s}),t.navbar.push({platform:"win",controller:new s}),t.split=t.split||[],t.split.push({platform:"win",phone:!1,root:!0,pane:"master",controller:new s}),o.NavBarController=s,o}),function(t,e){"function"==typeof define&&define.amd?define(function(t,o,n){n.exports=e(t("jquery"),t("framework/html/presets").layoutSets,t("framework/html/layout_controller").DefaultLayoutController,t("ui/pivot"),t("ui/toolbar"))}):(t.DevExpress.layouts=t.DevExpress.layouts||{},t.DevExpress.layouts.PivotLayout=e(jQuery,DevExpress.framework.html.layoutSets,DevExpress.framework.html.DefaultLayoutController),t.DevExpress.framework.html.PivotLayoutController=t.DevExpress.layouts.PivotLayout.PivotLayoutController)}(this,function(t,e,o){var n={},i="has-toolbar-bottom",r=".layout-toolbar-bottom",a=".dx-pivot-item:not(.dx-pivot-item-hidden)",s=o.inherit({ctor:function(t){t=t||{},t.name=t.name||"pivot",this._viewsInLayout={},this.callBase(t)},init:function(t){this.callBase(t)},_createNavigationWidget:function(){var e=this;this.$root=t("<div/>").addClass("pivot-layout"),this.$pivot=t("<div/>").appendTo(this.$root).dxPivot({itemTemplate:function(t,o,n){var i=e._createEmptyLayout();e._showElements(i),i.find(".layout-footer").remove(),i.appendTo(n)}}).dxCommandContainer({id:"global-navigation"}),this.$pivot.dxPivot("instance").on("optionChanged",function(t){"items"===t.name&&e._clearPivotViewsRenderCache()});var o=e._createEmptyLayout();return this._showElements(o),this.$footer=o.find(".layout-footer").insertAfter(this.$pivot),this.$pivot},_clearPivotViewsRenderCache:function(){var e=this;t.each(this._viewsInLayout,function(t,o){e._clearRenderResult(o)})},_renderNavigationImpl:function(t){var e=this.$pivot.dxCommandContainer("instance");this._commandManager.renderCommandsToContainers(t,[e])},element:function(){return this.$root},_getViewFrame:function(t){var e=this.$pivot.find(a);return e=e.add(this.$footer)},_showViewImpl:function(e,o,n){return this._showViewElements(e.renderResult.$markup),this._changeView(e,n),this._changeAppbar(),this._viewsInLayout[e.key]=e,t.Deferred().resolve().promise()},_changeAppbar:function(){var t=this.$footer.find(".dx-active-view "+r),e=t.dxToolbar("instance");e&&this._refreshAppbarVisibility(e,this.$root)},_refreshAppbarVisibility:function(e,o){var n=!1;t.each(e.option("items"),function(t,e){return e.visible?(n=!0,!1):void 0}),o.toggleClass(i,n),e.option("visible",n)},_hideView:function(t){this.callBase.apply(this,arguments),this._changeAppbar()}});return e.navbar=e.navbar||[],e.navbar.push({platform:"win",version:[8],phone:!0,root:!0,controller:new s}),n.PivotLayoutController=s,n}),function(t,e){"function"==typeof define&&define.amd?define(function(t,o,n){n.exports=e(t("jquery"),t("core/class"),t("framework/html/presets").layoutSets,t("framework/html/layout_controller").DefaultLayoutController,t("core/devices"),t("core/errors").log,t("ui/toolbar"))}):(t.DevExpress.layouts=t.DevExpress.layouts||{},t.DevExpress.layouts.SimpleLayout=e(jQuery,DevExpress.Class,DevExpress.framework.html.layoutSets,DevExpress.framework.html.DefaultLayoutController,DevExpress.devices,DevExpress.errors.log),t.DevExpress.framework.html.SimpleLayoutController=t.DevExpress.layouts.SimpleLayout.SimpleLayoutController,t.DevExpress.framework.html.Win8SimpleLayoutController=t.DevExpress.layouts.SimpleLayout.Win8SimpleLayoutController)}(this,function(t,e,o,n,i,r){var a={},s=n.inherit({ctor:function(e){e=e||{},e.name=e.name||"simple",this.callBase(e);var o=i.current();o.win&&o.phone||e.Win8SimpleLayoutControllerFroced?this.impl=new h(t.proxy(this._getViewFrame,this)):this.impl=new l},_onRenderComplete:function(t){this.impl.onRenderComplete(t),this.callBase.apply(this,arguments)},disposeView:function(t){this.impl.disposeView(t),this.callBase.apply(this,arguments)},_changeView:function(t){var e=this,o=this.callBase.apply(this,arguments);return o.done(function(){e.impl.changeView(t)}),o}}),l=e.inherit({ctor:t.noop,onRenderComplete:t.noop,disposeView:t.noop,changeView:t.noop}),u="has-toolbar-bottom",p=".layout-toolbar-bottom",h=l.inherit({ctor:function(e){this._getViewFrame=e,this.callBase.apply(this,arguments),this._toolbarOptionChangedHandler=t.proxy(this._onToolbarOptionChanged,this)},_onToolbarOptionChanged:function(t){if("items"===t.name){var e=t.component;e&&this._refreshAppbarVisibility(e),this._refreshHasToolbarClass()}},_getAppbar:function(t){var e=t.find(p);if(1===e.length)return e.dxToolbar("instance")},_getCurrentAppbar:function(){return this._getAppbar(this._getViewFrame().find(".dx-active-view "))},onRenderComplete:function(t){var e=this._getAppbar(t.renderResult.$markup);e&&(this._refreshAppbarVisibility(e),e.on("optionChanged",this._toolbarOptionChangedHandler))},disposeView:function(t){var e=this._getAppbar(t.renderResult.$markup);e&&e.off("optionChanged",this._toolbarOptionChangedHandler)},changeView:function(t){this._refreshHasToolbarClass()},_refreshAppbarVisibility:function(e){var o=!1;t.each(e.option("items"),function(t,e){return e.visible?(o=!0,!1):void 0}),e.option("visible",o)},_refreshHasToolbarClass:function(){var t=this._getCurrentAppbar(),e=t?t.option("visible"):!1;this._getViewFrame().toggleClass(u,e)}}),c=s.inherit({ctor:function(t){t=t||{},t.Win8SimpleLayoutControllerFroced=!0,r("W0000","Layouts","Win8SimpleLayoutController","15.1","Use the SimpleLayoutController instead"),this.callBase.apply(this,arguments)}});return o.navbar=o.navbar||[],o.navbar.push({platform:"win",root:!1,phone:!0,controller:new s}),o.navbar.push({platform:"android",root:!1,controller:new s}),o.simple=o.simple||[],o.simple.push({controller:new s}),o.simple.push({platform:"win",phone:!0,controller:new s}),o.split=o.split||[],o.split.push({platform:"win",requireCustomResolve:!0,controller:new s}),a.SimpleLayoutController=s,a.Win8SimpleLayoutController=c,a}),function(t,e){"function"==typeof define&&define.amd?define(function(t,o,n){n.exports=e(t("jquery"),t("framework/html/presets").layoutSets,t("framework/html/layout_controller").DefaultLayoutController,t("animation/fx"),t("core/devices"),t("ui/slide_out"),t("ui/toolbar"),t("ui/button"))}):(t.DevExpress.layouts=t.DevExpress.layouts||{},t.DevExpress.layouts.SlideOutLayout=e(jQuery,DevExpress.framework.html.layoutSets,DevExpress.framework.html.DefaultLayoutController,DevExpress.fx,DevExpress.devices),t.DevExpress.framework.html.SlideOutController=t.DevExpress.layouts.SlideOutLayout.SlideOutController)}(this,function(t,e,o,n,i){var r={},a=o.inherit({ctor:function(t){t=t||{},t.name=t.name||"slideout",this.swipeEnabled=void 0===t.swipeEnabled?!0:t.swipeEnabled,this.callBase(t)},init:function(e){this.callBase(e),this._navigationManager=e.navigationManager,this._navigationCanceledHandler=t.proxy(this._onNavigatingCanceled,this)},activate:function(){var t=this.callBase.apply(this,arguments);return this._navigationManager.on("navigationCanceled",this._navigationCanceledHandler),t},deactivate:function(){return this._navigationManager.off("navigationCanceled",this._navigationCanceledHandler),this.callBase.apply(this,arguments)},_onNavigatingCanceled:function(t){this.slideOut.option("menuVisible")&&"redirect"!==t.cancelReason&&this._toggleNavigation()},_createNavigationWidget:function(){return this.$slideOut=t('<div data-bind=\'dxSlideOut: {  menuItemTemplate: $("#slideOutMenuItemTemplate"), contentTemplate: " " }\'></div>').dxCommandContainer({id:"global-navigation"}),this._applyTemplate(this.$slideOut,this._layoutModel),this.callBase(),this.slideOut=this.$slideOut.dxSlideOut("instance"),this.slideOut.option("swipeEnabled",this.swipeEnabled),this.$slideOut.find(".dx-slideout-item-container").append(this._$mainLayout),this.$slideOut},_renderNavigationImpl:function(t){var e=this.$slideOut.dxCommandContainer("instance");this._commandManager.renderCommandsToContainers(t,[e])},element:function(){return this.$slideOut},_showViewImpl:function(t,e,o){return this._fxOffSaved=n.off,this.slideOut.option("menuVisible")&&(n.off=!0),this.callBase.apply(this,arguments)},_getReadyForRenderDeferredItems:function(e){var o=this.callBase(e);return n.off=this._fxOffSaved,this.slideOut.option("menuVisible")&&(o=t.when(this._toggleNavigation(),o)),o},_onViewShown:function(t){this._refreshVisibility()},_refreshVisibility:function(){"android"===i.real().platform&&(this.$slideOut.css("backface-visibility","hidden"),this.$slideOut.css("backface-visibility"),this.$slideOut.css("backface-visibility","visible"))},_viewHasBackCommands:function(e){var o=!1;return t.each(e.commands,function(t,e){return"back"!==e.option("behavior")&&"back"!==e.option("id")||!e.option("visible")?void 0:(o=!0,!1)}),o},_onRenderComplete:function(t){var e=this;e._viewHasBackCommands(t)||e._initNavigationButton(t.renderResult.$markup);var o=t.renderResult.$markup.find(".layout-content"),n=t.renderResult.$markup.find(".layout-toolbar-bottom"),i=n.dxToolbar("instance");i&&(e._refreshAppbarVisibility(i,o),i.on("optionChanged",function(t){"items"===t.name&&e._refreshAppbarVisibility(i,o)}))},_refreshAppbarVisibility:function(e,o){var n=!1;t.each(e.option("items"),function(t,e){return e.visible?(n=!0,!1):void 0}),o.toggleClass("has-toolbar-bottom",n),e.option("visible",n)},_initNavigationButton:function(e){var o=this,n=e.find(".layout-toolbar"),i=n.dxToolbar("instance"),r=function(){i.option("items[0].visible",!0),n.find(".nav-button").dxButton("instance").option("onClick",t.proxy(o._toggleNavigation,o,e))};r(),i.on("contentReady",function(t){r()})},_toggleNavigation:function(t){return this.slideOut.toggleMenuVisibility()}});return e.slideout=e.slideout||[],e.slideout.push({platform:"ios",controller:new a}),e.slideout.push({platform:"android",controller:new a}),e.slideout.push({platform:"generic",controller:new a}),e.slideout.push({platform:"win",controller:new a}),r.SlideOutController=a,r}),function(t,e){"function"==typeof define&&define.amd?define(function(t,o,n){n.exports=e(t("jquery"),t("knockout"),t("core/class"),t("framework/errors"),t("framework/html/presets").layoutSets,t("framework/html/layout_controller").DefaultLayoutController,t("../Empty/EmptyLayout.js"),t("../Simple/SimpleLayout.js"),t("animation/fx"),t("ui/toolbar"))}):(t.DevExpress.layouts=t.DevExpress.layouts||{},t.DevExpress.layouts.SplitLayout=e(jQuery,window.ko,DevExpress.Class,DevExpress.framework.errors,DevExpress.framework.html.layoutSets,DevExpress.framework.html.DefaultLayoutController,DevExpress.layouts.EmptyLayout,DevExpress.layouts.SimpleLayout,DevExpress.fx),t.DevExpress.framework.html.MultipaneLayoutController=t.DevExpress.layouts.SplitLayout.MultipaneLayoutController,t.DevExpress.framework.html.IOSSplitLayoutController=t.DevExpress.layouts.SplitLayout.IOSSplitLayoutController,t.DevExpress.framework.html.ToolbarController=t.DevExpress.layouts.SplitLayout.ToolbarController,t.DevExpress.framework.html.AndroidSplitLayoutController=t.DevExpress.layouts.SplitLayout.AndroidSplitLayoutController,t.DevExpress.framework.html.WinSplitLayoutController=t.DevExpress.layouts.SplitLayout.WinSplitLayoutController,t.DevExpress.framework.html.Win8SplitLayoutController=t.DevExpress.layouts.SplitLayout.Win8SplitLayoutController)}(this,function(t,e,o,n,i,r,a,s,l){var u,p,h,c={},f=50,d=50,m=".dxSplitLayout",v=91,y=90;window.PointerEvent?(u="pointerdown",p="pointerup",h="pointermove"):window.MSPointerEvent?(u="MSPointerDown",p="MSPointerUp",h="MSPointerMove"):(u="mousedown",p="mouseup",h="mousemove");var _=o.inherit({ctor:function(t){this.root=t},init:function(){this.root._$viewPort.on(p+m,t.proxy(this._pointerUpHandler,this)),this.root._$viewPort.on(u+m,t.proxy(this._pointerDownHandler,this)),t(document).on("keydown"+m,t.proxy(this._keyDownHandler,this)),t(document).on("keyup"+m,t.proxy(this._keyUpHandler,this)),this._startTouchPoint=!1,this._winKeyPressed=!1,this._moveEvent=!1,this._appbarBehavior=!0},_pointerDownHandler:function(e){var o=e.originalEvent;this._isTouch(o)&&this._startedInAppBarArea(o)&&(this._startTouchPoint={x:o.clientX,y:o.clientY},this.root._$viewPort.on(h+m,t.proxy(this._pointerMoveHandler,this)))},_pointerMoveHandler:function(t){var e=t.originalEvent;this._thresholdExceeded(e)&&(this._moveEvent=!0,this.root._$viewPort.off(h+m),this._isVerticalDirection(e.clientX,e.clientY)&&this._toggleAppBarState(!0))},_pointerUpHandler:function(t){this.root._$viewPort.off(h+m);var e=this.root._$viewPort.find(".dx-app-bar");2===t.originalEvent.button?this._toggleAppBarState():this._moveEvent||!e[0]||e[0].contains(t.target)||this._toggleAppBarState(!1),this._moveEvent=!1},_keyDownHandler:function(t){t.keyCode===v&&(this._winKeyPressed=!0)},_keyUpHandler:function(t){this._winKeyPressed&&t.keyCode===y?this._toggleAppBarState():t.keyCode===v&&(this._winKeyPressed=!1)},_toggleAppBarState:function(t){this.root._appBarHasCommands()&&this.root._$viewPort.find(".dx-app-bar").toggleClass("dx-app-bar-visible",!this._appbarBehavior||t)},_isVerticalDirection:function(t,e){return Math.abs(e-this._startTouchPoint.y)>Math.abs(t-this._startTouchPoint.x)},_isTouch:function(t){return t.pointerType===t.MSPOINTER_TYPE_TOUCH||t.pointerType===t.MSPOINTER_TYPE_PEN},_startedInAppBarArea:function(t){return this.root._$viewPort.height()-f<t.clientY},_thresholdExceeded:function(t){return t.clientY<this._startTouchPoint.y-d}}),w=r.inherit({ctor:function(t){t=t||{},t.name=t.name||"split",this._detailPaneName=t.detailPaneName||"detail",this._masterPaneName=t.masterPaneName||"master",t.defaultPaneName=this._detailPaneName,this.callBase(t),this._panesConfig=t.panesConfig,this._activeViews={},this._stateStorageKey="dxSplitLayoutState"},init:function(e){e=e||{},this.callBase(e),this._router=e.app&&e.app.router,this._onNavigatingHandler=t.proxy(this._onNavigating,this),this._onNavigatedHandler=t.proxy(this._onNavigated,this),this._navigationManager=e.navigationManager,this._ensurePanesConfig(),this._initChildControllers(e)},activate:function(){var e=[];return this.callBase(),this._navigationManager.on("navigating",this._onNavigatingHandler),this._navigationManager.on("navigated",this._onNavigatedHandler),this._navigationManager.on("navigatingBack",this._onNavigatingBackHandler),t.each(this._panesConfig,function(t,o){e.push(o.controller.activate())}),t.when.apply(t,e)},deactivate:function(){var e=this,o=[];return t.each(this._panesConfig,function(t,e){o.push(e.controller.deactivate())}),this._navigationManager.off("navigating",this._onNavigatingHandler),this._navigationManager.off("navigated",this._onNavigatedHandler),this.callBase(),t.when.apply(t,o).done(function(){e._activeViews={}})},showView:function(t,e){var o=this,n=o._getPaneConfig(t);return n.controller.showView(t,e).done(function(){o._activeViews[o._getViewPaneName(t.viewTemplateInfo)]=t})},activeViewInfo:function(){return this._activeViews[this._masterPaneName]},_updateLayoutTitle:function(t,o){if(this._getViewPaneName(t.viewTemplateInfo)===this._masterPaneName){var n;n=void 0!==t.model?e.utils.unwrapObservable(t.model.title):(t.viewTemplateInfo||{}).title,this._layoutModel.title(n||o||"")}},_ensurePanesConfig:function(){this._panesConfig||(this._panesConfig=this._createPanesConfig())},_createPanesConfig:function(){return{}},_initChildControllers:function(e){var o=this;t.each(o._panesConfig,function(n,i){var r=i.controller;r.init(t.extend({},e,{$viewPort:o._$mainLayout.find(i.selector)})),t.each(["viewRendered","viewShowing","viewReleased","viewHidden"],function(t,e){r.on(e,function(t){o.fireEvent(e,[t])})})})},_onNavigating:function(t){var e=t.options,o=this._getEventSourceElement(t.options.jQueryEvent),n=this._router.parse(t.uri),i=this._viewEngine.getViewTemplateInfo(n.view).option(),r=this._getViewPaneName(i);r===this._detailPaneName?(e.stack=this._detailPaneName+"_pane",e.root=void 0===e.root?o.is(this._panesConfig[this._masterPaneName].selector+" *"):e.root,e.keepPositionInStack=!1):e.stack=e.stack||this._masterPaneCurrentStackKey,t.options.pane=r},_onNavigated:function(t){t.options.pane===this._masterPaneName&&(this._masterPaneCurrentStackKey=this._navigationManager.currentStackKey)},_getEventSourceElement:function(e){return e?t(e.target):t()},_getPaneConfig:function(t){return this._panesConfig[this._getViewPaneName(t.viewTemplateInfo)]},_getViewPaneName:function(t){return t.pane||this._detailPaneName},_raiseEvent:function(t){t.fire()},_ensureChildController:function(t,e){if(!t)throw new Error(e+"Controller is not found but it is required by the '"+this.name+"' layout for specified platform and device. Make sure the "+e+".* files are referenced in your main *.html file or specify other platform and device.")},saveState:function(e){var o={};t.each(this._activeViews,function(t,e){o[t]={uri:e.uri,stack:e.navigateOptions.stack}});var n=JSON.stringify(o);e.setItem(this._stateStorageKey,n)},restoreState:function(e){var o=e.getItem(this._stateStorageKey);if(o)try{var i=this,r=JSON.parse(o);t.each(r,function(t,e){i._navigationManager.navigate(e.uri,{stack:e.stack,target:"current"})})}catch(a){throw this.removeState(e),n.Error("E3007")}},removeState:function(t){t.removeItem(this._stateStorageKey)}}),g=w.inherit({_createPanesConfig:function(){return this._ensureChildController(s.SimpleLayoutController,"SimpleLayout"),{master:{controller:new s.SimpleLayoutController,selector:".master-pane"},detail:{controller:new s.SimpleLayoutController,selector:".detail-pane"}}}}),C=o.inherit({ctor:function(t,e){this._commandManager=e,this._$toolbar=t,this._toolbar=t.dxToolbar("instance"),this._commandContainer=t.dxCommandContainer("instance")},showViews:function(e){var o=this,n=this._mergeCommands(e),i=o._toolbar.option("items"),r=t.map(i,function(t){return t.command?void 0:t});o._toolbar.option("items",r),l.off=!0,o._commandManager.renderCommandsToContainers(n,[o._commandContainer]),l.off=!1},_mergeCommands:function(e){var o=[],n={};return t.each(e,function(e,i){i.commands&&t.each(i.commands,function(t,e){var i=e.option("id");i in n||(n[i]=!0,o.push(e))})}),o}}),b=w.inherit({ctor:function(t){t=t||{},t.layoutModel=t.layoutModel||this._createLayoutModel(),this.callBase(t)},init:function(t){this.callBase(t),this.toolbarController=new C(this._$mainLayout.find(".header-toolbar"),this._commandManager)},_createLayoutModel:function(){return{title:e.observable("")}},showView:function(t,e){var o=this;return o._updateLayoutTitle(t),o.callBase(t,e).done(function(){o.toolbarController.showViews(o._activeViews)})},_createPanesConfig:function(){return this._ensureChildController(a.EmptyLayoutController,"EmptyLayout"),{master:{controller:new a.EmptyLayoutController,selector:".master-pane"},detail:{controller:new a.EmptyLayoutController,selector:".detail-pane"}}}}),x=w.inherit({ctor:function(t){t=t||{},this._eventHelper=new _(this),t.layoutModel=t.layoutModel||this._createLayoutModel(),this.callBase(t)},init:function(t){this.callBase(t),this._eventHelper.init(),this.headerToolbarController=new C(this._$mainLayout.find(".header-toolbar"),this._commandManager)},showView:function(t,e){var o=this;return o._updateLayoutTitle(t),o.callBase(t,e).done(function(){o.headerToolbarController.showViews(o._activeViews)})},_createLayoutModel:function(){return{title:e.observable("")}},_createPanesConfig:function(){return this._ensureChildController(a.EmptyLayoutController,"EmptyLayout"),{master:{controller:new a.EmptyLayoutController,selector:".left-content"},detail:{controller:new a.EmptyLayoutController,selector:".right-content"}}},_appBarHasCommands:function(){var t=this._$viewPort.find(".footer-toolbar").data("dxToolbar");return t?t.option("items").length:!1}}),E=x.inherit({init:function(t){this.callBase(t),this.footerToolbarController=new C(this._$mainLayout.find(".footer-toolbar"),this._commandManager)},showView:function(t,e){var o=this;return o.callBase(t,e).done(function(){o.footerToolbarController.showViews(o._activeViews)})}});return i.split=i.split||[],i.split.push({platform:"ios",tablet:!0,controller:new g}),i.split.push({platform:"android",tablet:!0,controller:new b}),i.split.push({platform:"generic",tablet:!0,controller:new g}),i.split.push({platform:"win",phone:!1,controller:new x}),i.split.push({platform:"win",version:[8],phone:!1,controller:new E}),c.MultipaneLayoutController=w,c.IOSSplitLayoutController=g,c.ToolbarController=C,c.AndroidSplitLayoutController=b,c.WinSplitLayoutController=x,c.Win8SplitLayoutController=E,c}),function(t,e){"function"==typeof define&&define.amd?define(function(t,o,n){n.exports=e(t("jquery"),t("framework/html/presets").layoutSets,t("framework/html/layout_controller").DefaultLayoutController,t("../Simple/SimpleLayout.js").SimpleLayoutController,t("ui/popup"))}):(t.DevExpress.layouts=t.DevExpress.layouts||{},t.DevExpress.layouts.PopupLayout=e(jQuery,DevExpress.framework.html.layoutSets,DevExpress.framework.html.DefaultLayoutController,DevExpress.layouts.SimpleLayout.SimpleLayoutController),t.DevExpress.framework.html.OverlayLayoutControllerBase=t.DevExpress.layouts.PopupLayout.OverlayLayoutControllerBase,t.DevExpress.framework.html.PopupLayoutController=t.DevExpress.layouts.PopupLayout.PopupLayoutController)}(this,function(t,e,o,n){var i={},r=o["abstract"],a=o.inherit({ctor:function(t){t=t||{},this.callBase(t),t.childController?this.childController=t.childController:(this._ensureChildController(n,"SimpleLayout"),this.childController=new n),this.contentContainerSelector=t.contentContainerSelector},_initChildController:function(e){var o=this,n=o._$mainLayout.find(this.contentContainerSelector);o.childController.init(t.extend({},e,{$viewPort:n})),t.each(["viewRendered","viewShowing","viewReleased","viewHidden"],function(t,e){o.childController.on(e,function(t){o.fireEvent(e,[t])})})},_ensureChildController:function(t,e){if(!t)throw new Error(e+"Controller is not found but it is required by the '"+this.name+"' layout for specified platform and device. Make sure the "+e+".* files are referenced in your main *.html file or specify other platform and device.")},_base:function(){return o.prototype},_showContainerWidget:r,_hideContainerWidget:r,init:function(t){t=t||{},this.callBase(t),this._initChildController(t)},activate:function(t){var e,o=this;return o.childController.activate(),o._base().activate.call(o,t),e=o._showContainerWidget(t)},deactivate:function(){var t,e=this;return t=e._hideContainerWidget(),t.done(function(){e._base().deactivate.call(e),e.childController.deactivate()}),t},showView:function(t,e){return this.childController.showView(t,e)}}),s=a.inherit({ctor:function(t){t=t||{},t.name=t.name||"popup",t.contentContainerSelector=t.contentContainerSelector||".child-controller-content",this.isOverlay=!0,this._targetContainer=t.targetContainer,this.callBase(t)},init:function(t){this.callBase(t),this._popup=this._$mainLayout.find(".popup-container").dxPopup("instance"),this._targetContainer&&this._popup.option("container",this._targetContainer)},_showContainerWidget:function(){return this._popup.show()},_hideContainerWidget:function(){return this._popup.hide()}});return t.each(["navbar","simple","slideout","pivot","split"],function(o,n){e[n]=e[n]||[],t.each(e[n],function(t,e){e.modal=!1}),e[n].push({modal:!0,controller:new s})}),i.OverlayLayoutControllerBase=a,i.PopupLayoutController=s,i});