import pluginTester from 'babel-plugin-tester';
import plugin from './babel-plugin';

const fullExample = `
import { css, keyframes, createGlobalStyle } from 'foliage';
const part = css\`
  color: black;
  & > * { padding-left: 1rem; }
\`

const anim = keyframes\`
  0% { transform: rotate(0deg) }
  100% { transform: rotate(180deg) }
\`

const glob = createGlobalStyle\`
  body {
    position: fixed;
    top: 0;
    left: 0;
  }
\`
`;

const namespaceSupport = `
import * as example from 'foliage';
const part = example.css\`
  color: black;
  & > * { padding-left: 1rem; }
\`

const anim = example.keyframes\`
  0% { transform: rotate(0deg) }
  100% { transform: rotate(180deg) }
\`

const glob = example.createGlobalStyle\`
  body {
    position: fixed;
    top: 0;
    left: 0;
  }
\`

const theme = example.vars\`
  --demo: 123px;
\`
`;

const doNotCompilesThirdParty = `
import { css, keyframes, createGlobalStyle } from 'styled-components';
const part = css\`color:black;\`
const anim = keyframes\`from{color: black;} to {color: white;}\`
const glob = createGlobalStyle\`body{display: grid}\`
`;

const cssInterpolationInCss = `
import { css } from 'foliage';
const first = css\`
  color: black;
  & > * { padding-left: 1rem; }
\`
const second = css\`
  color: red;
  & \${first} {
    color: white;
  }
\`
`;

const keyframesInterpolationInCss = `
import { css, keyframes } from 'foliage';

const anim = keyframes\`
  0% { transform: rotate(0deg) }
  100% { transform: rotate(180deg) }
\`

const element = css\`
  color: red;
  animation: 3s ease-in 1s infinite \${anim};
\`
`;

const interpolation = `
import { css, keyframes } from 'foliage';

const theme = {
  size: {
    normal: '--demo-size-normal',
  }
}

const first = css\`
  display: block;
\`

const pulse = keyframes\`
  0% { opacity: 1 }
  50% { opacity: 0.2 }
  100% { opacity: 1 }
\`

const second = css\`
  font-size: var(\${theme.size.normal});
  animation: 1s ease-in-out infinite \${pulse};

  \${first} & {
    display: flex;
  }
\`
`;

const interpolationWithNamespace = `
import * as foli from 'foliage';

const theme = {
  size: {
    normal: '--demo-size-normal',
  }
}

const first = foli.css\`
  display: block;
\`

const pulse = foli.keyframes\`
  0% { opacity: 1 }
  50% { opacity: 0.2 }
  100% { opacity: 1 }
\`

const second = foli.css\`
  font-size: var(\${theme.size.normal});
  animation: 1s ease-in-out infinite \${pulse};

  \${first} & {
    display: flex;
  }
\`
`;

const combination = `
import { css } from 'foliage'
import * as f from 'foliage'

const theme = {
  size: {
    normal: '--demo-size-normal',
  }
}

const first = css\`
  display: block;
  \${theme.size.normal}: 12px;
\`

const pulse = f.keyframes\`
  0% { opacity: 1 }
  50% { opacity: 0.2 }
  100% { opacity: 1 }
\`

const second = f.css\`
  font-size: var(\${theme.size.normal});
  animation: 1s ease-in-out infinite \${pulse};

  \${first} & {
    display: flex;
  }
\`
`;

const assertsDoNotConflictsWithExistsDeclarations = `
import { css, keyframes } from 'foliage'

function _assertKeyframe() {}
const _assertVariable = 1;
const _assertSelector = () => {};
function assertKeyframe() {}

const size = '--demo-size';
const speed = '--demo-anim-speed';

const anim = keyframes\`
  from { opacity: 0 };
  to: { opacity: 1 };
\`;

const first = css\`
  color: black;
  font-size: var(\${size});
  animation: var(\${speed}) infinite linear \${anim};
\`;
`;

const componentWithVariantsDeclaration = `
import { css, component } from 'foliage-react';

const size = '--ui-size';

const chip = css\`
  color: white;
  background-color: black;
  border-radius: 4px;
  padding: var(\${size});
\`

export const Chip = component('div', [chip], {
  defaults: { size: 'normal' },
  variants: {
    size: {
      small: css\` \${size}: 6px; \`,
      normal: css\` \${size}: 8px; \`,
      large: css\` \${size}: 12px; \`,
    }
  }
})
`;

const deepNestingDeterminesName = `
import { css } from 'foliage';
const first = {
  second: {
    third: css\` color: black \`,
    fifth: {
      sixth: css\`color:white;\`
    },
  },
  fourth: css\`color:red\`
}
`;

const selectorOfComponent = `
import { css } from 'foliage';
const button = css\`
  padding: 1rem 2rem;
  border: 2px solid gray;
  border-radius: 1rem;
  color: white;
  background-color: black;
  appearance: none;
\`;

const primary = css\`
  background-color: black;
  color: white;
  padding: 1rem 2rem;

  \${button} {
    background-color: red;
    color: white;
  }
\`;
`;

const selectorOfComponentWithPseudoSelector = `
import { css } from 'foliage';
const button = css\`
  padding: 1rem 2rem;
  border: 2px solid gray;
  border-radius: 1rem;
  color: white;
  background-color: black;
  appearance: none;
\`;

const primary = css\`
  background-color: black;
  color: white;
  padding: 1rem 2rem;

  \${button}:hover {
    background-color: red;
    color: white;
  }
\`;
`;

pluginTester({
  pluginName: 'foliage',
  plugin,
  pluginOptions: { debug: true },
  root: __dirname,
  filename: __filename,
  babelOptions: { filename: __filename },
  snapshot: true,
  tests: {
    cssImportedFromPackage: `import {css} from 'foliage'; const example = css\`color: black\``,
    cssRenamedFromPackage: `import {css as demo} from 'foliage'; const example = demo\`justify-content: center;\``,
    withoutDebugNamesNotAdded: {
      code: `import {css} from 'foliage'; const example = css\`span{display:grid}\``,
      pluginOptions: { debug: false },
    },
    cssImportedFromReact: `import {css} from 'foliage-react'; const demo = css\`.global & { [data-demo="a"] {color: black} }\``,
    cssImportedFromLocal: {
      code: `import {css} from '../react'; const demo = css\`.global & { [data-demo="a"] {color: black} }\``,
      pluginOptions: {
        allowedModules: ['../react'],
      },
    },
    keyframesAndGlobalStylesShouldCompile: fullExample,
    varsNotCompiles: `import {vars, css} from 'foliage'; const a = css\`outline: none;\`; const b = vars\`--random: 1px;\``,
    namespaceSupport,
    doNotCompilesThirdParty,
    cssInterpolationInCss,
    interpolationWithNamespace,
    keyframesInterpolationInCss,
    prefixAdd: {
      code: fullExample,
      pluginOptions: { prefix: 'prefix', debug: true },
    },
    prefixExistsWithoutDebug: {
      code: fullExample,
      pluginOptions: { prefix: 'prefix', debug: false },
    },
    fullInterpolationExample: interpolation,
    assertsDoNotConflictsWithExistsDeclarations,
    componentWithVariantsDeclaration,
    deepNestingDeterminesName,
    combination,
    selectorOfComponent,
    selectorOfComponentWithPseudoSelector,
  },
});
