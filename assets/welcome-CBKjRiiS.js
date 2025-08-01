import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as i}from"./index-C_K0l-O1.js";import{M as o}from"./blocks-ByOg9hHV.js";import"./iframe-BqecpC0X.js";import"./index-oDfTagun.js";import"./index-DdGlmjvg.js";function t(s){const n={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...i(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{title:"Introduction/Welcome"}),`
`,e.jsx(n.h1,{id:"welcome-to-metis-design-system",children:"Welcome to Metis Design System"}),`
`,e.jsx(n.p,{children:"A React component library built with TypeScript, Tailwind CSS, and Radix UI."}),`
`,e.jsx(n.h2,{id:"installation",children:"Installation"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-bash",children:`npm install @metis-w/design-system
`})}),`
`,e.jsx(n.h2,{id:"setup",children:"Setup"}),`
`,e.jsxs(n.p,{children:["Add the design system styles to your project's main CSS file (usually ",e.jsx(n.code,{children:"index.css"})," or ",e.jsx(n.code,{children:"globals.css"}),"):"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-css",children:`@import "@metis-w/design-system/styles";
`})}),`
`,e.jsx(n.h2,{id:"usage",children:"Usage"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { Button } from "@metis-w/design-system";

function App() {
    return <Button variant="accent">click me</Button>;
}
`})})]})}function p(s={}){const{wrapper:n}={...i(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(t,{...s})}):t(s)}export{p as default};
