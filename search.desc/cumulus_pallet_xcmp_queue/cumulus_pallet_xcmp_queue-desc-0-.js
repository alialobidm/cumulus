searchState.loadedDescShard("cumulus_pallet_xcmp_queue", 0, "A pallet which uses the XCMP transport layer to handle …\nStruct containing detailed information about the inbound …\nStruct containing detailed information about the outbound …\nIndex used to identify overweight XCMs.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nA module that is responsible for migration of storage.\nThe <code>pallet</code> module in each FRAME pallet hosts the most …\nMigrates the pallet storage to the most recent version.\nThe current storage version.\nReturns the argument unchanged.\nGet a mutable reference to the inner from the outer.\nGet a reference to the inner from the outer.\nCalls <code>U::from(self)</code>.\nMigrates <code>QueueConfigData</code> from v1 (using only reference …\nBad XCM format used.\nBad overweight index.\nBad XCM version used.\nBad XCM data.\nBad XCM origin.\nContains a variant per dispatchable extrinsic that this …\nInformation on the avaialble XCMP channels.\nConfiguration trait of this pallet.\nThe origin that is allowed to resume or suspend the XCMP …\nThe conversion function used to attempt to convert an XCM …\nThe <code>Error</code> enum of this pallet.\nThe <code>Event</code> enum of this pallet\nThe origin that is allowed to execute overweight messages.\nSome XCM failed.\nFailed to send XCM message.\nType alias to <code>Pallet</code>, to be used by <code>construct_runtime</code>.\nAn XCM exceeded the individual message weight budget.\nAn XCM from the overweight queue was executed with the …\nThe <code>Pallet</code> struct, the main type that implements traits …\nThe price for delivering an XCM to a sibling parachain …\nSome XCM was executed ok.\nMeans of converting an <code>Xcm</code> into a <code>VersionedXcm</code>.\nThe weight information of this pallet.\nProvided weight is possibly not enough to execute the …\nSomething to execute an XCM message. We need this to …\nAn HRMP message was sent to a sibling parachain.\nAuto-generated docs-only module listing all defined …\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCreate a call with the variant <code>resume_xcm_execution</code>.\nCreate a call with the variant <code>service_overweight</code>.\nCreate a call with the variant <code>suspend_xcm_execution</code>.\nCreate a call with the variant <code>update_drop_threshold</code>.\nCreate a call with the variant <code>update_resume_threshold</code>.\nCreate a call with the variant <code>update_suspend_threshold</code>.\nCreate a call with the variant <code>update_threshold_weight</code>.\nCreate a call with the variant <code>update_weight_restrict_decay</code>…\nCreate a call with the variant …\nResumes all XCM executions for the XCMP queue.\nSee <code>Pallet::resume_xcm_execution</code>.\nServices a single overweight XCM.\nSee <code>Pallet::service_overweight</code>.\nAuto-generated docs-only module listing all (public and …\nSuspends all XCM executions for the XCMP queue, regardless …\nSee <code>Pallet::suspend_xcm_execution</code>.\nOverwrites the number of pages of messages which must be …\nSee <code>Pallet::update_drop_threshold</code>.\nOverwrites the number of pages of messages which the queue …\nSee <code>Pallet::update_resume_threshold</code>.\nOverwrites the number of pages of messages which must be …\nSee <code>Pallet::update_suspend_threshold</code>.\nOverwrites the amount of remaining weight under which we …\nSee <code>Pallet::update_threshold_weight</code>.\nOverwrites the speed to which the available weight …\nSee <code>Pallet::update_weight_restrict_decay</code>.\nOverwrite the maximum amount of weight any individual …\nSee <code>Pallet::update_xcmp_max_individual_weight</code>.\nResumes all XCM executions for the XCMP queue.\nServices a single overweight XCM.\nSuspends all XCM executions for the XCMP queue, regardless …\nOverwrites the number of pages of messages which must be …\nOverwrites the number of pages of messages which the queue …\nOverwrites the number of pages of messages which must be …\nOverwrites the amount of remaining weight under which we …\nOverwrites the speed to which the available weight …\nOverwrite the maximum amount of weight any individual …\nInbound aggregate XCMP messages. It can only be one per …\nStatus of the inbound XCMP channels.\nThe messages outbound in a given XCMP channel.\nThe non-empty XCMP channels in order of becoming …\nThe messages that exceeded max individual message weight …\nThe number of overweight messages ever recorded in …\nThe configuration which controls the dynamics of the …\nWhether or not the XCMP queue is suspended from executing …\nAny signal messages waiting to be sent.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nReturns the argument unchanged.\nGet a mutable reference to the inner from the outer.\nGet a reference to the inner from the outer.\nCalls <code>U::from(self)</code>.")