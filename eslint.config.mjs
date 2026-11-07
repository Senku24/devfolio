import nextCoreWebVitals from "eslint-config-next/core-web-vitals";

const eslintConfig = [
  { ignores: [".next/**", "node_modules/**", "out/**", ".npm-cache/**"] },
  ...nextCoreWebVitals,
];

export default eslintConfig;
