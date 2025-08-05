import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{T as s,L as t,I as l}from"./index-B0INA3oQ.js";import"./index-Bd78dySt.js";import"./index-B0AReA1G.js";import"./index-Djv3Jycn.js";import"./index-VoT1bc97.js";import"./index-BRLsZQr2.js";import"./index-DprfdVnq.js";import"./index-DTwddJAS.js";import"./index-BIhRfLqB.js";import"./index-9tnKXFkA.js";import"./iframe-DJ9j7eLK.js";import"./utils-D-KgF5mV.js";import"./index-CGrAONsN.js";import"./createLucideIcon-npYq3IcM.js";import"./index-DTHECe5k.js";import"./index-Dzy5DBsf.js";import"./index-CCBzd67f.js";import"./index-C-wO0n4X.js";import"./index-arU36FMg.js";const M={title:"Components/Atoms/TextArea",component:s,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{placeholder:{control:{type:"text"}},disabled:{control:{type:"boolean"}},rows:{control:{type:"number"}},resize:{control:{type:"select"},options:["none","both","horizontal","vertical"]},autoGrow:{control:{type:"boolean"}},maxLines:{control:{type:"number"},description:"Maximum number of lines before scrolling"},minLines:{control:{type:"number"},description:"Minimum number of lines for initial height"}}},n=({children:i,width:a="w-80"})=>e.jsx("div",{className:`${a} max-w-full`,children:i}),A={render:i=>e.jsx(n,{children:e.jsx(s,{...i})}),args:{placeholder:"Type your message here..."}},V={render:i=>e.jsx(n,{children:e.jsx(s,{...i})}),args:{placeholder:"Start typing... This will grow until 6 lines, then scroll",autoGrow:!0,maxLines:6,minLines:3}},F={render:()=>e.jsxs("div",{className:"space-y-4 w-96 max-w-full",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"typo-ui-title-sm text-text-pr",children:"Auto-Growing with Max Height"}),e.jsx("p",{className:"typo-ui-body-sm text-text-sec",children:"Demonstrates different max height limits and scrolling behavior"})]}),e.jsxs("div",{className:"grid gap-6",children:[e.jsxs("div",{className:"space-y-2",children:[e.jsxs("div",{children:[e.jsx("h4",{className:"typo-ui-label-lg text-text-pr",children:"6 Line Maximum"}),e.jsx("p",{className:"typo-ui-body-sm text-text-ter",children:"Grows automatically until 6 lines, then shows scrollbar"})]}),e.jsx(s,{placeholder:"Keep typing to see the max height in action...",autoGrow:!0,maxLines:6,minLines:2,defaultValue:`Line 1: Start typing here
Line 2: Keep adding content
Line 3: Notice how it grows
Line 4: Still growing...
Line 5: Almost at the limit
Line 6: This is the last line before scrolling
Line 7: Now you should see a scrollbar appear
Line 8: This content will require scrolling to see
Line 9: The height is now fixed
Line 10: Perfect for limiting vertical space`})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsxs("div",{children:[e.jsx("h4",{className:"typo-ui-label-lg text-text-pr",children:"Comparing Different Limits"}),e.jsx("p",{className:"typo-ui-body-sm text-text-ter",children:"3-line vs 8-line maximum heights side by side"})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsxs("div",{className:"space-y-2",children:[e.jsx(t,{children:"Max 3 lines"}),e.jsx(s,{placeholder:"Max 3 lines...",autoGrow:!0,maxLines:3,minLines:2,defaultValue:`Line 1
Line 2
Line 3
Line 4 - scroll needed`})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx(t,{children:"Max 8 lines"}),e.jsx(s,{placeholder:"Max 8 lines...",autoGrow:!0,maxLines:8,minLines:2,defaultValue:`Line 1
Line 2
Line 3
Line 4
Line 5
Line 6
Line 7
Line 8
Line 9 - scroll needed`})]})]})]})]})]})},C={render:()=>e.jsx(n,{width:"w-96",children:e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"space-y-1",children:[e.jsx("h3",{className:"typo-ui-title-sm text-text-pr",children:"Flashcard Content"}),e.jsx("p",{className:"typo-ui-body-sm text-text-sec",children:"Auto-growing textareas with sensible height limits for flashcard creation"})]}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"space-y-1",children:[e.jsx(t,{htmlFor:"word",children:"Word *"}),e.jsx(l,{id:"word",placeholder:"Enter the word or phrase...",defaultValue:"a dog"})]}),e.jsxs("div",{className:"space-y-1",children:[e.jsx(t,{htmlFor:"translation",children:"Translation *"}),e.jsx(l,{id:"translation",placeholder:"Enter the translation...",defaultValue:"un perro"})]}),e.jsxs("div",{className:"space-y-1",children:[e.jsx(t,{htmlFor:"example",children:"Example"}),e.jsx(s,{id:"example",placeholder:"Add an example sentence...",autoGrow:!0,maxLines:3,minLines:2,defaultValue:"El perro es pequeño. - The dog is small."})]})]})]})})},I={render:()=>e.jsxs("div",{className:"space-y-4 w-96 max-w-full",children:[e.jsxs("div",{className:"space-y-1",children:[e.jsx("h3",{className:"typo-ui-title-sm text-text-pr",children:"Behaviour Comparison"}),e.jsx("p",{className:"typo-ui-body-sm text-text-sec",children:"Different textarea behaviours side by side"})]}),e.jsxs("div",{className:"grid gap-6",children:[e.jsxs("div",{className:"space-y-2",children:[e.jsxs("div",{children:[e.jsx("h4",{className:"typo-ui-label-lg text-text-pr",children:"Traditional Fixed Height"}),e.jsx("p",{className:"typo-ui-body-sm text-text-ter",children:"Fixed 4 rows, always shows scrollbar when needed"})]}),e.jsx(s,{placeholder:"I have a fixed height...",autoGrow:!1,rows:4,defaultValue:`Line 1
Line 2  
Line 3
Line 4
Line 5 - scroll appears immediately`})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsxs("div",{children:[e.jsx("h4",{className:"typo-ui-label-lg text-text-pr",children:"Auto-Growing (No Limit)"}),e.jsx("p",{className:"typo-ui-body-sm text-text-ter",children:"Grows infinitely with content"})]}),e.jsx(s,{placeholder:"I grow without limits...",autoGrow:!0,defaultValue:`Line 1
Line 2
Line 3
Line 4
Line 5
Line 6 - still growing
Line 7 - keeps expanding`})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsxs("div",{children:[e.jsx("h4",{className:"typo-ui-label-lg text-text-pr",children:"Auto-Growing with Max Height (Recommended)"}),e.jsx("p",{className:"typo-ui-body-sm text-text-ter",children:"Grows to 5 lines, then scrolls - best of both worlds"})]}),e.jsx(s,{placeholder:"I grow smartly...",autoGrow:!0,maxLines:5,minLines:2,defaultValue:`Line 1
Line 2
Line 3
Line 4
Line 5
Line 6 - now I scroll
Line 7 - perfect balance!`})]})]})]})};export{A as Default,I as FixedVsGrowingComparison,C as FlashcardUseCase,F as MaxHeightDemonstration,V as WithMaxLines,M as default};
