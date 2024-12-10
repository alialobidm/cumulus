(function() {
    var type_impls = Object.fromEntries([["cumulus_test_client",[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Clone-for-LongestChain%3CB,+Block%3E\" class=\"impl\"><a href=\"#impl-Clone-for-LongestChain%3CB,+Block%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;B, Block&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.83.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for LongestChain&lt;B, Block&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone\" class=\"method trait-impl\"><a href=\"#method.clone\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.83.0/core/clone/trait.Clone.html#tymethod.clone\" class=\"fn\">clone</a>(&amp;self) -&gt; LongestChain&lt;B, Block&gt;</h4></section></summary><div class='docblock'>Returns a copy of the value. <a href=\"https://doc.rust-lang.org/1.83.0/core/clone/trait.Clone.html#tymethod.clone\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone_from\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/1.83.0/src/core/clone.rs.html#174\">source</a></span><a href=\"#method.clone_from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.83.0/core/clone/trait.Clone.html#method.clone_from\" class=\"fn\">clone_from</a>(&amp;mut self, source: &amp;Self)</h4></section></summary><div class='docblock'>Performs copy-assignment from <code>source</code>. <a href=\"https://doc.rust-lang.org/1.83.0/core/clone/trait.Clone.html#method.clone_from\">Read more</a></div></details></div></details>","Clone","cumulus_test_client::LongestChain"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-LongestChain%3CB,+Block%3E\" class=\"impl\"><a href=\"#impl-LongestChain%3CB,+Block%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;B, Block&gt; LongestChain&lt;B, Block&gt;<div class=\"where\">where\n    B: Backend&lt;Block&gt;,\n    Block: Block,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.new\" class=\"method\"><h4 class=\"code-header\">pub fn <a class=\"fn\">new</a>(backend: <a class=\"struct\" href=\"https://doc.rust-lang.org/1.83.0/alloc/sync/struct.Arc.html\" title=\"struct alloc::sync::Arc\">Arc</a>&lt;B&gt;) -&gt; LongestChain&lt;B, Block&gt;</h4></section></summary><div class=\"docblock\"><p>Instantiate a new LongestChain for Backend B</p>\n</div></details></div></details>",0,"cumulus_test_client::LongestChain"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-SelectChain%3CBlock%3E-for-LongestChain%3CB,+Block%3E\" class=\"impl\"><a href=\"#impl-SelectChain%3CBlock%3E-for-LongestChain%3CB,+Block%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;B, Block&gt; <a class=\"trait\" href=\"cumulus_test_client/sp_consensus/trait.SelectChain.html\" title=\"trait cumulus_test_client::sp_consensus::SelectChain\">SelectChain</a>&lt;Block&gt; for LongestChain&lt;B, Block&gt;<div class=\"where\">where\n    B: Backend&lt;Block&gt;,\n    Block: Block,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.leaves\" class=\"method trait-impl\"><a href=\"#method.leaves\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"cumulus_test_client/sp_consensus/trait.SelectChain.html#tymethod.leaves\" class=\"fn\">leaves</a>&lt;'life0, 'async_trait&gt;(\n    &amp;'life0 self,\n) -&gt; <a class=\"struct\" href=\"https://doc.rust-lang.org/1.83.0/core/pin/struct.Pin.html\" title=\"struct core::pin::Pin\">Pin</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.83.0/alloc/boxed/struct.Box.html\" title=\"struct alloc::boxed::Box\">Box</a>&lt;dyn <a class=\"trait\" href=\"https://doc.rust-lang.org/1.83.0/core/future/future/trait.Future.html\" title=\"trait core::future::future::Future\">Future</a>&lt;Output = <a class=\"enum\" href=\"https://doc.rust-lang.org/1.83.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.83.0/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;&lt;Block as Block&gt;::Hash&gt;, <a class=\"enum\" href=\"cumulus_test_client/sp_consensus/enum.Error.html\" title=\"enum cumulus_test_client::sp_consensus::Error\">Error</a>&gt;&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.83.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + 'async_trait&gt;&gt;<div class=\"where\">where\n    'life0: 'async_trait,\n    LongestChain&lt;B, Block&gt;: 'async_trait,</div></h4></section></summary><div class='docblock'>Get all leaves of the chain, i.e. block hashes that have no children currently.\nLeaves that can never be finalized will not be returned.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.best_chain\" class=\"method trait-impl\"><a href=\"#method.best_chain\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"cumulus_test_client/sp_consensus/trait.SelectChain.html#tymethod.best_chain\" class=\"fn\">best_chain</a>&lt;'life0, 'async_trait&gt;(\n    &amp;'life0 self,\n) -&gt; <a class=\"struct\" href=\"https://doc.rust-lang.org/1.83.0/core/pin/struct.Pin.html\" title=\"struct core::pin::Pin\">Pin</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.83.0/alloc/boxed/struct.Box.html\" title=\"struct alloc::boxed::Box\">Box</a>&lt;dyn <a class=\"trait\" href=\"https://doc.rust-lang.org/1.83.0/core/future/future/trait.Future.html\" title=\"trait core::future::future::Future\">Future</a>&lt;Output = <a class=\"enum\" href=\"https://doc.rust-lang.org/1.83.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;&lt;Block as Block&gt;::Header, <a class=\"enum\" href=\"cumulus_test_client/sp_consensus/enum.Error.html\" title=\"enum cumulus_test_client::sp_consensus::Error\">Error</a>&gt;&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.83.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + 'async_trait&gt;&gt;<div class=\"where\">where\n    'life0: 'async_trait,\n    LongestChain&lt;B, Block&gt;: 'async_trait,</div></h4></section></summary><div class='docblock'>Among those <code>leaves</code> deterministically pick one chain as the generally\nbest chain to author new blocks upon and probably (but not necessarily)\nfinalize.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.finality_target\" class=\"method trait-impl\"><a href=\"#method.finality_target\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"cumulus_test_client/sp_consensus/trait.SelectChain.html#method.finality_target\" class=\"fn\">finality_target</a>&lt;'life0, 'async_trait&gt;(\n    &amp;'life0 self,\n    base_hash: &lt;Block as Block&gt;::Hash,\n    maybe_max_number: <a class=\"enum\" href=\"https://doc.rust-lang.org/1.83.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;&lt;&lt;Block as Block&gt;::Header as Header&gt;::Number&gt;,\n) -&gt; <a class=\"struct\" href=\"https://doc.rust-lang.org/1.83.0/core/pin/struct.Pin.html\" title=\"struct core::pin::Pin\">Pin</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.83.0/alloc/boxed/struct.Box.html\" title=\"struct alloc::boxed::Box\">Box</a>&lt;dyn <a class=\"trait\" href=\"https://doc.rust-lang.org/1.83.0/core/future/future/trait.Future.html\" title=\"trait core::future::future::Future\">Future</a>&lt;Output = <a class=\"enum\" href=\"https://doc.rust-lang.org/1.83.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;&lt;Block as Block&gt;::Hash, <a class=\"enum\" href=\"cumulus_test_client/sp_consensus/enum.Error.html\" title=\"enum cumulus_test_client::sp_consensus::Error\">Error</a>&gt;&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.83.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + 'async_trait&gt;&gt;<div class=\"where\">where\n    'life0: 'async_trait,\n    LongestChain&lt;B, Block&gt;: 'async_trait,</div></h4></section></summary><div class='docblock'>Get the best descendent of <code>base_hash</code> that we should attempt to\nfinalize next, if any. It is valid to return the given <code>base_hash</code>\nitself if no better descendent exists.</div></details></div></details>","SelectChain<Block>","cumulus_test_client::LongestChain"]]]]);
    if (window.register_type_impls) {
        window.register_type_impls(type_impls);
    } else {
        window.pending_type_impls = type_impls;
    }
})()
//{"start":55,"fragment_lengths":[8788]}