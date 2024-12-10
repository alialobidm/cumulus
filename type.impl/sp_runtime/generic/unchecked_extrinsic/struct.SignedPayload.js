(function() {
    var type_impls = Object.fromEntries([["cumulus_test_runtime",[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Encode-for-SignedPayload%3CCall,+Extra%3E\" class=\"impl\"><a href=\"#impl-Encode-for-SignedPayload%3CCall,+Extra%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;Call, Extra&gt; Encode for SignedPayload&lt;Call, Extra&gt;<div class=\"where\">where\n    Call: Encode,\n    Extra: SignedExtension,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.using_encoded\" class=\"method trait-impl\"><a href=\"#method.using_encoded\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">using_encoded</a>&lt;R, F&gt;(&amp;self, f: F) -&gt; R<div class=\"where\">where\n    F: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.83.0/core/ops/function/trait.FnOnce.html\" title=\"trait core::ops::function::FnOnce\">FnOnce</a>(&amp;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.83.0/std/primitive.u8.html\">u8</a>]) -&gt; R,</div></h4></section></summary><div class=\"docblock\"><p>Get an encoded version of this payload.</p>\n<p>Payloads longer than 256 bytes are going to be <code>blake2_256</code>-hashed.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.size_hint\" class=\"method trait-impl\"><a href=\"#method.size_hint\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">size_hint</a>(&amp;self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.83.0/std/primitive.usize.html\">usize</a></h4></section></summary><div class='docblock'>If possible give a hint of expected size of the encoding. <a>Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.encode_to\" class=\"method trait-impl\"><a href=\"#method.encode_to\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">encode_to</a>&lt;T&gt;(&amp;self, dest: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.83.0/std/primitive.reference.html\">&amp;mut T</a>)<div class=\"where\">where\n    T: Output + ?<a class=\"trait\" href=\"https://doc.rust-lang.org/1.83.0/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>,</div></h4></section></summary><div class='docblock'>Convert self to a slice and append it to the destination.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.encode\" class=\"method trait-impl\"><a href=\"#method.encode\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">encode</a>(&amp;self) -&gt; <a class=\"struct\" href=\"https://doc.rust-lang.org/1.83.0/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.83.0/std/primitive.u8.html\">u8</a>&gt; <a href=\"#\" class=\"tooltip\" data-notable-ty=\"Vec&lt;u8&gt;\">ⓘ</a></h4></section></summary><div class='docblock'>Convert self to an owned vector.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.encoded_size\" class=\"method trait-impl\"><a href=\"#method.encoded_size\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">encoded_size</a>(&amp;self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.83.0/std/primitive.usize.html\">usize</a></h4></section></summary><div class='docblock'>Calculates the encoded size. <a>Read more</a></div></details></div></details>","Encode","cumulus_test_runtime::SignedPayload"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-SignedPayload%3CCall,+Extra%3E\" class=\"impl\"><a href=\"#impl-SignedPayload%3CCall,+Extra%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;Call, Extra&gt; SignedPayload&lt;Call, Extra&gt;<div class=\"where\">where\n    Call: Encode,\n    Extra: SignedExtension,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.new\" class=\"method\"><h4 class=\"code-header\">pub fn <a class=\"fn\">new</a>(\n    call: Call,\n    extra: Extra,\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.83.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;SignedPayload&lt;Call, Extra&gt;, TransactionValidityError&gt;</h4></section></summary><div class=\"docblock\"><p>Create new <code>SignedPayload</code>.</p>\n<p>This function may fail if <code>additional_signed</code> of <code>Extra</code> is not available.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.from_raw\" class=\"method\"><h4 class=\"code-header\">pub fn <a class=\"fn\">from_raw</a>(\n    call: Call,\n    extra: Extra,\n    additional_signed: &lt;Extra as SignedExtension&gt;::AdditionalSigned,\n) -&gt; SignedPayload&lt;Call, Extra&gt;</h4></section></summary><div class=\"docblock\"><p>Create new <code>SignedPayload</code> from raw components.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.deconstruct\" class=\"method\"><h4 class=\"code-header\">pub fn <a class=\"fn\">deconstruct</a>(\n    self,\n) -&gt; (Call, Extra, &lt;Extra as SignedExtension&gt;::AdditionalSigned)</h4></section></summary><div class=\"docblock\"><p>Deconstruct the payload into it’s components.</p>\n</div></details></div></details>",0,"cumulus_test_runtime::SignedPayload"],["<section id=\"impl-EncodeLike-for-SignedPayload%3CCall,+Extra%3E\" class=\"impl\"><a href=\"#impl-EncodeLike-for-SignedPayload%3CCall,+Extra%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;Call, Extra&gt; EncodeLike for SignedPayload&lt;Call, Extra&gt;<div class=\"where\">where\n    Call: Encode,\n    Extra: SignedExtension,</div></h3></section>","EncodeLike","cumulus_test_runtime::SignedPayload"]]]]);
    if (window.register_type_impls) {
        window.register_type_impls(type_impls);
    } else {
        window.pending_type_impls = type_impls;
    }
})()
//{"start":55,"fragment_lengths":[5897]}