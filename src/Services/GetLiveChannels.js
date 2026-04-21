import ApiTwitch from "../ApiTwitch";

export async function GetLiveChannels(userLoginString) {
    
  const result = await ApiTwitch.get("https://api.twitch.tv/helix/streams?"+userLoginString)

  return result;
}