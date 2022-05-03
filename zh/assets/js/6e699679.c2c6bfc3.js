"use strict";(self.webpackChunkstarcoin_cookbook=self.webpackChunkstarcoin_cookbook||[]).push([[9971],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return _}});var o=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=o.createContext({}),u=function(e){var n=o.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},p=function(e){var n=u(e.components);return o.createElement(l.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},d=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=u(t),_=r,m=d["".concat(l,".").concat(_)]||d[_]||c[_]||a;return t?o.createElement(m,s(s({ref:n},p),{},{components:t})):o.createElement(m,s({ref:n},p))}));function _(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,s=new Array(a);s[0]=d;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var u=2;u<a;u++)s[u]=t[u];return o.createElement.apply(null,s)}return o.createElement.apply(null,t)}d.displayName="MDXCreateElement"},7091:function(e,n,t){t.r(n),t.d(n,{assets:function(){return p},contentTitle:function(){return l},default:function(){return _},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return c}});var o=t(7462),r=t(3366),a=(t(7294),t(3905)),s=["components"],i={},l=void 0,u={unversionedId:"move/move-test/move-unit-test",id:"move/move-test/move-unit-test",title:"move-unit-test",description:"Move \u5355\u5143\u6d4b\u8bd5",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/03-move/97-move-test/01-move-unit-test.md",sourceDirName:"03-move/97-move-test",slug:"/move/move-test/move-unit-test",permalink:"/starcoin-cookbook/zh/docs/move/move-test/move-unit-test",editUrl:"https://github.com/starcoinorg/starcoin-cookbook/edit/main/docs/03-move/97-move-test/01-move-unit-test.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"For solidity developer",permalink:"/starcoin-cookbook/zh/docs/move/for-solidity-developer"},next:{title:"move-integration-test",permalink:"/starcoin-cookbook/zh/docs/move/move-test/move-integration-test"}},p={},c=[{value:"Move \u5355\u5143\u6d4b\u8bd5",id:"move-\u5355\u5143\u6d4b\u8bd5",level:2},{value:"\u6d4b\u8bd5\u6ce8\u89e3 - \u610f\u601d\u548c\u7528\u6cd5",id:"\u6d4b\u8bd5\u6ce8\u89e3---\u610f\u601d\u548c\u7528\u6cd5",level:3},{value:"\u6267\u884c\u5355\u5143\u6d4b\u8bd5",id:"\u6267\u884c\u5355\u5143\u6d4b\u8bd5",level:3},{value:"\u4f8b\u5b50",id:"\u4f8b\u5b50",level:3},{value:"\u6d4b\u8bd5\u547d\u4ee4\u7684\u53c2\u6570",id:"\u6d4b\u8bd5\u547d\u4ee4\u7684\u53c2\u6570",level:3},{value:"<code>-f &lt;str&gt; | --filter &lt;str&gt;</code>",id:"-f-str----filter-str",level:4},{value:"<code>-i &lt;bound&gt; or --instructions &lt;bound&gt;</code>",id:"-i-bound-or---instructions-bound",level:4},{value:"<code>-s</code> or <code>--statistics</code>",id:"-s-or---statistics",level:4},{value:"<code>-g</code> or <code>--state-on-error</code>",id:"-g-or---state-on-error",level:4}],d={toc:c};function _(e){var n=e.components,t=(0,r.Z)(e,s);return(0,a.kt)("wrapper",(0,o.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"move-\u5355\u5143\u6d4b\u8bd5"},"Move \u5355\u5143\u6d4b\u8bd5"),(0,a.kt)("p",null,"Move \u7684\u5355\u5143\u6d4b\u8bd5\u662f\u901a\u8fc7\u6e90\u8bed\u8a00\u7684\u4e09\u4e2a\u65b0\u7684\u6ce8\u89e3\u6765\u5b9e\u73b0\u7684\u3002"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"#[test]")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"#[test_only]")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"#[expected_failure]"))),(0,a.kt)("p",null,"\u5b83\u4eec\u5206\u522b:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5c06\u4e00\u4e2a\u51fd\u6570\u6807\u8bb0\u4e3a\u6d4b\u8bd5\uff0c"),(0,a.kt)("li",{parentName:"ul"},"\u5c06\u4e00\u4e2a\u6a21\u5757\u6216\u6a21\u5757\u6210\u5458\uff08\u4f7f\u7528\u3001\u51fd\u6570\u6216\u7ed3\u6784\uff09\u6807\u8bb0\u4e3a\u4ec5\u7528\u4e8e\u6d4b\u8bd5\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u4ee5\u53ca\u6807\u8bb0\u4e00\u4e2a\u6d4b\u8bd5\u9884\u8ba1\u4f1a\u5931\u8d25\u3002")),(0,a.kt)("p",null,"\u8fd9\u4e9b\u6ce8\u89e3\u53ef\u4ee5\u653e\u5728\u4e00\u4e2a\u5177\u6709\u4efb\u4f55\u53ef\u89c1\u6027\u7684\u51fd\u6570\u4e0a\u3002\n\u6bcf\u5f53\u4e00\u4e2a\u6a21\u5757\u6216\u6a21\u5757\u6210\u5458\u88ab\u6ce8\u89e3\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"#[test_only]")," \u6216 ",(0,a.kt)("inlineCode",{parentName:"p"},"#[test]")," \uff0c\u5b83\u5c06\u4e0d\u4f1a\u88ab\u5305\u542b\u5728\u7f16\u8bd1\u7684\u5b57\u8282\u7801\u4e2d\uff0c\u9664\u975e\u5b83\u662f\u5728\u6d4b\u8bd5\u573a\u666f\u4e0b\u7f16\u8bd1\u7684\u3002"),(0,a.kt)("h3",{id:"\u6d4b\u8bd5\u6ce8\u89e3---\u610f\u601d\u548c\u7528\u6cd5"},"\u6d4b\u8bd5\u6ce8\u89e3 - \u610f\u601d\u548c\u7528\u6cd5"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"#[test]")," \u548c ",(0,a.kt)("inlineCode",{parentName:"p"},"#[expected_failure]")," \u6ce8\u89e3\u53ef\u4ee5\u9009\u62e9\u4e0e\u53c2\u6570\u4e00\u8d77\u4f7f\u7528\u6216\u4e0d\u4e0e\u53c2\u6570\u4e00\u8d77\u4f7f\u7528\u3002"),(0,a.kt)("p",null,"\u5982\u679c\u6ca1\u6709\u53c2\u6570\uff0c\u6ce8\u89e3 ",(0,a.kt)("inlineCode",{parentName:"p"},"#[test]")," \u53ea\u80fd\u653e\u5728\u6ca1\u6709\u53c2\u6570\u7684\u51fd\u6570\u4e0a\u3002\u8be5\u6ce8\u89e3\u53ea\u662f\u7528\u6765\u6807\u8bb0\u67d0\u4e2a\u51fd\u6570\u662f\u6d4b\u8bd5\u51fd\u6570\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"#[test] // OK\nfun this_is_a_test() { ... }\n\n#[test] // Will fail to compile since the test takes an argument\nfun this_is_not_correct(arg: signer) { ... }\n")),(0,a.kt)("p",null,"\u6d4b\u8bd5\u51fd\u6570\u8fd8\u53ef\u4ee5\u52a0\u4e0a ",(0,a.kt)("inlineCode",{parentName:"p"},"#[expected_failure]")," \u6ce8\u89e3\u3002\u8fd9\u4e2a\u6ce8\u89e3\u6807\u8bb0\u4e86\u8fd9\u4e2a\u6d4b\u8bd5\u5e94\u8be5\u4ea7\u751f\u9519\u8bef\u3002\n\u60f3\u8981\u6307\u5b9a\u67d0\u4e2a\u5177\u4f53\u9519\u8bef\u4ee3\u7801\uff0c\u53ef\u4ee5\u7ed9 ",(0,a.kt)("inlineCode",{parentName:"p"},"#[expected_failure]")," \u52a0\u4e0a\u53c2\u6570\uff1a",(0,a.kt)("inlineCode",{parentName:"p"},"#[expected_failure(abort_code = <code>)]"),"\u3002\n\u5982\u679c\u5b83\u4ea7\u751f\u4e0d\u540c\u7684\u9519\u8bef\u4ee3\u7801\u6216\u8005\u4e0d\u629b\u9519\uff0c\u6d4b\u8bd5\u5c06\u5931\u8d25\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"#[test]\n#[expected_failure]\npublic fun this_test_will_abort_and_pass() { abort 1 }\n\n#[test]\n#[expected_failure]\npublic fun test_will_error_and_pass() { 1/0; }\n\n#[test]\n#[expected_failure(abort_code = 0)]\npublic fun test_will_error_and_fail() { 1/0; }\n\n#[test, expected_failure] // Can have multiple in one attribute. This test will pass.\npublic(script) fun this_other_test_will_abort_and_pass() { abort 1 }\n\n")),(0,a.kt)("p",null,"\u5e26\u53c2\u6570\u7684\u6d4b\u8bd5\u6ce8\u89e3\u7684\u5f62\u5f0f\u662f\uff1a",(0,a.kt)("inlineCode",{parentName:"p"},"#[test(<param_name_1> = <address>, ..., <param_name_n> = <address>)]"),".\n\u5982\u679c\u4e00\u4e2a\u51fd\u6570\u4ee5\u8fd9\u79cd\u65b9\u5f0f\u88ab\u6ce8\u91ca\uff0c\u90a3\u4e48\u8be5\u51fd\u6570\u7684\u53c2\u6570\u5fc5\u987b\u662f\u53c2\u6570 ",(0,a.kt)("inlineCode",{parentName:"p"},"<param_name_1>, ..., <param_name_n>")," \u7684\u6392\u5217\u7ec4\u5408.\n\u4e5f\u5c31\u662f\u8bf4\uff0c\u8fd9\u4e9b\u53c2\u6570\u5728\u51fd\u6570\u4e2d\u51fa\u73b0\u7684\u987a\u5e8f\u548c\u5b83\u4eec\u5728\u6d4b\u8bd5\u6ce8\u89e3\u4e2d\u7684\u987a\u5e8f\u4e0d\u4e00\u5b9a\u76f8\u540c\uff0c\u4f46\u5b83\u4eec\u5fc5\u987b\u80fd\u591f\u901a\u8fc7\u540d\u79f0\u76f8\u4e92\u5339\u914d\u3002\n\u76ee\u524d\u6d4b\u8bd5\u53c2\u6570\u53ea\u652f\u6301 ",(0,a.kt)("inlineCode",{parentName:"p"},"signer")," \u7c7b\u578b\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"#[test(arg = @0xC0FFEE)] // OK\nfun this_is_correct_now(arg: signer) { ... }\n\n#[test(wrong_arg_name = @0xC0FFEE)] // Not correct: arg name doesn't match\nfun this_is_incorrect(arg: signer) { ... }\n\n#[test(a = @0xC0FFEE, b = @0xCAFE)] // OK. We support multiple signer arguments, but you must always provide a value for that argument\nfun this_works(a: signer, b: signer) { ... }\n\n// somewhere a named address is declared\n#[test_only] // test-only named addresses are supported\naddress TEST_NAMED_ADDR = @0x1;\n...\n#[test(arg = @TEST_NAMED_ADDR)] // Named addresses are supported!\nfun this_is_correct_now(arg: signer) { ... }\n\n")),(0,a.kt)("p",null,"\u4e00\u4e2a\u9884\u671f\u5931\u8d25\u7684\u6ce8\u89e3\u4e5f\u53ef\u4ee5\u91c7\u53d6 ",(0,a.kt)("inlineCode",{parentName:"p"},"#[expected_failure(abort_code = <u64>)]")," \u7684\u5f62\u5f0f\u3002\n\u5982\u679c\u4e00\u4e2a\u6d4b\u8bd5\u51fd\u6570\u4ee5\u8fd9\u6837\u7684\u65b9\u5f0f\u88ab\u6ce8\u91ca\uff0c\u6d4b\u8bd5\u5fc5\u987b\u4ee5\u7b49\u4e8e ",(0,a.kt)("inlineCode",{parentName:"p"},"<u64>")," \u7684\u9519\u8bef\u4ee3\u7801\u4e2d\u6b62\u3002\u4efb\u4f55\u5176\u4ed6\u7684\u5931\u8d25\u6216\u4e2d\u6b62\u4ee3\u7801\u5c06\u5bfc\u81f4\u6d4b\u8bd5\u5931\u8d25\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"#[test, expected_failure(abort_code = 1)] // This test will fail\nfun this_test_should_abort_and_fail() { abort 0 }\n\n#[test]\n#[expected_failure(abort_code = 0)] // This test will pass\nfun this_test_should_abort_and_pass_too() { abort 0 }\n")),(0,a.kt)("p",null,"\u4e00\u4e2a\u6a21\u5757\u548c\u5b83\u7684\u4efb\u4f55\u6210\u5458\u90fd\u53ef\u4ee5\u88ab\u58f0\u660e\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"#[test_only]"),"\u3002\n\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0c\u88ab\u6807\u8bb0\u7684\u6a21\u5757\u6216\u8005\u6210\u5458\u53ea\u6709\u5728\u6d4b\u8bd5\u6a21\u5f0f\u4e0b\u7f16\u8bd1\u65f6\u624d\u4f1a\u88ab\u5305\u542b\u5728\u7f16\u8bd1\u7684Move\u5b57\u8282\u7801\u4e2d\u3002\n\u4e5f\u53ea\u80fd\u5728\u6d4b\u8bd5\u51fd\u6570\u4e2d\u8c03\u7528\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"#[test_only] // test only attributes can be attached to modules\nmodule ABC { ... }\n\n#[test_only] // test only attributes can be attached to named addresses\naddress ADDR = @0x1;\n\n#[test_only] // .. to uses\nuse 0x1::SomeOtherModule;\n\n#[test_only] // .. to structs\nstruct SomeStruct { ... }\n\n#[test_only] // .. and functions. Can only be called from test code, but not a test\nfun test_only_function(...) { ... }\n\n")),(0,a.kt)("h3",{id:"\u6267\u884c\u5355\u5143\u6d4b\u8bd5"},"\u6267\u884c\u5355\u5143\u6d4b\u8bd5"),(0,a.kt)("p",null,"Move \u9879\u76ee\u7684\u5355\u5143\u6d4b\u8bd5\u53ef\u4ee5\u901a\u8fc7 ",(0,a.kt)("inlineCode",{parentName:"p"},"mpm package test")," \u547d\u4ee4\u6765\u8fd0\u884c\u3002\n\u8fd0\u884c\u6d4b\u8bd5\u65f6\uff0c\u6bcf\u4e2a\u6d4b\u8bd5\u7684\u7ed3\u679c\u6709 PASS\u3001FAIL \u6216 TIMEOUT \u4e09\u79cd\u3002\n\u5982\u679c\u4e00\u4e2a\u6d4b\u8bd5\u6848\u4f8b\u5931\u8d25\u4e86\uff0c\u5931\u8d25\u7684\u4f4d\u7f6e\u548c\u5bfc\u81f4\u5931\u8d25\u7684\u51fd\u6570\u540d\u79f0\u4f1a\u62a5\u544a\u51fa\u6765\uff08\u5982\u679c\u53ef\u80fd\u7684\u8bdd\uff09\u3002\u63a5\u4e0b\u6765\u6709\u4e00\u4e2a\u4f8b\u5b50\u3002\n\u5982\u679c\u4e00\u4e2a\u6d4b\u8bd5\u8d85\u8fc7\u4e86\u53ef\u4ee5\u6267\u884c\u7684\u6700\u5927\u6307\u4ee4\u6570\uff0c\u5b83\u5c06\u88ab\u6807\u8bb0\u4e3a\u8d85\u65f6\u3002\n\u8fd9\u4e2a\u7ea6\u675f\u53ef\u4ee5\u901a\u8fc7\u547d\u4ee4\u53c2\u6570\u6765\u6539\u53d8\uff0c\u5176\u9ed8\u8ba4\u503c\u88ab\u8bbe\u7f6e\u4e3a5000\u6761\u6307\u4ee4\u3002\n\u6b64\u5916\uff0c\u867d\u7136\u6d4b\u8bd5\u7684\u7ed3\u679c\u662f\u786e\u5b9a\u7684\uff0c\u4f46\u6d4b\u8bd5\u9ed8\u8ba4\u662f\u5e76\u884c\u8fd0\u884c\u7684\uff0c\u6240\u4ee5\u6d4b\u8bd5\u7ed3\u679c\u7684\u6392\u5e8f\u662f\u4e0d\u786e\u5b9a\u7684\uff0c\u9664\u975e\u53ea\u7528\u4e00\u4e2a\u7ebf\u7a0b\u8fd0\u884c\uff08\u89c1\u4e0b\u9762\u7684OPTIONS\uff09\u3002"),(0,a.kt)("p",null,"\u66f4\u591a\u7684\u547d\u4ee4\u53c2\u6570\u53ef\u4ee5\u53c2\u770bhelp: ",(0,a.kt)("inlineCode",{parentName:"p"},"mpm pacakge -h")," \u3002"),(0,a.kt)("h3",{id:"\u4f8b\u5b50"},"\u4f8b\u5b50"),(0,a.kt)("p",null,"\u4e0b\u9762\u7684\u4f8b\u5b50\u5c55\u793a\u4e86\u4e00\u4e2a\u4f7f\u7528\u5355\u5143\u6d4b\u8bd5\u7684\u9879\u76ee\u3002"),(0,a.kt)("p",null,"\u9996\u5148\u521b\u5efa\u4e00\u4e2a\u7a7a\u7684\u9879\u76ee\uff0c\u5e76\u8fdb\u5165\u5230\u9879\u76ee\u76ee\u5f55\u4e2d\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$ mpm package new TestExample; cd TestExample\n")),(0,a.kt)("p",null,"\u7136\u540e\u6dfb\u52a0\u4ee5\u4e0b\u5185\u5bb9\u5230 ",(0,a.kt)("inlineCode",{parentName:"p"},"Move.toml"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'[addresses]\nOwner="0xAAAA"\n\n[dependencies]\nMoveStdlib = { git = "https://github.com/move-language/move.git", subdir="language/move-stdlib", rev = "1817aff44ddfff9d5f815e1975f63cdf03040cb7", addr_subst = { "Std" = "0x1" } }\n')),(0,a.kt)("p",null,"\u518d\u7136\u540e\uff0c\u6dfb\u52a0\u4ee5\u4e0b\u4ee3\u7801\uff0c\u653e\u5728 sources \u76ee\u5f55\u4e0b\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"// filename: sources/MyModule.move\nmodule Owner::MyModule {\n\n    struct MyCoin has key { value: u64 }\n\n    public fun make_sure_non_zero_coin(coin: MyCoin): MyCoin {\n        assert!(coin.value > 0, 0);\n        coin\n    }\n\n    public fun has_coin(addr: address): bool {\n        exists<MyCoin>(addr)\n    }\n\n    #[test]\n    fun make_sure_non_zero_coin_passes() {\n        let coin = MyCoin { value: 1 };\n        let MyCoin { value: _ } = make_sure_non_zero_coin(coin);\n    }\n\n    #[test]\n    // Or #[expected_failure] if we don't care about the abort code\n    #[expected_failure(abort_code = 0)]\n    fun make_sure_zero_coin_fails() {\n        let coin = MyCoin { value: 0 };\n        let MyCoin { value: _ } = make_sure_non_zero_coin(coin);\n    }\n\n    #[test_only] // test only helper function\n    fun publish_coin(account: &signer) {\n        move_to(account, MyCoin { value: 1 })\n    }\n\n    #[test(a = @0x1, b = @0x2)]\n    fun test_has_coin(a: signer, b: signer) {\n        publish_coin(&a);\n        publish_coin(&b);\n        assert!(has_coin(@0x1), 0);\n        assert!(has_coin(@0x2), 1);\n        assert!(!has_coin(@0x3), 1);\n    }\n}\n")),(0,a.kt)("p",null,"\u7136\u540e\uff0c\u4f60\u5c31\u53ef\u4ee5\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"mpm pacakge test")," \u6267\u884c\u8fd9\u4e9b\u5355\u5143\u6d4b\u8bd5\u4e86\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$ mpm package test\nBUILDING MoveStdlib\nBUILDING TestExample\nRunning Move unit tests\n[ PASS    ] 0x1::MyModule::make_sure_non_zero_coin_passes\n[ PASS    ] 0x1::MyModule::make_sure_zero_coin_fails\n[ PASS    ] 0x1::MyModule::test_has_coin\nTest result: OK. Total tests: 3; passed: 3; failed: 0\n")),(0,a.kt)("h3",{id:"\u6d4b\u8bd5\u547d\u4ee4\u7684\u53c2\u6570"},"\u6d4b\u8bd5\u547d\u4ee4\u7684\u53c2\u6570"),(0,a.kt)("h4",{id:"-f-str----filter-str"},(0,a.kt)("inlineCode",{parentName:"h4"},"-f <str> | --filter <str>")),(0,a.kt)("p",null,"\u8fd9\u5c06\u53ea\u8fd0\u884c\u540d\u79f0\u4e2d\u5305\u542b\u6709 ",(0,a.kt)("inlineCode",{parentName:"p"},"<str>")," \u7684\u6d4b\u8bd5\u3002"),(0,a.kt)("p",null,'\u4f8b\u5982\uff0c\u5982\u679c\u6211\u4eec\u60f3\u53ea\u8fd0\u884c\u540d\u79f0\u4e2d\u542b\u6709 "zero_coin "\u7684\u6d4b\u8bd5\u3002'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$ mpm package test -f zero_coin\nCACHED MoveStdlib\nBUILDING TestExample\nRunning Move unit tests\n[ PASS    ] 0x1::MyModule::make_sure_non_zero_coin_passes\n[ PASS    ] 0x1::MyModule::make_sure_zero_coin_fails\nTest result: OK. Total tests: 2; passed: 2; failed: 0\n")),(0,a.kt)("h4",{id:"-i-bound-or---instructions-bound"},(0,a.kt)("inlineCode",{parentName:"h4"},"-i <bound> or --instructions <bound>")),(0,a.kt)("p",null,"\u8fd9\u8bbe\u7f6e\u4e86\u6d4b\u8bd5\u6700\u591a\u6240\u80fd\u6267\u884c\u7684\u6307\u4ee4\u4e2a\u6570\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$ mpm package test -i 0\nCACHED MoveStdlib\nBUILDING TestExample\nRunning Move unit tests\n[ TIMEOUT ] 0x1::MyModule::make_sure_non_zero_coin_passes\n[ TIMEOUT ] 0x1::MyModule::make_sure_zero_coin_fails\n[ TIMEOUT ] 0x1::MyModule::test_has_coin\n\nTest failures:\n\nFailures in 0x1::MyModule:\n\n\u250c\u2500\u2500 make_sure_non_zero_coin_passes \u2500\u2500\u2500\u2500\u2500\u2500\n\u2502 Test timed out\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n\n\n\u250c\u2500\u2500 make_sure_zero_coin_fails \u2500\u2500\u2500\u2500\u2500\u2500\n\u2502 Test timed out\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n\n\n\u250c\u2500\u2500 test_has_coin \u2500\u2500\u2500\u2500\u2500\u2500\n\u2502 Test timed out\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n\nTest result: FAILED. Total tests: 3; passed: 0; failed: 3\n")),(0,a.kt)("h4",{id:"-s-or---statistics"},(0,a.kt)("inlineCode",{parentName:"h4"},"-s")," or ",(0,a.kt)("inlineCode",{parentName:"h4"},"--statistics")),(0,a.kt)("p",null,"\u901a\u8fc7\u8fd9\u4e2a\u53c2\u6570\uff0c\u4f60\u53ef\u4ee5\u6536\u96c6\u6709\u5173\u6d4b\u8bd5\u8fd0\u884c\u7684\u7edf\u8ba1\u6570\u636e\uff0c\u62a5\u544a\u6bcf\u4e2a\u6d4b\u8bd5\u7684\u8fd0\u884c\u65f6\u95f4\u548c\u6267\u884c\u7684\u6307\u4ee4\u3002"),(0,a.kt)("p",null,"\u4f8b\u5982\uff0c\u5982\u679c\u6211\u4eec\u60f3\u770b\u5230\u4e0a\u9762\u4f8b\u5b50\u4e2d\u6d4b\u8bd5\u7684\u7edf\u8ba1\u6570\u5b57\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$ mpm package test -s\nCACHED MoveStdlib\nBUILDING TestExample\nRunning Move unit tests\n[ PASS    ] 0x1::MyModule::make_sure_non_zero_coin_passes\n[ PASS    ] 0x1::MyModule::make_sure_zero_coin_fails\n[ PASS    ] 0x1::MyModule::test_has_coin\n\nTest Statistics:\n\n\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502                   Test Name                   \u2502    Time    \u2502   Instructions Executed   \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 0x1::MyModule::make_sure_non_zero_coin_passes \u2502   0.009    \u2502             1             \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 0x1::MyModule::make_sure_zero_coin_fails      \u2502   0.008    \u2502             1             \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 0x1::MyModule::test_has_coin                  \u2502   0.008    \u2502             1             \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n\nTest result: OK. Total tests: 3; passed: 3; failed: 0\n")),(0,a.kt)("h4",{id:"-g-or---state-on-error"},(0,a.kt)("inlineCode",{parentName:"h4"},"-g")," or ",(0,a.kt)("inlineCode",{parentName:"h4"},"--state-on-error")),(0,a.kt)("p",null,"These flags will print the global state for any test failures. e.g., if we added the following (failing) test to the ",(0,a.kt)("inlineCode",{parentName:"p"},"MyModule")," example:"),(0,a.kt)("p",null,"\u8fd9\u4e2a\u53c2\u6570\u5c06\u6253\u5370\u4efb\u4f55\u6d4b\u8bd5\u5931\u8d25\u7684\u5168\u5c40\u72b6\u6001\u3002"),(0,a.kt)("p",null,"\u4f8b\u5982\uff0c\u5982\u679c\u6211\u4eec\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"MyModule")," \u7684\u4f8b\u5b50\u4e2d\u52a0\u5165\u4ee5\u4e0b\uff08\u5931\u8d25\u7684\uff09\u6d4b\u8bd5\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"module Owner::MyModule {\n    ...\n    #[test(a = @0x1)]\n    fun test_has_coin_bad(a: signer) {\n        publish_coin(&a);\n        assert!(has_coin(@0x1), 0);\n        assert!(has_coin(@0x2), 1);\n    }\n}\n")),(0,a.kt)("p",null,"\u8fd0\u884c\u6d4b\u8bd5\uff0c\u6211\u4eec\u4f1a\u5f97\u5230\u4ee5\u4e0b\u7ed3\u679c\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$ mpm package test -g\nCACHED MoveStdlib\nBUILDING TestExample\nRunning Move unit tests\n[ PASS    ] 0x1::MyModule::make_sure_non_zero_coin_passes\n[ PASS    ] 0x1::MyModule::make_sure_zero_coin_fails\n[ PASS    ] 0x1::MyModule::test_has_coin\n[ FAIL    ] 0x1::MyModule::test_has_coin_bad\n\nTest failures:\n\nFailures in 0x1::MyModule:\n\n\u250c\u2500\u2500 test_has_coin_bad \u2500\u2500\u2500\u2500\u2500\u2500\n\u2502 error[E11001]: test failure\n\u2502    \u250c\u2500 /home/tzakian/TestExample/sources/MyModule.move:47:10\n\u2502    \u2502\n\u2502 44 \u2502      fun test_has_coin_bad(a: signer) {\n\u2502    \u2502          ----------------- In this function in 0x1::MyModule\n\u2502    \xb7\n\u2502 47 \u2502          assert!(has_coin(@0x2), 1);\n\u2502    \u2502          ^^^^^^^^^^^^^^^^^^^^^^^^^^ Test was not expected to abort but it aborted with 1 here\n\u2502\n\u2502\n\u2502 \u2500\u2500\u2500\u2500\u2500\u2500 Storage state at point of failure \u2500\u2500\u2500\u2500\u2500\u2500\n\u2502 0x1:\n\u2502       => key 0x1::MyModule::MyCoin {\n\u2502           value: 1\n\u2502       }\n\u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n\nTest result: FAILED. Total tests: 4; passed: 3; failed: 1\n")))}_.isMDXComponent=!0}}]);