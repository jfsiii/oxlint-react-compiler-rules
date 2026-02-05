# Oxlint + React Compiler Rules

This project demonstrates using React Compiler rules through Oxlint's JS plugin feature.

## Using React Compiler Rules with Oxlint

[A lot of common rules](https://oxc.rs/docs/guide/usage/linter/rules.html#rules) have been ported over to Rust and can run natively in Oxlint, however Oxlint supports loading ESLint plugins via the `jsPlugins` configuration. This allows you to use ESLint plugins directly in Oxlint, including React Compiler/Hooks rules.

### Configuration

Add the plugin to your `.oxlintrc.json`:

```json
{
  "jsPlugins": [
    {
      "name": "react-hooks-js",
      "specifier": "eslint-plugin-react-hooks"
    }
  ],
  "rules": {
    "react-hooks-js/set-state-in-render": "error"
  }
}
```

The `jsPlugins` array loads the `eslint-plugin-react-hooks` package and makes its rules available under the `react-hooks-js` (or any other custom) namespace. You have to use a different name as `react-hooks` is a reserved name, [given that a big chunk is available through Oxlint itself](https://github.com/oxc-project/oxc/issues/1022). You can then configure individual rules using the plugin namespace as a prefix.

At the time of writing, rules have to be enabled explicitly, as they are not automatically enabled by the plugin.

## Demo App

This repository includes a simple React + Vite 8 beta + Oxlint demo app that demonstrates the `set-state-in-render` rule in action.

The demo app (`src/App.tsx`) contains an intentional bug:

```tsx
export default function App({value}: {value: number}) {
  const [count, setCount] = useState(0);
  setCount(value); // Infinite loop! This will be caught by the linter
  return <div>{count}</div>;
}
```

Calling `setCount` directly in the component body causes an infinite render loop, which the `react-hooks-js/set-state-in-render` rule will detect.

### Running the Demo

Install dependencies:
```bash
pnpm install
```

Run the linter to see the rule in action:
```bash
pnpm lint
```

You should see an error pointing to the problematic `setCount` call in `src/App.tsx:5`.

Start the development server:
```bash
pnpm dev
```