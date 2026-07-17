import ApiSupabse from "../ApiSupabase";

export async function GetStreamer(username) {
  let { data, error } = await ApiSupabse.from("streamers").select("*").eq('twitch_name', username);
  if (error) {
    console.error(error);
    return []
  }
  return data;
}