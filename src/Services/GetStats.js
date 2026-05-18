import ApiSupabse from "../ApiSupabase";

export async function GetStats() {
  let { data, error } = await ApiSupabse.from("global_stats").select("*");
  if (error) {
    console.error(error);
    return []
  }
  return data;
}