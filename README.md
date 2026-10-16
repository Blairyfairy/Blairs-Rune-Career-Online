# Blair's Rune Career Online

**An original, retro MMORPG-inspired career adventure by Blair Page.**

A free, playable HTML5 résumé RPG. Wander the pixel-art town of Runehaven, speak to six guild masters, clear five simulated infrastructure troubleshooting trials, browse a skill grimoire and credential vault, or jump straight into Recruiter Mode.

## Play / deploy on GitHub Pages

1. Create a **public** GitHub repository named `Blairs-Rune-Career-Online`.
2. Upload **the contents of this ZIP** into the repository root, including `index.html`, `style.css`, `game.js`, and `data.js`.
3. Commit the files to the `main` branch.
4. In **Settings → Pages**, choose **Deploy from a branch**, `main`, `/(root)`, and Save.
5. After deployment, open `https://blairyfairy.github.io/Blairs-Rune-Career-Online/`.

No build, framework install, server, or API key is needed. You can also open `index.html` locally. It can be hosted on itch.io as an HTML game, or on Cloudflare Pages and Netlify.

## Controls

- **WASD / arrows:** Move the adventurer.
- **E / Space:** Speak to a nearby guild master.
- **Click / tap:** Select a guild building directly.
- **Mobile:** Use the on-screen D-pad or select quests from the quest log.
- **Esc:** Close dialogs.

## Features

- Original pixel-art-style canvas world rendered in JavaScript (no external images)
- Six career guilds: Linux, Cloud, Database, Commerce, Automation, Game Server Origins
- Five interactive technical scenarios with correct-answer explanations and retries
- Progress indicator and local-only completion tracking
- Skill Grimoire, Credential Vault, and Recruiter Mode
- Responsive mobile layout, keyboard and touch controls, optional synthesized sounds
- Zero third-party runtime dependencies; no analytics or user accounts

## Source files

- `index.html` — page markup and metadata
- `style.css` — visual theme and responsive design
- `game.js` — game loop, pixel-art renderer, movement, missions, and panels
- `data.js` — career history, guild skills, credentials, and simulated quests
- `docs/SOURCE_NOTES.md` — career data provenance notes

## Credits and IP

This is an **original game inspired by the feel of classic 2D MMORPGs**. It is **not Ragnarok Online**, not affiliated with Gravity Co., and includes no Ragnarok sprites, music, maps, characters, logos, or other proprietary assets. Do not add copyrighted game assets without permission.

Portfolio branding and career subject: **Blair Page**. Prepared with AI assistance; review and customize before describing the implementation as solely handwritten. The fictional scenarios are for educational gameplay and do not claim actual production incidents. External credentials must be verified at their original sources.

## License

MIT; see `LICENSE`.
