(function() {
    var implementors = Object.fromEntries([["bridge_hub_rococo_runtime",[["impl FromBridgeHubRococoInboundLaneApiV1&lt;Block&lt;Header&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.83.0/std/primitive.u32.html\">u32</a>, BlakeTwo256&gt;, UncheckedExtrinsic&lt;<a class=\"enum\" href=\"bridge_hub_rococo_runtime/enum.MultiAddress.html\" title=\"enum bridge_hub_rococo_runtime::MultiAddress\">MultiAddress</a>&lt;&lt;&lt;MultiSignature as Verify&gt;::Signer as IdentifyAccount&gt;::AccountId, <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.83.0/std/primitive.unit.html\">()</a>&gt;, <a class=\"enum\" href=\"bridge_hub_rococo_runtime/enum.RuntimeCall.html\" title=\"enum bridge_hub_rococo_runtime::RuntimeCall\">RuntimeCall</a>, MultiSignature, (CheckNonZeroSender&lt;<a class=\"struct\" href=\"bridge_hub_rococo_runtime/struct.Runtime.html\" title=\"struct bridge_hub_rococo_runtime::Runtime\">Runtime</a>&gt;, CheckSpecVersion&lt;<a class=\"struct\" href=\"bridge_hub_rococo_runtime/struct.Runtime.html\" title=\"struct bridge_hub_rococo_runtime::Runtime\">Runtime</a>&gt;, CheckTxVersion&lt;<a class=\"struct\" href=\"bridge_hub_rococo_runtime/struct.Runtime.html\" title=\"struct bridge_hub_rococo_runtime::Runtime\">Runtime</a>&gt;, CheckGenesis&lt;<a class=\"struct\" href=\"bridge_hub_rococo_runtime/struct.Runtime.html\" title=\"struct bridge_hub_rococo_runtime::Runtime\">Runtime</a>&gt;, CheckMortality&lt;<a class=\"struct\" href=\"bridge_hub_rococo_runtime/struct.Runtime.html\" title=\"struct bridge_hub_rococo_runtime::Runtime\">Runtime</a>&gt;, CheckNonce&lt;<a class=\"struct\" href=\"bridge_hub_rococo_runtime/struct.Runtime.html\" title=\"struct bridge_hub_rococo_runtime::Runtime\">Runtime</a>&gt;, CheckWeight&lt;<a class=\"struct\" href=\"bridge_hub_rococo_runtime/struct.Runtime.html\" title=\"struct bridge_hub_rococo_runtime::Runtime\">Runtime</a>&gt;, ChargeTransactionPayment&lt;<a class=\"struct\" href=\"bridge_hub_rococo_runtime/struct.Runtime.html\" title=\"struct bridge_hub_rococo_runtime::Runtime\">Runtime</a>&gt;, <a class=\"struct\" href=\"bridge_hub_rococo_runtime/struct.BridgeRejectObsoleteHeadersAndMessages.html\" title=\"struct bridge_hub_rococo_runtime::BridgeRejectObsoleteHeadersAndMessages\">BridgeRejectObsoleteHeadersAndMessages</a>, (<a class=\"struct\" href=\"bridge_runtime_common/refund_relayer_extension/struct.RefundBridgedParachainMessages.html\" title=\"struct bridge_runtime_common::refund_relayer_extension::RefundBridgedParachainMessages\">RefundBridgedParachainMessages</a>&lt;<a class=\"struct\" href=\"bridge_hub_rococo_runtime/struct.Runtime.html\" title=\"struct bridge_hub_rococo_runtime::Runtime\">Runtime</a>, <a class=\"struct\" href=\"bridge_runtime_common/refund_relayer_extension/struct.RefundableParachain.html\" title=\"struct bridge_runtime_common::refund_relayer_extension::RefundableParachain\">RefundableParachain</a>&lt;Instance2, <a class=\"struct\" href=\"bp_bridge_hub_rococo/struct.BridgeHubRococo.html\" title=\"struct bp_bridge_hub_rococo::BridgeHubRococo\">BridgeHubRococo</a>&gt;, <a class=\"struct\" href=\"bridge_runtime_common/refund_relayer_extension/struct.RefundableMessagesLane.html\" title=\"struct bridge_runtime_common::refund_relayer_extension::RefundableMessagesLane\">RefundableMessagesLane</a>&lt;Instance2, <a class=\"struct\" href=\"bridge_hub_rococo_runtime/bridge_hub_wococo_config/struct.BridgeHubRococoMessagesLane.html\" title=\"struct bridge_hub_rococo_runtime::bridge_hub_wococo_config::BridgeHubRococoMessagesLane\">BridgeHubRococoMessagesLane</a>&gt;, <a class=\"struct\" href=\"bridge_runtime_common/refund_relayer_extension/struct.ActualFeeRefund.html\" title=\"struct bridge_runtime_common::refund_relayer_extension::ActualFeeRefund\">ActualFeeRefund</a>&lt;<a class=\"struct\" href=\"bridge_hub_rococo_runtime/struct.Runtime.html\" title=\"struct bridge_hub_rococo_runtime::Runtime\">Runtime</a>&gt;, <a class=\"struct\" href=\"bridge_hub_rococo_runtime/bridge_hub_wococo_config/struct.PriorityBoostPerMessage.html\" title=\"struct bridge_hub_rococo_runtime::bridge_hub_wococo_config::PriorityBoostPerMessage\">PriorityBoostPerMessage</a>, <a class=\"struct\" href=\"bridge_hub_rococo_runtime/bridge_hub_wococo_config/struct.StrBridgeRefundBridgeHubRococoMessages.html\" title=\"struct bridge_hub_rococo_runtime::bridge_hub_wococo_config::StrBridgeRefundBridgeHubRococoMessages\">StrBridgeRefundBridgeHubRococoMessages</a>&gt;, <a class=\"struct\" href=\"bridge_runtime_common/refund_relayer_extension/struct.RefundBridgedParachainMessages.html\" title=\"struct bridge_runtime_common::refund_relayer_extension::RefundBridgedParachainMessages\">RefundBridgedParachainMessages</a>&lt;<a class=\"struct\" href=\"bridge_hub_rococo_runtime/struct.Runtime.html\" title=\"struct bridge_hub_rococo_runtime::Runtime\">Runtime</a>, <a class=\"struct\" href=\"bridge_runtime_common/refund_relayer_extension/struct.RefundableParachain.html\" title=\"struct bridge_runtime_common::refund_relayer_extension::RefundableParachain\">RefundableParachain</a>&lt;Instance1, <a class=\"struct\" href=\"bp_bridge_hub_wococo/struct.BridgeHubWococo.html\" title=\"struct bp_bridge_hub_wococo::BridgeHubWococo\">BridgeHubWococo</a>&gt;, <a class=\"struct\" href=\"bridge_runtime_common/refund_relayer_extension/struct.RefundableMessagesLane.html\" title=\"struct bridge_runtime_common::refund_relayer_extension::RefundableMessagesLane\">RefundableMessagesLane</a>&lt;Instance1, <a class=\"struct\" href=\"bridge_hub_rococo_runtime/bridge_hub_rococo_config/struct.BridgeHubWococoMessagesLane.html\" title=\"struct bridge_hub_rococo_runtime::bridge_hub_rococo_config::BridgeHubWococoMessagesLane\">BridgeHubWococoMessagesLane</a>&gt;, <a class=\"struct\" href=\"bridge_runtime_common/refund_relayer_extension/struct.ActualFeeRefund.html\" title=\"struct bridge_runtime_common::refund_relayer_extension::ActualFeeRefund\">ActualFeeRefund</a>&lt;<a class=\"struct\" href=\"bridge_hub_rococo_runtime/struct.Runtime.html\" title=\"struct bridge_hub_rococo_runtime::Runtime\">Runtime</a>&gt;, <a class=\"struct\" href=\"bridge_hub_rococo_runtime/bridge_hub_rococo_config/struct.PriorityBoostPerMessage.html\" title=\"struct bridge_hub_rococo_runtime::bridge_hub_rococo_config::PriorityBoostPerMessage\">PriorityBoostPerMessage</a>, <a class=\"struct\" href=\"bridge_hub_rococo_runtime/bridge_hub_rococo_config/struct.StrBridgeRefundBridgeHubWococoMessages.html\" title=\"struct bridge_hub_rococo_runtime::bridge_hub_rococo_config::StrBridgeRefundBridgeHubWococoMessages\">StrBridgeRefundBridgeHubWococoMessages</a>&gt;))&gt;&gt;&gt; for <a class=\"struct\" href=\"bridge_hub_rococo_runtime/struct.Runtime.html\" title=\"struct bridge_hub_rococo_runtime::Runtime\">Runtime</a>"]]]]);
    if (window.register_implementors) {
        window.register_implementors(implementors);
    } else {
        window.pending_implementors = implementors;
    }
})()
//{"start":57,"fragment_lengths":[6742]}