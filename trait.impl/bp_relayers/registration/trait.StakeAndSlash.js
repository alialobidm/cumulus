(function() {
    var implementors = Object.fromEntries([["bp_relayers",[]],["pallet_bridge_relayers",[["impl&lt;AccountId, BlockNumber, Currency, ReserveId, Stake, Lease&gt; StakeAndSlash&lt;AccountId, BlockNumber, &lt;Currency as Currency&lt;AccountId&gt;&gt;::Balance&gt; for <a class=\"struct\" href=\"pallet_bridge_relayers/struct.StakeAndSlashNamed.html\" title=\"struct pallet_bridge_relayers::StakeAndSlashNamed\">StakeAndSlashNamed</a>&lt;AccountId, BlockNumber, Currency, ReserveId, Stake, Lease&gt;<div class=\"where\">where\n    AccountId: Codec + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.83.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>,\n    Currency: NamedReservableCurrency&lt;AccountId&gt;,\n    ReserveId: Get&lt;Currency::ReserveIdentifier&gt;,\n    Stake: Get&lt;Currency::Balance&gt;,\n    Lease: Get&lt;BlockNumber&gt;,</div>"]]]]);
    if (window.register_implementors) {
        window.register_implementors(implementors);
    } else {
        window.pending_implementors = implementors;
    }
})()
//{"start":57,"fragment_lengths":[18,816]}