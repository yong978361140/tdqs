(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-771e01b8"],{"085e":function(e,t,a){},8516:function(e,t,a){"use strict";var i=a("085e"),l=a.n(i);l.a},c03a:function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"container"},[a("div",{staticClass:"main clearfix",style:{"margin-left":e.$store.state.app.isCollapse?"84px":"240px"}},[a("div",{staticClass:"main_container"},[a("querys",{attrs:{showSwitch:!1}},[a("div",{attrs:{slot:"queryTabs"},slot:"queryTabs"},[a("div",{staticClass:"query_tab"},[a("div",{staticClass:"query_label"},[e._v("项目名称")]),a("div",{staticClass:"query_select"},[a("el-input",{attrs:{size:"small",placeholder:"请输入内容"},on:{change:function(t){return e.selectItem()}},model:{value:e.param.itemName,callback:function(t){e.$set(e.param,"itemName",t)},expression:"param.itemName"}})],1)]),a("div",{staticClass:"query_tab"},[a("div",{staticClass:"query_label"},[e._v("所属单位")]),a("div",{staticClass:"query_select"},[a("select-tree",{on:{getValue:function(t){return e.getValue(t)}}})],1)]),a("div",{staticClass:"query_tab"},[a("div",{staticClass:"query_label"},[e._v("专业类别")]),a("div",{staticClass:"query_select"},[a("el-select",{attrs:{clearable:"",placeholder:"请选择",size:"small"},on:{change:function(t){return e.selectItem()}},model:{value:e.param.speciality,callback:function(t){e.$set(e.param,"speciality",t)},expression:"param.speciality"}},e._l(e.selectParamDict.get("speciality"),(function(e){return a("el-option",{key:e.codeValue,attrs:{label:e.codeName,value:e.codeValue}})})),1)],1)]),a("div",{staticClass:"query_tab"},[a("div",{staticClass:"query_label"},[e._v("批次名称")]),a("div",{staticClass:"query_select"},[a("el-input",{attrs:{type:"text",clearable:"",size:"small",placeholder:"请输入"},on:{change:function(t){return e.selectItem()}},model:{value:e.param.batchName,callback:function(t){e.$set(e.param,"batchName",t)},expression:"param.batchName"}})],1)])]),a("div",{attrs:{slot:"queryBtns"},slot:"queryBtns"},[a("el-button",{attrs:{type:"primary",size:"small"},on:{click:e.uploadFileList}},[e._v("批量上传正式评审文件")])],1)]),a("div",{staticClass:"table-item-box"},[a("div",{class:e.showDrawer?"table-wrapper-run":"table-wrapper-init"},[a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.tableDataLoding,expression:"tableDataLoding"}],attrs:{data:e.tableShowData,border:"","header-cell-style":{background:"#359691",color:"#fff"},"row-class-name":"row","cell-class-name":"column",height:e.tableHeight,lazy:"",load:e.tableLoad,"row-key":"itemId","tree-props":{children:"children",hasChildren:"hasChildren"}},on:{"selection-change":e.handleSelectionChange}},[a("el-table-column",{attrs:{type:"selection",width:"45"}}),a("el-table-column",{attrs:{type:"index",width:"50",label:"序号"}}),e._l(e.tableLabel,(function(t,i){return"itemName"!=t.colDname&&1==t.showType?a("el-table-column",{key:i,attrs:{prop:t.colDname,label:t.dispName,"min-width":"220","show-overflow-tooltip":!0}}):3==t.showType?a("el-table-column",{attrs:{prop:t.colDname,label:t.dispName,"min-width":"220","show-overflow-tooltip":!0}}):"itemName"==t.colDname?a("el-table-column",{attrs:{label:t.dispName,"min-width":"220","show-overflow-tooltip":!0},scopedSlots:e._u([{key:"default",fn:function(t){return[1==t.row.isBatchPackage?a("span",[e._v(e._s(t.row.itemName))]):a("span",{staticClass:"blue",on:{click:function(a){return e.showItemInfo(t.row)}}},[e._v(e._s(t.row.itemName))])]}}])}):e._e()})),a("el-table-column",{attrs:{label:"评审文件","min-width":"220"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(t.row.auditFileNo))])]}}])}),a("el-table-column",{attrs:{label:"操作","min-width":"220"},scopedSlots:e._u([{key:"default",fn:function(t){return["20"==t.row.itemPhaseDet&&0!=t.row.isEdit?a("span",{staticClass:"blue",on:{click:function(a){return e.showDialog(t.row)}}},[e._v("上传正式评审文件")]):e._e()]}}])})],2),a("div",{staticClass:"page"},[a("el-pagination",{attrs:{background:"","current-page":e.currentPage,"page-sizes":[10,20,30,50],"page-size":20,layout:"sizes, total, prev, pager, next, jumper",total:e.totalNum},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1)],1),a("div",{class:e.showDrawer?"item-add-wrapper-run":"item-wrapper-init"},[e.showDrawer?a("item-add-com",{key:e.timer,attrs:{showData:e.showData,showAddDialog:e.showDrawer,isShowQuery:e.showQuery,tableHeightTab:e.tableHeight},on:{changeStatus:e.changeStatus}}):e._e()],1)]),a("el-dialog",{attrs:{title:"上传正式评审文件","close-on-click-modal":!1,visible:e.dialogFileVisible},on:{"update:visible":function(t){e.dialogFileVisible=t}}},[a("div",[a("el-form",{staticClass:"demo-form-inline",attrs:{inline:!0,"label-position":"right"}},[a("el-form-item",{staticStyle:{display:"block"},attrs:{label:"项目可研评审文号"}},[a("el-input",{attrs:{placeholder:"项目可研评审文号"},model:{value:e.auditFileNo,callback:function(t){e.auditFileNo=t},expression:"auditFileNo"}})],1),a("el-form-item",[a("el-upload",{ref:"uploadFileSubmit",staticClass:"upload",attrs:{action:e.GLOBALURL+"/workFlow/uploadNormalFile",headers:{userId:e.userId,token:e.token},"on-success":e.uploadSuccess2,"on-change":e.changeFile,"on-remove":e.handleRemove,data:e.finalFileData,"file-list":e.fileList3,multiple:!1,"show-file-list":!0,"auto-upload":!1,accept:".CEB,.PDF"}},[a("el-button",{attrs:{size:"small",type:"primary"}},[e._v("上传")])],1)],1)],1),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.dialogFileVisible=!1}}},[e._v("取 消")]),a("el-button",{attrs:{type:"primary",loading:e.loadingBtn1},on:{click:e.submitFile}},[e._v("确 定")])],1)],1)]),a("el-dialog",{attrs:{title:"上传正式评审文件","close-on-click-modal":!1,visible:e.dialogFileListVisible},on:{"update:visible":function(t){e.dialogFileListVisible=t}}},[a("div",[a("el-form",{staticClass:"demo-form-inline",attrs:{inline:!0,"label-position":"right"}},[a("el-form-item",{staticStyle:{display:"block"},attrs:{label:"项目可研评审文号"}},[a("el-input",{attrs:{placeholder:"项目可研评审文号"},model:{value:e.uploadList.auditFileNo,callback:function(t){e.$set(e.uploadList,"auditFileNo",t)},expression:"uploadList.auditFileNo"}})],1),a("el-form-item",[a("el-upload",{ref:"uploadFileListSubmit",staticClass:"upload",attrs:{action:e.GLOBALURL+"/workFlow/uploadNormalFiles",headers:{userId:e.userId,token:e.token},"on-success":e.uploadSuccess2,"on-change":e.changeFile,"on-remove":e.handleRemove,data:e.finalFileData1,"file-list":e.fileList4,multiple:!1,"show-file-list":!0,"auto-upload":!1,accept:".CEB,.PDF"}},[a("el-button",{attrs:{size:"small",type:"primary"}},[e._v("上传")])],1)],1)],1),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.dialogFileListVisible=!1}}},[e._v("取 消")]),a("el-button",{attrs:{type:"primary",loading:e.loadingBtn1},on:{click:e.submitFileList}},[e._v("确 定")])],1)],1)]),a("el-dialog",{staticClass:"diy_dialog",attrs:{visible:e.showHasSelectedExpert,"close-on-click-modal":!1,"modal-append-to-body":!1},on:{"update:visible":function(t){e.showHasSelectedExpert=t}}},[a("el-table",{staticClass:"dialog_table",attrs:{data:e.hasSelectedExpertInfoShow,"max-height":"480px",border:"","header-cell-style":{background:"#359691",color:"#fff"},"row-class-name":"row","cell-class-name":"column","highlight-current-row":!0}},[a("el-table-column",{attrs:{label:"专家姓名",prop:"expertName"}}),a("el-table-column",{attrs:{label:"专家性别",prop:"expertSex"}}),a("el-table-column",{attrs:{label:"专业",prop:"professional"}}),a("el-table-column",{attrs:{label:"评审职位",prop:"isLeader"}}),a("el-table-column",{attrs:{label:"是否参加",prop:"isJoin"}}),a("el-table-column",{attrs:{label:"参加意见",prop:"auditJoinOpinion"}}),a("el-table-column",{attrs:{label:"参加意见",prop:"auditJoinOpinion"}}),a("el-table-column",{attrs:{label:"审核意见",prop:"isAudit"}}),a("el-table-column",{attrs:{label:"审核意见内容",prop:"auditAdvice","min-width":"150"}}),a("el-table-column",{attrs:{label:"汇总意见",prop:"isPassed"}})],1),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{type:"primary"},on:{click:function(t){e.showHasSelectedExpert=!1}}},[e._v("关 闭")])],1)],1)],1)])])},l=[],s=(a("99af"),a("4160"),a("c975"),a("b0c0"),a("4ec9"),a("4fad"),a("d3b7"),a("ac1f"),a("25f0"),a("3ca3"),a("1276"),a("159b"),a("ddb0"),a("3835")),o=a("ade3"),n=(a("2f62"),a("2bb5"),a("a960")),r=a("7e1e"),c=a("73fc"),u=a("c2b4"),d=a("f36f"),h=a("eb5a"),p={name:"questions",data:function(){var e;return e={fileItemIds:[],fileIsBatch:[],fileItemPhaseDet:"",dialogFileListVisible:!1,loadingBtn1:!1,uploadArr:[],fileList4:[],uploadList:{auditFileNo:""},finalFileData1:{},fileList3:[],tempIsBatch:!1,fileType:"",fileTypeList:[],finalFileData:{},auditFileNo:"",dialogFileVisible:!1,showHasSelectedExpert:!1,hasSelectedExpertInfoShow:[],tableDataLoding:!1,colTimeList:[],isShowQuery:!1,showQuery:!1,tableHeightTab:"",timer:"",showAddDialog:!1,showData:{itemId:null,specClass:"",specClassName:"",oldPath:"",tableLabelArr:"",phash:"1",parentItemId:null},showDrawer:!1,createOrg:"",param:{pageIndex:1,pageSize:20,itemName:"",speciality:"",createOrg:"",itemPhaseDet:"",batchName:"",joinStatus:""},tableHeight:"",totalNum:0,currentPage:1,currentNum:20,tableData:[],tableLabel:[],tableShowData:[],dictMap:new Map,selectParamDict:new Map,columnTypeMap:new Map,tempItemId:"",token:"",valueId:"",deptArr:[],statusList:[{id:"16",name:"全部参加"},{id:"15",name:"部分参加"},{id:"14",name:"确认中"},{id:"4",name:"未选择"}],userId:""},Object(o["a"])(e,"token",""),Object(o["a"])(e,"itemInfo",{}),Object(o["a"])(e,"itemInfoArr",[]),e},components:{querys:c["a"],SelectTree:n["a"],ItemAddCom:u["default"]},created:function(){this.tableHeight=window.innerHeight-220},watch:{createOrg:function(){this.param.createOrg=this.createOrg,this.currentPage=1,this.getTable(1,this.currentNum)}},mounted:function(){this.getItemLabelSearch(),this.getTable(1,20),this.userId=sessionStorage.getItem("userId"),this.token=sessionStorage.getItem("token")},methods:{getValue:function(e){this.createOrg=e},tableLoad:function(e,t,a){var i=this;if(console.log(e.batchGroupId),""!=e.batchGroupId&&void 0!=e.batchGroupId){var l={batchGroupId:e.batchGroupId};Object(r["cb"])(l).then((function(e){if(e.data.successful){var t=e.data.resultValue,l=i.getShowDateTable(t,i.dictMap,i.columnTypeMap);l.forEach((function(e){e.isEdit=!1})),a(l)}}))}else if(e.children&&0!=e.children.length){console.log(e.children);var s=this.getShowDateTable(e.children,this.dictMap,this.columnTypeMap);s.forEach((function(e){e.isEdit=!1})),a(s)}else{var o={parentItemId:e.itemId};Object(r["nb"])(o).then((function(e){if(e.data.successful){var t=e.data.resultValue,l=i.getShowDateTable(t,i.dictMap,i.columnTypeMap);l.forEach((function(e){e.isEdit=!1})),i.$forceUpdate(),a(l)}}))}},handleSelectionChange:function(e){this.uploadArr=[],this.uploadArr=this.uploadArr.concat(e)},changeFile:function(e){this.fileType=e.name.split(".")[1],this.fileTypeList.push(this.fileType),console.log(this.fileTypeList)},handleRemove:function(e,t){this.fileTypeList=[];for(var a=0;a<t.length;a++){var i="";i=t[a].name.split(".")[1],this.fileTypeList.push(i)}console.log(this.fileTypeList)},showDialog:function(e){var t=this;t.itemInfo.itemName=e.itemName,t.itemInfo.auditFileNo=t.auditFileNo,t.itemInfo.createor=e.createor,t.itemInfoArr=[],1==e.isBatchPackage?t.tempIsBatch=!0:t.tempIsBatch=!1,t.dialogFileVisible=!0,t.auditFileNo="",t.fileList3=[],t.fileTypeList=[],t.fileType="",t.finalFileData={itemId:e.itemId,itemPhaseDet:e.itemPhaseDet,auditFileNo:t.auditFileNo,isBatchPackage:t.tempIsBatch}},uploadFileList:function(){var e=this;if(e.itemInfoArr=e.uploadArr,e.itemInfo={itemName:"",auditFileNo:"",createor:""},0==e.uploadArr.length)return this.$message({showClose:!0,message:"请至少选择一个项目",type:"warning"}),!1;e.fileItemIds=[],e.fileIsBatch=[],console.log(e.uploadArr);for(var t=0;t<e.uploadArr.length;t++){e.fileItemPhaseDet=e.uploadArr[t].itemPhaseDet;var a=!1;if(a=1==e.uploadArr[t].isBatchPackage,e.fileItemIds.push(e.uploadArr[t].itemId),e.fileIsBatch.push(a),"20"!=e.fileItemPhaseDet)return this.$message({showClose:!0,message:"所选项目包含状态不符合业务逻辑的项目,请重新选择",type:"warning"}),!1}this.dialogFileListVisible=!0,e.uploadList.auditFileNo="",e.fileList4=[],e.fileTypeList=[],e.fileType="",e.finalFileData1={itemIds:e.fileItemIds,itemPhaseDet:e.fileItemPhaseDet,auditFileNo:e.uploadList.auditFileNo,isBatchPackages:e.fileIsBatch},console.log(e.finalFileData1)},submitFileList:function(){this.$route.query.iscUserId,this.$route.query.workItemID;if(!this.uploadList.auditFileNo)return this.$message({showClose:!0,message:"请输入项目可研评审文号",type:"warning"}),!1;if(""==this.fileTypeList||void 0==this.fileTypeList)return this.$message({showClose:!0,message:"请上传格式为ceb或者pdf的文件",type:"warning"}),!1;for(var e=0;e<this.fileTypeList.length;e++)if("ceb"!=this.fileTypeList[e]&&"pdf"!=this.fileTypeList[e]&&"CEB"!=this.fileTypeList[e]&&"PDF"!=this.fileTypeList[e])return this.$message({showClose:!0,message:"只能上传格式为ceb或者pdf的文件",type:"warning"}),!1;this.finalFileData1.auditFileNo=this.uploadList.auditFileNo,this.$refs.uploadFileListSubmit.submit()},uploadSuccess2:function(e){console.log(e);var t=this;if(t.loadingBtn1=!0,e.successful){var a=e.resultValue;t.$message({showClose:!0,message:"上传正式评审文件成功",type:"success"}),t.dialogFileVisible=!1,t.dialogFileListVisible=!1,t.loadingBtn1=!1,t.getTable(t.currentPage,t.currentNum),console.log(e.resultValue),a.length>0&&a.forEach((function(e){var t=[],a={};a.content=e.itemName+"项目，已经上传正式评审文件，评审文号 "+e.auditFileNo,a.noticeUser=e.createor,t.push(a),Object(d["g"])(t).then((function(e){console.log(111),console.log(e)}))}));var i=t.finalFileData.itemId,l={itemId:i,isBatchPackage:t.tempIsBatch};Object(r["mb"])(l).then((function(e){if(e.data.successful)for(var a=e.data.resultValue,i=function(e){var i=a[e];console.log("调用国电通编码器"),Object(r["H"])({itemId:i.itemId}).then((function(e){if(e.data.successful){var a=e.data.resultValue;console.log(a),Object(h["a"])(a).then((function(e){console.log(e);var a=e.data.status;if(-1!=a.indexOf("200"))console.log("调用编码器失败,权限校验失败");else if(-1!=a.indexOf("100")){var l=e.data.applyResult,s=l[0];if(-1!=s.status.indexOf("100")){var o=s.baseCode;Object(r["Vd"])({itemId:i.itemId,code:o}).then((function(e){e.data.successful?t.$message.success("编码成功"):t.$message.error("编码失败")}))}else if(-1!=s.status.indexOf("200")){var n="";for(var c in s.applyResult)n=s.applyResult[c];console.log(n)}}}))}}))},l=0;l<a.length;l++)i(l)}))}else this.loadingBtn1=!0,t.$message.error("上传失败")},submitFile:function(){this.$route.query.iscUserId,this.$route.query.workItemID;if(!this.auditFileNo)return this.$message({showClose:!0,message:"请输入项目可研评审文号",type:"warning"}),!1;if(""==this.fileTypeList||void 0==this.fileTypeList)return this.$message({showClose:!0,message:"请上传格式为ceb或者pdf的文件",type:"warning"}),!1;for(var e=0;e<this.fileTypeList.length;e++)if("ceb"!=this.fileTypeList[e]&&"pdf"!=this.fileTypeList[e]&&"CEB"!=this.fileTypeList[e]&&"PDF"!=this.fileTypeList[e])return this.$message({showClose:!0,message:"只能上传格式为ceb或者pdf的文件",type:"warning"}),!1;this.loadingBtn1=!0,this.finalFileData.auditFileNo=this.auditFileNo,this.$refs.uploadFileSubmit.submit()},showHasSelectedExpertDialog:function(e){var t=this;t.showHasSelectedExpert=!0,Object(r["yb"])({itemId:e.itemId}).then((function(e){e.data.successful&&(console.log(e),t.hasSelectedExpertInfoShow=e.data.resultValue)}))},getItemLabelSearch:function(){var e=this;Object(r["Vc"])().then((function(t){if(console.log("response",t),t.data.successful){var a=t.data.resultValue;e.selectParamDict.set("speciality",a.specialityList),e.$forceUpdate()}}))},getTreeDeptCode:function(e){function t(){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}((function(){var e=this;getUserDept().then((function(t){var a=t.data.resultValue;getTreeDeptCode().then((function(t){console.log(t),t.data.successful&&(e.valueId=a,e.deptArr=t.data.resultValue)}))}))})),selectItem:function(){this.currentPage=1,this.getTable(1,this.currentNum)},changeStatus:function(e){this.showDrawer=e,console.log("status"+e)},showItemInfo:function(e){this.showData.itemId=e.itemId,this.showData.phash=0,this.showDrawer=!0,this.timer=(new Date).getTime()},handleSizeChange:function(e){this.currentNum=e,this.getTable(this.currentPage,e)},handleCurrentChange:function(e){console.log("当前页: ".concat(e)),this.currentPage=e,this.getTable(e,this.currentNum)},getTable:function(e,t){var a=this;a.tableDataLoding=!0,a.param.index=e,a.param.pageSize=t,a.param.itemPhaseDet="15,20",Object(r["P"])().then((function(e){if(e.data.successful){a.totalNum=e.data.resultValue.totalNum,a.tableLabel=e.data.resultValue;var t=e.data.resultValue;a.tableLabel=a.getLabelList(t),a.dictMap=a.getDictArr(t),a.columnTypeMap=a.getColumnTypeArr(t),Object(r["Lb"])(a.param).then((function(e){console.log("response",e),e.data.successful&&(a.totalNum=e.data.resultValue.totalNum,a.tableData=e.data.resultValue.tableData,a.tableShowData=a.getShowDateTable(a.tableData,a.dictMap,a.columnTypeMap)),a.tableDataLoding=!1})).catch((function(e){console.log(e),a.tableDataLoding=!1}))}}))},getShowDateTable:function(e,t,a){for(var i=this,l=[],o=0;o<e.length;o++){for(var n=e[o],r=new Object,c=0,u=Object.entries(n);c<u.length;c++){var d=Object(s["a"])(u[c],2),h=d[0],p=d[1];if(console.log(h+":"+p),"itemPhaseDet"==h&&(r["itemPhaseDetT"]=p),"speciality"==h&&(r["specialityT"]=p),t.has(h))for(var m=t.get(h),f=0;f<m.length;f++){var g=m[f];g.codeValue==p&&(r[h]=g.codeName)}else if("date"==a.get(h)&&p){r[h+"Rel"]=p;var b=i.formartDate(p);r[h]=b}else r[h]=p}l.push(r)}return l},getDictArr:function(e){for(var t=new Map,a=0;a<e.length;a++){var i=e[a];null!=i.codeList&&t.set(i.colDname,i.codeList)}return t},getColumnTypeArr:function(e){for(var t=new Map,a=0;a<e.length;a++){var i=e[a];t.set(i.colDname,i.colType)}return t},getLabelList:function(e){var t=this;e.forEach((function(e){t.$set(e,"value","")}));var a={};for(var i in e)a[i]=e[i];return a},formartDate:function(e){var t=new Date(e),a=t.getFullYear(),i=t.getMonth()+1,l=t.getDate();return a+"-"+this.add0(i)+"-"+this.add0(l)},add0:function(e){return e<10?"0"+e:e}}},m=p,f=(a("8516"),a("2877")),g=Object(f["a"])(m,i,l,!1,null,"2bada0a6",null);t["default"]=g.exports}}]);
//# sourceMappingURL=chunk-771e01b8.07170c0a.js.map