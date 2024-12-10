searchState.loadedDescShard("glutton_runtime", 0, "Glutton Runtime\nThe address format for describing accounts.\nIts a 20 byte representation.\nIt’s a 32 byte representation.\nAll pallets included in the runtime as a nested tuple of …\nAll pallets included in the runtime as a nested tuple of …\nAll pallets included in the runtime as a nested tuple of …\nAll pallets included in the runtime as a nested tuple of …\nAll pallets included in the runtime as a nested tuple of …\nAll pallets included in the runtime as a nested tuple of …\nBlock type as expected by this runtime.\nTime to execute an empty block. Calculated by multiplying …\nBlockId type as expected by this runtime.\nAn index to a block.\nComplex storage builder stuff.\nA generalized group of dispatch types.\nA <code>Contains</code> implementation that contains every value.\nExecutive: handles dispatch to the various modules.\nTime to execute a NO-OP extrinsic, for example …\nA hash of some data used by the chain.\nIdentify by block header hash.\nBlock header type as expected by this runtime.\nIt’s an account ID (pubkey).\nImplementor of <code>WeightToFee</code> that maps one unit of weight to …\nIt’s an account index.\nTrivial utility for implementing <code>Contains</code>/<code>OrderedMembership</code>…\nThe maximal weight in all dimensions.\nA mandatory dispatch. These kinds of dispatch are always …\nIndex of a transaction in the chain.\nA normal dispatch.\nIdentify by block number.\nAn operational dispatch.\nProvides an implementation of <code>PalletInfo</code> to provide …\nA fixed point representation of a number in the range [0, 1…\nA fixed point representation of a number in the range [0, 1…\nThe type that get/take return.\nA trait that is able to provide randomness.\nIt’s some arbitrary raw bytes.\nBy default, Substrate uses RocksDB, so this will be the …\nImplements all runtime apis for the client side.\nA reason for placing a freeze on funds.\nA reason for placing a hold on funds.\nAn identifier for each lock placed on funds.\nThe runtime origin type representing the origin of a call.\nA reason for slashing funds.\nA Block signed with a Justification\nThe SignedExtension to the basic transaction logic.\nA trait for working with macro-generated storage values …\nUnchecked extrinsic type as expected by this runtime.\nThe required configuration field.\nConstant version of Add for <code>proof_size</code> component with u64.\nConstant version of Add for <code>ref_time</code> component with u64.\nReturns an array containing all dispatch classes.\nReturns true if all of <code>self</code>’s constituent weights is …\nReturns true if all of <code>self</code>’s constituent weights is …\nReturns true if all of <code>self</code>’s constituent weights is …\nReturns true if all of <code>self</code>’s constituent weights is …\nReturns true if any of <code>self</code>’s constituent weights is …\nReturns true if any of <code>self</code>’s constituent weights is …\nReturns true if any of <code>self</code>’s constituent weights is …\nReturns true if any of <code>self</code>’s constituent weights is …\nReturns true if any of <code>self</code>’s constituent weights is …\nAppend the given item to the value in the storage.\nAssimilate the storage for this module into pre-existing …\nFull block.\nBuild the storage out of this builder.\nTry to increase <code>self</code> by <code>amount</code> via checked addition.\nChecked <code>Weight</code> addition. Computes <code>self + rhs</code>, returning …\nChecked <code>Weight</code> scalar division. Computes …\nCalculates how many <code>other</code> fit into <code>self</code>.\nChecked <code>Weight</code> scalar multiplication. Computes …\nTry to reduce <code>self</code> by <code>amount</code> via checked subtraction.\nChecked <code>Weight</code> subtraction. Computes <code>self - rhs</code>, returning …\nThe compute limit.\nConstruct a runtime, with the given name and the given …\nRead the length of the storage value without decoding the …\nConsume self and return the number of parts per thing.\nSee <code>PerThing::deconstruct</code>.\nSee <code>PerThing::deconstruct</code>.\nConsume self and return the number of parts per thing.\nA chain-specific digest of data useful for light clients …\nConstant version of Div with u64.\nDoes the value (explicitly) exist in storage?\nThe accompanying extrinsics.\nThe merkle root of the extrinsics.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nConvert to runtime origin, using as filter: …\nConvert to runtime origin with caller being system signed …\nConvert to runtime origin using […\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nConstruct <code>Weight</code> from the same weight for all parts.\nOptionally convert the <code>DispatchError</code> into the <code>RuntimeError</code>.\nNOTE: saturate to 0 or 1 if x is beyond <code>[0, 1]</code>\nSee <code>PerThing::from_float</code>.\nSee <code>PerThing::from_float</code>.\nNOTE: saturate to 0 or 1 if x is beyond <code>[0, 1]</code>\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nConstruct <code>Weight</code> from weight parts, namely reference time …\nBuild this type from a number of parts per thing.\nFrom an explicitly defined number of parts per maximum of …\nFrom an explicitly defined number of parts per maximum of …\nBuild this type from a number of parts per thing.\nConverts a percent into <code>Self</code>. Equal to <code>x / 100</code>.\nConverts a percent into <code>Self</code>. Equal to <code>x / 100</code>.\nConverts a percent into <code>Self</code>. Equal to <code>x / 1000</code>.\nConverts a percent into <code>Self</code>. Equal to <code>x / 1000</code>.\nSee <code>PerThing::from_rational</code>.\nSee <code>PerThing::from_rational</code>.\nSee <code>PerThing::from_rational</code>.\nSee <code>PerThing::from_rational</code>.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nThe function that should be called.\nLoad the value from the provided storage instance.\nReturns the value of this parameter type.\nReturns the value of this parameter type.\nReturns the value of this parameter type.\nReturns the value of this parameter type.\nReturns the value of this parameter type.\nReturns the value of this parameter type.\nReturns the value of this parameter type.\nReturns the value of this parameter type.\nReturns the value of this parameter type.\nGet the storage key.\nThe block header.\nInteger division with another value, rounding down.\nInteger division with another value, rounding down.\nInteger multiplication with another value, saturating at 1.\nInteger multiplication with another value, saturating at 1.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nSee <code>PerThing::is_one</code>.\nSee <code>PerThing::is_one</code>.\nSee <code>PerThing::is_zero</code>.\nSee <code>PerThing::is_zero</code>.\nBlock justification.\nThe <code>AccountId</code> of the sudo key.\nClear the storage value.\nGet the aggressive max of <code>self</code> and <code>other</code> weight.\nGet the conservative min of <code>self</code> and <code>other</code> weight.\nConstant version of Mul with u64.\nSee <code>PerThing::mul_ceil</code>.\nSee <code>PerThing::mul_ceil</code>.\nSee <code>PerThing::mul_floor</code>.\nSee <code>PerThing::mul_floor</code>.\nMutate the value\nMutate the value. Deletes the item if mutated to a <code>None</code>.\nMutate the value under a key if the value already exists. …\nThe version information used to identify this runtime when …\nReturns an array of all dispatch classes except <code>Mandatory</code>.\nCreate with system none origin and …\nThe block number.\nSee <code>PerThing::one</code>\nSee <code>PerThing::one</code>\nCreate new implementations of the <code>Get</code> trait.\nThe parent hash.\nReturn the storage size part of the weight.\nReturn a mutable reference to the storage size part of the …\nStore a value under this key into the provided storage …\nGet the most recently determined random seed, along with …\nGet the basic random seed.\nReturn the reference time part of the weight.\nReturn a mutable reference to the reference time part of …\nCreate with system root origin and …\nIncrement <code>Weight</code> by <code>amount</code> via saturating addition.\nSaturating <code>Weight</code> addition. Computes <code>self + rhs</code>, …\nSaturating addition. Compute <code>self + rhs</code>, saturating at the …\nSaturating addition. Compute <code>self + rhs</code>, saturating at the …\nSaturating <code>Weight</code> scalar division. Computes …\nSaturating division. Compute <code>self / rhs</code>, saturating at one …\nSaturating division. Compute <code>self / rhs</code>, saturating at one …\nSaturating <code>Weight</code> scalar multiplication. Computes …\nSaturating multiply. Compute <code>self * rhs</code>, saturating at the …\nSaturating multiply. Compute <code>self * rhs</code>, saturating at the …\nSaturating <code>Weight</code> scalar exponentiation. Computes …\nSaturating exponentiation. Computes <code>self.pow(exp)</code>, …\nSaturating exponentiation. Computes <code>self.pow(exp)</code>, …\nSee <code>PerThing::saturating_reciprocal_mul</code>.\nSee <code>PerThing::saturating_reciprocal_mul</code>.\nSee <code>PerThing::saturating_reciprocal_mul_ceil</code>.\nSee <code>PerThing::saturating_reciprocal_mul_ceil</code>.\nSee <code>PerThing::saturating_reciprocal_mul_floor</code>.\nSee <code>PerThing::saturating_reciprocal_mul_floor</code>.\nReduce <code>Weight</code> by <code>amount</code> via saturating subtraction.\nSaturating <code>Weight</code> subtraction. Computes <code>self - rhs</code>, …\nSaturating subtraction. Compute <code>self - rhs</code>, saturating at …\nSaturating subtraction. Compute <code>self - rhs</code>, saturating at …\nStore a value under this key into the provided storage …\nSet the storage size part of the weight.\nSet the reference time part of the weight.\nThe signature, address, number of extrinsics have come …\nCreate with system signed origin and …\nSee <code>PerThing::square</code>.\nSee <code>PerThing::square</code>.\nThe state trie merkle root\nThe storage limit.\nConstant version of Sub for <code>proof_size</code> component with u64.\nConstant version of Sub for <code>ref_time</code> component with u64.\nTake a value from storage, removing it afterwards.\nTranslate a value from some previous type (<code>O</code>) to the …\nThe amount of trash data for wasting proof size.\nTry to add some <code>other</code> weight while upholding the <code>limit</code>.\nTry to get the underlying value from the provided storage …\nMutate the value if closure returns <code>Ok</code>\nMutate the value if closure returns <code>Ok</code>. Deletes the item …\nReturn a <code>Weight</code> where all fields are zero.\nSee <code>PerThing::zero</code>.\nSee <code>PerThing::zero</code>.\nAutogenerated weights for <code>pallet_glutton</code>\nWeight functions for <code>pallet_glutton</code>.\nStorage: <code>Glutton::Storage</code> (r:1 w:0) Proof: <code>Glutton::Storage</code>…\nReturns the argument unchanged.\nGet a mutable reference to the inner from the outer.\nGet a reference to the inner from the outer.\nStorage: <code>Glutton::TrashDataCount</code> (r:1 w:1) Proof: …\nStorage: <code>Glutton::TrashDataCount</code> (r:1 w:1) Proof: …\nCalls <code>U::from(self)</code>.\nStorage: <code>Glutton::Storage</code> (r:1 w:0) Proof: <code>Glutton::Storage</code>…\nStorage: <code>Glutton::Storage</code> (r:1 w:0) Proof: <code>Glutton::Storage</code>…\nStorage: <code>Glutton::Compute</code> (r:0 w:1) Proof: <code>Glutton::Compute</code>…\nStorage: <code>Glutton::Storage</code> (r:0 w:1) Proof: <code>Glutton::Storage</code>…\nStorage: <code>Glutton::TrashData</code> (r:5000 w:0) Proof: …\nThe range of component <code>i</code> is <code>[0, 100000]</code>.\nThis is the type we use to convert an (incoming) XCM …\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a mutable reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nGet a reference to the inner from the outer.\nReturns the value of this parameter type.\nReturns the value of this parameter type.\nReturns the value of this parameter type.\nReturns the value of this parameter type.\nReturns the value of this parameter type.\nReturns the value of this parameter type.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.")