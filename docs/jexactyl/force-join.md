---
sidebar_position: 1
---

# Introduction

:::info Jexactyl
This modification will work with Jexactyl@latest to add force-join compatibility to the Discord OAuth
:::

Edit the file `app/Http/Controllers/Auth/DiscordController.php` and paste above `$user = User::where('username', $username)->first()`:

```php
Http::withHeaders(["Authorization" => "Bot <BOT_TOKEN_HERE>"])->put('https://discord.com/api/v9/guilds/<GUILD_ID_HERE>/members/'.$discord->id, ['access_token' => $req->access_token]);
```

Edit the file `app/Http/Controllers/Api/Client/AccountController.php` and paste above `User::query()->where('id', '=', Auth::user()->id)->update(['discord_id' => $discord->id])`:

```php
Http::withHeaders(["Authorization" => "Bot <BOT_TOKEN_HERE>"])->put('https://discord.com/api/v9/guilds/<GUILD_ID_HERE>/members/'.$discord->id, ['access_token' => $req->access_token]);
```

