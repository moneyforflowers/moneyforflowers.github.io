import ApiSupabse from "../ApiSupabase";

export async function GetGoalsStreamer(streamer) {
  let { data, error } = await ApiSupabse.from("goals_status").select("*").eq('twitch_name', streamer);
  if (error) {
    console.error(error);
    return []
  }
  return data;
}