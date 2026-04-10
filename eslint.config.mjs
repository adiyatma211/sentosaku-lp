const eslintConfig = [
  {
    ignores: [
      ".next/**",
      "out/**",
      "build/**",
      "next-env.d.ts",
    ],
  },
  ...require("eslint-plugin-next").flatConfigs.recommended,
  ...require("eslint-plugin-next").flatConfigs["typescript/recommended"],
];

export default eslintConfig;
