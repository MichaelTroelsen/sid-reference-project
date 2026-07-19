# Reconstruction manifests

Each file here is a small, durable companion to one `verified` player card's
`## Verification` section. It exists because the actual proof behind a
`verified` claim — a disassembled/reassembled `.prg` that byte-diffs and
trace-diffs against a real HVSC file — was only ever written to a per-session
scratchpad temp directory, never committed. Those directories are not
guaranteed to survive (they happened to be reused across sessions so far, by
luck, not by design).

The one piece of information in a reconstruction that is genuinely NOT
regenerable from the card's prose alone is the exact **byte-level patch
table** — which addresses SIDdecompiler's default self-modified-code trace
window got wrong, and what the pristine original byte actually is at each.
The prose sections already document address *ranges* and counts; these files
add the literal per-byte values, recomputed directly from the original HVSC
`.sid` payload and the surviving scratchpad `.prg` files (not transcribed
from memory of an agent's report).

Regenerating the reconstruction itself (the `.asm`/`.prg`) from scratch is
always possible given the original file + the documented `SIDdecompiler`/
`64tass` command line in the card's own Verification section — that part
doesn't need to be preserved. What's preserved here is the decision (which
bytes were wrong, and what they should be), which took real disassembly work
to determine and would otherwise have to be re-derived from scratch.

One card's artifact (`music-assembler`'s `Quix_preview.sid` reconstruction)
could not be unambiguously re-identified among several candidate scratchpad
files this pass — noted honestly in its own file rather than guessed.
