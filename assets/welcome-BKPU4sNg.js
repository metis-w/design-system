import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as r}from"./index-BBXRFXdY.js";import{M as i}from"./blocks-BboInAaM.js";import"./iframe-kgDevAJW.js";import"./index-ON8x0BlY.js";import"./index-rNFUpT0R.js";function t(n){const s={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...r(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"Introduction/Welcome"}),`
`,e.jsx(s.h1,{id:"welcome-to-metis-design-system",children:"Welcome to Metis Design System"}),`
`,e.jsx(s.p,{children:"A React component library built with TypeScript, Tailwind CSS, and Radix UI."}),`
`,e.jsx(s.h2,{id:"installation",children:"Installation"}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-bash",children:`npm install reserve-design-system
`})}),`
`,e.jsx(s.h2,{id:"setup",children:"Setup"}),`
`,e.jsxs(s.p,{children:["Add the design system styles to your project's main CSS file (usually ",e.jsx(s.code,{children:"index.css"})," or ",e.jsx(s.code,{children:"globals.css"}),"):"]}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-css",children:`@source url("../node_modules/reserve-design-system/dist/reserve-design-system.css");
@import "../node_modules/reserve-design-system/dist/reserve-design-system.css";
`})}),`
`,e.jsx(s.h2,{id:"usage",children:"Usage"}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-tsx",children:`import { Button } from "reserve-design-system";

function App() {
    return <Button variant="accent">click me</Button>;
}
`})})]})}function p(n={}){const{wrapper:s}={...r(),...n.components};return s?e.jsx(s,{...n,children:e.jsx(t,{...n})}):t(n)}export{p as default};
