import ApiSupabse from "../ApiSupabase";

export async function GetStreamers() {
  let { data, error } = await ApiSupabse.from("streamers").select("*");
  if (error) {
    console.error(error);
    throw new Error("Streamers could not be loaded");
  }
  return data;
}