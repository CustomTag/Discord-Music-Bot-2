![logo](https://repository-images.githubusercontent.com/260430808/da8b6300-8bb9-11ea-821a-cde5089d4c34)

# RobiBot (Discord Music Bot)
> Robibot is a Discord Music Bot built with discord.js & uses Command Handler from [discordjs.guide](https://discordjs.guide)

## Requirements

1. Discord Bot Token **[Guide](https://discordjs.guide/preparations/setting-up-a-bot-application.html#creating-your-bot)**
2. YouTube Data API v3 Key **[Guide](https://developers.google.com/youtube/v3/getting-started)**
3. Node.js v12.0.0 or newer

## Installation

```
git clone https://github.com/pepyta/robibot.git
cd evobot
npm install
```

After installation finishes you can use `node index.js` to start the bot.

## Configuration

Create a file named .env on 

```plain
TOKEN=*********************************************************
YOUTUBE_API_KEY=****************************************
MUSIC_CHANNEL_ID=12345678900000000
```

## Using the bot via Glitch

> **Discord started to ban Glitch IPs from using it's bot APIs. So if your bot doesn't start and without any error then you should try to create project until you can get a project where the bot works properly.**

1. **Getting the bot's token**: [Discord developers page](https://discordapp.com/developers) > Create an application > Bot > Build a Bot > Token > Copy
2. **Getting Youtube API token**:
   * [Youtube Data API V3](https://console.cloud.google.com/apis/api/youtube.googleapis.com/overview) > Enable API
   * [Google API Dashboard](console.cloud.google.com/apis/credentials) > Create credentials > API key > Copy
3. **Setting up Glitch**:
   * Register to Glitch with Github
   * Import my repository (`pepyta/robibot`)
   * Setup your `.env` file as described above
4. **Making the page stay awake**:
   * Click on show button > In a New Window > Copy the url
   * Go to [awake.glitch.me](http://awake.glitch.me/) and submit your url
5. **Invite your Discord bot!**

## Features & Commands

> Note: The default prefix is '!'

* 🎶 Play music from YouTube via url
  * `!play https://www.youtube.com/watch?v=GLvohMXgcBo`
* 🔎 Play music from YouTube via search query
  * `!play under the bridge red hot chili peppers`
* 📃 Play youtube playlists via url
  * `!playlist https://www.youtube.com/watch?v=YlUKcNNmywk&list=PL5RNCwK3GIO13SR_o57bGJCEmqFAwq82c`
* 🔎 Play youtube playlists via search query
  * `!playlist linkin park meteora`
* Command Handler from [discordjs.guide](https://discordjs.guide/)
* Queue system (/queue)
* Loop / Repeat (/loop)
* Volume control (/volume)
* Pause (/pause)
* Resume (/resume)
* Skip (/skip)
* Media Controls via Reactions
![reactions](https://i.imgur.com/j7CevsH.png)

## Contributing

1. [Fork the repository](https://github.com/eritislami/evobot/fork)
2. Clone your fork: `git clone https://github.com/your-username/evobot.git`
3. Create your feature branch: `git checkout -b my-new-feature`
4. Commit your changes: `git commit -am 'Add some feature'`
5. Push to the branch: `git push origin my-new-feature`
6. Submit a pull request

## Credits

[@iCrawl](https://github.com/iCrawl) For the queue system used in this application which was adapted from [@iCrawl/discord-music-bot](https://github.com/iCrawl/discord-music-bot)

[@eritislami](https://github.com/eritislami) For the base project that is being used in this project [@eritislami/evobot](https://github.com/eritislami/evobot)
