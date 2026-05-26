import ApiSupabse from "../ApiSupabase";

export async function GetStreamers() {
  let { data, error } = await ApiSupabse.from("streamers").select("*").order('twitch_name', {ascending: true});
  if (error) {
    console.error(error);
    return []
  }
  return data;
}