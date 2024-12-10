(function() {
    var type_impls = Object.fromEntries([["asset_hub_polkadot_integration_tests",[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Clone-for-Xcm%3CCall%3E\" class=\"impl\"><a href=\"#impl-Clone-for-Xcm%3CCall%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;Call&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.83.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"asset_hub_polkadot_integration_tests/struct.Xcm.html\" title=\"struct asset_hub_polkadot_integration_tests::Xcm\">Xcm</a>&lt;Call&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone\" class=\"method trait-impl\"><a href=\"#method.clone\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.83.0/core/clone/trait.Clone.html#tymethod.clone\" class=\"fn\">clone</a>(&amp;self) -&gt; <a class=\"struct\" href=\"asset_hub_polkadot_integration_tests/struct.Xcm.html\" title=\"struct asset_hub_polkadot_integration_tests::Xcm\">Xcm</a>&lt;Call&gt;</h4></section></summary><div class='docblock'>Returns a copy of the value. <a href=\"https://doc.rust-lang.org/1.83.0/core/clone/trait.Clone.html#tymethod.clone\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone_from\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/1.83.0/src/core/clone.rs.html#174\">source</a></span><a href=\"#method.clone_from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.83.0/core/clone/trait.Clone.html#method.clone_from\" class=\"fn\">clone_from</a>(&amp;mut self, source: &amp;Self)</h4></section></summary><div class='docblock'>Performs copy-assignment from <code>source</code>. <a href=\"https://doc.rust-lang.org/1.83.0/core/clone/trait.Clone.html#method.clone_from\">Read more</a></div></details></div></details>","Clone","asset_hub_polkadot_integration_tests::opaque::Xcm"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Debug-for-Xcm%3CCall%3E\" class=\"impl\"><a href=\"#impl-Debug-for-Xcm%3CCall%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;Call&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.83.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"asset_hub_polkadot_integration_tests/struct.Xcm.html\" title=\"struct asset_hub_polkadot_integration_tests::Xcm\">Xcm</a>&lt;Call&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.fmt\" class=\"method trait-impl\"><a href=\"#method.fmt\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.83.0/core/fmt/trait.Debug.html#tymethod.fmt\" class=\"fn\">fmt</a>(&amp;self, __f: &amp;mut <a class=\"struct\" href=\"https://doc.rust-lang.org/1.83.0/core/fmt/struct.Formatter.html\" title=\"struct core::fmt::Formatter\">Formatter</a>&lt;'_&gt;) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.83.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.83.0/std/primitive.unit.html\">()</a>, <a class=\"struct\" href=\"https://doc.rust-lang.org/1.83.0/core/fmt/struct.Error.html\" title=\"struct core::fmt::Error\">Error</a>&gt;</h4></section></summary><div class='docblock'>Formats the value using the given formatter. <a href=\"https://doc.rust-lang.org/1.83.0/core/fmt/trait.Debug.html#tymethod.fmt\">Read more</a></div></details></div></details>","Debug","asset_hub_polkadot_integration_tests::opaque::Xcm"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Decode-for-Xcm%3CCall%3E\" class=\"impl\"><a href=\"#impl-Decode-for-Xcm%3CCall%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;Call&gt; Decode for <a class=\"struct\" href=\"asset_hub_polkadot_integration_tests/struct.Xcm.html\" title=\"struct asset_hub_polkadot_integration_tests::Xcm\">Xcm</a>&lt;Call&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.decode\" class=\"method trait-impl\"><a href=\"#method.decode\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">decode</a>&lt;__CodecInputEdqy&gt;(\n    __codec_input_edqy: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.83.0/std/primitive.reference.html\">&amp;mut __CodecInputEdqy</a>,\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.83.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"struct\" href=\"asset_hub_polkadot_integration_tests/struct.Xcm.html\" title=\"struct asset_hub_polkadot_integration_tests::Xcm\">Xcm</a>&lt;Call&gt;, Error&gt;<div class=\"where\">where\n    __CodecInputEdqy: Input,</div></h4></section></summary><div class='docblock'>Attempt to deserialise the value from input.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.decode_into\" class=\"method trait-impl\"><a href=\"#method.decode_into\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">decode_into</a>&lt;I&gt;(\n    input: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.83.0/std/primitive.reference.html\">&amp;mut I</a>,\n    dst: &amp;mut <a class=\"union\" href=\"https://doc.rust-lang.org/1.83.0/core/mem/maybe_uninit/union.MaybeUninit.html\" title=\"union core::mem::maybe_uninit::MaybeUninit\">MaybeUninit</a>&lt;Self&gt;,\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.83.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;DecodeFinished, Error&gt;<div class=\"where\">where\n    I: Input,</div></h4></section></summary><div class='docblock'>Attempt to deserialize the value from input into a pre-allocated piece of memory. <a>Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.skip\" class=\"method trait-impl\"><a href=\"#method.skip\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">skip</a>&lt;I&gt;(input: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.83.0/std/primitive.reference.html\">&amp;mut I</a>) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.83.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.83.0/std/primitive.unit.html\">()</a>, Error&gt;<div class=\"where\">where\n    I: Input,</div></h4></section></summary><div class='docblock'>Attempt to skip the encoded value from input. <a>Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.encoded_fixed_size\" class=\"method trait-impl\"><a href=\"#method.encoded_fixed_size\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">encoded_fixed_size</a>() -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.83.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.83.0/std/primitive.usize.html\">usize</a>&gt;</h4></section></summary><div class='docblock'>Returns the fixed encoded size of the type. <a>Read more</a></div></details></div></details>","Decode","asset_hub_polkadot_integration_tests::opaque::Xcm"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Default-for-Xcm%3CCall%3E\" class=\"impl\"><a href=\"#impl-Default-for-Xcm%3CCall%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;Call&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.83.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"asset_hub_polkadot_integration_tests/struct.Xcm.html\" title=\"struct asset_hub_polkadot_integration_tests::Xcm\">Xcm</a>&lt;Call&gt;<div class=\"where\">where\n    Call: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.83.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.default\" class=\"method trait-impl\"><a href=\"#method.default\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.83.0/core/default/trait.Default.html#tymethod.default\" class=\"fn\">default</a>() -&gt; <a class=\"struct\" href=\"asset_hub_polkadot_integration_tests/struct.Xcm.html\" title=\"struct asset_hub_polkadot_integration_tests::Xcm\">Xcm</a>&lt;Call&gt;</h4></section></summary><div class='docblock'>Returns the “default value” for a type. <a href=\"https://doc.rust-lang.org/1.83.0/core/default/trait.Default.html#tymethod.default\">Read more</a></div></details></div></details>","Default","asset_hub_polkadot_integration_tests::opaque::Xcm"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Encode-for-Xcm%3CCall%3E\" class=\"impl\"><a href=\"#impl-Encode-for-Xcm%3CCall%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;Call&gt; <a class=\"trait\" href=\"asset_hub_polkadot_integration_tests/trait.Encode.html\" title=\"trait asset_hub_polkadot_integration_tests::Encode\">Encode</a> for <a class=\"struct\" href=\"asset_hub_polkadot_integration_tests/struct.Xcm.html\" title=\"struct asset_hub_polkadot_integration_tests::Xcm\">Xcm</a>&lt;Call&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.size_hint\" class=\"method trait-impl\"><a href=\"#method.size_hint\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"asset_hub_polkadot_integration_tests/trait.Encode.html#method.size_hint\" class=\"fn\">size_hint</a>(&amp;self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.83.0/std/primitive.usize.html\">usize</a></h4></section></summary><div class='docblock'>If possible give a hint of expected size of the encoding. <a href=\"asset_hub_polkadot_integration_tests/trait.Encode.html#method.size_hint\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.encode_to\" class=\"method trait-impl\"><a href=\"#method.encode_to\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"asset_hub_polkadot_integration_tests/trait.Encode.html#method.encode_to\" class=\"fn\">encode_to</a>&lt;__CodecOutputEdqy&gt;(\n    &amp;self,\n    __codec_dest_edqy: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.83.0/std/primitive.reference.html\">&amp;mut __CodecOutputEdqy</a>,\n)<div class=\"where\">where\n    __CodecOutputEdqy: Output + ?<a class=\"trait\" href=\"https://doc.rust-lang.org/1.83.0/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>,</div></h4></section></summary><div class='docblock'>Convert self to a slice and append it to the destination.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.encode\" class=\"method trait-impl\"><a href=\"#method.encode\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"asset_hub_polkadot_integration_tests/trait.Encode.html#method.encode\" class=\"fn\">encode</a>(&amp;self) -&gt; <a class=\"struct\" href=\"https://doc.rust-lang.org/1.83.0/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.83.0/std/primitive.u8.html\">u8</a>&gt; <a href=\"#\" class=\"tooltip\" data-notable-ty=\"Vec&lt;u8&gt;\">ⓘ</a></h4></section></summary><div class='docblock'>Convert self to an owned vector.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.using_encoded\" class=\"method trait-impl\"><a href=\"#method.using_encoded\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"asset_hub_polkadot_integration_tests/trait.Encode.html#method.using_encoded\" class=\"fn\">using_encoded</a>&lt;R, F&gt;(&amp;self, f: F) -&gt; R<div class=\"where\">where\n    F: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.83.0/core/ops/function/trait.FnOnce.html\" title=\"trait core::ops::function::FnOnce\">FnOnce</a>(&amp;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.83.0/std/primitive.u8.html\">u8</a>]) -&gt; R,</div></h4></section></summary><div class='docblock'>Convert self to a slice and then invoke the given closure with it.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.encoded_size\" class=\"method trait-impl\"><a href=\"#method.encoded_size\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"asset_hub_polkadot_integration_tests/trait.Encode.html#method.encoded_size\" class=\"fn\">encoded_size</a>(&amp;self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.83.0/std/primitive.usize.html\">usize</a></h4></section></summary><div class='docblock'>Calculates the encoded size. <a href=\"asset_hub_polkadot_integration_tests/trait.Encode.html#method.encoded_size\">Read more</a></div></details></div></details>","Encode","asset_hub_polkadot_integration_tests::opaque::Xcm"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-From%3CVec%3CInstruction%3CCall%3E%3E%3E-for-Xcm%3CCall%3E\" class=\"impl\"><a href=\"#impl-From%3CVec%3CInstruction%3CCall%3E%3E%3E-for-Xcm%3CCall%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;Call&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.83.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.83.0/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;<a class=\"enum\" href=\"asset_hub_polkadot_integration_tests/enum.Instruction.html\" title=\"enum asset_hub_polkadot_integration_tests::Instruction\">Instruction</a>&lt;Call&gt;&gt;&gt; for <a class=\"struct\" href=\"asset_hub_polkadot_integration_tests/struct.Xcm.html\" title=\"struct asset_hub_polkadot_integration_tests::Xcm\">Xcm</a>&lt;Call&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.from\" class=\"method trait-impl\"><a href=\"#method.from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.83.0/core/convert/trait.From.html#tymethod.from\" class=\"fn\">from</a>(c: <a class=\"struct\" href=\"https://doc.rust-lang.org/1.83.0/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;<a class=\"enum\" href=\"asset_hub_polkadot_integration_tests/enum.Instruction.html\" title=\"enum asset_hub_polkadot_integration_tests::Instruction\">Instruction</a>&lt;Call&gt;&gt;) -&gt; <a class=\"struct\" href=\"asset_hub_polkadot_integration_tests/struct.Xcm.html\" title=\"struct asset_hub_polkadot_integration_tests::Xcm\">Xcm</a>&lt;Call&gt;</h4></section></summary><div class='docblock'>Converts to this type from the input type.</div></details></div></details>","From<Vec<Instruction<Call>>>","asset_hub_polkadot_integration_tests::opaque::Xcm"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-PartialEq-for-Xcm%3CCall%3E\" class=\"impl\"><a href=\"#impl-PartialEq-for-Xcm%3CCall%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;Call&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.83.0/core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a> for <a class=\"struct\" href=\"asset_hub_polkadot_integration_tests/struct.Xcm.html\" title=\"struct asset_hub_polkadot_integration_tests::Xcm\">Xcm</a>&lt;Call&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.eq\" class=\"method trait-impl\"><a href=\"#method.eq\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.83.0/core/cmp/trait.PartialEq.html#tymethod.eq\" class=\"fn\">eq</a>(&amp;self, other: &amp;<a class=\"struct\" href=\"asset_hub_polkadot_integration_tests/struct.Xcm.html\" title=\"struct asset_hub_polkadot_integration_tests::Xcm\">Xcm</a>&lt;Call&gt;) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.83.0/std/primitive.bool.html\">bool</a></h4></section></summary><div class='docblock'>Tests for <code>self</code> and <code>other</code> values to be equal, and is used by <code>==</code>.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.ne\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/1.83.0/src/core/cmp.rs.html#261\">source</a></span><a href=\"#method.ne\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.83.0/core/cmp/trait.PartialEq.html#method.ne\" class=\"fn\">ne</a>(&amp;self, other: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.83.0/std/primitive.reference.html\">&amp;Rhs</a>) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.83.0/std/primitive.bool.html\">bool</a></h4></section></summary><div class='docblock'>Tests for <code>!=</code>. The default implementation is almost always sufficient,\nand should not be overridden without very good reason.</div></details></div></details>","PartialEq","asset_hub_polkadot_integration_tests::opaque::Xcm"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-TryFrom%3CVersionedXcm%3CCall%3E%3E-for-Xcm%3CCall%3E\" class=\"impl\"><a href=\"#impl-TryFrom%3CVersionedXcm%3CCall%3E%3E-for-Xcm%3CCall%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;Call&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.83.0/core/convert/trait.TryFrom.html\" title=\"trait core::convert::TryFrom\">TryFrom</a>&lt;<a class=\"enum\" href=\"asset_hub_polkadot_integration_tests/enum.VersionedXcm.html\" title=\"enum asset_hub_polkadot_integration_tests::VersionedXcm\">VersionedXcm</a>&lt;Call&gt;&gt; for <a class=\"struct\" href=\"asset_hub_polkadot_integration_tests/struct.Xcm.html\" title=\"struct asset_hub_polkadot_integration_tests::Xcm\">Xcm</a>&lt;Call&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle\" open><summary><section id=\"associatedtype.Error\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.Error\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a href=\"https://doc.rust-lang.org/1.83.0/core/convert/trait.TryFrom.html#associatedtype.Error\" class=\"associatedtype\">Error</a> = <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.83.0/std/primitive.unit.html\">()</a></h4></section></summary><div class='docblock'>The type returned in the event of a conversion error.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.try_from\" class=\"method trait-impl\"><a href=\"#method.try_from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.83.0/core/convert/trait.TryFrom.html#tymethod.try_from\" class=\"fn\">try_from</a>(x: <a class=\"enum\" href=\"asset_hub_polkadot_integration_tests/enum.VersionedXcm.html\" title=\"enum asset_hub_polkadot_integration_tests::VersionedXcm\">VersionedXcm</a>&lt;Call&gt;) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.83.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"struct\" href=\"asset_hub_polkadot_integration_tests/struct.Xcm.html\" title=\"struct asset_hub_polkadot_integration_tests::Xcm\">Xcm</a>&lt;Call&gt;, <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.83.0/std/primitive.unit.html\">()</a>&gt;</h4></section></summary><div class='docblock'>Performs the conversion.</div></details></div></details>","TryFrom<VersionedXcm<Call>>","asset_hub_polkadot_integration_tests::opaque::Xcm"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-TryFrom%3CXcm%3CCall%3E%3E-for-Xcm%3CCall%3E\" class=\"impl\"><a href=\"#impl-TryFrom%3CXcm%3CCall%3E%3E-for-Xcm%3CCall%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;Call&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.83.0/core/convert/trait.TryFrom.html\" title=\"trait core::convert::TryFrom\">TryFrom</a>&lt;Xcm&lt;Call&gt;&gt; for <a class=\"struct\" href=\"asset_hub_polkadot_integration_tests/struct.Xcm.html\" title=\"struct asset_hub_polkadot_integration_tests::Xcm\">Xcm</a>&lt;Call&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle\" open><summary><section id=\"associatedtype.Error\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.Error\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a href=\"https://doc.rust-lang.org/1.83.0/core/convert/trait.TryFrom.html#associatedtype.Error\" class=\"associatedtype\">Error</a> = <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.83.0/std/primitive.unit.html\">()</a></h4></section></summary><div class='docblock'>The type returned in the event of a conversion error.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.try_from\" class=\"method trait-impl\"><a href=\"#method.try_from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.83.0/core/convert/trait.TryFrom.html#tymethod.try_from\" class=\"fn\">try_from</a>(old_xcm: Xcm&lt;Call&gt;) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.83.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"struct\" href=\"asset_hub_polkadot_integration_tests/struct.Xcm.html\" title=\"struct asset_hub_polkadot_integration_tests::Xcm\">Xcm</a>&lt;Call&gt;, <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.83.0/std/primitive.unit.html\">()</a>&gt;</h4></section></summary><div class='docblock'>Performs the conversion.</div></details></div></details>","TryFrom<Xcm<Call>>","asset_hub_polkadot_integration_tests::opaque::Xcm"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-TypeInfo-for-Xcm%3CCall%3E\" class=\"impl\"><a href=\"#impl-TypeInfo-for-Xcm%3CCall%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;Call&gt; TypeInfo for <a class=\"struct\" href=\"asset_hub_polkadot_integration_tests/struct.Xcm.html\" title=\"struct asset_hub_polkadot_integration_tests::Xcm\">Xcm</a>&lt;Call&gt;<div class=\"where\">where\n    Call: 'static,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle\" open><summary><section id=\"associatedtype.Identity\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.Identity\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a class=\"associatedtype\">Identity</a> = <a class=\"struct\" href=\"asset_hub_polkadot_integration_tests/struct.Xcm.html\" title=\"struct asset_hub_polkadot_integration_tests::Xcm\">Xcm</a>&lt;Call&gt;</h4></section></summary><div class='docblock'>The type identifying for which type info is provided. <a>Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.type_info\" class=\"method trait-impl\"><a href=\"#method.type_info\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">type_info</a>() -&gt; Type</h4></section></summary><div class='docblock'>Returns the static type identifier for <code>Self</code>.</div></details></div></details>","TypeInfo","asset_hub_polkadot_integration_tests::opaque::Xcm"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Xcm%3CCall%3E\" class=\"impl\"><a href=\"#impl-Xcm%3CCall%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;Call&gt; <a class=\"struct\" href=\"asset_hub_polkadot_integration_tests/struct.Xcm.html\" title=\"struct asset_hub_polkadot_integration_tests::Xcm\">Xcm</a>&lt;Call&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.new\" class=\"method\"><h4 class=\"code-header\">pub fn <a href=\"asset_hub_polkadot_integration_tests/struct.Xcm.html#tymethod.new\" class=\"fn\">new</a>() -&gt; <a class=\"struct\" href=\"asset_hub_polkadot_integration_tests/struct.Xcm.html\" title=\"struct asset_hub_polkadot_integration_tests::Xcm\">Xcm</a>&lt;Call&gt;</h4></section></summary><div class=\"docblock\"><p>Create an empty instance.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.is_empty\" class=\"method\"><h4 class=\"code-header\">pub fn <a href=\"asset_hub_polkadot_integration_tests/struct.Xcm.html#tymethod.is_empty\" class=\"fn\">is_empty</a>(&amp;self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.83.0/std/primitive.bool.html\">bool</a></h4></section></summary><div class=\"docblock\"><p>Return <code>true</code> if no instructions are held in <code>self</code>.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.len\" class=\"method\"><h4 class=\"code-header\">pub fn <a href=\"asset_hub_polkadot_integration_tests/struct.Xcm.html#tymethod.len\" class=\"fn\">len</a>(&amp;self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.83.0/std/primitive.usize.html\">usize</a></h4></section></summary><div class=\"docblock\"><p>Return the number of instructions held in <code>self</code>.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.inner\" class=\"method\"><h4 class=\"code-header\">pub fn <a href=\"asset_hub_polkadot_integration_tests/struct.Xcm.html#tymethod.inner\" class=\"fn\">inner</a>(&amp;self) -&gt; &amp;[<a class=\"enum\" href=\"asset_hub_polkadot_integration_tests/enum.Instruction.html\" title=\"enum asset_hub_polkadot_integration_tests::Instruction\">Instruction</a>&lt;Call&gt;]</h4></section></summary><div class=\"docblock\"><p>Return a reference to the inner value.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.inner_mut\" class=\"method\"><h4 class=\"code-header\">pub fn <a href=\"asset_hub_polkadot_integration_tests/struct.Xcm.html#tymethod.inner_mut\" class=\"fn\">inner_mut</a>(&amp;mut self) -&gt; &amp;mut <a class=\"struct\" href=\"https://doc.rust-lang.org/1.83.0/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;<a class=\"enum\" href=\"asset_hub_polkadot_integration_tests/enum.Instruction.html\" title=\"enum asset_hub_polkadot_integration_tests::Instruction\">Instruction</a>&lt;Call&gt;&gt;</h4></section></summary><div class=\"docblock\"><p>Return a mutable reference to the inner value.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.into_inner\" class=\"method\"><h4 class=\"code-header\">pub fn <a href=\"asset_hub_polkadot_integration_tests/struct.Xcm.html#tymethod.into_inner\" class=\"fn\">into_inner</a>(self) -&gt; <a class=\"struct\" href=\"https://doc.rust-lang.org/1.83.0/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;<a class=\"enum\" href=\"asset_hub_polkadot_integration_tests/enum.Instruction.html\" title=\"enum asset_hub_polkadot_integration_tests::Instruction\">Instruction</a>&lt;Call&gt;&gt;</h4></section></summary><div class=\"docblock\"><p>Consume and return the inner value.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.iter\" class=\"method\"><h4 class=\"code-header\">pub fn <a href=\"asset_hub_polkadot_integration_tests/struct.Xcm.html#tymethod.iter\" class=\"fn\">iter</a>(&amp;self) -&gt; impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.83.0/core/iter/traits/iterator/trait.Iterator.html\" title=\"trait core::iter::traits::iterator::Iterator\">Iterator</a>&lt;Item = &amp;<a class=\"enum\" href=\"asset_hub_polkadot_integration_tests/enum.Instruction.html\" title=\"enum asset_hub_polkadot_integration_tests::Instruction\">Instruction</a>&lt;Call&gt;&gt;</h4></section></summary><div class=\"docblock\"><p>Return an iterator over references to the items.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.iter_mut\" class=\"method\"><h4 class=\"code-header\">pub fn <a href=\"asset_hub_polkadot_integration_tests/struct.Xcm.html#tymethod.iter_mut\" class=\"fn\">iter_mut</a>(&amp;mut self) -&gt; impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.83.0/core/iter/traits/iterator/trait.Iterator.html\" title=\"trait core::iter::traits::iterator::Iterator\">Iterator</a>&lt;Item = &amp;mut <a class=\"enum\" href=\"asset_hub_polkadot_integration_tests/enum.Instruction.html\" title=\"enum asset_hub_polkadot_integration_tests::Instruction\">Instruction</a>&lt;Call&gt;&gt;</h4></section></summary><div class=\"docblock\"><p>Return an iterator over mutable references to the items.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.into_iter\" class=\"method\"><h4 class=\"code-header\">pub fn <a href=\"asset_hub_polkadot_integration_tests/struct.Xcm.html#tymethod.into_iter\" class=\"fn\">into_iter</a>(self) -&gt; impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.83.0/core/iter/traits/iterator/trait.Iterator.html\" title=\"trait core::iter::traits::iterator::Iterator\">Iterator</a>&lt;Item = <a class=\"enum\" href=\"asset_hub_polkadot_integration_tests/enum.Instruction.html\" title=\"enum asset_hub_polkadot_integration_tests::Instruction\">Instruction</a>&lt;Call&gt;&gt;</h4></section></summary><div class=\"docblock\"><p>Consume and return an iterator over the items.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.or_else\" class=\"method\"><h4 class=\"code-header\">pub fn <a href=\"asset_hub_polkadot_integration_tests/struct.Xcm.html#tymethod.or_else\" class=\"fn\">or_else</a>(self, f: impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.83.0/core/ops/function/trait.FnOnce.html\" title=\"trait core::ops::function::FnOnce\">FnOnce</a>() -&gt; <a class=\"struct\" href=\"asset_hub_polkadot_integration_tests/struct.Xcm.html\" title=\"struct asset_hub_polkadot_integration_tests::Xcm\">Xcm</a>&lt;Call&gt;) -&gt; <a class=\"struct\" href=\"asset_hub_polkadot_integration_tests/struct.Xcm.html\" title=\"struct asset_hub_polkadot_integration_tests::Xcm\">Xcm</a>&lt;Call&gt;</h4></section></summary><div class=\"docblock\"><p>Consume and either return <code>self</code> if it contains some instructions, or if it’s empty, then\ninstead return the result of <code>f</code>.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.first\" class=\"method\"><h4 class=\"code-header\">pub fn <a href=\"asset_hub_polkadot_integration_tests/struct.Xcm.html#tymethod.first\" class=\"fn\">first</a>(&amp;self) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.83.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;&amp;<a class=\"enum\" href=\"asset_hub_polkadot_integration_tests/enum.Instruction.html\" title=\"enum asset_hub_polkadot_integration_tests::Instruction\">Instruction</a>&lt;Call&gt;&gt;</h4></section></summary><div class=\"docblock\"><p>Return the first instruction, if any.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.last\" class=\"method\"><h4 class=\"code-header\">pub fn <a href=\"asset_hub_polkadot_integration_tests/struct.Xcm.html#tymethod.last\" class=\"fn\">last</a>(&amp;self) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.83.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;&amp;<a class=\"enum\" href=\"asset_hub_polkadot_integration_tests/enum.Instruction.html\" title=\"enum asset_hub_polkadot_integration_tests::Instruction\">Instruction</a>&lt;Call&gt;&gt;</h4></section></summary><div class=\"docblock\"><p>Return the last instruction, if any.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.only\" class=\"method\"><h4 class=\"code-header\">pub fn <a href=\"asset_hub_polkadot_integration_tests/struct.Xcm.html#tymethod.only\" class=\"fn\">only</a>(&amp;self) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.83.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;&amp;<a class=\"enum\" href=\"asset_hub_polkadot_integration_tests/enum.Instruction.html\" title=\"enum asset_hub_polkadot_integration_tests::Instruction\">Instruction</a>&lt;Call&gt;&gt;</h4></section></summary><div class=\"docblock\"><p>Return the only instruction, contained in <code>Self</code>, iff only one exists (<code>None</code> otherwise).</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.into_only\" class=\"method\"><h4 class=\"code-header\">pub fn <a href=\"asset_hub_polkadot_integration_tests/struct.Xcm.html#tymethod.into_only\" class=\"fn\">into_only</a>(self) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.83.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"enum\" href=\"asset_hub_polkadot_integration_tests/enum.Instruction.html\" title=\"enum asset_hub_polkadot_integration_tests::Instruction\">Instruction</a>&lt;Call&gt;, <a class=\"struct\" href=\"asset_hub_polkadot_integration_tests/struct.Xcm.html\" title=\"struct asset_hub_polkadot_integration_tests::Xcm\">Xcm</a>&lt;Call&gt;&gt;</h4></section></summary><div class=\"docblock\"><p>Return the only instruction, contained in <code>Self</code>, iff only one exists (returns <code>self</code>\notherwise).</p>\n</div></details></div></details>",0,"asset_hub_polkadot_integration_tests::opaque::Xcm"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Xcm%3CCall%3E\" class=\"impl\"><a href=\"#impl-Xcm%3CCall%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;Call&gt; <a class=\"struct\" href=\"asset_hub_polkadot_integration_tests/struct.Xcm.html\" title=\"struct asset_hub_polkadot_integration_tests::Xcm\">Xcm</a>&lt;Call&gt;</h3></section></summary><div class=\"impl-items\"><section id=\"method.into\" class=\"method\"><h4 class=\"code-header\">pub fn <a href=\"asset_hub_polkadot_integration_tests/struct.Xcm.html#tymethod.into\" class=\"fn\">into</a>&lt;C&gt;(self) -&gt; <a class=\"struct\" href=\"asset_hub_polkadot_integration_tests/struct.Xcm.html\" title=\"struct asset_hub_polkadot_integration_tests::Xcm\">Xcm</a>&lt;C&gt;</h4></section><section id=\"method.from\" class=\"method\"><h4 class=\"code-header\">pub fn <a href=\"asset_hub_polkadot_integration_tests/struct.Xcm.html#tymethod.from\" class=\"fn\">from</a>&lt;C&gt;(xcm: <a class=\"struct\" href=\"asset_hub_polkadot_integration_tests/struct.Xcm.html\" title=\"struct asset_hub_polkadot_integration_tests::Xcm\">Xcm</a>&lt;C&gt;) -&gt; <a class=\"struct\" href=\"asset_hub_polkadot_integration_tests/struct.Xcm.html\" title=\"struct asset_hub_polkadot_integration_tests::Xcm\">Xcm</a>&lt;Call&gt;</h4></section></div></details>",0,"asset_hub_polkadot_integration_tests::opaque::Xcm"],["<section id=\"impl-EncodeLike-for-Xcm%3CCall%3E\" class=\"impl\"><a href=\"#impl-EncodeLike-for-Xcm%3CCall%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;Call&gt; EncodeLike for <a class=\"struct\" href=\"asset_hub_polkadot_integration_tests/struct.Xcm.html\" title=\"struct asset_hub_polkadot_integration_tests::Xcm\">Xcm</a>&lt;Call&gt;</h3></section>","EncodeLike","asset_hub_polkadot_integration_tests::opaque::Xcm"],["<section id=\"impl-Eq-for-Xcm%3CCall%3E\" class=\"impl\"><a href=\"#impl-Eq-for-Xcm%3CCall%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;Call&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.83.0/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a> for <a class=\"struct\" href=\"asset_hub_polkadot_integration_tests/struct.Xcm.html\" title=\"struct asset_hub_polkadot_integration_tests::Xcm\">Xcm</a>&lt;Call&gt;</h3></section>","Eq","asset_hub_polkadot_integration_tests::opaque::Xcm"]]]]);
    if (window.register_type_impls) {
        window.register_type_impls(type_impls);
    } else {
        window.pending_type_impls = type_impls;
    }
})()
//{"start":55,"fragment_lengths":[36465]}