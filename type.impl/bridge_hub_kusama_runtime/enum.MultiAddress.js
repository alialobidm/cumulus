(function() {
    var type_impls = Object.fromEntries([["bridge_hub_kusama_runtime",[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Clone-for-MultiAddress%3CAccountId,+AccountIndex%3E\" class=\"impl\"><a href=\"#impl-Clone-for-MultiAddress%3CAccountId,+AccountIndex%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;AccountId, AccountIndex&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.83.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"enum\" href=\"bridge_hub_kusama_runtime/enum.MultiAddress.html\" title=\"enum bridge_hub_kusama_runtime::MultiAddress\">MultiAddress</a>&lt;AccountId, AccountIndex&gt;<div class=\"where\">where\n    AccountId: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.83.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,\n    AccountIndex: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.83.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone\" class=\"method trait-impl\"><a href=\"#method.clone\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.83.0/core/clone/trait.Clone.html#tymethod.clone\" class=\"fn\">clone</a>(&amp;self) -&gt; <a class=\"enum\" href=\"bridge_hub_kusama_runtime/enum.MultiAddress.html\" title=\"enum bridge_hub_kusama_runtime::MultiAddress\">MultiAddress</a>&lt;AccountId, AccountIndex&gt;</h4></section></summary><div class='docblock'>Returns a copy of the value. <a href=\"https://doc.rust-lang.org/1.83.0/core/clone/trait.Clone.html#tymethod.clone\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone_from\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/1.83.0/src/core/clone.rs.html#174\">source</a></span><a href=\"#method.clone_from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.83.0/core/clone/trait.Clone.html#method.clone_from\" class=\"fn\">clone_from</a>(&amp;mut self, source: &amp;Self)</h4></section></summary><div class='docblock'>Performs copy-assignment from <code>source</code>. <a href=\"https://doc.rust-lang.org/1.83.0/core/clone/trait.Clone.html#method.clone_from\">Read more</a></div></details></div></details>","Clone","bridge_hub_kusama_runtime::Address"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Debug-for-MultiAddress%3CAccountId,+AccountIndex%3E\" class=\"impl\"><a href=\"#impl-Debug-for-MultiAddress%3CAccountId,+AccountIndex%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;AccountId, AccountIndex&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.83.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"enum\" href=\"bridge_hub_kusama_runtime/enum.MultiAddress.html\" title=\"enum bridge_hub_kusama_runtime::MultiAddress\">MultiAddress</a>&lt;AccountId, AccountIndex&gt;<div class=\"where\">where\n    AccountId: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.83.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>,\n    AccountIndex: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.83.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.fmt\" class=\"method trait-impl\"><a href=\"#method.fmt\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.83.0/core/fmt/trait.Debug.html#tymethod.fmt\" class=\"fn\">fmt</a>(&amp;self, fmt: &amp;mut <a class=\"struct\" href=\"https://doc.rust-lang.org/1.83.0/core/fmt/struct.Formatter.html\" title=\"struct core::fmt::Formatter\">Formatter</a>&lt;'_&gt;) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.83.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.83.0/std/primitive.unit.html\">()</a>, <a class=\"struct\" href=\"https://doc.rust-lang.org/1.83.0/core/fmt/struct.Error.html\" title=\"struct core::fmt::Error\">Error</a>&gt;</h4></section></summary><div class='docblock'>Formats the value using the given formatter. <a href=\"https://doc.rust-lang.org/1.83.0/core/fmt/trait.Debug.html#tymethod.fmt\">Read more</a></div></details></div></details>","Debug","bridge_hub_kusama_runtime::Address"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Decode-for-MultiAddress%3CAccountId,+AccountIndex%3E\" class=\"impl\"><a href=\"#impl-Decode-for-MultiAddress%3CAccountId,+AccountIndex%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;AccountId, AccountIndex&gt; Decode for <a class=\"enum\" href=\"bridge_hub_kusama_runtime/enum.MultiAddress.html\" title=\"enum bridge_hub_kusama_runtime::MultiAddress\">MultiAddress</a>&lt;AccountId, AccountIndex&gt;<div class=\"where\">where\n    AccountId: Decode,\n    AccountIndex: HasCompact,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.decode\" class=\"method trait-impl\"><a href=\"#method.decode\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">decode</a>&lt;__CodecInputEdqy&gt;(\n    __codec_input_edqy: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.83.0/std/primitive.reference.html\">&amp;mut __CodecInputEdqy</a>,\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.83.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"enum\" href=\"bridge_hub_kusama_runtime/enum.MultiAddress.html\" title=\"enum bridge_hub_kusama_runtime::MultiAddress\">MultiAddress</a>&lt;AccountId, AccountIndex&gt;, Error&gt;<div class=\"where\">where\n    __CodecInputEdqy: Input,</div></h4></section></summary><div class='docblock'>Attempt to deserialise the value from input.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.decode_into\" class=\"method trait-impl\"><a href=\"#method.decode_into\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">decode_into</a>&lt;I&gt;(\n    input: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.83.0/std/primitive.reference.html\">&amp;mut I</a>,\n    dst: &amp;mut <a class=\"union\" href=\"https://doc.rust-lang.org/1.83.0/core/mem/maybe_uninit/union.MaybeUninit.html\" title=\"union core::mem::maybe_uninit::MaybeUninit\">MaybeUninit</a>&lt;Self&gt;,\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.83.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;DecodeFinished, Error&gt;<div class=\"where\">where\n    I: Input,</div></h4></section></summary><div class='docblock'>Attempt to deserialize the value from input into a pre-allocated piece of memory. <a>Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.skip\" class=\"method trait-impl\"><a href=\"#method.skip\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">skip</a>&lt;I&gt;(input: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.83.0/std/primitive.reference.html\">&amp;mut I</a>) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.83.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.83.0/std/primitive.unit.html\">()</a>, Error&gt;<div class=\"where\">where\n    I: Input,</div></h4></section></summary><div class='docblock'>Attempt to skip the encoded value from input. <a>Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.encoded_fixed_size\" class=\"method trait-impl\"><a href=\"#method.encoded_fixed_size\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">encoded_fixed_size</a>() -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.83.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.83.0/std/primitive.usize.html\">usize</a>&gt;</h4></section></summary><div class='docblock'>Returns the fixed encoded size of the type. <a>Read more</a></div></details></div></details>","Decode","bridge_hub_kusama_runtime::Address"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Display-for-MultiAddress%3CAccountId,+AccountIndex%3E\" class=\"impl\"><a href=\"#impl-Display-for-MultiAddress%3CAccountId,+AccountIndex%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;AccountId, AccountIndex&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.83.0/core/fmt/trait.Display.html\" title=\"trait core::fmt::Display\">Display</a> for <a class=\"enum\" href=\"bridge_hub_kusama_runtime/enum.MultiAddress.html\" title=\"enum bridge_hub_kusama_runtime::MultiAddress\">MultiAddress</a>&lt;AccountId, AccountIndex&gt;<div class=\"where\">where\n    AccountId: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.83.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>,\n    AccountIndex: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.83.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.fmt\" class=\"method trait-impl\"><a href=\"#method.fmt\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.83.0/core/fmt/trait.Display.html#tymethod.fmt\" class=\"fn\">fmt</a>(&amp;self, f: &amp;mut <a class=\"struct\" href=\"https://doc.rust-lang.org/1.83.0/core/fmt/struct.Formatter.html\" title=\"struct core::fmt::Formatter\">Formatter</a>&lt;'_&gt;) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.83.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.83.0/std/primitive.unit.html\">()</a>, <a class=\"struct\" href=\"https://doc.rust-lang.org/1.83.0/core/fmt/struct.Error.html\" title=\"struct core::fmt::Error\">Error</a>&gt;</h4></section></summary><div class='docblock'>Formats the value using the given formatter. <a href=\"https://doc.rust-lang.org/1.83.0/core/fmt/trait.Display.html#tymethod.fmt\">Read more</a></div></details></div></details>","Display","bridge_hub_kusama_runtime::Address"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Encode-for-MultiAddress%3CAccountId,+AccountIndex%3E\" class=\"impl\"><a href=\"#impl-Encode-for-MultiAddress%3CAccountId,+AccountIndex%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;AccountId, AccountIndex&gt; Encode for <a class=\"enum\" href=\"bridge_hub_kusama_runtime/enum.MultiAddress.html\" title=\"enum bridge_hub_kusama_runtime::MultiAddress\">MultiAddress</a>&lt;AccountId, AccountIndex&gt;<div class=\"where\">where\n    AccountId: Encode,\n    AccountIndex: HasCompact,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.size_hint\" class=\"method trait-impl\"><a href=\"#method.size_hint\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">size_hint</a>(&amp;self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.83.0/std/primitive.usize.html\">usize</a></h4></section></summary><div class='docblock'>If possible give a hint of expected size of the encoding. <a>Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.encode_to\" class=\"method trait-impl\"><a href=\"#method.encode_to\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">encode_to</a>&lt;__CodecOutputEdqy&gt;(\n    &amp;self,\n    __codec_dest_edqy: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.83.0/std/primitive.reference.html\">&amp;mut __CodecOutputEdqy</a>,\n)<div class=\"where\">where\n    __CodecOutputEdqy: Output + ?<a class=\"trait\" href=\"https://doc.rust-lang.org/1.83.0/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>,</div></h4></section></summary><div class='docblock'>Convert self to a slice and append it to the destination.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.encode\" class=\"method trait-impl\"><a href=\"#method.encode\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">encode</a>(&amp;self) -&gt; <a class=\"struct\" href=\"https://doc.rust-lang.org/1.83.0/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.83.0/std/primitive.u8.html\">u8</a>&gt; <a href=\"#\" class=\"tooltip\" data-notable-ty=\"Vec&lt;u8&gt;\">ⓘ</a></h4></section></summary><div class='docblock'>Convert self to an owned vector.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.using_encoded\" class=\"method trait-impl\"><a href=\"#method.using_encoded\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">using_encoded</a>&lt;R, F&gt;(&amp;self, f: F) -&gt; R<div class=\"where\">where\n    F: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.83.0/core/ops/function/trait.FnOnce.html\" title=\"trait core::ops::function::FnOnce\">FnOnce</a>(&amp;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.83.0/std/primitive.u8.html\">u8</a>]) -&gt; R,</div></h4></section></summary><div class='docblock'>Convert self to a slice and then invoke the given closure with it.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.encoded_size\" class=\"method trait-impl\"><a href=\"#method.encoded_size\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">encoded_size</a>(&amp;self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.83.0/std/primitive.usize.html\">usize</a></h4></section></summary><div class='docblock'>Calculates the encoded size. <a>Read more</a></div></details></div></details>","Encode","bridge_hub_kusama_runtime::Address"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-From%3CAccountId%3E-for-MultiAddress%3CAccountId,+AccountIndex%3E\" class=\"impl\"><a href=\"#impl-From%3CAccountId%3E-for-MultiAddress%3CAccountId,+AccountIndex%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;AccountId, AccountIndex&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.83.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;AccountId&gt; for <a class=\"enum\" href=\"bridge_hub_kusama_runtime/enum.MultiAddress.html\" title=\"enum bridge_hub_kusama_runtime::MultiAddress\">MultiAddress</a>&lt;AccountId, AccountIndex&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.from\" class=\"method trait-impl\"><a href=\"#method.from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.83.0/core/convert/trait.From.html#tymethod.from\" class=\"fn\">from</a>(a: AccountId) -&gt; <a class=\"enum\" href=\"bridge_hub_kusama_runtime/enum.MultiAddress.html\" title=\"enum bridge_hub_kusama_runtime::MultiAddress\">MultiAddress</a>&lt;AccountId, AccountIndex&gt;</h4></section></summary><div class='docblock'>Converts to this type from the input type.</div></details></div></details>","From<AccountId>","bridge_hub_kusama_runtime::Address"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Hash-for-MultiAddress%3CAccountId,+AccountIndex%3E\" class=\"impl\"><a href=\"#impl-Hash-for-MultiAddress%3CAccountId,+AccountIndex%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;AccountId, AccountIndex&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.83.0/core/hash/trait.Hash.html\" title=\"trait core::hash::Hash\">Hash</a> for <a class=\"enum\" href=\"bridge_hub_kusama_runtime/enum.MultiAddress.html\" title=\"enum bridge_hub_kusama_runtime::MultiAddress\">MultiAddress</a>&lt;AccountId, AccountIndex&gt;<div class=\"where\">where\n    AccountId: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.83.0/core/hash/trait.Hash.html\" title=\"trait core::hash::Hash\">Hash</a>,\n    AccountIndex: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.83.0/core/hash/trait.Hash.html\" title=\"trait core::hash::Hash\">Hash</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.hash\" class=\"method trait-impl\"><a href=\"#method.hash\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.83.0/core/hash/trait.Hash.html#tymethod.hash\" class=\"fn\">hash</a>&lt;__H&gt;(&amp;self, state: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.83.0/std/primitive.reference.html\">&amp;mut __H</a>)<div class=\"where\">where\n    __H: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.83.0/core/hash/trait.Hasher.html\" title=\"trait core::hash::Hasher\">Hasher</a>,</div></h4></section></summary><div class='docblock'>Feeds this value into the given <a href=\"https://doc.rust-lang.org/1.83.0/core/hash/trait.Hasher.html\" title=\"trait core::hash::Hasher\"><code>Hasher</code></a>. <a href=\"https://doc.rust-lang.org/1.83.0/core/hash/trait.Hash.html#tymethod.hash\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.hash_slice\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.3.0\">1.3.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/1.83.0/src/core/hash/mod.rs.html#235-237\">source</a></span><a href=\"#method.hash_slice\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.83.0/core/hash/trait.Hash.html#method.hash_slice\" class=\"fn\">hash_slice</a>&lt;H&gt;(data: &amp;[Self], state: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.83.0/std/primitive.reference.html\">&amp;mut H</a>)<div class=\"where\">where\n    H: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.83.0/core/hash/trait.Hasher.html\" title=\"trait core::hash::Hasher\">Hasher</a>,\n    Self: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.83.0/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>,</div></h4></section></summary><div class='docblock'>Feeds a slice of this type into the given <a href=\"https://doc.rust-lang.org/1.83.0/core/hash/trait.Hasher.html\" title=\"trait core::hash::Hasher\"><code>Hasher</code></a>. <a href=\"https://doc.rust-lang.org/1.83.0/core/hash/trait.Hash.html#method.hash_slice\">Read more</a></div></details></div></details>","Hash","bridge_hub_kusama_runtime::Address"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-PartialEq-for-MultiAddress%3CAccountId,+AccountIndex%3E\" class=\"impl\"><a href=\"#impl-PartialEq-for-MultiAddress%3CAccountId,+AccountIndex%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;AccountId, AccountIndex&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.83.0/core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a> for <a class=\"enum\" href=\"bridge_hub_kusama_runtime/enum.MultiAddress.html\" title=\"enum bridge_hub_kusama_runtime::MultiAddress\">MultiAddress</a>&lt;AccountId, AccountIndex&gt;<div class=\"where\">where\n    AccountId: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.83.0/core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a>,\n    AccountIndex: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.83.0/core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.eq\" class=\"method trait-impl\"><a href=\"#method.eq\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.83.0/core/cmp/trait.PartialEq.html#tymethod.eq\" class=\"fn\">eq</a>(&amp;self, other: &amp;<a class=\"enum\" href=\"bridge_hub_kusama_runtime/enum.MultiAddress.html\" title=\"enum bridge_hub_kusama_runtime::MultiAddress\">MultiAddress</a>&lt;AccountId, AccountIndex&gt;) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.83.0/std/primitive.bool.html\">bool</a></h4></section></summary><div class='docblock'>Tests for <code>self</code> and <code>other</code> values to be equal, and is used by <code>==</code>.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.ne\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/1.83.0/src/core/cmp.rs.html#261\">source</a></span><a href=\"#method.ne\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.83.0/core/cmp/trait.PartialEq.html#method.ne\" class=\"fn\">ne</a>(&amp;self, other: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.83.0/std/primitive.reference.html\">&amp;Rhs</a>) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.83.0/std/primitive.bool.html\">bool</a></h4></section></summary><div class='docblock'>Tests for <code>!=</code>. The default implementation is almost always sufficient,\nand should not be overridden without very good reason.</div></details></div></details>","PartialEq","bridge_hub_kusama_runtime::Address"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-TypeInfo-for-MultiAddress%3CAccountId,+AccountIndex%3E\" class=\"impl\"><a href=\"#impl-TypeInfo-for-MultiAddress%3CAccountId,+AccountIndex%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;AccountId, AccountIndex&gt; TypeInfo for <a class=\"enum\" href=\"bridge_hub_kusama_runtime/enum.MultiAddress.html\" title=\"enum bridge_hub_kusama_runtime::MultiAddress\">MultiAddress</a>&lt;AccountId, AccountIndex&gt;<div class=\"where\">where\n    AccountId: TypeInfo + 'static,\n    AccountIndex: HasCompact + TypeInfo + 'static,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle\" open><summary><section id=\"associatedtype.Identity\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.Identity\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a class=\"associatedtype\">Identity</a> = <a class=\"enum\" href=\"bridge_hub_kusama_runtime/enum.MultiAddress.html\" title=\"enum bridge_hub_kusama_runtime::MultiAddress\">MultiAddress</a>&lt;AccountId, AccountIndex&gt;</h4></section></summary><div class='docblock'>The type identifying for which type info is provided. <a>Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.type_info\" class=\"method trait-impl\"><a href=\"#method.type_info\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">type_info</a>() -&gt; Type</h4></section></summary><div class='docblock'>Returns the static type identifier for <code>Self</code>.</div></details></div></details>","TypeInfo","bridge_hub_kusama_runtime::Address"],["<section id=\"impl-EncodeLike-for-MultiAddress%3CAccountId,+AccountIndex%3E\" class=\"impl\"><a href=\"#impl-EncodeLike-for-MultiAddress%3CAccountId,+AccountIndex%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;AccountId, AccountIndex&gt; EncodeLike for <a class=\"enum\" href=\"bridge_hub_kusama_runtime/enum.MultiAddress.html\" title=\"enum bridge_hub_kusama_runtime::MultiAddress\">MultiAddress</a>&lt;AccountId, AccountIndex&gt;<div class=\"where\">where\n    AccountId: Encode,\n    AccountIndex: HasCompact,</div></h3></section>","EncodeLike","bridge_hub_kusama_runtime::Address"],["<section id=\"impl-Eq-for-MultiAddress%3CAccountId,+AccountIndex%3E\" class=\"impl\"><a href=\"#impl-Eq-for-MultiAddress%3CAccountId,+AccountIndex%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;AccountId, AccountIndex&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.83.0/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a> for <a class=\"enum\" href=\"bridge_hub_kusama_runtime/enum.MultiAddress.html\" title=\"enum bridge_hub_kusama_runtime::MultiAddress\">MultiAddress</a>&lt;AccountId, AccountIndex&gt;<div class=\"where\">where\n    AccountId: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.83.0/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a>,\n    AccountIndex: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.83.0/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a>,</div></h3></section>","Eq","bridge_hub_kusama_runtime::Address"],["<section id=\"impl-StructuralPartialEq-for-MultiAddress%3CAccountId,+AccountIndex%3E\" class=\"impl\"><a href=\"#impl-StructuralPartialEq-for-MultiAddress%3CAccountId,+AccountIndex%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;AccountId, AccountIndex&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.83.0/core/marker/trait.StructuralPartialEq.html\" title=\"trait core::marker::StructuralPartialEq\">StructuralPartialEq</a> for <a class=\"enum\" href=\"bridge_hub_kusama_runtime/enum.MultiAddress.html\" title=\"enum bridge_hub_kusama_runtime::MultiAddress\">MultiAddress</a>&lt;AccountId, AccountIndex&gt;</h3></section>","StructuralPartialEq","bridge_hub_kusama_runtime::Address"]]]]);
    if (window.register_type_impls) {
        window.register_type_impls(type_impls);
    } else {
        window.pending_type_impls = type_impls;
    }
})()
//{"start":55,"fragment_lengths":[25882]}