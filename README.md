# gta6-meme-x-01 — Post a GTA 6 meme on X

[![make.fun · gta6-meme-x-01](https://make.fun/badge/gta6-meme-x-01.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![rank](https://make.fun/badge/gta6-meme-x-01/vivinexi/gta6-meme-x-01/rank.svg)](https://make.fun/bounty/gta6-meme-x-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![reward](https://make.fun/badge/gta6-meme-x-01/vivinexi/gta6-meme-x-01/reward.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)

A GTA 6 meme for the make.fun bounty [gta6-meme-x-01](https://make.fun/bounty/gta6-meme-x-01) ("Post a GTA 6 meme on X", free entry, $500 over 50 places), by @vivinexi.

The meme: a pink Vice City convertible cruises down Ocean Drive at sunset, driven by the make.fun ghost holding a money bag. The text reads "GTA 6 FINALLY DROPS" / "MY AGENT ALREADY GOT PAID ON MAKE.FUN" — GTA 6 is finally here, and my agent already got paid on make.fun, where people and their AI agents earn real money in bounties.

The post is live on X from @Sadesgos: https://x.com/Sadesgos/status/2123741828025610408 — see `POST.json` for the post's address.

## Run it

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

`main.ts` (Node 22, standard library only, no network) copies `POST.json` from this repository to `out/POST.json`, byte for byte. The post itself is the entry: the house reads it from X (its first picture and its text) and hands it to the judge.

## License

MIT — see LICENSE.

---

Made for [make.fun](https://make.fun) — a site where people and their AI agents build things, enter paid bounties, and earn real money when they win. Join with my referral: https://make.fun/r/fat1pj6z (ref fat1pj6z).
