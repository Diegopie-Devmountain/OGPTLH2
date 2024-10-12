# Video Encoding

Videos should be compressed as much as possible (in something like Handbrake)
in the AV1 and h.264 codecs, while still maintaining good visual quality.

## Table of Contents

- [Encoding in Handbreak](#encoding-in-handbreak)
- [Encoding in Hosting Files](#hosting-files)

## Encoding in Handbreak

Handbreak is a robust encoding tool what we will create quality results we need.
Download it from [handbrake.fr](https://handbrake.fr/). Launch the program and it
will start by having you choose a `Source Selection`. This will be the video you
want to encode. We'll need a standard MP4 to serve as well as an AV1 file

### Encoding MP4

#### Summary

Only change these settings:

- Set the `Format` to `MP4`
- Toggle On `Web Optimized` (Allows playback while video is downloading on client)
- Toggle On `Align A/V Start`
- Toggle Off `iPod 5G Support`
- Toggle On `Passthru Common Metadata`

#### Dimensions & Filters

No changes needed

#### Video

Only change these settings:

**Video:**

- Set `Video Encoder` to `H.264 (x264)`

**Quality:**

- Change the `Constant Quality` slider to `27`
  - You can play with this slider to dial in the final quality, though lower number result in higher file sizes

**Encoder Options:**

- Set `Encoder Preset` to `Slower`
  - This is another one you can play with, with slower setting creating smaller files, but can be heavy on your computer  
- Optionally, you can lower the frame rate to squeeze the file size down, though you can generally leave it at 30


#### Audio

If the video is being used as a background and is not intended to have audio play, we can delete the audio track here altogether.

#### Subtitles and Chapters

You can generally delete subitle tracks unless they are intended to be used (this is very rare) and you can also toggle off `Create chapter markers`

#### Naming and Encoding

You can choose what to name and where to save the file at the bottom of the page. **Do not use spaces in the file name**. When you are ready, click `Add To Queue` or `Start Encode`.

> [Back To Encoding in Handbreak](#encoding-in-handbreak) || [Back To Table of Contents](#table-of-contents)

### Encoding AV1

The only changes we need to do are in the `Video` Section
Only change these settings:

**Video:**

- Set `Video Encoder` to `AV1 (SVT)`

**Quality:**

- Change the `Constant Quality` slider to `42`
  - You can play with this slider to dial in the final quality, though lower number result in higher file sizes

**Encoder Options:**

- Set `Encoder Preset` to `3`
  - This is another one you can play with, with lower setting creating smaller files, but can be heavy on your computer  
- Optionally, you can lower the frame rate to squeeze the file size down, though you can generally leave it at 30

#### Naming and Encoding AV1

Add `av1` to the filename since it will still be stored as an MP4 to help differentiate between the two. **Do not use spaces in the file name**. When you are ready, `Start Encode`.

> [Back To Encoding in Handbreak](#encoding-in-handbreak) || [Back To Table of Contents](#table-of-contents)

## AV1 Encode

Okay, buckle in. We will need to host the video on Cloudflare then manually write the codec for it to work on the web

### Cloudflare Hosting

> To Do: Add process

### Find Codec Parameter Value

[This Blog Post](https://jakearchibald.com/2022/html-codecs-parameter-for-av1/) will outline how to do this (and why AV1 is nice, why need to do this steps, and why Safari is everyones favorite browser). You will need to install [`FFmpeg`](https://ffmpeg.org/download.html). Help on how to install it can be found [`here`](https://www.hostinger.com/tutorials/how-to-install-ffmpeg)

**Windows Users:** You will need to use git bash or a WSL Ubuntu to follow the article exactly. Else, you can substitute `grep` for `Select-String -Pattern`

> To Do: I'm not getting an output when running this on Windows Using GitBash

> [Back To Hosting Files](#hosting-files) || [Back To Table of Contents](#table-of-contents)