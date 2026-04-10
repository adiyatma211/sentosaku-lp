import eslintPluginNext from "@next/eslint-plugin-next";

const eslintConfig = [
  {
    ignores: [
      ".next/**",
      "out/**",
      "build/**",
      "next-env.d.ts",
    ],
  },
  eslintPluginNext.flatConfig.recommended,
];

export default eslintConfig;
