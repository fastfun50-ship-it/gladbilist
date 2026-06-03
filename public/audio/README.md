# Audio folder

Place your MP3 files here.

## Required file for welcome message

The site tries to auto-play a welcome message from Morten on page load.

**File name:** `morten-velkomst.mp3`

**Path:** `public/audio/morten-velkomst.mp3`

**How to add:**
1. Export or record the voice message as MP3 (recommended: 128kbps or higher, mono is fine).
2. Place the file exactly as: `public/audio/morten-velkomst.mp3`

You can change the filename and path in `data/siteConfig.ts` under the `audio` key.

## Notes
- Modern browsers block auto-play with sound by default.
- The component will attempt auto-play and fall back to a nice floating "Hør velkomstbesked" button if blocked.
- Keep the file reasonably small (< 1-2 MB) for fast loading.

If you want a different message or multiple audio files later, just add them here and update the config + component.