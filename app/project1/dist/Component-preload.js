//@ui5-bundle notificationplugintest/Component-preload.js
sap.ui.require.preload({
	"notificationplugintest/Component.js":function(){
sap.ui.define(["sap/ui/core/UIComponent","sap/ui/Device","project1/model/models"],function(e,t,i){"use strict";return e.extend("project1.Component",{metadata:{manifest:"json"},init:function(){e.prototype.init.apply(this,arguments);this.getRouter().initialize();this.setModel(i.createDeviceModel(),"device")}})});
},
	"notificationplugintest/controller/App.controller.js":function(){
sap.ui.define(["sap/ui/core/mvc/Controller"],function(n){"use strict";return n.extend("project1.controller.App",{onInit:function(){}})});
},
	"notificationplugintest/controller/View1.controller.js":function(){
sap.ui.define(["sap/ui/core/mvc/Controller"],function(t){"use strict";return t.extend("project1.controller.View1",{onInit:function(){},triggerNotification:async function(){let t=this.getView().getModel();let e=t.bindContext("/triggerNotification(...)");await e.execute().catch(function(t){sap.m.MessageBox.error(t.toString())})}})});
},
	"notificationplugintest/i18n/i18n.properties":'# This is the resource bundle for project1\n\n#Texts for manifest.json\n\n#XTIT: Application name\nappTitle=App Title\n\n#YDES: Application description\nappDescription=An SAP Fiori application.\n#XTIT: Main view title\ntitle=App Title\n\n#XFLD,57\nflpTitle=Notification Plugin\n',
	"notificationplugintest/manifest.json":'{"_version":"1.59.0","sap.app":{"id":"notificationplugintest","type":"application","i18n":"i18n/i18n.properties","applicationVersion":{"version":"0.0.1"},"title":"{{appTitle}}","description":"{{appDescription}}","resources":"resources.json","sourceTemplate":{"id":"@sap/generator-fiori:basic","version":"1.14.3","toolsId":"a7fb479a-aae4-4a7c-8e61-4ff418e85719"},"dataSources":{"mainService":{"uri":"odata/v4/requests/","type":"OData","settings":{"annotations":[],"odataVersion":"4.0"}}},"crossNavigation":{"inbounds":{"z-notification-manage":{"semanticObject":"z-notification","action":"manage","title":"{{flpTitle}}","signature":{"parameters":{},"additionalParameters":"allowed"}}}}},"sap.ui":{"technology":"UI5","icons":{"icon":"","favIcon":"","phone":"","phone@2":"","tablet":"","tablet@2":""},"deviceTypes":{"desktop":true,"tablet":true,"phone":true}},"sap.ui5":{"flexEnabled":true,"dependencies":{"minUI5Version":"1.127.0","libs":{"sap.m":{},"sap.ui.core":{},"sap.f":{},"sap.suite.ui.generic.template":{},"sap.ui.comp":{},"sap.ui.generic.app":{},"sap.ui.table":{},"sap.ushell":{}}},"contentDensities":{"compact":true,"cozy":true},"models":{"i18n":{"type":"sap.ui.model.resource.ResourceModel","settings":{"bundleName":"project1.i18n.i18n"}},"":{"dataSource":"mainService","preload":true,"settings":{"operationMode":"Server","autoExpandSelect":true,"earlyRequests":true}}},"resources":{"css":[{"uri":"css/style.css"}]},"routing":{"config":{"routerClass":"sap.m.routing.Router","viewType":"XML","async":true,"viewPath":"project1.view","controlAggregation":"pages","controlId":"app","clearControlAggregation":false},"routes":[{"name":"RouteView1","pattern":":?query:","target":["TargetView1"]}],"targets":{"TargetView1":{"viewType":"XML","transition":"slide","clearControlAggregation":false,"viewId":"View1","viewName":"View1"}}},"rootView":{"viewName":"project1.view.App","type":"XML","async":true,"id":"App"}}}',
	"notificationplugintest/model/models.js":function(){
sap.ui.define(["sap/ui/model/json/JSONModel","sap/ui/Device"],function(e,n){"use strict";return{createDeviceModel:function(){var i=new e(n);i.setDefaultBindingMode("OneWay");return i}}});
},
	"notificationplugintest/view/App.view.xml":'<mvc:View controllerName="project1.controller.App"\n    xmlns:html="http://www.w3.org/1999/xhtml"\n    xmlns:mvc="sap.ui.core.mvc" displayBlock="true"\n    xmlns="sap.m"><App id="app"></App></mvc:View>\n',
	"notificationplugintest/view/View1.view.xml":'<mvc:View controllerName="project1.controller.View1"\n    xmlns:mvc="sap.ui.core.mvc" displayBlock="true"\n    xmlns="sap.m"><Page id="page" title="{i18n>title}"><content><Button\n                id="notificationTrigger"\n                text="Trigger Notification"\n                press="triggerNotification"\n            /></content></Page></mvc:View>\n'
});
//# sourceMappingURL=Component-preload.js.map
