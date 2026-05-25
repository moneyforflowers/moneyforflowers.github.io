import ApiSupabse from "../ApiSupabase";

export async function GetLastDonations() {
  let { data, error } = await ApiSupabse.from("donations").select("*").order('donated_at', {ascending: false}).limit(10);
  if (error) {
    console.error(error);
    return []
  }
  return data;
}