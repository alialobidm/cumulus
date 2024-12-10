(function() {
    var type_impls = Object.fromEntries([["polkadot_parachain",[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-ConstructRuntimeApi%3CBlock,+C%3E-for-RuntimeApi\" class=\"impl\"><a href=\"#impl-ConstructRuntimeApi%3CBlock,+C%3E-for-RuntimeApi\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;Block, C&gt; ConstructRuntimeApi&lt;Block, C&gt; for RuntimeApi<div class=\"where\">where\n    Block: Block,\n    C: CallApiAt&lt;Block&gt; + 'static,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle\" open><summary><section id=\"associatedtype.RuntimeApi\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.RuntimeApi\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a class=\"associatedtype\">RuntimeApi</a> = RuntimeApiImpl&lt;Block, C&gt;</h4></section></summary><div class='docblock'>The actual runtime api that will be constructed.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.construct_runtime_api\" class=\"method trait-impl\"><a href=\"#method.construct_runtime_api\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">construct_runtime_api</a>&lt;'a&gt;(\n    call: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.83.0/std/primitive.reference.html\">&amp;'a C</a>,\n) -&gt; ApiRef&lt;'a, &lt;RuntimeApi as ConstructRuntimeApi&lt;Block, C&gt;&gt;::RuntimeApi&gt;</h4></section></summary><div class='docblock'>Construct an instance of the runtime api.</div></details></div></details>","ConstructRuntimeApi<Block, C>","polkadot_parachain::chain_spec::bridge_hubs::rococo::RuntimeApi","polkadot_parachain::chain_spec::bridge_hubs::wococo::RuntimeApi"]]]]);
    if (window.register_type_impls) {
        window.register_type_impls(type_impls);
    } else {
        window.pending_type_impls = type_impls;
    }
})()
//{"start":55,"fragment_lengths":[1676]}