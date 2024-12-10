(function() {
    var type_impls = Object.fromEntries([["cumulus_test_client",[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Clone-for-ParachainBlockData%3CB%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/cumulus_primitives_core/lib.rs.html#156\">source</a><a href=\"#impl-Clone-for-ParachainBlockData%3CB%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;B&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.83.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"cumulus_primitives_core/struct.ParachainBlockData.html\" title=\"struct cumulus_primitives_core::ParachainBlockData\">ParachainBlockData</a>&lt;B&gt;<div class=\"where\">where\n    B: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.83.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + Block,\n    &lt;B as Block&gt;::Header: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.83.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,\n    &lt;B as Block&gt;::Extrinsic: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.83.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/cumulus_primitives_core/lib.rs.html#156\">source</a><a href=\"#method.clone\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.83.0/core/clone/trait.Clone.html#tymethod.clone\" class=\"fn\">clone</a>(&amp;self) -&gt; <a class=\"struct\" href=\"cumulus_primitives_core/struct.ParachainBlockData.html\" title=\"struct cumulus_primitives_core::ParachainBlockData\">ParachainBlockData</a>&lt;B&gt;</h4></section></summary><div class='docblock'>Returns a copy of the value. <a href=\"https://doc.rust-lang.org/1.83.0/core/clone/trait.Clone.html#tymethod.clone\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone_from\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/1.83.0/src/core/clone.rs.html#174\">source</a></span><a href=\"#method.clone_from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.83.0/core/clone/trait.Clone.html#method.clone_from\" class=\"fn\">clone_from</a>(&amp;mut self, source: &amp;Self)</h4></section></summary><div class='docblock'>Performs copy-assignment from <code>source</code>. <a href=\"https://doc.rust-lang.org/1.83.0/core/clone/trait.Clone.html#method.clone_from\">Read more</a></div></details></div></details>","Clone","cumulus_test_client::ParachainBlockData"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Decode-for-ParachainBlockData%3CB%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/cumulus_primitives_core/lib.rs.html#156\">source</a><a href=\"#impl-Decode-for-ParachainBlockData%3CB%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;B&gt; Decode for <a class=\"struct\" href=\"cumulus_primitives_core/struct.ParachainBlockData.html\" title=\"struct cumulus_primitives_core::ParachainBlockData\">ParachainBlockData</a>&lt;B&gt;<div class=\"where\">where\n    B: Block,\n    &lt;B as Block&gt;::Header: Decode,\n    <a class=\"struct\" href=\"https://doc.rust-lang.org/1.83.0/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;&lt;B as Block&gt;::Extrinsic&gt;: Decode,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.decode\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/cumulus_primitives_core/lib.rs.html#156\">source</a><a href=\"#method.decode\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">decode</a>&lt;__CodecInputEdqy&gt;(\n    __codec_input_edqy: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.83.0/std/primitive.reference.html\">&amp;mut __CodecInputEdqy</a>,\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.83.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"struct\" href=\"cumulus_primitives_core/struct.ParachainBlockData.html\" title=\"struct cumulus_primitives_core::ParachainBlockData\">ParachainBlockData</a>&lt;B&gt;, Error&gt;<div class=\"where\">where\n    __CodecInputEdqy: Input,</div></h4></section></summary><div class='docblock'>Attempt to deserialise the value from input.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.decode_into\" class=\"method trait-impl\"><a href=\"#method.decode_into\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">decode_into</a>&lt;I&gt;(\n    input: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.83.0/std/primitive.reference.html\">&amp;mut I</a>,\n    dst: &amp;mut <a class=\"union\" href=\"https://doc.rust-lang.org/1.83.0/core/mem/maybe_uninit/union.MaybeUninit.html\" title=\"union core::mem::maybe_uninit::MaybeUninit\">MaybeUninit</a>&lt;Self&gt;,\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.83.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;DecodeFinished, Error&gt;<div class=\"where\">where\n    I: Input,</div></h4></section></summary><div class='docblock'>Attempt to deserialize the value from input into a pre-allocated piece of memory. <a>Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.skip\" class=\"method trait-impl\"><a href=\"#method.skip\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">skip</a>&lt;I&gt;(input: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.83.0/std/primitive.reference.html\">&amp;mut I</a>) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.83.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.83.0/std/primitive.unit.html\">()</a>, Error&gt;<div class=\"where\">where\n    I: Input,</div></h4></section></summary><div class='docblock'>Attempt to skip the encoded value from input. <a>Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.encoded_fixed_size\" class=\"method trait-impl\"><a href=\"#method.encoded_fixed_size\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">encoded_fixed_size</a>() -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.83.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.83.0/std/primitive.usize.html\">usize</a>&gt;</h4></section></summary><div class='docblock'>Returns the fixed encoded size of the type. <a>Read more</a></div></details></div></details>","Decode","cumulus_test_client::ParachainBlockData"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Encode-for-ParachainBlockData%3CB%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/cumulus_primitives_core/lib.rs.html#156\">source</a><a href=\"#impl-Encode-for-ParachainBlockData%3CB%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;B&gt; Encode for <a class=\"struct\" href=\"cumulus_primitives_core/struct.ParachainBlockData.html\" title=\"struct cumulus_primitives_core::ParachainBlockData\">ParachainBlockData</a>&lt;B&gt;<div class=\"where\">where\n    B: Block,\n    &lt;B as Block&gt;::Header: Encode,\n    <a class=\"struct\" href=\"https://doc.rust-lang.org/1.83.0/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;&lt;B as Block&gt;::Extrinsic&gt;: Encode,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.size_hint\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/cumulus_primitives_core/lib.rs.html#156\">source</a><a href=\"#method.size_hint\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">size_hint</a>(&amp;self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.83.0/std/primitive.usize.html\">usize</a></h4></section></summary><div class='docblock'>If possible give a hint of expected size of the encoding. <a>Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.encode_to\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/cumulus_primitives_core/lib.rs.html#156\">source</a><a href=\"#method.encode_to\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">encode_to</a>&lt;__CodecOutputEdqy&gt;(\n    &amp;self,\n    __codec_dest_edqy: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.83.0/std/primitive.reference.html\">&amp;mut __CodecOutputEdqy</a>,\n)<div class=\"where\">where\n    __CodecOutputEdqy: Output + ?<a class=\"trait\" href=\"https://doc.rust-lang.org/1.83.0/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>,</div></h4></section></summary><div class='docblock'>Convert self to a slice and append it to the destination.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.encode\" class=\"method trait-impl\"><a href=\"#method.encode\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">encode</a>(&amp;self) -&gt; <a class=\"struct\" href=\"https://doc.rust-lang.org/1.83.0/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.83.0/std/primitive.u8.html\">u8</a>&gt; <a href=\"#\" class=\"tooltip\" data-notable-ty=\"Vec&lt;u8&gt;\">ⓘ</a></h4></section></summary><div class='docblock'>Convert self to an owned vector.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.using_encoded\" class=\"method trait-impl\"><a href=\"#method.using_encoded\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">using_encoded</a>&lt;R, F&gt;(&amp;self, f: F) -&gt; R<div class=\"where\">where\n    F: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.83.0/core/ops/function/trait.FnOnce.html\" title=\"trait core::ops::function::FnOnce\">FnOnce</a>(&amp;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.83.0/std/primitive.u8.html\">u8</a>]) -&gt; R,</div></h4></section></summary><div class='docblock'>Convert self to a slice and then invoke the given closure with it.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.encoded_size\" class=\"method trait-impl\"><a href=\"#method.encoded_size\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">encoded_size</a>(&amp;self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.83.0/std/primitive.usize.html\">usize</a></h4></section></summary><div class='docblock'>Calculates the encoded size. <a>Read more</a></div></details></div></details>","Encode","cumulus_test_client::ParachainBlockData"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-ParachainBlockData%3CB%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/cumulus_primitives_core/lib.rs.html#166\">source</a><a href=\"#impl-ParachainBlockData%3CB%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;B&gt; <a class=\"struct\" href=\"cumulus_primitives_core/struct.ParachainBlockData.html\" title=\"struct cumulus_primitives_core::ParachainBlockData\">ParachainBlockData</a>&lt;B&gt;<div class=\"where\">where\n    B: Block,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.new\" class=\"method\"><a class=\"src rightside\" href=\"src/cumulus_primitives_core/lib.rs.html#168-172\">source</a><h4 class=\"code-header\">pub fn <a href=\"cumulus_primitives_core/struct.ParachainBlockData.html#tymethod.new\" class=\"fn\">new</a>(\n    header: &lt;B as Block&gt;::Header,\n    extrinsics: <a class=\"struct\" href=\"https://doc.rust-lang.org/1.83.0/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;&lt;B as Block&gt;::Extrinsic&gt;,\n    storage_proof: CompactProof,\n) -&gt; <a class=\"struct\" href=\"cumulus_primitives_core/struct.ParachainBlockData.html\" title=\"struct cumulus_primitives_core::ParachainBlockData\">ParachainBlockData</a>&lt;B&gt;</h4></section></summary><div class=\"docblock\"><p>Creates a new instance of <code>Self</code>.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.into_block\" class=\"method\"><a class=\"src rightside\" href=\"src/cumulus_primitives_core/lib.rs.html#177\">source</a><h4 class=\"code-header\">pub fn <a href=\"cumulus_primitives_core/struct.ParachainBlockData.html#tymethod.into_block\" class=\"fn\">into_block</a>(self) -&gt; B</h4></section></summary><div class=\"docblock\"><p>Convert <code>self</code> into the stored block.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.into_header\" class=\"method\"><a class=\"src rightside\" href=\"src/cumulus_primitives_core/lib.rs.html#182\">source</a><h4 class=\"code-header\">pub fn <a href=\"cumulus_primitives_core/struct.ParachainBlockData.html#tymethod.into_header\" class=\"fn\">into_header</a>(self) -&gt; &lt;B as Block&gt;::Header</h4></section></summary><div class=\"docblock\"><p>Convert <code>self</code> into the stored header.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.header\" class=\"method\"><a class=\"src rightside\" href=\"src/cumulus_primitives_core/lib.rs.html#187\">source</a><h4 class=\"code-header\">pub fn <a href=\"cumulus_primitives_core/struct.ParachainBlockData.html#tymethod.header\" class=\"fn\">header</a>(&amp;self) -&gt; &amp;&lt;B as Block&gt;::Header</h4></section></summary><div class=\"docblock\"><p>Returns the header.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.extrinsics\" class=\"method\"><a class=\"src rightside\" href=\"src/cumulus_primitives_core/lib.rs.html#192\">source</a><h4 class=\"code-header\">pub fn <a href=\"cumulus_primitives_core/struct.ParachainBlockData.html#tymethod.extrinsics\" class=\"fn\">extrinsics</a>(&amp;self) -&gt; &amp;[&lt;B as Block&gt;::Extrinsic]</h4></section></summary><div class=\"docblock\"><p>Returns the extrinsics.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.storage_proof\" class=\"method\"><a class=\"src rightside\" href=\"src/cumulus_primitives_core/lib.rs.html#197\">source</a><h4 class=\"code-header\">pub fn <a href=\"cumulus_primitives_core/struct.ParachainBlockData.html#tymethod.storage_proof\" class=\"fn\">storage_proof</a>(&amp;self) -&gt; &amp;CompactProof</h4></section></summary><div class=\"docblock\"><p>Returns the <a href=\"sp_trie::CompactProof\"><code>CompactProof</code></a>.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.deconstruct\" class=\"method\"><a class=\"src rightside\" href=\"src/cumulus_primitives_core/lib.rs.html#202\">source</a><h4 class=\"code-header\">pub fn <a href=\"cumulus_primitives_core/struct.ParachainBlockData.html#tymethod.deconstruct\" class=\"fn\">deconstruct</a>(\n    self,\n) -&gt; (&lt;B as Block&gt;::Header, <a class=\"struct\" href=\"https://doc.rust-lang.org/1.83.0/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;&lt;B as Block&gt;::Extrinsic&gt;, CompactProof)</h4></section></summary><div class=\"docblock\"><p>Deconstruct into the inner parts.</p>\n</div></details></div></details>",0,"cumulus_test_client::ParachainBlockData"],["<section id=\"impl-EncodeLike-for-ParachainBlockData%3CB%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/cumulus_primitives_core/lib.rs.html#156\">source</a><a href=\"#impl-EncodeLike-for-ParachainBlockData%3CB%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;B&gt; EncodeLike for <a class=\"struct\" href=\"cumulus_primitives_core/struct.ParachainBlockData.html\" title=\"struct cumulus_primitives_core::ParachainBlockData\">ParachainBlockData</a>&lt;B&gt;<div class=\"where\">where\n    B: Block,\n    &lt;B as Block&gt;::Header: Encode,\n    <a class=\"struct\" href=\"https://doc.rust-lang.org/1.83.0/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;&lt;B as Block&gt;::Extrinsic&gt;: Encode,</div></h3></section>","EncodeLike","cumulus_test_client::ParachainBlockData"]]]]);
    if (window.register_type_impls) {
        window.register_type_impls(type_impls);
    } else {
        window.pending_type_impls = type_impls;
    }
})()
//{"start":55,"fragment_lengths":[16785]}