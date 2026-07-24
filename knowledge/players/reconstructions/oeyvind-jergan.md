# oeyvind-jergan — reconstruction manifest

See `knowledge/players/oeyvind-jergan.md` for the full Verification narrative.
This file records the exact byte-level patches, recomputed directly from the
original HVSC payloads and the surviving reassembled `.prg` files.

All 10 HVSC `Oeyvind_Jergan` files reconstruct register-write-EXACT over 500
frames once the self-modified working-storage bytes below are restored to
their pristine cold values. SIDdecompiler captures the *post-execution*
snapshot of these bytes (gotcha 41); every diverging byte on every file lies
in a `-v2`-map write-touched (`+`/`w`/`_`/`#`) region — confirmed dead
workspace, not a disassembly defect.

Reconstruction command per file (relocation base = the `-v2` map's `Start:`
address, in DECIMAL):
```
SIDdecompiler.exe <sid> -o<f>.asm -a<decimal Start:> -z -d -c
64tass.exe -a --cbm-prg -o <f>.prg <f>.asm
```
`$1000`-loading files: `-a820` (Start:$0334, the player's fixed low-page
workspace sits below the load address). Higher-loading files: relocate to
their own load address ($4000 / $5000 / $7000).

The `$1000`-family diffs cluster at the SID volume/filter self-modified
operand bytes (`base+$384` → `$d418` mode/volume, `base+$386` → `ora`
res-nibble, `base+$470` → `$d417` filter working byte; all cold value `$00`).
Short_Fantasi's single diff is a self-modified `JMP` operand (dead even
un-patched — traces exact without the patch). The two `2_Fat_2_Fuck` parts'
larger clusters are per-song data/working tables.

## $1000-family (load $1000, init $1000, play $1003)

### 6_8th_Beat  (`MUSICIANS/J/Jergan_Oeyvind/6_8th_Beat.sid`)
```
$1384 pristine=$00 drifted=$10
$1386 pristine=$00 drifted=$0f
$1470 pristine=$00 drifted=$01
```

### Fantasi
```
$1384 pristine=$00 drifted=$10
$1386 pristine=$00 drifted=$0f
$1470 pristine=$00 drifted=$01
```

### Feed_Back
```
$1384 pristine=$00 drifted=$70
$1386 pristine=$00 drifted=$0f
```

### First-One
```
$10b4 pristine=$03 drifted=$02
$1384 pristine=$00 drifted=$30
$1386 pristine=$00 drifted=$0f
$1470 pristine=$00 drifted=$01
```

### Ragnvald
```
$1384 pristine=$00 drifted=$10
$1386 pristine=$00 drifted=$0f
$1470 pristine=$00 drifted=$01
```

### Relaxed
```
$1384 pristine=$00 drifted=$10
$1386 pristine=$00 drifted=$0f
$1470 pristine=$00 drifted=$01
```

## Turbo-Rock  (load $1000, init $1000, play $1003)
100.000% byte-exact with zero patches — no divergence at all.

## Short_Fantasi  (load $7000, init $7000, play $7003)
Single self-modified `JMP l749b` operand; dead even un-patched (traces exact
without it). Patched for a clean 100% byte-diff.
```
$71b0 pristine=$77 drifted=$9b
```

