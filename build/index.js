(()=>{"use strict";function e(){return e=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a])}return e},e.apply(this,arguments)}const t=window.wp.element,l=window.wp.i18n,a=window.wp.blocks,n=window.wp.blockEditor,r=window.wp.components,o=JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":2,"name":"blockify/counter","title":"Counter","description":"Counts up or down from one number to another.","icon":"clock","textdomain":"blockify","category":"blockify","keywords":["countdown","timer","count","clock"],"supports":{"color":{"gradients":true},"typography":{"fontSize":true,"lineHeight":true},"spacing":{"margin":true,"padding":true,"blockGap":true},"__experimentalBorder":{"width":true,"style":true,"color":true,"radius":true,"__experimentalDefaultControls":{"width":true,"color":true}},"__experimentalLayout":{"allowSwitching":false,"allowInheriting":false,"default":{"type":"flex","justifyContent":"left","orientation":"horizontal"}}},"attributes":{"start":{"type":"string","default":"0"},"end":{"type":"string","default":"100"},"duration":{"type":"string","default":"2"},"delay":{"type":"string","default":"0"},"tag":{"type":"string","default":"span"},"suffix":{"type":"string","default":""},"style":{"type":"object","default":{"blockGap":"1em"}}},"editorScript":"file:index.tsx","script":"file:script.tsx","editorStyle":"file:editor.scss","style":"file:style.scss","viewScript":"file:view.tsx"}'),i={start:o.attributes.start.default,end:o.attributes.end.default,duration:o.attributes.duration.default,delay:o.attributes.delay.default,tag:o.attributes.tag.default};(0,a.registerBlockType)(o,{edit:a=>{var o,s,u,d,c,f,p,b,g,m,v,y,h,w,_;const{attributes:E,setAttributes:k}=a,x=(0,n.useBlockProps)(),S=`${null!==(o=E.tag)&&void 0!==o?o:i.tag}`;return(0,t.createElement)(t.Fragment,null,(0,t.createElement)(n.InspectorControls,null,(0,t.createElement)(r.PanelBody,{title:(0,l.__)("Counter Settings","blockify"),initialOpen:!0,className:"blockify-counter-settings"},(0,t.createElement)(r.PanelRow,null,(0,t.createElement)(r.__experimentalNumberControl,{label:(0,l.__)("Start","blockify"),onChange:e=>{k({start:e})},step:1,shiftStep:10,isDragEnabled:!0,isShiftStepEnabled:!0,value:null!==(s=E.start)&&void 0!==s?s:i.start})),(0,t.createElement)(r.PanelRow,null,(0,t.createElement)(r.__experimentalNumberControl,{label:(0,l.__)("End","blockify"),onChange:e=>{k({end:e})},step:1,shiftStep:10,isDragEnabled:!0,isShiftStepEnabled:!0,value:null!==(u=E.end)&&void 0!==u?u:i.end})),(0,t.createElement)(r.PanelRow,null,(0,t.createElement)(r.__experimentalNumberControl,{label:(0,l.__)("Duration (seconds)","blockify"),onChange:e=>{k({duration:e})},step:.1,shiftStep:1,isDragEnabled:!0,isShiftStepEnabled:!0,value:null!==(d=E.duration)&&void 0!==d?d:i.duration})),(0,t.createElement)(r.PanelRow,null,(0,t.createElement)(r.__experimentalNumberControl,{label:(0,l.__)("Delay (seconds)","blockify"),onChange:e=>{k({delay:e})},step:.1,shiftStep:1,isDragEnabled:!0,isShiftStepEnabled:!0,value:null!==(c=E.delay)&&void 0!==c?c:i.delay})),(0,t.createElement)(r.PanelRow,null,(0,t.createElement)(r.SelectControl,{label:(0,l.__)("HTML Tag","blockify"),value:null!==(f=E.tag)&&void 0!==f?f:i.tag,options:[{label:"span",value:"span"},{label:"strong",value:"strong"},{label:"small",value:"small"},{label:"h1",value:"h1"},{label:"h2",value:"h2"},{label:"h3",value:"h3"},{label:"h4",value:"h4"},{label:"h5",value:"h5"},{label:"h6",value:"h6"}],onChange:e=>k({tag:e}),__nextHasNoMarginBottom:!0})),(0,t.createElement)(r.PanelRow,null,(0,t.createElement)(r.TextControl,{label:(0,l.__)("Suffix","blockify"),value:null!==(p=E.suffix)&&void 0!==p?p:"",onChange:e=>k({suffix:e})})))),(0,t.createElement)(S,e({},x,{className:x.className,"data-start":null!==(b=E.start)&&void 0!==b?b:i.start,"data-end":null!==(g=E.end)&&void 0!==g?g:i.end,"data-duration":null!==(m=E.duration)&&void 0!==m?m:i.duration,"data-delay":null!==(v=E.delay)&&void 0!==v?v:i.delay,"data-suffix":null!==(y=E.suffix)&&void 0!==y?y:"",tagName:null!==(h=E.tag)&&void 0!==h?h:i.tag,value:null!==(w=E.start)&&void 0!==w?w:i.start}),null!==(_=E.end)&&void 0!==_?_:i.end))},save:l=>{var a,r,o,s,u,d,c,f,p;const{attributes:b}=l,g=n.useBlockProps.save(),m=`${null!==(a=b.tag)&&void 0!==a?a:i.tag}`;return(0,t.createElement)(m,e({},g,{className:g.className,"data-start":null!==(r=b.start)&&void 0!==r?r:i.start,"data-end":null!==(o=b.end)&&void 0!==o?o:i.end,"data-duration":null!==(s=b.duration)&&void 0!==s?s:i.duration,"data-delay":null!==(u=b.delay)&&void 0!==u?u:i.delay,"data-suffix":null!==(d=b.suffix)&&void 0!==d?d:"",tagName:null!==(c=b.tag)&&void 0!==c?c:i.tag,value:null!==(f=b.start)&&void 0!==f?f:i.start}),null!==(p=b.end)&&void 0!==p?p:i.start)}})})();