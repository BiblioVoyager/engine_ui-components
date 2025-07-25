import"./modulepreload-polyfill-B5Qt9EMX.js";import{l as P,T as s,z as g,a0 as I,m as r,a1 as M,R as N,C as U}from"./index-CvwIbfmY.js";import"./lit-html-CuBe1DX_.js";import{e as B}from"./ref-DfidMTJ6.js";const E={dueDate:t=>{if(typeof t=="string"&&t.trim()!=="")return new Date(t)},status:t=>{if(Array.isArray(t)&&t.length!==0)return t[0]},type:t=>{if(Array.isArray(t)&&t.length!==0)return t[0]},priority:t=>{if(Array.isArray(t)&&t.length!==0)return t[0]},stage:t=>{if(Array.isArray(t)&&t.length!==0)return t[0]},assignedTo:t=>{if(Array.isArray(t)&&t.length!==0)return t[0]},labels:t=>{if(Array.isArray(t))return new Set(t)}},G=t=>{const{components:$,topic:e,value:n,onCancel:C,onSubmit:_,styles:d}=t,w=_??(()=>{}),a=$.get(P),R=(n==null?void 0:n.title)??(e==null?void 0:e.title)??s.default.title,m=(n==null?void 0:n.status)??(e==null?void 0:e.status)??s.default.status,p=(n==null?void 0:n.type)??(e==null?void 0:e.type)??s.default.type,b=(n==null?void 0:n.priority)??(e==null?void 0:e.priority)??s.default.priority,u=(n==null?void 0:n.assignedTo)??(e==null?void 0:e.assignedTo)??s.default.assignedTo,c=(n==null?void 0:n.labels)??(e==null?void 0:e.labels)??s.default.labels,f=(n==null?void 0:n.stage)??(e==null?void 0:e.stage)??s.default.stage,j=(n==null?void 0:n.description)??(e==null?void 0:e.description)??s.default.description,z=e!=null&&e.dueDate?e.dueDate.toISOString().split("T")[0]:null,T=new Set([...a.config.statuses]);m&&T.add(m);const S=new Set([...a.config.types]);p&&S.add(p);const x=new Set([...a.config.priorities]);b&&x.add(b);const h=new Set([...a.config.users]);u&&h.add(u);const A=new Set([...a.config.labels]);if(c)for(const i of c)A.add(i);const D=new Set([...a.config.stages]);f&&D.add(f);const v=B(),O=async()=>{const{value:i}=v;if(!i)return;const o=M(i,E);if(e)e.set(o),await w(e);else{const l=a.create(o);await w(l)}},k=B(),q=i=>{const{value:o}=k;if(!o)return;const l=i.target;o.disabled=l.value.trim()===""},F=`btn-${g.newRandomId()}`,y=`btn-${g.newRandomId()}`;return r`
    <div ${I(v)} style="display: flex; flex-direction: column; gap: 0.75rem;">
      <div style="display: flex; gap: 0.375rem">
        <bim-text-input @input=${q} vertical label="Title" name="title" .value=${R}></bim-text-input>
        ${e?r`
            <bim-dropdown vertical label="Status" name="status" required>
              ${[...T].map(i=>r`<bim-option label=${i} .checked=${m===i}></bim-option>`)}
            </bim-dropdown>`:r``}
      </div>
      <div style="display: flex; gap: 0.375rem">
        <bim-dropdown vertical label="Type" name="type" required>
          ${[...S].map(i=>r`<bim-option label=${i} .checked=${p===i}></bim-option>`)}
        </bim-dropdown>
        <bim-dropdown vertical label="Priority" name="priority">
          ${[...x].map(i=>r`<bim-option label=${i} .checked=${b===i}></bim-option>`)}
        </bim-dropdown>
      </div>
      <div style="display: flex; gap: 0.375rem">
        <bim-dropdown vertical label="Labels" name="labels" multiple>
          ${[...A].map(i=>r`<bim-option label=${i} .checked=${c?[...c].includes(i):!1}></bim-option>`)}
        </bim-dropdown>
        <bim-dropdown vertical label="Assignee" name="assignedTo">
          ${[...h].map(i=>{const o=d!=null&&d.users?d.users[i]:null,l=o?o.name:i,L=o==null?void 0:o.picture;return r`<bim-option label=${l} value=${i} .img=${L} .checked=${u===i}></bim-option>`})}
        </bim-dropdown>
      </div>
      <div style="display: flex; gap: 0.375rem">
        <bim-text-input vertical type="date" label="Due Date" name="dueDate" .value=${z}></bim-text-input> 
        <bim-dropdown vertical label="Stage" name="stage">
          ${[...D].map(i=>r`<bim-option label=${i} .checked=${f===i}></bim-option>`)}
        </bim-dropdown>
      </div>
      <bim-text-input vertical label="Description" name="description" type="area" .value=${j??null}></bim-text-input>
      <div style="justify-content: right; display: flex; gap: 0.375rem">
        <style>
          #${y} {
            background-color: transparent;
          }

          #${y}:hover {
            --bim-label--c: #FF5252;
          }

          #${F}:hover {
            background-color: #329936;
          }
        </style>
        <bim-button id=${y} style="flex: 0" @click=${C} label="Cancel"></bim-button>
        <bim-button id=${F} style="flex: 0" @click=${O} ${I(k)} label=${e?"Update Topic":"Add Topic"} icon=${e?"tabler:refresh":"mi:add"}></bim-button>
      </div>
    </div>
  `},H=t=>r`
    <bim-panel-section fixed label="New Topic" name="topic">
      ${G(t)}
    </bim-panel-section>
  `,J=t=>N.create(H,t),K=Object.freeze(Object.defineProperty({__proto__:null,topic:J},Symbol.toStringTag,{value:"Module"})),Q={...K};g.init();const V=new U,[W]=Q.topic({components:V,onSubmit:t=>console.log(t)});document.body.append(W);
