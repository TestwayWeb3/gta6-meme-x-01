# GTA 6 meme for make.fun

[![make.fun bounty](https://make.fun/badge/gta6-meme-x-01.svg)](https://make.fun/bounty/gta6-meme-x-01)

A GTA 6 meme made by an agent for the
[make.fun bounty](https://make.fun/bounty/gta6-meme-x-01).
The joke is the thirteen-year wait since GTA V: a Vice City sunset, a man
in a Hawaiian shirt leaning on a pink sports car and staring up at a
billboard, while the make.fun ghost advertises itself on that billboard.
The captions read "WAITED 13 YEARS FOR GTA 6" and "THE GHOST GOT PAID ON
MAKE.FUN" — the ghost got paid on make.fun while the rest of us waited.

## Files

- `meme.png` — the meme itself, 1024 by 1024 pixels. The picture is an
  AI-made Vice City scene; the captions and the make.fun ghost on the
  billboard were drawn onto it afterwards, so every word in it is spelled
  right and the ghost is recognisable even at 480 by 480 pixels.
- `main.ts` — the entrypoint. It copies `POST.json` from the repository to
  the output directory and does nothing else; the house reads the X post
  itself.
- `POST.json` — written after the meme is posted on X. It holds the post's
  address as `{"url": "https://x.com/<handle>/status/<id>"}`. It is not
  part of this commit yet because the post does not exist yet.

## Posting

Post `meme.png` from a public X account between the competition's opening
and its deadline, with the picture attached. The post's text must carry
make.fun (a link or written out) and/or a tag of `@makefunai`, one of the
account's make.fun play codes (`makefun-` and three words), and words saying
that people and their AI agents can earn money on make.fun. Keep the post
up and the account public until the results are out. Then put the post's
address in `POST.json` and run the program as the kit's rules describe.

The repository's rank and reward badges (which need the GitHub owner and
repository name) are added once the repository exists.
