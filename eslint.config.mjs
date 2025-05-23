import jsdocPlugin from 'eslint-plugin-jsdoc';
import importPlugin from 'eslint-plugin-import';
import regexpPlugin from 'eslint-plugin-regexp';

// ESM Script supported JSDoc tags 
const esmScriptTags = [
  'attribute', 
  'resource',
  'color',
  'curves',
  'range',
  'placeholder',
  'precision',
  'size',
  'step',
  'title',
  'visibleif',
  'enabledif'
]

export default [
  {
    plugins: {
      import: importPlugin,
      jsdoc: jsdocPlugin,
      regexp: regexpPlugin
    },
    rules: {
      // Possible Problems
      "array-callback-return": "error",
      "constructor-super": "error",
      "for-direction": "error",
      "getter-return": "error",
      "no-async-promise-executor": "error",
      "no-await-in-loop": "error",
      "no-class-assign": "error",
      "no-compare-neg-zero": "error",
      "no-cond-assign": "error",
      "no-const-assign": "error",
      "no-constant-binary-expression": "error",
      "no-constant-condition": [
        "error", {
          "checkLoops": false
        }
      ],
      "no-constructor-return": "error",
      "no-control-regex": "error",
      "no-debugger": "error",
      "no-dupe-args": "error",
      "no-dupe-class-members": "error",
      "no-dupe-else-if": "error",
      "no-dupe-keys": "error",
      "no-duplicate-case": "error",
      "no-duplicate-imports": "error",
      "no-empty-character-class": "error",
      "no-empty-pattern": "error",
      "no-ex-assign": "error",
      "no-fallthrough": "error",
      "no-func-assign": "error",
      "no-import-assign": "error",
      "no-inner-declarations": "error",
      "no-invalid-regexp": "error",
      "no-irregular-whitespace": "error",
      "no-loss-of-precision": "error",
      "no-misleading-character-class": "error",
      "no-new-native-nonconstructor": "error",
      "no-new-symbol": "error",
      "no-obj-calls": "error",
      "no-promise-executor-return": "error",
      "no-prototype-builtins": "off",
      "no-self-assign": "error",
      "no-self-compare": "error",
      "no-setter-return": "error",
      "no-sparse-arrays": "error",
      "no-template-curly-in-string": "error",
      "no-this-before-super": "error",
      "no-undef": "error",
      "no-unexpected-multiline": "error",
      "no-unmodified-loop-condition": "error",
      "no-unreachable": "error",
      "no-unreachable-loop": "error",
      "no-unsafe-finally": "error",
      "no-unsafe-negation": "error",
      "no-unsafe-optional-chaining": "error",
      "no-unused-private-class-members": "error",
      "no-unused-vars": [
        "error", {
          "args": "none",
          "caughtErrors": "none"
        }
      ],
      "no-use-before-define": [
        "error", {
          "functions": false
        }
      ],
      "no-useless-backreference": "error",
      "require-atomic-updates": "error",
      "use-isnan": "error",
      "valid-typeof": "error",

      // Suggestions
      "accessor-pairs": "error",
      "arrow-body-style": "off",
      "block-scoped-var": "error",
      "camelcase": "off",
      "capitalized-comments": "off",
      "class-methods-use-this": "off",
      "complexity": "off",
      "consistent-return": "off",
      "consistent-this": "off",
      "curly": ["error", "multi-line"],
      "default-case": "off",
      "default-case-last": "off",
      "default-param-last": "off",
      "dot-notation": "error",
      "eqeqeq": ["error", "smart"],
      "func-name-matching": "error",
      "func-names": "off",
      "func-style": "off",
      "grouped-accessor-pairs": ["error", "setBeforeGet"],
      "guard-for-in": "off",
      "id-denylist": "off",
      "id-length": "off",
      "id-match": "off",
      "init-declarations": "off",
      "logical-assignment-operators": "off",
      "max-classes-per-file": "off",
      "max-depth": "off",
      "max-lines": "off",
      "max-lines-per-function": "off",
      "max-nested-callbacks": "off",
      "max-params": "off",
      "max-statements": "off",
      "multiline-comment-style": ["warn", "separate-lines"],
      "new-cap": "off",
      "no-alert": "error",
      "no-array-constructor": "error",
      "no-bitwise": "off",
      "no-caller": "error",
      "no-case-declarations": "error",
      "no-confusing-arrow": "error",
      "no-console": "off",
      "no-continue": "off",
      "no-delete-var": "error",
      "no-div-regex": "error",
      "no-else-return": "error",
      "no-empty": [
        "error", {
          "allowEmptyCatch": true
        }
      ],
      "no-empty-function": "off",
      "no-empty-static-block": "error",
      "no-eq-null": "off",
      "no-eval": "error",
      "no-extend-native": "error",
      "no-extra-bind": "error",
      "no-extra-boolean-cast": "off",
      "no-extra-label": "error",
      "no-extra-semi": "error",
      "no-floating-decimal": "error",
      "no-global-assign": "error",
      "no-implicit-coercion": "off",
      "no-implicit-globals": "error",
      "no-implied-eval": "error",
      "no-inline-comments": "off",
      "no-invalid-this": "off",
      "no-iterator": "error",
      "no-label-var": "error",
      "no-labels": "error",
      "no-lone-blocks": "error",
      "no-lonely-if": "off",
      "no-loop-func": "error",
      "no-magic-numbers": "off",
      "no-mixed-operators": "off",
      "no-multi-assign": "off",
      "no-multi-str": "error",
      "no-negated-condition": "off",
      "no-nested-ternary": "off",
      "no-new": "warn",
      "no-new-func": "error",
      "no-new-object": "error",
      "no-new-wrappers": "error",
      "no-nonoctal-decimal-escape": "error",
      "no-octal": "error",
      "no-octal-escape": "error",
      "no-param-reassign": "off",
      "no-plusplus": "off",
      "no-proto": "error",
      "no-redeclare": "error",
      "no-regex-spaces": "error",
      "no-restricted-exports": "error",
      "no-restricted-globals": "off",
      "no-restricted-imports": "error",
      "no-restricted-properties": "off",
      "no-restricted-syntax": "error",
      "no-return-assign": "error",
      "no-script-url": "error",
      "no-sequences": "error",
      "no-shadow": "off",
      "no-shadow-restricted-names": "error",
      "no-ternary": "off",
      "no-throw-literal": "error",
      "no-undef-init": "error",
      "no-undefined": "off",
      "no-underscore-dangle": "off",
      "no-unneeded-ternary": "error",
      "no-unused-expressions": "error",
      "no-unused-labels": "error",
      "no-useless-call": "error",
      "no-useless-catch": "error",
      "no-useless-computed-key": "error",
      "no-useless-concat": "error",
      "no-useless-constructor": "error",
      "no-useless-escape": "off",
      "no-useless-rename": "error",
      "no-useless-return": "error",
      "no-var": "error",
      "no-void": "error",
      "no-warning-comments": "off",
      "no-with": "error",
      "object-shorthand": "off",
      "one-var": "off",
      "one-var-declaration-per-line": "off",
      "operator-assignment": ["error", "always"],
      "prefer-arrow-callback": "error",
      "prefer-const": "error",
      "prefer-destructuring": "off",
      "prefer-exponentiation-operator": "off",
      "prefer-named-capture-group": "off",
      "prefer-numeric-literals": "error",
      "prefer-object-has-own": "off",
      "prefer-object-spread": "off",
      "prefer-promise-reject-errors": "error",
      "prefer-regex-literals": "off",
      "prefer-rest-params": "off",
      "prefer-spread": "warn",
      "prefer-template": "error",
      "quote-props": "off",
      "radix": "error",
      "require-await": "error",
      "require-unicode-regexp": "off",
      "require-yield": "error",
      "sort-imports": "off",
      "sort-keys": "off",
      "sort-vars": "off",
      "spaced-comment": [
        "error", "always", {
          "exceptions": ["/"]
        }
      ],
      "strict": "error",
      "symbol-description": "error",
      "vars-on-top": "off",
      "yoda": "error",

      // Layout & Formatting
      "array-bracket-newline": ["error", "consistent"],
      "array-bracket-spacing": ["error", "never"],
      "array-element-newline": "off",
      "arrow-parens": [
        "error", "as-needed", {
          "requireForBlockBody": true
        }
      ],
      "arrow-spacing": "error",
      "block-spacing": "error",
      "brace-style": "error",
      "comma-dangle": ["error", "never"],
      "comma-spacing": [
        "error", {
          "before": false,
          "after": true
        }
      ],
      "comma-style": ["error", "last"],
      "computed-property-spacing": ["error", "never"],
      "dot-location": ["error", "property"],
      "eol-last": ["error", "always"],
      "func-call-spacing": ["error", "never"],
      "function-call-argument-newline": "off",
      "function-paren-newline": "off",
      "generator-star-spacing": "error",
      "implicit-arrow-linebreak": "error",
      "indent": ["error", 4, {
        "MemberExpression": 0,
        "SwitchCase": 1
      }],
      "jsx-quotes": "off",
      "key-spacing": [
        "error", {
          "beforeColon": false,
          "afterColon": true
        }
      ],
      "keyword-spacing": [
        "error", {
          "before": true,
          "after": true
        }
      ],
      "line-comment-position": "off",
      "linebreak-style": "off",
      "lines-around-comment": "off",
      "lines-between-class-members": ["error", "always"],
      "max-len": "off",
      "max-statements-per-line": "off",
      "multiline-ternary": "off",
      "new-parens": "error",
      "newline-per-chained-call": "off",
      "no-extra-parens": ["error", "functions"],
      "no-mixed-spaces-and-tabs": "error",
      "no-multi-spaces": [
        "error", {
          "ignoreEOLComments": true,
          "exceptions": {
            "ArrayExpression": true,
            "AssignmentExpression": true,
            "BinaryExpression": true,
            "IfStatement": true,
            "LogicalExpression": true,
            "SwitchCase": true,
            "VariableDeclarator": true
          }
        }
      ],
      "no-multiple-empty-lines": [
        "error", {
          "max": 2,
          "maxBOF": 0,
          "maxEOF": 0
        }
      ],
      "no-tabs": "error",
      "no-trailing-spaces": "error",
      "no-whitespace-before-property": "error",
      "nonblock-statement-body-position": "off",
      "object-curly-newline": [
        "error", {
          "consistent": true
        }
      ],
      "object-curly-spacing": ["error", "always"],
      "object-property-newline": [
        "error", {
          "allowAllPropertiesOnSameLine": true
        }
      ],
      "operator-linebreak": ["error", "after"],
      "padded-blocks": [
        "error", {
          "classes": "never"
        }
      ],
      "padding-line-between-statements": "off",
      "quotes": ["error", "single"],
      "rest-spread-spacing": "error",
      "semi": ["error", "always"],
      "semi-spacing": [
        "error", {
          "before": false,
          "after": true
        }
      ],
      "semi-style": ["error", "last"],
      "space-before-blocks": "error",
      "space-before-function-paren": [
        "error", {
          "anonymous": "always",
          "named": "never"
        }
      ],
      "space-in-parens": ["error", "never"],
      "space-infix-ops": [
        "error", {
          "int32Hint": false
        }
      ],
      "space-unary-ops": [
        "error", {
          "words": true,
          "nonwords": false,
          "overrides": {
          }
      }],
      "switch-colon-spacing": [
        "error", {
          "after": true,
          "before": false
        }
      ],
      "template-curly-spacing": "error",
      "template-tag-spacing": "error",
      "unicode-bom": ["error", "never"],
      "wrap-iife": "off",
      "wrap-regex": "off",
      "yield-star-spacing": "error",

      // Import rules

      // Static analysis
      "import/default": "error",
      "import/named": "error",
      "import/namespace": "error",
      "import/no-unresolved": "error",
      "import/order": ["error", {
        "groups": ["builtin", "external", "internal", ["parent", "sibling"], "index", "unknown"],
        "newlines-between": "always",
        "alphabetize": { "order": "asc", "caseInsensitive": true }
      }],

      // Helpful warnings
      "import/export": "error",
      "import/no-named-as-default": "warn",
      "import/no-named-as-default-member": "warn",

      // Style guide
      "import/extensions": ["error", "ignorePackages", { "ts": "never", "tsx": "never" }],
      "import/no-duplicates": "warn",

      // JSDoc rules
      "jsdoc/check-access": "error",
      "jsdoc/check-alignment": "error",
      "jsdoc/check-examples": "off",
      "jsdoc/check-indentation": "off",
      "jsdoc/check-line-alignment": "error",
      "jsdoc/check-param-names": "off",
      "jsdoc/check-property-names": "error",
      "jsdoc/check-syntax": "error",
      "jsdoc/check-tag-names": ["error", { "definedTags": [...esmScriptTags, "alpha", "beta", "category", "import"] }],
      "jsdoc/check-types": "off",
      "jsdoc/check-values": "error",
      "jsdoc/empty-tags": "error",
      "jsdoc/implements-on-classes": "error",
      "jsdoc/informative-docs": "off",
      "jsdoc/match-description": "off",
      "jsdoc/match-name": "off",
      "jsdoc/multiline-blocks": "error",
      "jsdoc/no-bad-blocks": "error",
      "jsdoc/no-blank-block-descriptions": "error",
      "jsdoc/no-blank-blocks": "error",
      "jsdoc/no-defaults": "error",
      "jsdoc/no-missing-syntax": "off",
      "jsdoc/no-multi-asterisks": "error",
      "jsdoc/no-restricted-syntax": "off",
      "jsdoc/no-types": "off",
      "jsdoc/no-undefined-types": "off",
      "jsdoc/require-asterisk-prefix": "error",
      "jsdoc/require-description": "off",
      "jsdoc/require-description-complete-sentence": [
        "off", {
          "abbreviations": ["e.g."]
        }
      ],
      "jsdoc/require-example": "off",
      "jsdoc/require-file-overview": "off",
      "jsdoc/require-hyphen-before-param-description": ["error", "always"],
      "jsdoc/require-jsdoc": "off",
      "jsdoc/require-param": "error",
      "jsdoc/require-param-description": "error",
      "jsdoc/require-param-name": "error",
      "jsdoc/require-param-type": "error",
      "jsdoc/require-property": "error",
      "jsdoc/require-property-description": "error",
      "jsdoc/require-property-name": "error",
      "jsdoc/require-property-type": "error",
      "jsdoc/require-returns": "error",
      "jsdoc/require-returns-check": "error",
      "jsdoc/require-returns-description": "error",
      "jsdoc/require-returns-type": "error",
      "jsdoc/require-throws": "off",
      "jsdoc/require-yields": "error",
      "jsdoc/require-yields-check": "error",
      "jsdoc/sort-tags": "off",
      "jsdoc/tag-lines": "off",
      "jsdoc/text-escaping": "off",
      "jsdoc/valid-types": "off",

      // Regex rules
      "no-control-regex": "error",
      "no-misleading-character-class": "error",
      "no-regex-spaces": "error",
      "prefer-regex-literals": "error",
      "no-invalid-regexp": "off",
      "no-useless-backreference": "off",
      "no-empty-character-class": "off",
      "regexp/confusing-quantifier": "warn",
      "regexp/control-character-escape": "error",
      "regexp/match-any": "error",
      "regexp/negation": "error",
      "regexp/no-contradiction-with-assertion": "error",
      "regexp/no-dupe-characters-character-class": "error",
      "regexp/no-dupe-disjunctions": "error",
      "regexp/no-empty-alternative": "warn",
      "regexp/no-empty-capturing-group": "error",
      "regexp/no-empty-character-class": "error",
      "regexp/no-empty-group": "error",
      "regexp/no-empty-lookarounds-assertion": "error",
      "regexp/no-empty-string-literal": "error",
      "regexp/no-escape-backspace": "error",
      "regexp/no-extra-lookaround-assertions": "error",
      "regexp/no-invalid-regexp": "error",
      "regexp/no-invisible-character": "error",
      "regexp/no-lazy-ends": "warn",
      "regexp/no-legacy-features": "error",
      "regexp/no-misleading-capturing-group": "error",
      "regexp/no-misleading-unicode-character": "error",
      "regexp/no-missing-g-flag": "error",
      "regexp/no-non-standard-flag": "error",
      "regexp/no-obscure-range": "error",
      "regexp/no-optional-assertion": "error",
      "regexp/no-potentially-useless-backreference": "warn",
      "regexp/no-super-linear-backtracking": "error",
      "regexp/no-trivially-nested-assertion": "error",
      "regexp/no-trivially-nested-quantifier": "error",
      "regexp/no-unused-capturing-group": "error",
      "regexp/no-useless-assertions": "error",
      "regexp/no-useless-backreference": "error",
      "regexp/no-useless-character-class": "error",
      "regexp/no-useless-dollar-replacements": "error",
      "regexp/no-useless-escape": "error",
      "regexp/no-useless-flag": "warn",
      "regexp/no-useless-lazy": "error",
      "regexp/no-useless-non-capturing-group": "error",
      "regexp/no-useless-quantifier": "error",
      "regexp/no-useless-range": "error",
      "regexp/no-useless-set-operand": "error",
      "regexp/no-useless-string-literal": "error",
      "regexp/no-useless-two-nums-quantifier": "error",
      "regexp/no-zero-quantifier": "error",
      "regexp/optimal-lookaround-quantifier": "warn",
      "regexp/optimal-quantifier-concatenation": "error",
      "regexp/prefer-character-class": "error",
      "regexp/prefer-d": "error",
      "regexp/prefer-plus-quantifier": "error",
      "regexp/prefer-predefined-assertion": "error",
      "regexp/prefer-question-quantifier": "error",
      "regexp/prefer-range": "error",
      "regexp/prefer-set-operation": "error",
      "regexp/prefer-star-quantifier": "error",
      "regexp/prefer-unicode-codepoint-escapes": "error",
      "regexp/prefer-w": "error",
      "regexp/simplify-set-operations": "error",
      "regexp/sort-flags": "error",
      "regexp/strict": "error",
      "regexp/use-ignore-case": "error",
    }
  }
];