## 2_Fat_2_Fuck_part_3  (load $5000, init $6003, play $6000)
48 bytes, per-song data/working tables in `$62f7-$6454`:
```
$62f7 pristine=$01 drifted=$02
$62fa pristine=$02 drifted=$00
$62fe pristine=$f8 drifted=$00
$6301 pristine=$00 drifted=$01
$6303 pristine=$05 drifted=$0b
$6304 pristine=$00 drifted=$05
$6305 pristine=$40 drifted=$80
$6306 pristine=$04 drifted=$05
$6309 pristine=$f8 drifted=$00
$630c pristine=$00 drifted=$01
$630e pristine=$09 drifted=$01
$630f pristine=$00 drifted=$01
$6311 pristine=$06 drifted=$00
$6313 pristine=$02 drifted=$0b
$6314 pristine=$02 drifted=$00
$6318 pristine=$00 drifted=$04
$631a pristine=$08 drifted=$00
$6322 pristine=$07 drifted=$0e
$6326 pristine=$08 drifted=$00
$6327 pristine=$00 drifted=$0a
$632c pristine=$04 drifted=$08
$632f pristine=$18 drifted=$00
$6330 pristine=$00 drifted=$50
$6335 pristine=$03 drifted=$00
$6336 pristine=$00 drifted=$08
$6338 pristine=$06 drifted=$00
$6339 pristine=$00 drifted=$f8
$633c pristine=$00 drifted=$ff
$6340 pristine=$04 drifted=$00
$6341 pristine=$12 drifted=$00
$6342 pristine=$00 drifted=$40
$6344 pristine=$06 drifted=$00
$6345 pristine=$00 drifted=$08
$6346 pristine=$01 drifted=$00
$6347 pristine=$03 drifted=$00
$639c pristine=$22 drifted=$bd
$639d pristine=$55 drifted=$57
$63b1 pristine=$62 drifted=$fd
$63b2 pristine=$55 drifted=$57
$6444 pristine=$03 drifted=$01
$6445 pristine=$23 drifted=$3e
$6446 pristine=$23 drifted=$3e
$6447 pristine=$23 drifted=$3e
$6449 pristine=$03 drifted=$01
$644a pristine=$00 drifted=$05
$644e pristine=$00 drifted=$06
$6453 pristine=$d1 drifted=$c3
$6454 pristine=$12 drifted=$10
```

## 2_Fat_2_Fuck_part_4  (load $4000, init $4e00, play $4e03)
66 bytes, per-song data/working tables in `$4100-$52bc`:
```
$4100 pristine=$00 drifted=$9a
$4101 pristine=$00 drifted=$eb
$4102 pristine=$00 drifted=$bd
$4103 pristine=$00 drifted=$5d
$4104 pristine=$00 drifted=$57
$4105 pristine=$00 drifted=$bd
$4106 pristine=$00 drifted=$72
$4107 pristine=$00 drifted=$c4
$4108 pristine=$00 drifted=$06
$4109 pristine=$00 drifted=$7e
$410a pristine=$00 drifted=$68
$410b pristine=$00 drifted=$04
$4f3e pristine=$02 drifted=$00
$4f41 pristine=$00 drifted=$07
$4f42 pristine=$03 drifted=$02
$4f73 pristine=$03 drifted=$10
$4f74 pristine=$03 drifted=$0e
$4f75 pristine=$17 drifted=$0a
$4f76 pristine=$41 drifted=$11
$4f77 pristine=$16 drifted=$0a
$4fef pristine=$03 drifted=$07
$505a pristine=$02 drifted=$01
$505b pristine=$02 drifted=$01
$505d pristine=$10 drifted=$01
$505e pristine=$10 drifted=$01
$505f pristine=$1e drifted=$08
$5060 pristine=$0e drifted=$00
$5061 pristine=$0e drifted=$00
$5062 pristine=$1b drifted=$02
$5063 pristine=$00 drifted=$07
$5066 pristine=$04 drifted=$02
$5067 pristine=$04 drifted=$05
$5068 pristine=$03 drifted=$04
$5069 pristine=$04 drifted=$00
$506a pristine=$04 drifted=$00
$506b pristine=$04 drifted=$30
$506c pristine=$03 drifted=$04
$506d pristine=$1d drifted=$08
$507e pristine=$8f drifted=$1e
$507f pristine=$0a drifted=$86
$5083 pristine=$0e drifted=$00
$50d1 pristine=$01 drifted=$00
$50d2 pristine=$02 drifted=$0a
$50d7 pristine=$00 drifted=$03
$50d8 pristine=$00 drifted=$08
$50da pristine=$33 drifted=$00
$50db pristine=$e6 drifted=$ae
$50e0 pristine=$33 drifted=$00
$50e1 pristine=$73 drifted=$2b
$5120 pristine=$00 drifted=$fa
$5123 pristine=$00 drifted=$ff
$5129 pristine=$00 drifted=$1e
$512c pristine=$00 drifted=$06
$512f pristine=$00 drifted=$01
$5162 pristine=$33 drifted=$00
$5163 pristine=$33 drifted=$00
$5165 pristine=$01 drifted=$00
$51b5 pristine=$90 drifted=$bd
$51ca pristine=$d0 drifted=$fd
$5299 pristine=$03 drifted=$01
$52b6 pristine=$06 drifted=$07
$52b7 pristine=$05 drifted=$03
$52b9 pristine=$11 drifted=$3e
$52ba pristine=$11 drifted=$3e
$52bb pristine=$11 drifted=$3e
$52bc pristine=$01 drifted=$09
```
