/**
 * @license
 * Copyright 2016 Palantir Technologies, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/* tslint:disable:object-literal-key-quotes */
export const rules = {
    "align": [true,
        "parameters",
        "statements",
    ],
    "class-name": true,
    "comment-format": [true,
        "check-space",
    ],
    "curly": true,
    "eofline": true,
    "forin": true,
    "indent": [true, "spaces"],
    "interface-name": [true, "always-prefix"],
    "jsdoc-format": true,
    "label-position": true,
    "label-undefined": true,
    "max-line-length": [true, 120],
    "member-access": true,
    "member-ordering": [true,
        { "order": "statics-first" },
    ],
    "new-parens": true,
    "no-any": false,
    "no-arg": true,
    "no-bitwise": true,
    "no-conditional-assignment": true,
    "no-consecutive-blank-lines": true,
    "no-console": [true,
        "debug",
        "info",
        "log",
        "time",
        "timeEnd",
        "trace",
    ],
    "no-construct": true,
    "no-constructor-vars": false,
    "no-debugger": true,
    "no-duplicate-key": true,
    "no-duplicate-variable": true,
    "no-empty": true,
    "no-eval": true,
    "no-internal-module": true,
    "no-namespace": true,
    "no-reference": true,
    "no-shadowed-variable": true,
    "no-string-literal": true,
    "no-switch-case-fall-through": false,
    "no-trailing-whitespace": true,
    "no-unreachable": true,
    "no-unused-expression": true,
    "no-unused-new": true,
    "no-unused-variable": [true, "react"],
    // disable this rule as it is very heavy performance-wise and not that useful
    "no-use-before-declare": false,
    "no-var-keyword": true,
    "no-var-requires": true,
    "object-literal-sort-keys": true,
    "one-line": [true,
        "check-catch",
        "check-else",
        "check-finally",
        "check-open-brace",
        "check-whitespace",
    ],
    "one-variable-per-declaration": [true,
        "ignore-for-loop",
    ],
    "quotemark": [true, "double", "avoid-escape"],
    "radix": true,
    "semicolon": [true, "always"],
    "switch-default": true,
    "trailing-comma": [true,
        {
            "multiline": "always",
            "singleline": "never",
        },
    ],
    "triple-equals": [true, "allow-null-check"],
    "typedef": false,
    "typedef-whitespace": [true,
        {
            "call-signature": "nospace",
            "index-signature": "nospace",
            "parameter": "nospace",
            "property-declaration": "nospace",
            "variable-declaration": "nospace",
        }, {
            "call-signature": "onespace",
            "index-signature": "onespace",
            "parameter": "onespace",
            "property-declaration": "onespace",
            "variable-declaration": "onespace",
        },
    ],
    "use-isnan": true,
    "variable-name": [true,
        "ban-keywords",
        "check-format",
        "allow-pascal-case",
    ],
    "whitespace": [true,
        "check-branch",
        "check-decl",
        "check-operator",
        "check-separator",
        "check-type",
        "check-typecast",
    ],
};
/* tslint:enable:object-literal-key-quotes */