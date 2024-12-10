(function() {
    var type_impls = Object.fromEntries([["integration_tests_common",[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-BridgeMessageHandler-for-BridgeHubMessageHandler%3CS,+T,+I%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/integration_tests_common/impls.rs.html#50-127\">source</a><a href=\"#impl-BridgeMessageHandler-for-BridgeHubMessageHandler%3CS,+T,+I%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;S, T, I&gt; BridgeMessageHandler for <a class=\"struct\" href=\"integration_tests_common/impls/struct.BridgeHubMessageHandler.html\" title=\"struct integration_tests_common::impls::BridgeHubMessageHandler\">BridgeHubMessageHandler</a>&lt;S, T, I&gt;<div class=\"where\">where\n    S: <a class=\"trait\" href=\"pallet_bridge_messages/pallet/trait.Config.html\" title=\"trait pallet_bridge_messages::pallet::Config\">Config</a>&lt;Instance1&gt;,\n    T: <a class=\"trait\" href=\"pallet_bridge_messages/pallet/trait.Config.html\" title=\"trait pallet_bridge_messages::pallet::Config\">Config</a>&lt;I&gt;,\n    I: 'static,\n    &lt;T as <a class=\"trait\" href=\"pallet_bridge_messages/pallet/trait.Config.html\" title=\"trait pallet_bridge_messages::pallet::Config\">Config</a>&lt;I&gt;&gt;::<a class=\"associatedtype\" href=\"pallet_bridge_messages/pallet/trait.Config.html#associatedtype.InboundPayload\" title=\"type pallet_bridge_messages::pallet::Config::InboundPayload\">InboundPayload</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.83.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.83.0/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.83.0/std/primitive.u8.html\">u8</a>&gt;&gt;,\n    &lt;T as <a class=\"trait\" href=\"pallet_bridge_messages/pallet/trait.Config.html\" title=\"trait pallet_bridge_messages::pallet::Config\">Config</a>&lt;I&gt;&gt;::<a class=\"associatedtype\" href=\"pallet_bridge_messages/pallet/trait.Config.html#associatedtype.MessageDispatch\" title=\"type pallet_bridge_messages::pallet::Config::MessageDispatch\">MessageDispatch</a>: <a class=\"trait\" href=\"bp_messages/target_chain/trait.MessageDispatch.html\" title=\"trait bp_messages::target_chain::MessageDispatch\">MessageDispatch</a>&lt;DispatchLevelResult = <a class=\"enum\" href=\"bridge_runtime_common/messages_xcm_extension/enum.XcmBlobMessageDispatchResult.html\" title=\"enum bridge_runtime_common::messages_xcm_extension::XcmBlobMessageDispatchResult\">XcmBlobMessageDispatchResult</a>&gt;,</div></h3></section></summary><div class=\"impl-items\"><section id=\"method.get_source_outbound_messages\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/integration_tests_common/impls.rs.html#59-86\">source</a><a href=\"#method.get_source_outbound_messages\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">get_source_outbound_messages</a>() -&gt; <a class=\"struct\" href=\"https://doc.rust-lang.org/1.83.0/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;BridgeMessage&gt;</h4></section><section id=\"method.dispatch_target_inbound_message\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/integration_tests_common/impls.rs.html#88-115\">source</a><a href=\"#method.dispatch_target_inbound_message\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">dispatch_target_inbound_message</a>(\n    message: BridgeMessage,\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.83.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.83.0/std/primitive.unit.html\">()</a>, BridgeMessageDispatchError&gt;</h4></section><section id=\"method.notify_source_message_delivery\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/integration_tests_common/impls.rs.html#117-126\">source</a><a href=\"#method.notify_source_message_delivery\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">notify_source_message_delivery</a>(lane_id: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.83.0/std/primitive.u32.html\">u32</a>)</h4></section></div></details>","BridgeMessageHandler","integration_tests_common::impls::RococoWococoMessageHandler","integration_tests_common::impls::WococoRococoMessageHandler"]]]]);
    if (window.register_type_impls) {
        window.register_type_impls(type_impls);
    } else {
        window.pending_type_impls = type_impls;
    }
})()
//{"start":55,"fragment_lengths":[4421]}