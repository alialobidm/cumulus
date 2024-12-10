(function() {
    var type_impls = Object.fromEntries([["assets_common",[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-MaybeEquivalence%3CMultiLocation,+AssetId%3E-for-AsPrefixedGeneralIndex%3CPrefix,+AssetId,+ConvertAssetId%3E\" class=\"impl\"><a href=\"#impl-MaybeEquivalence%3CMultiLocation,+AssetId%3E-for-AsPrefixedGeneralIndex%3CPrefix,+AssetId,+ConvertAssetId%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;Prefix, AssetId, ConvertAssetId&gt; MaybeEquivalence&lt;MultiLocation, AssetId&gt; for AsPrefixedGeneralIndex&lt;Prefix, AssetId, ConvertAssetId&gt;<div class=\"where\">where\n    Prefix: Get&lt;MultiLocation&gt;,\n    AssetId: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.83.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,\n    ConvertAssetId: MaybeEquivalence&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.83.0/std/primitive.u128.html\">u128</a>, AssetId&gt;,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.convert\" class=\"method trait-impl\"><a href=\"#method.convert\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">convert</a>(id: &amp;MultiLocation) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.83.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;AssetId&gt;</h4></section></summary><div class='docblock'>Attempt to convert reference of <code>A</code> into value of <code>B</code>, returning <code>None</code> if not possible.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.convert_back\" class=\"method trait-impl\"><a href=\"#method.convert_back\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">convert_back</a>(what: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.83.0/std/primitive.reference.html\">&amp;AssetId</a>) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.83.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;MultiLocation&gt;</h4></section></summary><div class='docblock'>Attempt to convert reference of <code>B</code> into value of <code>A</code>, returning <code>None</code> if not possible.</div></details></div></details>","MaybeEquivalence<MultiLocation, AssetId>","assets_common::AssetIdForTrustBackedAssetsConvert","assets_common::AssetIdForPoolAssetsConvert"]]]]);
    if (window.register_type_impls) {
        window.register_type_impls(type_impls);
    } else {
        window.pending_type_impls = type_impls;
    }
})()
//{"start":55,"fragment_lengths":[2426]}