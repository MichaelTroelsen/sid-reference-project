# music-assembler — reconstruction manifest

See `knowledge/players/music-assembler.md` for the full Verification
narrative — it is already highly specific (exact files, exact addresses,
exact byte-diff percentages and remaining-divergence ranges).

**Honest gap**: unlike the other 7 verified cards, this one's exact
scratchpad reconstruction could not be unambiguously re-identified this
pass. The original run-stub-relocation research (`Quix_preview.sid`,
`4_U_2_C.sid`) left several candidate files (`quix.prg`, `quix_A.prg`,
`quix_shift.prg`) using different relocation bases, and none of the
recovered candidates reproduced the card's own reported 98.88%/98.77% byte-
diff figures when re-diffed directly against the pristine payload this
pass — the true final file for each was not conclusively identified among
them, and no `4_U_2_C` reassembly file survived in scratchpad at all (only
its pristine payload, `4_U_2_C_orig.bin`).

Rather than publish a plausible-looking but unverified manifest, this is
recorded as an open gap: the reconstruction itself is fully reproducible
from the card's own documented command (`SIDdecompiler.exe` relocated to
each file's PSID **play** address, not load address — see the card's
"Key gotcha found" — followed by `64tass.exe`), but the specific byte-level
patch table was not recovered from a surviving artifact this pass. If this
card is ever revisited, re-running the documented command against
`MUSICIANS/T/The_Flying_Dutchman/Quix_preview.sid` and
`MUSICIANS/A/Active/4_U_2_C.sid` and diffing against the pristine payload
would reproduce it from scratch.
