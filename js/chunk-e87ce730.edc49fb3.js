(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-e87ce730"],{"0d06":function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"main clearfix",style:{"margin-left":e.$store.state.app.isCollapse?"84px":"240px"}},[a("div",{staticClass:"main_container"},[a("querys",{attrs:{showSwitch:!1}},[a("div",{attrs:{slot:"queryTabs"},slot:"queryTabs"},[a("div",{staticClass:"query_tab"},[a("div",{staticClass:"query_label"},[e._v("项目名称")]),a("div",{staticClass:"query_select"},[a("el-input",{attrs:{clearable:"",size:"small",placeholder:"请输入内容"},on:{change:e.selectItem},model:{value:e.param.itemName,callback:function(t){e.$set(e.param,"itemName",t)},expression:"param.itemName"}})],1)]),a("div",{staticClass:"query_tab"},[a("div",{staticClass:"query_label"},[e._v("专业类别")]),a("div",{staticClass:"query_select"},[void 0!=e.selectParamDict?a("el-select",{attrs:{placeholder:"请选择",size:"small",clearable:""},on:{change:e.selectItem},model:{value:e.param.speciality,callback:function(t){e.$set(e.param,"speciality",t)},expression:"param.speciality"}},e._l(e.selectParamDict.get("speciality"),(function(e){return a("el-option",{key:e.codeValue,attrs:{label:e.codeName,value:e.codeValue}})})),1):e._e()],1)]),a("div",{staticClass:"query_tab"},[a("div",{staticClass:"query_label"},[e._v("所属单位")]),a("div",{staticClass:"query_select"},[a("select-tree",{on:{getValue:e.getValue}})],1)]),a("div",{staticClass:"query_tab"},[a("div",{staticClass:"query_label"},[e._v("可研状态")]),a("div",{staticClass:"query_select"},[void 0!=e.selectParamDict?a("el-select",{attrs:{placeholder:"请选择",size:"small",clearable:""},on:{change:e.selectItem},model:{value:e.param.itemPhaseDetT,callback:function(t){e.$set(e.param,"itemPhaseDetT",t)},expression:"param.itemPhaseDetT"}},e._l(e.selectParamDict.get("itemPhaseDet"),(function(e){return a("el-option",{key:e.codeValue,attrs:{label:e.codeName,value:e.codeValue}})})),1):e._e()],1)])]),a("div",{attrs:{slot:"queryBtns"},slot:"queryBtns"},[a("el-button",{attrs:{type:"primary",size:"small"},on:{click:e.exportPx}},[e._v("导出")]),a("el-button",{attrs:{type:"primary",size:"small"},on:{click:e.showHookup}},[e._v("评审批次挂接")]),a("el-button",{attrs:{type:"primary",size:"small",loading:e.statusLoading},on:{click:e.changeFeaStatus}},[e._v("提交")])],1)]),a("div",{staticClass:"table-item-box"},[a("div",{class:e.showDrawer?"table-wrapper-run":"table-wrapper-init"},[a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],ref:"itemTable",attrs:{data:e.tableDataShow,height:e.tableHeight,border:"","header-cell-style":{background:"#359691",color:"#fff"},"cell-class-name":"column","row-class-name":e.tableRowClassName,"highlight-current-row":!1,"row-key":e.getRowKeys,lazy:"",load:e.tableLoad,"tree-props":{children:"children",hasChildren:"hasChildren"}},on:{"selection-change":e.handleSelectionChange}},[a("el-table-column",{attrs:{type:"selection",selectable:e.isSelectable,width:"45"}}),a("el-table-column",{attrs:{type:"index",width:"50",label:"序号"}}),e._l(e.tableLabel,(function(t,i){return"itemName"!=t.colDname&&1==t.showType?a("el-table-column",{key:i,attrs:{prop:t.colDname,label:t.dispName,"show-overflow-tooltip":!0,"min-width":"150"}}):"itemName"==t.colDname?a("el-table-column",{attrs:{align:"left",label:t.dispName,"show-overflow-tooltip":!0,"min-width":"150"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",{staticClass:"blue",on:{click:function(a){return e.showDetailDialog(t.row)}}},[e._v(e._s(t.row.itemName))])]}}])}):e._e()})),a("el-table-column",{attrs:{label:"操作","min-width":"240"},scopedSlots:e._u([{key:"default",fn:function(t){return["26"==t.row.itemPhaseDetCopy?a("div",{staticStyle:{display:"inline-block"}},[t.row.mgtOrg&&!t.row.isChild?a("span",{staticClass:"blue margin_right10",on:{click:function(a){return e.showLinkMan(t.row,"edit")}}},[e._v("编辑联系人")]):t.row.mgtOrg||t.row.isChild?e._e():a("span",{staticClass:"blue margin_right10",on:{click:function(a){return e.showLinkMan(t.row,"add")}}},[e._v("添加联系人")])]):a("div",{staticStyle:{display:"inline-block"}},[a("span",{staticClass:"blue margin_right10",on:{click:function(a){return e.showLinkMan(t.row,"check")}}},[e._v("查看联系人")])]),"14"==t.row.itemPhaseDetCopy||"19"==t.row.itemPhaseDetCopy&&!t.row.isChild?a("span",{staticClass:"blue",on:{click:function(a){return e.showDialog(t.row)}}},[e._v("修改可研")]):e._e()]}}])})],2),a("div",{staticClass:"page"},[a("el-pagination",{attrs:{background:"","current-page":e.currentPage,"page-sizes":[10,20,30,50],"page-size":20,layout:"sizes, total, prev, pager, next, jumper",total:e.totalNum},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1)],1),a("div",{class:e.showDrawer?"item-add-wrapper-run":"item-wrapper-init"},[e.showDrawer?a("item-add-com",{key:e.timer,attrs:{showData:e.showData,showAddDialog:e.showDrawer,isShowQuery:e.showQuery,tableHeightTab:e.tableHeight},on:{changeStatus:e.changeStatus}}):e._e()],1)]),a("el-dialog",{staticClass:"hook-dialog",attrs:{visible:e.hookUpVisible,width:"70%"},on:{"update:visible":function(t){e.hookUpVisible=t},close:e.closeUpBatch}},[a("template",{slot:"title"},[a("div",{staticStyle:{"font-size":"large"}},[a("span",[e._v("评审批次挂接")])])]),a("div",[a("div",{staticClass:"search-box"},[a("span",{staticClass:"search-label"},[e._v("批次名称")]),a("el-input",{attrs:{type:"text",clearable:"",size:"small",placeholder:"请输入"},on:{change:e.selectBatchItem},model:{value:e.batchParam.batchName,callback:function(t){e.$set(e.batchParam,"batchName",t)},expression:"batchParam.batchName"}})],1),a("div",{staticClass:"search-box"},[a("span",{staticClass:"search-label"},[e._v("上报开始")]),a("el-date-picker",{staticStyle:{width:"150px!important"},attrs:{format:"yyyy-MM-dd","value-format":"yyyy-MM-dd",type:"date",size:"small","picker-options":e.pickerOptionsStart,placeholder:"选择日期"},on:{change:e.selectBatchItem},model:{value:e.batchParam.reportStartDate,callback:function(t){e.$set(e.batchParam,"reportStartDate",t)},expression:"batchParam.reportStartDate"}})],1),a("div",{staticClass:"search-box"},[a("span",{staticClass:"search-label"},[e._v("上报结束")]),a("el-date-picker",{staticStyle:{width:"150px!important"},attrs:{format:"yyyy-MM-dd","value-format":"yyyy-MM-dd",type:"date",size:"small","picker-options":e.pickerOptions,placeholder:"选择日期"},on:{change:e.selectBatchItem},model:{value:e.batchParam.reportFinishDate,callback:function(t){e.$set(e.batchParam,"reportFinishDate",t)},expression:"batchParam.reportFinishDate"}})],1)]),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.tableLoading,expression:"tableLoading"}],ref:"batchDiaTable",staticStyle:{width:"100%"},attrs:{data:e.batchData,border:"","header-cell-style":{background:"#359691",color:"#fff"},"cell-class-name":"column","highlight-current-row":!0,"row-key":e.getBatchRowKeys},on:{"row-click":e.rowClick}},[a("el-table-column",{attrs:{label:"",width:"35"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-radio",{attrs:{label:t.row.batchId},model:{value:e.batchId,callback:function(t){e.batchId=t},expression:"batchId"}})]}}])}),a("el-table-column",{attrs:{prop:"speciality",label:"专项类别",width:"180"}}),a("el-table-column",{attrs:{prop:"batch",label:"批次",width:"100"}}),a("el-table-column",{attrs:{prop:"batchName",label:"批次名称",width:"180"}}),a("el-table-column",{attrs:{prop:"batchCode",label:"批次编号",width:"180"}}),a("el-table-column",{attrs:{prop:"reportStartDate",label:"上报开始时间",width:"180"}}),a("el-table-column",{attrs:{prop:"reportFinishDate",label:"上报截止时间",width:"180"}}),a("el-table-column",{attrs:{prop:"batchStatus",label:"状态",width:"100"}}),a("el-table-column",{attrs:{prop:"auditStartDate",label:"计划评审开始时间",width:"180"}}),a("el-table-column",{attrs:{prop:"auditFinishDate",label:"计划评审开始时间",width:"180"}}),a("el-table-column",{attrs:{prop:"createUserNo",label:"创建人",width:"180"}}),a("el-table-column",{attrs:{prop:"createOrg",label:"创建单位",width:"180"}})],1),a("div",{staticClass:"page"},[a("el-pagination",{attrs:{background:"","current-page":e.batchParam.pageIndex,"page-sizes":[10,20,30,50],"page-size":20,layout:"sizes, total, prev, pager, next, jumper",total:e.batchTotalNum},on:{"size-change":e.batchHandleSizeChange,"current-change":e.batchHandleCurrentChange}})],1),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:e.closeUpBatch}},[e._v("取 消")]),a("el-button",{attrs:{type:"primary",disabled:e.submitDisabled},on:{click:e.submitUpBatch}},[e._v("保 存")])],1)],2),a("el-dialog",{staticClass:"linkman",attrs:{visible:e.dialogLinkMan,"close-on-click-modal":!1,"custom-class":"linkman","modal-append-to-body":!1},on:{"update:visible":function(t){e.dialogLinkMan=t},close:e.closeLinkMan}},[a("template",{slot:"title"},[a("div",{staticStyle:{"font-size":"large"}},[a("span",[e._v(e._s(e.linkTitle))])])]),a("el-form",{ref:"formLinkMan",attrs:{model:e.formLinkMan,rules:e.rules,inline:!0,"label-position":"right"}},[a("el-form-item",{attrs:{label:"管理部门",prop:"mgtOrg",rules:[{required:!0,message:"管理部门不能为空",trigger:"blur"}]}},[a("el-input",{attrs:{disabled:e.disabledLinkMan,placeholder:""},model:{value:e.formLinkMan.mgtOrg,callback:function(t){e.$set(e.formLinkMan,"mgtOrg",t)},expression:"formLinkMan.mgtOrg"}})],1),a("el-form-item",{attrs:{label:"联系人",prop:"ntactUserNo",rules:[{required:!0,message:"联系人不能为空",trigger:"blur"}]}},[a("el-input",{attrs:{disabled:e.disabledLinkMan,placeholder:""},model:{value:e.formLinkMan.ntactUserNo,callback:function(t){e.$set(e.formLinkMan,"ntactUserNo",t)},expression:"formLinkMan.ntactUserNo"}})],1),a("el-form-item",{attrs:{label:"联系方式",prop:"mgtUserTel"}},[a("el-input",{attrs:{disabled:e.disabledLinkMan,placeholder:""},model:{value:e.formLinkMan.mgtUserTel,callback:function(t){e.$set(e.formLinkMan,"mgtUserTel",t)},expression:"formLinkMan.mgtUserTel"}})],1),a("el-form-item",{attrs:{label:"实施单位",prop:"actOrg",rules:[{required:!0,message:"实施单位不能为空",trigger:"blur"}]}},[a("el-input",{attrs:{disabled:e.disabledLinkMan,placeholder:""},model:{value:e.formLinkMan.actOrg,callback:function(t){e.$set(e.formLinkMan,"actOrg",t)},expression:"formLinkMan.actOrg"}})],1),a("el-form-item",{attrs:{label:"联系人",prop:"actUserNo",rules:[{required:!0,message:"联系人不能为空",trigger:"blur"}]}},[a("el-input",{attrs:{disabled:e.disabledLinkMan,placeholder:""},model:{value:e.formLinkMan.actUserNo,callback:function(t){e.$set(e.formLinkMan,"actUserNo",t)},expression:"formLinkMan.actUserNo"}})],1),a("el-form-item",{attrs:{label:"联系方式",prop:"actUserTel"}},[a("el-input",{attrs:{disabled:e.disabledLinkMan,placeholder:""},model:{value:e.formLinkMan.actUserTel,callback:function(t){e.$set(e.formLinkMan,"actUserTel",t)},expression:"formLinkMan.actUserTel"}})],1)],1),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){return e.closeLinkMan()}}},[e._v("取 消")]),a("el-button",{attrs:{type:"primary",disabled:e.disabledLinkMan,loading:e.linkLoading},on:{click:function(t){return e.submitLinkMan("formLinkMan")}}},[e._v("保 存")])],1)],2),a("el-dialog",{staticClass:"edit-dialog",attrs:{visible:e.reportShow,"close-on-click-modal":!1,"custom-class":"cus-dialog","v-loading":e.fileUploadLoading},on:{"update:visible":function(t){e.reportShow=t}}},[a("template",{slot:"title"},[a("div",{staticStyle:{"font-size":"large"}},[a("span",[e._v("修改可研")])])]),a("el-form",{staticClass:"demo-form-inline",attrs:{inline:!1,model:e.formInline,"label-position":"right"}},[a("el-form-item",{attrs:{label:e.kyTitle}},[a("el-upload",{ref:"upload",staticClass:"upload-demo",attrs:{action:e.GLOBALURL+"/prjCmFeaPrep/uploadMultReport",data:e.uploadReportData,"on-remove":e.handleRemove,"before-remove":e.beforeRemove,headers:{userId:e.userId,token:e.token},accept:".doc,.docx","before-upload":e.beforeUploadKy,multiple:"",limit:1,"on-exceed":e.handleExceed,"file-list":e.fileList,"show-file-list":!0,"auto-upload":!0,"on-success":e.uploadSuccess}},[a("el-button",{attrs:{size:"small",type:"primary"}},[e._v("选择文件")]),a("el-button",{attrs:{type:"primary",size:"small"}},["上传可研报告"==e.kyTitle?a("a",{attrs:{href:e.GLOBALURL+"/prjStTmpl/downloadTmpl?templateType=4&codeValue="+e.itemSpeciality+"&token="+e.token}},[e._v("导出可研模版")]):e._e(),"上传项目建议书"==e.kyTitle?a("a",{attrs:{href:e.GLOBALURL+"/prjStTmpl/downloadTmpl?templateType=4&codeValue="+e.itemSpeciality+"&token="+e.token}},[e._v("导出可研模版")]):e._e()])],1)],1),a("el-form-item",{attrs:{label:"上传估算书等附件"}},[a("el-upload",{ref:"upload",staticStyle:{display:"inline-block"},attrs:{action:e.GLOBALURL+"/prjCmFeaPrep/uploadMultReport",data:e.uploadReportData,headers:{userId:e.userId,token:e.token},multiple:"","file-list":e.fileList2,"auto-upload":!0,"on-success":e.uploadSuccess2,"show-file-list":!0,limit:5,"on-exceed":e.handleExceed2,accept:".doc,.docx"}},[a("el-button",{attrs:{size:"small",type:"primary"}},[e._v("选择文件")])],1)],1),a("el-form-item",[a("div",{staticStyle:{"font-weight":"600"}},[a("span",[e._v("总体评审意见")])]),""!=e.rejectInfo.fileId&&void 0!=e.rejectInfo.fileId?a("a",{staticStyle:{color:"#409EFF"},attrs:{href:e.GLOBALURL+"/prjStFeaAudit/exportReport?feaAuditid="+e.rejectInfo.fileId+"&token="+e.token}},[e._v("评审文件")]):e._e()]),a("el-form-item",[a("el-input",{staticClass:"diy",attrs:{type:"textarea",disabled:""},model:{value:e.rejectInfo.info,callback:function(t){e.$set(e.rejectInfo,"info",t)},expression:"rejectInfo.info"}})],1)],1),a("el-row"),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:e.cancalSubmitFeasibility}},[e._v("取 消")]),a("el-button",{directives:[{name:"loading",rawName:"v-loading",value:e.submitBtn,expression:"submitBtn"}],attrs:{type:"primary"},on:{click:e.submitUpload}},[e._v("提 交")])],1)],2)],1)])},s=[],l=(a("99af"),a("4160"),a("c975"),a("a15b"),a("b0c0"),a("4ec9"),a("4fad"),a("d3b7"),a("ac1f"),a("25f0"),a("3ca3"),a("1276"),a("159b"),a("ddb0"),a("3835")),r=a("5530"),o=a("ade3"),n=a("2f62"),c=(a("2bb5"),a("a960")),u=a("c2b4"),d=a("7e1e"),m=(a("f36f"),a("73fc"));function h(e){var t=/^1[3|4|5|7|8][0-9]\d{8}$/;return t.test(e)}var p={name:"planHookUp",data:function(){var e,t,a,i=function(e,t,a){t?h(t)?a():a(new Error("请输入正确的11位手机号码")):a(new Error("请输入电话号码"))};return a={rules:{actUserTel:[{required:!0,trigger:"blur",validator:i}],mgtUserTel:[{required:!0,trigger:"blur",validator:i}]},auditClassType:[],showQuery:!1,showData:{itemId:null,specClass:"",specClassName:"",oldPath:"",tableLabelArr:"",phash:"1",parentItemId:null},showDrawer:!1,saveParams:[],statusLoading:!1,disabledLinkMan:!1,formLinkMan:(e={mgtOrg:"",ntactUserNo:"",mgtUserTel:"",actOrg:"",actUserNo:"",actUserTel:""},Object(o["a"])(e,"actUserNo",""),Object(o["a"])(e,"itemId",""),Object(o["a"])(e,"auditPlanId",""),e),tableLoading:!1,dialogLinkMan:!1,submitDisabled:!0,pickerOptions:{disabledDate:this.disabledDate},pickerOptionsStart:{disabledDate:this.disabledDateStart},batchTotalNum:0,itemIds:[],batchId:"",specialityCopy:[],batchData:[],loading:!1,currentNum:20},Object(o["a"])(a,"statusLoading",!1),Object(o["a"])(a,"hookUpVisible",!1),Object(o["a"])(a,"tableData",[]),Object(o["a"])(a,"tableLabel",[]),Object(o["a"])(a,"tableDataShow",[]),Object(o["a"])(a,"currentPage",1),Object(o["a"])(a,"totalNum",0),Object(o["a"])(a,"param",{createOrg:"",index:1,itemName:"",pageSize:20,speciality:"",itemPhaseDet:"5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,25",itemPhaseDetT:""}),Object(o["a"])(a,"batchParam",(t={queryType:"3",auditClassType:"",batchStatus:1,pageIndex:1,batchName:"",pageSize:20,speciality:"",reportStartDate:"",reportFinishDate:""},Object(o["a"])(t,"batchStatus",""),Object(o["a"])(t,"isTodayFinish",1),t)),Object(o["a"])(a,"dictMap",new Map),Object(o["a"])(a,"selectParamDict",new Map),Object(o["a"])(a,"createOrg",""),Object(o["a"])(a,"reportShow",!1),Object(o["a"])(a,"fileUploadLoading",!1),Object(o["a"])(a,"tzkeVisible",!1),Object(o["a"])(a,"formInline",{user:""}),Object(o["a"])(a,"kyTitle",""),Object(o["a"])(a,"userId",""),Object(o["a"])(a,"uploadReportData",{itemId:"",itemType:1}),Object(o["a"])(a,"token",""),Object(o["a"])(a,"fileList",[]),Object(o["a"])(a,"fileList2",[]),Object(o["a"])(a,"fjIds",[]),Object(o["a"])(a,"itemSpeciality",""),Object(o["a"])(a,"rejectInfo",{info:"",fileId:""}),Object(o["a"])(a,"submitBtn",!1),Object(o["a"])(a,"linkTitle",""),Object(o["a"])(a,"linkLoading",!1),a},components:{querys:m["a"],SelectTree:c["a"],ItemAddCom:u["default"]},created:function(){this.tableHeight=window.innerHeight-220},mounted:function(){this.getItemLabel(),this.getTable(1,20),this.userId=sessionStorage.getItem("userId"),this.token=sessionStorage.getItem("token")},computed:Object(r["a"])({},Object(n["b"])([])),watch:{createOrg:function(){this.param.createOrg=this.createOrg,this.currentPage=1,this.getTable(1,this.currentNum)}},methods:{handleExceed:function(e,t){var a=this;e.length>1&&a.$message.warning("当前限制选择 1 个文件，本次选择了 ".concat(e.length," 个文件，共选择了 ").concat(e.length+t.length," 个文件"))},handleExceed2:function(e,t){var a=this;e.length>5&&a.$message.warning("当前限制选择 5 个文件，本次选择了 ".concat(e.length," 个文件，共选择了 ").concat(e.length+t.length," 个文件"))},changeStatus:function(e){this.showDrawer=e,console.log("status"+e)},showDetailDialog:function(e){this.showData.itemId=e.itemId,this.showData.phash=0,this.showDrawer=!0,this.timer=(new Date).getTime()},isSelectable:function(e){return!e.isChild},changeFeaStatus:function(){var e=this,t=this;if(0==t.saveParams.length)return this.$message({showClose:!0,message:"请选择要提交的项目",type:"warning"}),!1;console.log("saveParams",t.saveParams);for(var a=0;a<t.saveParams.length;a++){if("26"!=t.saveParams[a].itemPhaseDet)return this.$message({showClose:!0,message:"所选项目状态必须是'可研编制已审批'",type:"warning"}),!1;if(""==t.saveParams[a].batchId||null==t.saveParams[a].batchId||""==t.saveParams[a].mgtOrg||null==t.saveParams[a].mgtOrg)return console.log(t.saveParams[a]),this.$message({showClose:!0,message:"所选的项目中有未挂接批次或未添加联系人的项目",type:"warning"}),!1}console.log(t.saveParams),t.statusLoading=!0,Object(d["m"])(t.saveParams).then((function(a){t.statusLoading=!1,a.data.successful?(e.$message.success("提交评审计划成功"),t.getTable(t.currentPage,t.currentNum),t.saveParams=[],t.$refs.itemTable.clearSelection()):e.$message.error("提交评审计划失败·")}))},tableLoad:function(e,t,a){var i=this,s={parentItemId:e.itemId};Object(d["nb"])(s).then((function(e){if(e.data.successful){var t=e.data.resultValue,s=i.getShowDateTable(t,i.dictMap,i.columnTypeMap);s.forEach((function(e){e.isChild=!0})),a(s)}}))},deleteReport:function(e){function t(){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}((function(){var e=this,t=this,a=new FormData;if(0==t.fileList.length)return this.$message({showClose:!0,message:"可研报告已删除",type:"warning"}),!1;t.$confirm("确认删除可研报告？","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){a.append("itemId",t.uploadReportItemId),deleteReport(a).then((function(a){if(a.data.successful)t.fileList=[],e.$message({showClose:!0,message:"删除可研报告成功",type:"success"}),t.getTable(t.currentPage,t.currentNum);else{var i=a.data.resultHint;e.$message({showClose:!0,message:i,dangerouslyUseHTMLString:!0,type:"error"})}t.loading=!1}))}))})),submitUpload:function(){var e=this,t=this,a={};a.itemId=t.uploadReportItemId,a.repName=t.reportFileName,a.repId=t.reportFileId,a.fjIds=t.fjIds,t.submitBtn=!0,Object(d["Yd"])(a).then((function(a){if(t.submitBtn=!1,a.data.successful){var i=new FormData;i.append("itemIds",t.uploadReportItemId),Object(d["e"])(i).then((function(a){a.data.successful?(t.reportFileId="",t.reportFileName="",t.fjIds=[],t.uploadReportItemId="",t.reportShow=!1,e.$message.success("保存可研报告成功"),t.$refs.itemTable.clearSelection(),t.getTable(t.currentPage,t.currentNum)):e.$message.error("保存可研报告失败")}))}else e.$message.error("保存可研报告失败")}))},cancalSubmitFeasibility:function(){var e=this;e.reportShow=!1,e.fileList=[],e.fileList2=[],e.reportFileId="",e.reportFileName="",this.getTable(e.currentPage,e.currentNum)},showDialog:function(e){var t=this;"3"==e.itemClassT?t.kyTitle="上传项目建议书":t.kyTitle="上传可研报告",t.uploadReportItemId=e.itemId,t.uploadReportData.itemId=e.itemId,t.loading=!0,t.fileList=[],t.fileList2=[],t.itemSpeciality=e.specialityCopy,Object(d["xd"])({itemId:e.itemId}).then((function(e){if(console.log("response",e),t.loading=!1,e.data.successful){var a=e.data.resultValue;a.forEach((function(e){if(1==e.key){if(e.fileName.length>0){var a={};a.name=e.fileName,a.url="",t.reportFileId=e.fileId,t.reportFileName=e.fileName,t.fileList.push(a)}if(e.itemFileList){var i=e.itemFileList;i.forEach((function(e){var a={};a.name=e.fileName,a.url="";var i={};i.fileId=e.fileId,i.fileName=e.fileName,t.fjIds.push(i),t.fileList2.push(a)}))}}}))}})).catch((function(e){console.log(e)}));var a={};a.itemPhaseDet=e.itemPhaseDetCopy,a.itemId=e.itemId,Object(d["bb"])(a).then((function(e){if(console.log(e),e.data.successful){var a=e.data.resultValue;t.rejectInfo.info=a.auditAdvice,t.rejectInfo.fileId=a.auditFileId}})),t.reportShow=!0},uploadSuccess:function(e,t,a){var i=this;this.fileUploadLoading=!1,e.successful&&(i.reportFileId=e.resultValue.fileId,i.reportFileName=e.resultValue.fileName,i.fileList=a,i.getTable(i.currentPage,i.currentNum))},uploadSuccess2:function(e){var t=this;if(e.successful){var a={};a.fileId=e.resultValue.fileId,a.fileName=e.resultValue.fileName,t.fjIds.push(a)}else this.$message({showClose:!0,message:"上传失败",dangerouslyUseHTMLString:!0,type:"error"})},beforeUploadKy:function(){this.fileUploadLoading=!0},handleRemove:function(e,t){console.log(e,t)},beforeRemove:function(e,t){return this.$confirm("确定移除 ".concat(e.name,"？"))},showLinkMan:function(e,t){var a;(this.dialogLinkMan=!0,e)?this.formLinkMan=JSON.parse(JSON.stringify(e)):this.formLinkMan=(a={mgtOrg:"",ntactUserNo:"",mgtUserTel:"",actOrg:"",actUserNo:"",actUserTel:""},Object(o["a"])(a,"actUserNo",""),Object(o["a"])(a,"itemId",""),Object(o["a"])(a,"auditPlanId",""),a);"check"==t?(this.disabledLinkMan=!0,this.linkTitle="查看联系人"):"add"==t?(this.linkTitle="添加联系人",this.disabledLinkMan=!1):"edit"==t&&(this.disabledLinkMan=!1,this.linkTitle="编辑联系人")},closeLinkMan:function(){this.dialogLinkMan=!1,this.resetForm("formLinkMan")},resetForm:function(e){this.$refs[e].resetFields()},submitLinkMan:function(e){var t=this;this.$refs[e].validate((function(e){e&&(t.linkLoading=!0,Object(d["b"])(t.formLinkMan).then((function(e){console.log(e),t.linkLoading=!1,e.data.successful&&(t.$message({showClose:!0,message:"保存成功",type:"success"}),t.closeLinkMan(),t.$refs.itemTable.clearSelection(),t.getTable(t.currentPage,t.currentNum))})))}))},submitUpBatch:function(){var e=this;console.log(this.batchId,this.itemIds),Object(d["Fc"])({itemIds:this.itemIds.join(","),batchId:this.batchId}).then((function(t){t.data.successful&&(e.closeUpBatch(),e.$message({showClose:!0,message:"评审批次挂接成功",type:"success"}),e.$refs.batchDiaTable.clearSelection(),e.$refs.itemTable.clearSelection(),e.getTable(e.currentPage,e.currentNum))}))},closeUpBatch:function(){this.batchId="",this.submitDisabled=!0,this.hookUpVisible=!1},rowClick:function(e){this.batchId=e.batchId,this.submitDisabled=!1},getBatchRowKeys:function(e){return e.batchId},disabledDate:function(e){var t=this;return e<Date.parse(new Date(t.batchParam.reportStartDate))},disabledDateStart:function(e){var t=this;return e>Date.parse(new Date(t.batchParam.reportFinishDate))},showSubmitPlan:function(){this.dialogFormVisible=!0},showHookup:function(){var e=this;if(e.saveParams)for(var t=0;t<e.saveParams.length;t++)if("26"!=e.saveParams[t].itemPhaseDet)return this.$message({showClose:!0,message:"只有可研状态为'可研编制已审批'的项目能够挂接批次",type:"warning"}),!1;e.itemIds.length?1==e.specialityCopy.length&&1==e.auditClassType.length?(e.hookUpVisible=!0,e.batchParam.speciality=e.specialityCopy[0],e.batchParam.auditClassType=e.auditClassType[0],console.log(e.batchParam),e.getBatchTable()):e.$message({showClose:!0,message:"请选择专项类型一致且可研评审分类一致的数据",type:"warning"}):e.$message({showClose:!0,message:"请选择至少一条数据",type:"warning"})},getBatchTable:function(){var e=this;e.tableLoading=!0,Object(d["Ic"])(e.batchParam).then((function(t){if(e.tableLoading=!1,t.data.successful){var a=t.data.resultValue.resultList;e.batchData=e.getShowBatchTable(a),e.batchTotalNum=t.data.resultValue.total}}))},getShowBatchTable:function(e){var t=this,a=this.selectParamDict.get("speciality");return e.forEach((function(e,i){"1"==e.batchStatus?e.batchStatus="已发布":e.batchStatus="未发布",e.reportFinishDate&&(e.reportFinishDate=t.formartDate(e.reportFinishDate)),e.reportStartDate&&(e.reportStartDate=t.formartDate(e.reportStartDate)),e.auditFinishDate&&(e.auditFinishDate=t.formartDate(e.auditFinishDate)),e.auditStartDate&&(e.auditStartDate=t.formartDate(e.auditStartDate)),a.forEach((function(t,a){e.speciality==t.codeValue&&(e.speciality=t.codeName)}))})),e},getItemLabel:function(){var e=this;Object(d["Vc"])().then((function(t){if(console.log("response",t),t.data.successful){t.data.resultValue.tableLable,t.data.resultValue.specialityList;var a="5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,26";e.selectParamDict.set("speciality",t.data.resultValue.specialityList);for(var i=t.data.resultValue.itemPhaseDet,s=[],l=0;l<i.length;l++){for(var r=i[l],o=a.split(","),n=!1,c=0;c<o.length;c++)r.codeValue==o[c]&&(n=!0);n&&s.push(r)}e.selectParamDict.set("itemPhaseDet",s),e.$forceUpdate()}}))},exportPx:function(){var e=this;window.location.href=e.GLOBALURL+"/planHookUp/exportItem?itemIds="+e.itemIds.toString()+"&token="+this.token},getValue:function(e){this.createOrg=e},getTreeDeptCode:function(){var e=this;Object(d["jc"])().then((function(t){var a=t.data.resultValue;Object(d["hc"])().then((function(t){console.log(t),t.data.successful&&(e.valueId=a,e.deptArr=t.data.resultValue)}))}))},getRowKeys:function(e){return e.randomId},formartDate:function(e){var t=new Date(e),a=t.getFullYear(),i=t.getMonth()+1,s=t.getDate();return a+"-"+this.add0(i)+"-"+this.add0(s)},add0:function(e){return e<10?"0"+e:e},tableRowClassName:function(e){var t=e.row;e.rowIndex;return"14"==t.itemPhaseDetCopy||"19"==t.itemPhaseDetCopy?"red-row":"17"==t.itemPhaseDetCopy?"success-row":t.batchId&&t.mgtOrg&&"26"==t.itemPhaseDetCopy?"green-row":""},getColumnTypeArr:function(e){for(var t=new Map,a=0;a<e.length;a++){var i=e[a];t.set(i.colDname,i.colType)}return t},selectItem:function(){this.currentPage=1,this.getTable(1,this.currentNum)},selectBatchItem:function(){this.getBatchTable()},resetItem:function(){var e=this;e.param={createOrg:"",index:1,itemName:"",itemType:"",pageSize:10,speciality:"",voltLevel:"",feaStatus:0,ghYear:""},this.getTable(1,e.currentNum)},cancelSumbmitPlan:function(){var e=this;e.dialogFormVisible=!1,e.minDate="",e.maxDate=""},handleSelectionChange:function(e){var t=this;t.specialityCopy=[],t.auditClassType=[],t.itemIds=[],t.saveParams=[],e.forEach((function(e,a){var i="";-1==t.specialityCopy.indexOf(e.specialityCopy)&&t.specialityCopy.push(e.specialityCopy),t.itemIds.push(e.itemId),i="B"==e.auditClass?"A":e.auditClass,console.log(e,i),-1==t.auditClassType.indexOf(i)&&t.auditClassType.push(i)})),e.forEach((function(e){var a={};a.itemId=e.itemId,a.auditPlanId=e.auditPlanId,a.itemPhaseDet=e.itemPhaseDetCopy,a.batchId=e.batchId,a.mgtOrg=e.mgtOrg,t.saveParams.push(a)})),console.log(t.auditClassType,t.specialityCopy)},handleSizeChange:function(e){console.log("每页 ".concat(e," 条")),this.currentNum=e,this.getTable(this.currentPage,e)},handleCurrentChange:function(e){console.log("当前页: ".concat(e)),this.currentPage=e,this.getTable(e,this.currentNum)},batchHandleSizeChange:function(e){console.log("每页 ".concat(e," 条")),this.batchParam.pageSize=e,this.getBatchTable()},batchHandleCurrentChange:function(e){console.log("当前页: ".concat(e)),this.batchParam.pageIndex=e,this.getBatchTable()},getTable:function(e,t){var a=this;a.loading=!0,a.param.index=e,a.param.pageSize=t,""!=a.param.itemPhaseDetT?a.param.itemPhaseDet=a.param.itemPhaseDetT:a.param.itemPhaseDet="5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,26",Object(d["Gc"])().then((function(e){console.log("planHookUpQueryTitle",e),e.data.successful&&(a.tableLabel=e.data.resultValue,a.dictMap=a.getDictArr(a.tableLabel),a.columnTypeMap=a.getColumnTypeArr(a.tableLabel)),Object(d["Ec"])(a.param).then((function(e){console.log("planHookUp",e),a.loading=!1,e.data.successful&&(a.tableData=e.data.resultValue.tableData,a.totalNum=e.data.resultValue.totalNum,a.tableDataShow=a.getShowDateTable(a.tableData,a.dictMap,a.columnTypeMap))}))}))},getLabelList:function(e){var t=this;e.forEach((function(e){t.$set(e,"value","")}));var a={};for(var i in e)a[i]=e[i];return a},getDictArr:function(e){for(var t=new Map,a=0;a<e.length;a++){var i=e[a];null!=i.codeList&&t.set(i.colDname,i.codeList)}return t},getShowDateTable:function(e,t,a){console.log("getShowDateTable",t,a);for(var i=this,s=[],r=0;r<e.length;r++){for(var o=e[r],n=new Object,c=0,u=Object.entries(o);c<u.length;c++){var d=Object(l["a"])(u[c],2),m=d[0],h=d[1];if(t.has(m))for(var p=t.get(m),b=0;b<p.length;b++){var f=p[b];f.codeValue==h&&(n[m]=f.codeName)}else if("date"==a.get(m)&&h){n[m+"Rel"]=h;var g=i.formartDate(h);n[m]=g}else n[m]=h;"createOrg"==m&&(n["createOrg"]=h),(m="speciality")&&(n["specialityCopy"]=o.speciality),(m="itemPhaseDet")&&(n["itemPhaseDetCopy"]=o.itemPhaseDet),"itemClass"==m&&(n["itemClassT"]=h)}s.push(n)}return s}}},b=p,f=(a("4e10"),a("ffa5"),a("2877")),g=Object(f["a"])(b,i,s,!1,null,"6c7465f0",null);t["default"]=g.exports},4544:function(e,t,a){},"4e10":function(e,t,a){"use strict";var i=a("4544"),s=a.n(i);s.a},9949:function(e,t,a){},ffa5:function(e,t,a){"use strict";var i=a("9949"),s=a.n(i);s.a}}]);
//# sourceMappingURL=chunk-e87ce730.edc49fb3.js.map